import React from "react";
import { FloatingBox, Triangle } from "./styles";

const HoverText = React.forwardRef(({ hover, ...props }, ref) => {
  return (
    <FloatingBox ref={ref} {...props}>
      {hover}
      <Triangle />
    </FloatingBox>
  );
});

export default HoverText;
