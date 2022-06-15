import React from "react";
import { Gradient } from "./styles";

const GradientText = ({ children, ...props }) => {
  return <Gradient {...props}>{children}</Gradient>;
};

export default GradientText;
