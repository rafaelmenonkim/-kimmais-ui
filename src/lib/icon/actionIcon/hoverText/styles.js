import styled, { css } from "styled-components";

export const FloatingBox = styled.div`
  background-color: var(--color-primary-05);
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.3125rem var(--color-secundary-04);
  color: var(--color-primary-02);
  text-align: center;
  min-height: 26px;
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  display: none;
  text-transform: capitalize;
  white-space: nowrap;
  z-index: 15;
  ${({ activePosition }) =>
    activePosition &&
    css`
      bottom: ${({ bottom }) => bottom + "px"};
      left: ${({ left }) => left + "px"};
      width: auto;
    `};
`;

export const Triangle = styled.ul`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid var(--color-primary-05);
  position: absolute;
  left: 50%;
  top: 99%;
  transform: translateX(-50%);
`;
