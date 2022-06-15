import styled from "styled-components";

export const Disabled = styled.div`
  filter: grayscale(100%);
  margin: ${({ margin }) => margin};
  pointer-events: none;
  * {
    cursor: not-allowed !important;
  }
`;
