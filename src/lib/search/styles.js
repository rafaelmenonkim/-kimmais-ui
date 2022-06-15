import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;

  svg {
    cursor: pointer;
    height: 1.25rem;
    width: 1.25rem;
    top: 10px;
    left: 16px;
    position: absolute;
    stroke: var(--color-primary-03);
  }
`;

export const Field = styled.input`
  background-color: var(--color-secundary-05);
  border: none;
  border-radius: 1.25rem;
  color: var(--color-primary-03);
  font-size: 0.875rem;
  letter-spacing: 0;
  padding-left: 3.1875rem;
  padding-right: 1.5625rem;
  height: 2.5rem;
  width: 100%;
  outline: none;

  ::placeholder {
    font-style: italic;
    color: var(--color-primary-03);
  }
`;
