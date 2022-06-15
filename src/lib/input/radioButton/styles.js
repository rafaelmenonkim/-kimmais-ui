import styled from "styled-components";

export const Radio = styled.label`
  border: 0.0625rem solid var(--color-primary-01);
  border-radius: 50%;
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  position: relative;

  input {
    opacity: 0;
  }

  input:checked ~ div {
    background-color: var(--color-primary-01);
    border-radius: 50%;
    height: 0.875rem;
    width: 0.875rem;
    position: absolute;
    left: 0.125rem;
    top: 0.125rem;
  }
`;
