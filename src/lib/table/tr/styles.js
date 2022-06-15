import styled from "styled-components";

export const CustomTr = styled.tr`
  align-items: left;
  border-bottom: 1px solid var(--color-secundary-04);
  height: 40px;
  white-space: nowrap;
  :only-child {
    border: none;
  }

  tbody &:hover {
    background-color: var(--color-secundary-05);
  }
`;
