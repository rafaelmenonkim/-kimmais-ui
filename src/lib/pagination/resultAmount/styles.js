import styled from "styled-components";
import Icon from "../../icon";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Text = styled.p`
  display: inline-block;
  color: var(--color-primary-04);
  font-size: 1rem;
  font-weight: var(--font-weight-regular);
`;

export const SelectPositionHolder = styled.div`
  position: relative;
  height: 2.3125rem;
  max-height: 90rem;
  width: 4.625rem;
  margin: 0 0.5rem;
`;

export const SelectAmount = styled.ul`
  background-color: var(--color-primary-05);
  color: var(--color-primary-01);
  display: inline-block;
  border: none;
  border-radius: 0.5rem;
  max-height: ${({ opened }) => (opened ? "32.3125rem" : "2.3125rem")};
  width: 4.625rem;
  box-shadow: 0px 0.1875rem 0.375rem #00000029;
  overflow: hidden;
  position: absolute;
  transition: all 0.25s ease-in-out;
  padding-left: 0.625rem;
  cursor: pointer;
  z-index: 15;

  > svg {
    stroke: var(--color-primary-01);
    height: 2.125rem;
    width: 2.125rem;
    top: 50%;
    transform: translateY(-50%);
    right: 0.375rem;
  }

  > li {
    font-size: 1rem;
    display: flex;
    align-items: center;
    font-weight: var(--font-weight-medium);
    height: 2.3125rem;
    width: 100%;
  }
`;

export const Arrow = styled(Icon)`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  stroke: var(--color-primary-01);
  position: absolute;
  right: 8px;
  top: calc(50% - 1rem);
  z-index: 16;
`;
