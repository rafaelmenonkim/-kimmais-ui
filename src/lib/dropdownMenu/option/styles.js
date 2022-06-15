import styled from "styled-components";

export const Container = styled.div`
  & + & {
    margin-top: 26px;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-05);
  min-height: 35px;
  min-width: 35px;
  background-color: ${({ iconColor }) =>
    iconColor ? iconColor : "var(--color-primary-02)"};
  border-radius: 50%;
  margin-right: 10px;
  > svg {
    min-height: 20px;
    min-width: 20px;
  }
`;

export const OptionTitle = styled.p`
  font-size: 1.375rem;
  font-weight: var(--font-weight-semi-bold);
  white-space: nowrap;
`;
