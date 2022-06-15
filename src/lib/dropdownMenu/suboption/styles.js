import styled from "styled-components";

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SuboptionTitle = styled.p`
  font-size: 1rem;
  letter-spacing: 0.26px;
  font-weight: var(--font-weight-regular);
  white-space: nowrap;
  margin-top: 8px;
  cursor: pointer;
  :first-child {
    margin-top: 15px;
  }
`;
