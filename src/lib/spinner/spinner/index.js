import React from "react";
import { Spinner } from "./styles";
const SpinnerWheel = ({ variant = "default", ...props }) => {
  return <Spinner variant={variant} {...props} />;
};
export default SpinnerWheel;
