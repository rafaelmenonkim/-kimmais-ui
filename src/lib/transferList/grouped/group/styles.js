import Table from "../../../table";
import styled, { css } from "styled-components";

export const Label = styled.label`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: var(--font-weight-medium);
  position: relative;
`;

export const GroupName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  svg {
    margin-left: 8px;
    height: 8px;
    width: 8px;
    fill: black;
    transform: ${({ visible }) => (visible ? "" : "scaleY(-1)")};
  }
`;

export const GroupContentTr = styled(Table.Tr)`
  display: ${({ visible }) => (visible ? "auto" : "none")};
  overflow: hidden;
`;

export const CustomRow = styled(Table.Tr)`
  cursor: pointer;

  span {
    margin-left: 40px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;

      td {
        color: var(--color-secundary-06);
      }

      label,
      input {
        border-color: var(--color-secundary-06);
        cursor: not-allowed;
      }
    `}
`;

export const GroupRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
