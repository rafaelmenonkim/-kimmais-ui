import styled, { css } from "styled-components";

export const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2.5rem;
  position: relative;
`;
export const DashedLine = styled.div`
  border-top: 2px dashed var(--color-secundary-06);
  width: calc(100% - 5rem);
  position: absolute;
  z-index: -1;
`;
export const Step = styled.div`
  background-color: var(--color-primary-05);
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0.1875rem 0.375rem rgba(0, 0, 0, 0);
  align-items: center;
  display: flex;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  position: relative;

  label {
    color: var(--color-primary-03);
    font-size: 0.875rem;
    font-weight: var(--font-weight-regular);
    letter-spacing: 0.01375rem;
    top: calc(100% + 0.25rem);
    position: absolute;
  }

  ${({ navigable }) => navigable && "cursor: pointer;"}

  ${(props) =>
    props.status === "notstarted" &&
    css`
      border: 0.0625rem solid var(--color-secundary-04);
      color: var(--color-secundary-04);
      pointer-events: none;
    `}

  ${(props) =>
    props.status === "ongoing" &&
    css`
      background-color: var(--color-primary-04);
      border: 0.0625rem solid var(--color-primary-04);
      color: var(--color-primary-05);
      font-weight: var(--font-weight-bold);
      box-shadow: 0px 0.1875rem 0.375rem #00000029;
    `}

    ${(props) =>
    props.status === "done" &&
    css`
      border: 0.0625rem solid var(--color-primary-03);
    `}
`;
