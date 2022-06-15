import styled from "styled-components";
import Select from "react-select";

export const ReactSelect = styled(Select)`
  white-space: nowrap;

  .Select__control {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid var(--color-secundary-06);
  }

  .Select__control:hover,
  .Select__control:focus {
    border: 1px solid var(--color-secundary-06);
  }

  .Select__control--is-focused {
    box-shadow: none;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: var(--color-primary-04);
  }

  .Select__menu-list {
    padding: 0;
  }

  .Select__option--is-focused {
    background-color: var(--color-secundary-05);
    color: var(--color-primary-04);
  }

  .Select__option--is-selected {
    background-color: var(--color-secundary-04);
    color: var(--color-primary-04);
  }

  .Select__option:active {
    background-color: var(--color-secundary-04);
  }
`;
