import styled, { css } from "styled-components";

const STYLES = {
  default: css`
    color: var(--color-primary-01);
    font-weight: var(--font-weight-semi-bold);
  `,
  underlined: css`
    color: var(--color-primary-01);
    text-decoration: underline;
  `,
  bold: css`
    text-decoration: underline;
    font-weight: var(--font-weight-bold);
  `,
};

export const Decoration = styled.span`
  ${({ variant }) => STYLES[variant] || STYLES["default"]}
`;
