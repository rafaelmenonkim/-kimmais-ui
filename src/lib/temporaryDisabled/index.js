import React from "react";
import { Disabled } from "./styles";

const TemporaryDisabled = ({ children, margin }) => {
  return <Disabled margin={margin}>{children}</Disabled>;
};

export default TemporaryDisabled;
