import React from "react";
import { SpinnerBox } from "./styles";

const Box = ({ children, ...props }) => (
  <SpinnerBox {...props}>{children}</SpinnerBox>
);

export default Box;
