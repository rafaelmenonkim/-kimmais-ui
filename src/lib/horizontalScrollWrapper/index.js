import React from "react";
import { Border, ScrollWrapper } from "./styles";

const HorizontalScrollWrapper = ({
  padding,
  paddingSize = "32px",
  children,
}) => {
  if (!padding) return <ScrollWrapper>{children}</ScrollWrapper>;
  return (
    <Border paddingSize={paddingSize}>
      <ScrollWrapper>{children}</ScrollWrapper>
    </Border>
  );
};

export default HorizontalScrollWrapper;
