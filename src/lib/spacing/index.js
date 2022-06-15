import React from "react";
import { Body } from "./styles";

const Spacing = ({ children, top, bottom, left, right, props }) => {
  return (
    <Body top={top} bottom={bottom} left={left} right={right} {...props}>
      {children}
    </Body>
  );
};

export default Spacing;
