import styled from "styled-components";

export const Wrapper = styled.span`
  position: relative;

  > * {
    transition: all 0.25s;
  }

  > div,
  label {
    color: ${({ error }) => error && "var(--color-status-02)"};
  }

  input,
  .Select__control {
    border: ${({ error }) => error && "1px solid var(--color-status-02)"};
  }

  > p {
    position: absolute;
  }
`;
