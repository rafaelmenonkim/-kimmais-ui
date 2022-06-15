import styled, { css } from "styled-components";

export const MessageBox = styled.div`
  background-color: var(--color-primary-05);
  border-radius: 1rem;
  color: var(--color-primary-03);
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  align-items: center;
  display: flex;
  height: 7.5rem;
  min-width: 24.125rem;
  max-width: min(90vw, 950px);
  overflow: hidden;
  padding: 0 1.25rem 0 8.75rem;
  position: fixed;
  top: ${({ messagePosition }) => messagePosition};
  right: 15px;
  z-index: 1001;

  > svg {
    fill: var(--color-primary-03);
    position: absolute;
    right: 1rem;
    top: 1rem;
    height: 1.375rem;
    width: 1.375rem;
    transition: all 0.1s linear;

    :hover {
      transform: scale(1.3);
    }

    :active {
      transform: scale(0.9);
    }
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 7.5rem;
  position: absolute;
  left: 0;

  ${(props) =>
    props.type === "error" &&
    css`
      background-color: var(--color-message-03);
    `}

  ${(props) =>
    props.type === "warning" &&
    css`
      background-color: var(--color-message-02);
    `}

    ${(props) =>
    props.type === "ok" &&
    css`
      background-color: var(--color-message-01);
    `}

    svg {
    height: 1.875rem;
    width: 1.875rem;
    stroke: white;
  }
`;
