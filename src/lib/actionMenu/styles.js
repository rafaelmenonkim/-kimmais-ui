import styled, { css } from "styled-components";
import CFloatingList from "../floatingList";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ activePosition }) =>
    !activePosition &&
    css`
      position: relative;
      div:last-child {
        bottom: calc(100% + 0.3125rem);
      }
    `};
`;

export const Dot = styled.div`
  background-color: var(--color-primary-03);
  border-radius: 50%;
  height: 0.3125rem;
  width: 0.3125rem;

  :nth-child(2) {
    margin: 0.3125rem 0;
  }
`;

export const FloatingList = styled(CFloatingList)`
  min-width: auto;

  ${({ activePosition }) =>
    activePosition &&
    css`
      bottom: ${({ bottom }) => bottom + "px"};
      left: ${({ left }) => left + "px"};
      width: auto;
    `};
`;
