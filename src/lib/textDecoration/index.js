import React from "react";
import { Decoration } from "./styles";

const TextDecoration = ({ children, variant }) => (
  <Decoration variant={variant}>{children}</Decoration>
);

export default TextDecoration;
