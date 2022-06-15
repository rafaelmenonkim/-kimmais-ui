import styled, { css } from "styled-components";
import BaseIcon from "../icon";

export const Wrapper = styled.span`
  :hover > div {
    display: inline-block !important;
  }

  ${({ activePosition }) =>
    !activePosition &&
    css`
      position: relative;
    `}
`;
export const Icon = styled(BaseIcon)`
  stroke: var(--color-primary-04);
  stroke-width: 2;
  cursor: pointer;
  height: 16px;
  width: 16px;

  :hover {
    stroke: var(--color-primary-01);
  }
`;
