import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid var(--color-secundary-06);
  border-radius: 4px;
  padding: 8px 0 8px 8px;
  position: relative;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: hsl(0, 0%, 95%);
      pointer-events: none;
    `}
`;

export const SelectedInput = styled.input`
  white-space: nowrap;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

export const FloatingList = styled.div`
  background-color: var(--color-primary-05);
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.3125rem var(--color-secundary-04);
  color: var(--color-primary-04);
  position: absolute;
  width: 100%;
  z-index: 10001;
  transition: all 0.2s;
  padding: 0 16px;
  overflow: hidden;
  ${({ visible }) =>
    !visible &&
    css`
      opacity: 0;
      max-height: 0;
    `}

  ${({ position }) =>
    position &&
    css`
      top: ${position.top}px;
      left: ${position.left}px;
      width: ${position.fieldSizeX}px;
    `}
`;

export const FloatingListContent = styled.div`
  max-height: 200px;
  overflow: auto;
`;

export const FloatingListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 8px 0;
  cursor: pointer;
`;

export const FloatingListItemLabel = styled.div`
  margin-left: 8px;
  white-space: nowrap;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  min-height: 20px;
  min-width: 20px;
  margin: 8px;
  svg {
    min-height: 20px;
    min-width: 20px;
    ${({ isfocused }) =>
      isfocused
        ? "fill: var(--color-primary-03);"
        : "fill: var(--color-secundary-03);"}
  }

  svg:hover {
    fill: var(--color-secundary-06);
  }
`;
