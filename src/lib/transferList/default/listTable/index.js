import React from "react";
import { Table, Input } from "../../../index";
import { Header } from "./styles";
import { reduceBigTextLines } from "../../../utils/functionUtils";

const ListTable = ({
  allClick,
  checkedItems,
  checkboxClick,
  displayName,
  filter,
  isAllChecked,
  list,
  loading,
}) => {
  function generateRows(list) {
    const filteredItems = list.filter((item) =>
      item[displayName]?.toLowerCase().includes(filter?.toLowerCase() || "")
    );
    return filteredItems.map((item, index) => {
      return (
        <Table.Tr key={index} style={{ cursor: "pointer" }}>
          <Table.Td>{reduceBigTextLines(item[displayName], 25)}</Table.Td>
          <Table.Td style={{ textAlign: "right" }}>
            <Input.CheckBox
              controlled
              checked={checkedItems && checkedItems.includes(item.id)}
              style={{ cursor: "pointer" }}
              onClick={() => checkboxClick(item.id)}
            />
          </Table.Td>
        </Table.Tr>
      );
    });
  }

  return (
    <>
      <Table loading={loading}>
        <thead>
          <Table.Tr>
            <Table.Th colSpan={2}>
              <Header>
                Total: {list.length}
                <span>
                  Selecionar Todos
                  <span style={{ marginLeft: "8px" }} />
                  <Input.CheckBox
                    controlled
                    checked={isAllChecked}
                    onClick={allClick}
                  />
                </span>
              </Header>
            </Table.Th>
          </Table.Tr>
        </thead>
        <tbody>{list && generateRows(list)}</tbody>
      </Table>
    </>
  );
};

export default ListTable;
