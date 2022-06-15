import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid var(--color-secundary-06);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: var(--font-weight-regular);
  padding: 0 1rem;
  outline: none;
  height: 2.5rem;
  width: 100%;

  ::placeholder {
    color: var(--color-primary-03);
  }
`;
