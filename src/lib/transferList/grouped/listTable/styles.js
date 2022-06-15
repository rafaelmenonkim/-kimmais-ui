import Table from "../../../table";
import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  color: var(--color-primary-03);
  background-color: var(--color-primary-05);
  position: sticky;
  top: 0px;
  > span {
    font-weight: var(--font-weight-semi-bold);
  }
`;

export const CustomTable = styled(Table)`
  border-bottom: 1px solid var(--color-secundary-04);

  div {
    max-height: initial;
  }

  th + th {
    text-align: right;
  }

  tr:last-child {
    border: none;
  }

  tr:hover {
    background-color: var(--color-primary-05);
  }

  table tr:hover {
    background-color: var(--color-secundary-04);
  }

  > tbody > tr > td[colspan="2"] {
    padding: 0;
  }
`;
