import React from "react";
import { FloatingBox } from "./styles";

const HoverText = React.forwardRef(({ hover, ...props }, ref) => {
  return (
    <FloatingBox ref={ref} {...props}>
      {hover}
    </FloatingBox>
  );
});

export default HoverText;
