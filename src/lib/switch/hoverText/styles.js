import styled from "styled-components";

export const FloatingBox = styled.div`
  background-color: var(--color-primary-05);
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.3125rem var(--color-secundary-04);
  color: var(--color-primary-02);
  text-align: center;
  min-height: 24px;
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  display: ${({ visible }) => (visible ? "auto" : "none")};
  text-transform: capitalize;
  white-space: nowrap;
  z-index: 15;
`;
