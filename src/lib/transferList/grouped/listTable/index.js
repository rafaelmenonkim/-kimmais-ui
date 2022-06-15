import React, { useState } from "react";
import { Table, Input } from "../../../index";
import { CustomTable, Header } from "./styles";
import Group from "../group";
import _ from "lodash";

const ListTable = ({
  allClick,
  allGroup,
  checkedItems,
  checkboxClick,
  displayName,
  filter,
  isAllChecked,
  checkIfGroupIsChecked,
  list,
  loading,
  blockGroups = [],
}) => {
  const [isVisible, setIsVisible] = useState({});

  function generateGroupsAndRows() {
    const orderedGroups = Object.keys(list).sort((a, b) => a.localeCompare(b));
    const noDepartment = orderedGroups.splice(
      orderedGroups.indexOf("Sem departamento"),
      1
    );
    const noDepartmentAtEnd = [...orderedGroups, ...noDepartment];
    return noDepartmentAtEnd.map((group) => (
      <Group
        key={_.uniqueId()}
        allGroup={allGroup}
        checked={checkedItems}
        checkboxClick={checkboxClick}
        displayName={displayName}
        checkIfGroupIsChecked={checkIfGroupIsChecked}
        group={list[group].sort((a, b) =>
          a[displayName].localeCompare(b[displayName])
        )}
        groupName={group}
        filter={filter}
        disabled={blockGroups.includes(group)}
        isVisible={isVisible[group]}
        setIsVisible={(groupName) =>
          setIsVisible((state) => {
            const newVisibles = { ...state };
            newVisibles[groupName] = !newVisibles[groupName];
            return newVisibles;
          })
        }
      />
    ));
  }

  function sumTotalElements() {
    let total = 0;
    for (let group in list) {
      total += list[group].length;
    }
    return total;
  }
  return (
    <>
      <CustomTable loading={loading}>
        <thead>
          <Table.Tr>
            <Table.Th>
              <Input.CheckBox
                controlled
                checked={isAllChecked}
                onClick={allClick}
              />
              <span style={{ marginLeft: "8px" }}>Selecionar Todos</span>
            </Table.Th>
            <Table.Th>
              <Header>Total: {sumTotalElements()}</Header>
            </Table.Th>
          </Table.Tr>
        </thead>
        <tbody>{generateGroupsAndRows()}</tbody>
      </CustomTable>
    </>
  );
};

export default ListTable;
