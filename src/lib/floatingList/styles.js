import styled from "styled-components";

export const FloatingContainer = styled.div`
  background-color: var(--color-primary-05);
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.3125rem var(--color-secundary-04);
  color: var(--color-primary-04);
  text-align: left;
  max-height: ${({ visible }) => (visible ? "93.75rem" : "0")};
  overflow: hidden;
  position: absolute;
  transition: max-height 0.5s ease-in-out;
  z-index: 5;
  min-width: 100%;
`;

export const ItemsList = styled.ul`
  height: 100%;
  width: 100%;

  > *:hover {
    background-color: ${({ hover }) =>
      hover ? "var(--color-secundary-04)" : null};
  }

  > * {
    align-items: center;
    border: none;
    background-color: transparent;
    color: var(--color-primary-04);
    display: flex;
    font-size: inherit;
    font-weight: inherit;
    height: 2.1875rem;
    padding: 0.5rem 1rem;
    transition: all 0.15s;
  }
`;
