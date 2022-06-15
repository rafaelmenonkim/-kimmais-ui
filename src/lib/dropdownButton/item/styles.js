import styled from "styled-components";

export const ItemContainer = styled.div`
  padding: 14px 18px;
  :nth-child(2n + 1) {
    background-color: var(--color-secundary-02);
  }
  :only-child {
    background-color: var(--color-primary-05);
    padding: 18px;
  }
  :first-child {
    padding-top: 18px;
  }
  :last-child {
    padding-bottom: 18px;
  }
  cursor: pointer;
`;
