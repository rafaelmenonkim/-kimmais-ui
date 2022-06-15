import styled, { css } from "styled-components";

const VARIANTS = {
  default: css`
    color: #2c2d5c;
    background: #cfffb9;
    border: none;
    border-radius: 16px;
    padding: 8px;
    white-space: nowrap;
    font-size: 1rem;
    transition: all 0.1s;
    :hover {
      filter: opacity(0.8);
    }
    > svg {
      fill: #2c2d5c;
      stroke: #2c2d5c;
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
  > svg {
    margin-right: 8px;
  }
`;
