import React from "react";
import { FloatingContainer, ItemsList } from "./styles";

const FloatingList = React.forwardRef(
  ({ children, hover, visible, ...props }, ref) => {
    return (
      <FloatingContainer visible={visible} {...props} ref={ref}>
        <ItemsList hover={hover}>{children}</ItemsList>
      </FloatingContainer>
    );
  }
);

export default FloatingList;
