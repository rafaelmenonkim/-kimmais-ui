import styled, { css } from "styled-components";
import { ReactComponent as SpinnerSvg } from "@/assets/spinner.svg";

const VARIANTS = {
  default: css``,
  sm: css`
    height: 16px;
    width: 16px;
  `,
};

export const Spinner = styled(SpinnerSvg)`
  animation: loading 1.5s infinite linear;
  ${({ variant }) => VARIANTS[variant]}
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
