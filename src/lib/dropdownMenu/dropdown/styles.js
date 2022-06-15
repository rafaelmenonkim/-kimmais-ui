import { BREAK_POINTS } from "../../../utils/constants";
import styled, { css } from "styled-components";

export const DropdownList = styled.div`
  min-height: 30px;
  position: absolute;
  top: calc(100% + 8px);
  background-color: var(--color-primary-05);
  border-radius: 8px;
  box-shadow: 0px 2px 5px #00000029;
  overflow: hidden;
  z-index: 30;
  transition: opacity 0.2s, width 0.3s;
  padding: 32px;

  ${({ open }) =>
    !open &&
    css`
      max-height: 0;
      min-height: 0;
      width: 0;
      max-width: 0;
      opacity: 0;
      padding: 0;
    `}

  ${({ position }) =>
    position &&
    css`
      top: ${position.top + position.fieldSizeY}px;
      right: ${position.right}px;
    `}

  @media (max-width: ${BREAK_POINTS.sm}) {
    right: 50%;
    transform: translateX(50%);
  }
`;
