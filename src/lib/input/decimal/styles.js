import styled, { css } from "styled-components";
import Masked from "../masked";

const variants = {
  invisible: `
    border: none;
    height: 35px;
    border-radius: 8px;
    padding: 0 8px;
    border: 1px solid transparent;
    background: none;
    ${({ displayType }) =>
      displayType !== "text" &&
      css`
        :hover,
        :focus {
          border: 1px solid var(--color-secundary-05);
          background: var(--color-primary-05);
        }
      `}
    
  `,
};

export const DecimalInput = styled(Masked)`
  ${({ variant }) => variants[variant]}
`;
