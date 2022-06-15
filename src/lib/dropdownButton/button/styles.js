import styled, { css } from "styled-components";

const VARIANTS = {
  default: css`
    color: #2c3361;
    background: none;
    border: none;
    border-radius: 16px;
    padding: 8px;
    white-space: nowrap;
    font-size: 1rem;
    transition: all 0.1s;
    box-shadow: inset 0 0 0 1px #cffdb9;
    position: relative;
    :hover {
      background-color: #cffdb9;
      color: #2c3361;
      > svg {
        fill: #2c3361;
        stroke: #2c3361;
      }
    }
    > svg {
      fill: #2c3361;
      stroke: #2c3361;
      min-height: 24px;
      min-width: 24px;
      max-height: 24px;
      max-width: 24px;
    }
  `,
  solid: css`
    color: #2c3361;
    background-color: #cffdb9;
    border: none;
    border-radius: 16px;
    padding: 8px;
    white-space: nowrap;
    font-size: 1rem;
    transition: all 0.1s;
    box-shadow: inset 0 0 0 1px #cffdb9;
    position: relative;
    :hover {
      background: none;
      color: #2c3361;
      > svg {
        fill: #2c3361;
        stroke: #2c3361;
      }
    }
    > svg {
      fill: #2c3361;
      stroke: #2c3361;
      min-height: 24px;
      min-width: 24px;
      max-height: 24px;
      max-width: 24px;
    }
  `,
};

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 100%;
  position: relative;
  cursor: pointer;
  ${({ variant }) => VARIANTS[variant || "default"]}
  &:disabled {
    background-color: #cffdb9;
    filter: grayscale(100%);
    cursor: not-allowed;
  }
`;

export const ButtonTitle = styled.span`
  margin: 0 8px;
`;

export const DropdownList = styled.div`
  min-height: 30px;
  width: 200px;
  position: absolute;
  top: calc(100% + 8px);
  background-color: var(--color-primary-05);
  border-radius: 8px;
  box-shadow: 0px 2px 5px #00000029;
  overflow: hidden;
  z-index: 30;
  transition: opacity 0.2s, width 0.3s;

  ${({ open }) =>
    !open &&
    css`
      max-height: 0;
      min-height: 0;
      width: 0;
      opacity: 0;
    `}

  ${({ position }) =>
    position &&
    css`
      top: ${position.top + position.fieldSizeY + 8}px;
      left: ${position.left}px;
      width: ${position.fieldSizeX}px;
    `}
`;
