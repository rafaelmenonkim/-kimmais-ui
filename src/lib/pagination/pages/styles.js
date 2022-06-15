import styled, { css } from "styled-components";
import Icon from "../../icon";

export const PagesList = styled.div`
  display: inline-flex;
  height: 1.5rem;
`;

export const PagesContainer = styled.ul`
  display: inline-flex;
  height: 100%;
  position: relative;
`;

export const PageIndex = styled.li`
  color: var(--color-primary-01);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;

  + li {
    margin-left: 0.5rem;
  }
`;

export const Selector = styled.div`
  background-color: var(--color-primary-01);
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  top: 0;
  left: ${({ position }) => (position - 1) * 2 + "rem"};
  transition: all 0.25s ease-out;

  ::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-primary-05);
    content: "${({ currentPage }) => (currentPage ? currentPage : null)}";
  }
`;

export const Arrow = styled(Icon)`
  stroke: var(--color-primary-01);
  cursor: pointer;
  transform: rotate(
    ${({ direction }) => (direction === "left" ? "-90deg" : "90deg")}
  );
  height: 1.5rem;
  width: 1.5rem;

  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(100%);
      pointer-events: none;
    `}
`;
