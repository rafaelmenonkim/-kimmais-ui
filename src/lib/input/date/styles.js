import styled, { css } from "styled-components";
import NumberFormat from "react-number-format";
import DatePicker from "react-calendar";
import Icon from "../../icon";

export const DateContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Input = styled(NumberFormat)`
  border: 1px solid var(--color-secundary-06);
  appearance: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: var(--font-weight-regular);
  padding: 0 1rem;
  position: relative;
  outline: none;
  height: 2.5rem;
  width: 100%;

  &:disabled + svg {
    pointer-events: none;
  }
`;

export const Calendar = styled(DatePicker)`
  position: absolute;
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? "100rem" : 0)};
  min-width: ${({ visible }) => (visible ? "450px" : 0)};
  max-width: ${({ visible }) => (visible ? "100rem" : 0)};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  border-color: ${({ visible }) => (visible ? "" : "transparent")};
  transition: opacity 0.25s ease-in-out;
  z-index: 1001;
  ${({ position }) =>
    position &&
    css`
      top: ${position.top + 45}px;
      left: ${position.left > 450 - position.fieldSize
        ? position.right - 458
        : position.right - position.left}px;
    `}
`;

export const CalendarIcon = styled(Icon)`
  stroke: var(--color-secundary-06);
  cursor: pointer;
  height: 1.25rem;
  width: 1.25rem;
  position: absolute;
  top: 0.6875rem;
  right: 1.625rem;
`;
