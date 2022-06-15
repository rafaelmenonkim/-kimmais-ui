import React, { useMemo, useState } from "react";
import ListPanel from "./listPanel";
import ListTable from "./listTable";
import { IconArrows } from "./listPanel/styles";
import _ from "lodash";

const intersection = (a, b) => {
  return a.filter((item) => b.includes(item.id));
};

const notIn = (a, b) => {
  return a.filter((item) => !b.includes(item.id));
};

const Grouped = ({
  displayName,
  groupBy = (item) => item.group,
  leftList,
  setLeft,
  rightList,
  setRight,
  leftTitle,
  rightTitle,
  blockGroups,
  loading,
}) => {
  const [filterLeft, setFilterLeft] = useState("");
  const [filterRight, setFilterRight] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);

  useMemo(() => {
    setLeft(leftList.map((item) => ({ ...item, id: _.uniqueId() })));
    setRight(rightList.map((item) => ({ ...item, id: _.uniqueId() })));
    // eslint-disable-next-line
  }, []);

  const sendToRight = () => {
    setRight(rightList.concat(intersection(leftList, checkedItems)));
    setLeft(notIn(leftList, checkedItems));
    clearCheckedsAndFilters();
  };

  const sendToLeft = () => {
    setLeft(leftList.concat(intersection(rightList, checkedItems)));
    setRight(notIn(rightList, checkedItems));
    clearCheckedsAndFilters();
  };

  const allLeft = () => {
    const filteredItems = leftList.filter((item) =>
      item[displayName].toLowerCase().includes(filterLeft?.toLowerCase() || "")
    );
    if (!checkIfIsAllChecked(filteredItems)) {
      const notCheckedsIds = notIn(filteredItems, checkedItems).map((item) =>
        blockGroups.includes(groupBy(item)) ? null : item.id
      );
      setCheckedItems(checkedItems.concat(notCheckedsIds));
    } else {
      setCheckedItems(
        intersection(rightList, checkedItems).map((item) =>
          blockGroups.includes(groupBy(item)) ? null : item.id
        )
      );
    }
  };

  const allRight = () => {
    const filteredItems = rightList.filter((item) =>
      item[displayName].toLowerCase().includes(filterRight?.toLowerCase() || "")
    );
    if (!checkIfIsAllChecked(filteredItems)) {
      const notCheckedsIds = notIn(filteredItems, checkedItems).map(
        (item) => item.id
      );
      setCheckedItems(checkedItems.concat(notCheckedsIds));
    } else {
      setCheckedItems(
        intersection(leftList, checkedItems).map((item) => item.id)
      );
    }
  };

  const checkIfGroupIsChecked = (side, group) => {
    const uncheckedItems = notIn(side, checkedItems);
    const uncheckedItemsOfGroup = uncheckedItems.filter(
      (item) => groupBy(item) === group
    );
    return uncheckedItemsOfGroup.length > 0;
  };

  const allGroup = (side, group) => {
    if (checkIfGroupIsChecked(side, group)) {
      const uncheckedItemsOfGroup = notIn(side, checkedItems).filter(
        (item) => groupBy(item) === group
      );
      const newChekedItems = checkedItems.concat(
        uncheckedItemsOfGroup.map((item) => item.id)
      );
      setCheckedItems(newChekedItems);
    } else {
      const itemsChecked = intersection(side, checkedItems);
      const checkedItemsFromAnotherGroup = itemsChecked.filter(
        (item) => groupBy(item) !== group
      );
      const checkedItemsIds = checkedItemsFromAnotherGroup.map(
        (item) => item.id
      );
      const otherSide = checkedItems.filter(
        (id) => !side.some((item) => item.id === id)
      );
      setCheckedItems(checkedItemsIds.concat(otherSide));
    }
  };

  const clearCheckedsAndFilters = () => {
    setFilterLeft("");
    setFilterRight("");
    setCheckedItems([]);
  };

  function handleCheckBoxClick(item) {
    const checkedIndex = checkedItems.indexOf(item);
    const newCheckeds = [...checkedItems];
    checkedIndex === -1
      ? newCheckeds.push(item)
      : newCheckeds.splice(checkedIndex, 1);
    setCheckedItems(newCheckeds);
  }

  function createGroups(list) {
    const groupedList = {};
    list.forEach((item) => {
      groupedList[groupBy(item)]
        ? groupedList[groupBy(item)].push(item)
        : (groupedList[groupBy(item)] = [item]);
    });
    return groupedList;
  }

  function checkIfIsAllChecked(side) {
    const withNoGroup = side.filter((item) =>
      blockGroups.includes(groupBy(item))
    );
    return (
      side.length - withNoGroup.length ===
        intersection(side, checkedItems).length &&
      side.length > 0 &&
      side.length !== withNoGroup.length
    );
  }

  const isAllLeftChecked = checkIfIsAllChecked(
    leftList.filter((item) =>
      item[displayName].toLowerCase().includes(filterLeft?.toLowerCase() || "")
    )
  );
  const isAllRightChecked = checkIfIsAllChecked(
    rightList.filter((item) =>
      item[displayName].toLowerCase().includes(filterRight?.toLowerCase() || "")
    )
  );

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ListPanel
        filter={filterLeft}
        setFilter={setFilterLeft}
        title={leftTitle}
      >
        <ListTable
          grouped={true}
          allClick={allLeft}
          allGroup={(group) => {
            const filteredItems = leftList.filter((item) =>
              item[displayName]
                .toLowerCase()
                .includes(filterLeft?.toLowerCase() || "")
            );
            return allGroup(filteredItems, group);
          }}
          checkedItems={checkedItems}
          checkboxClick={handleCheckBoxClick}
          displayName={displayName}
          filter={filterLeft}
          isAllChecked={isAllLeftChecked}
          checkIfGroupIsChecked={(group) => {
            const filteredItems = leftList.filter((item) =>
              item[displayName]
                .toLowerCase()
                .includes(filterLeft?.toLowerCase() || "")
            );
            return checkIfGroupIsChecked(filteredItems, group);
          }}
          list={createGroups(leftList)}
          blockGroups={blockGroups}
          loading={loading}
        />
      </ListPanel>

      <div>
        <IconArrows name="arrow-right" onClick={sendToRight} />
        <br />
        <IconArrows name="arrow-right" onClick={sendToLeft} />
      </div>

      <ListPanel
        filter={filterRight}
        setFilter={setFilterRight}
        title={rightTitle}
      >
        <ListTable
          allClick={allRight}
          allGroup={(group) => {
            const filteredItems = rightList.filter((item) =>
              item[displayName]
                .toLowerCase()
                .includes(filterRight?.toLowerCase() || "")
            );
            return allGroup(filteredItems, group);
          }}
          checkedItems={checkedItems}
          checkboxClick={handleCheckBoxClick}
          displayName={displayName}
          filter={filterRight}
          isAllChecked={isAllRightChecked}
          checkIfGroupIsChecked={(group) => {
            const filteredItems = rightList.filter((item) =>
              item[displayName]
                .toLowerCase()
                .includes(filterRight?.toLowerCase() || "")
            );
            return checkIfGroupIsChecked(filteredItems, group);
          }}
          list={createGroups(rightList)}
          blockGroups={blockGroups}
          loading={loading}
        />
      </ListPanel>
    </div>
  );
};

export default Grouped;
