import styled, { css } from "styled-components";

export const Box = styled.label`
  border: 1px solid var(--color-primary-01);
  border-radius: 4px;
  display: inline-block;
  min-height: 1.375rem;
  min-width: 1.375rem;
  position: relative;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      border-color: var(--color-primary-03);
    `};

  input {
    opacity: 0;
  }

  input:checked ~ div {
    background-color: var(--color-primary-01);
    border-radius: 4px;
    min-height: 0.875rem;
    min-width: 0.875rem;
    position: absolute;
    left: 3px;
    top: 3px;
  }

  input:disabled ~ div,
  input:disabled {
    cursor: not-allowed;
    background-color: var(--color-secundary-04);
  }
`;
