import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--color-primary-03);
  background-color: var(--color-primary-05);
  position: sticky;
  top: 0px;
  > span {
    font-weight: var(--font-weight-semi-bold);
  }
`;
