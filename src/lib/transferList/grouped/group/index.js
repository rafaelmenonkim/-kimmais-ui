import React from "react";
import { reduceBigTextLines } from "../../../utils/functionUtils";
import { Icon, Table, Input } from "../../../index";
import CheckBox from "../../../input/checkbox";
import {
  CustomRow,
  GroupContentTr,
  GroupName,
  GroupRow,
  Label,
} from "./styles";

const Group = ({
  allGroup,
  checked,
  checkboxClick,
  displayName,
  filter,
  checkIfGroupIsChecked,
  group,
  groupName,
  disabled,
  isVisible,
  setIsVisible,
}) => {
  const generatedGroupRows = generateRows(group);

  function generateRows(list) {
    const filteredItems = list.filter((item) =>
      item[displayName].toLowerCase().includes(filter?.toLowerCase() || "")
    );

    return filteredItems.map((item, index) => {
      return (
        <CustomRow key={index} disabled={disabled}>
          <Table.Td>
            <Input.CheckBox
              controlled
              checked={checked && checked.includes(item.id)}
              style={{ cursor: "pointer" }}
              onClick={() => checkboxClick(item.id)}
              disabled={disabled}
            />
            <span>{reduceBigTextLines(item[displayName], 25)}</span>
          </Table.Td>
        </CustomRow>
      );
    });
  }

  return (
    <>
      {generatedGroupRows.length > 0 && (
        <>
          <CustomRow disabled={disabled}>
            <Table.Td>
              <GroupRow>
                <CheckBox
                  onClick={() => allGroup(groupName)}
                  checked={!checkIfGroupIsChecked(groupName)}
                  controlled
                  disabled={disabled}
                />
                <GroupName checked={true} visible={isVisible}>
                  <Label onClick={() => setIsVisible(groupName)}>
                    {`${groupName} (${generatedGroupRows.length})`}
                    <Icon name="triangle" />
                  </Label>
                </GroupName>
              </GroupRow>
            </Table.Td>
          </CustomRow>
          <GroupContentTr visible={isVisible}>
            <Table.Td colSpan={2}>
              <Table>
                <tbody>{generatedGroupRows}</tbody>
              </Table>
            </Table.Td>
          </GroupContentTr>
        </>
      )}
    </>
  );
};

export default Group;
