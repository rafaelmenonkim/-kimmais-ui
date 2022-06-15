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

const TransferList = ({
  left,
  leftName,
  setLeft,
  right,
  rightName,
  setRight,
  displayName,
  loading,
}) => {
  const [filterLeft, setFilterLeft] = useState("");
  const [filterRight, setFilterRight] = useState("");

  const [checkedItems, setCheckedItems] = useState([]);

  useMemo(() => {
    setLeft(left.map((item) => ({ ...item, id: _.uniqueId() })));
    setRight(right.map((item) => ({ ...item, id: _.uniqueId() })));
    // eslint-disable-next-line
  }, []);

  const sendToRight = () => {
    setRight(right.concat(intersection(left, checkedItems)));
    setLeft(notIn(left, checkedItems));
    clearCheckedsAndFilters();
  };

  const sendToLeft = () => {
    setLeft(left.concat(intersection(right, checkedItems)));
    setRight(notIn(right, checkedItems));
    clearCheckedsAndFilters();
  };

  const allLeft = () => {
    if (!checkIfIsAllChecked(left)) {
      const notCheckedsIds = notIn(left, checkedItems).map((item) => item.id);
      setCheckedItems(checkedItems.concat(notCheckedsIds));
    } else {
      setCheckedItems(intersection(right, checkedItems).map((item) => item.id));
    }
  };

  const allRight = () => {
    if (!checkIfIsAllChecked(right)) {
      const notCheckedsIds = notIn(right, checkedItems).map((item) => item.id);
      setCheckedItems(checkedItems.concat(notCheckedsIds));
    } else {
      setCheckedItems(intersection(left, checkedItems).map((item) => item.id));
    }
  };

  const clearCheckedsAndFilters = () => {
    setFilterLeft("");
    setFilterRight("");
    setCheckedItems([]);
  };

  function checkIfIsAllChecked(side) {
    return (
      side.length === intersection(side, checkedItems).length && side.length > 0
    );
  }

  function handleCheckBoxClick(item) {
    const checkedIndex = checkedItems.indexOf(item);
    const newCheckeds = [...checkedItems];
    checkedIndex === -1
      ? newCheckeds.push(item)
      : newCheckeds.splice(checkedIndex, 1);
    setCheckedItems(newCheckeds);
  }

  const isAllLeftChecked = checkIfIsAllChecked(left);
  const isAllRightChecked = checkIfIsAllChecked(right);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ListPanel filter={filterLeft} setFilter={setFilterLeft} title={leftName}>
        <ListTable
          allClick={allLeft}
          checkedItems={checkedItems}
          checkboxClick={handleCheckBoxClick}
          displayName={displayName}
          filter={filterLeft}
          isAllChecked={isAllLeftChecked}
          list={left}
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
        title={rightName}
      >
        <ListTable
          allClick={allRight}
          checkedItems={checkedItems}
          checkboxClick={handleCheckBoxClick}
          displayName={displayName}
          filter={filterRight}
          isAllChecked={isAllRightChecked}
          list={right}
          loading={loading}
        />
      </ListPanel>
    </div>
  );
};

export default TransferList;
