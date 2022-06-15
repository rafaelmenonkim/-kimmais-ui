import React from "react";
import { Wrapper } from "./styles";

const ErrorWrapper = ({ children, error }) => (
  <Wrapper error={error}>{children}</Wrapper>
);

export default ErrorWrapper;
