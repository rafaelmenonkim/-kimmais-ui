import styled from "styled-components";

export const CrumbsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Crumb = styled.div`
  cursor: ${({ isLast }) => (!isLast ? "pointer" : "default")};
  font-size: 0.875rem;
  letter-spacing: 0.01375rem;
  white-space: nowrap;

  & + & {
    margin-left: 8px;
  }

  & + &::before {
    color: initial;
    content: ">";
    font-weight: initial;
    margin-right: 8px;
  }

  &:last-child {
    color: var(--color-primary-01);
    font-weight: var(--font-weight-semi-bold);
  }
`;
