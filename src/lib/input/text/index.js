import React, { forwardRef } from "react";
import { Input } from "./styles";

const Text = forwardRef(({ type, ...props }, ref) => {
  return <Input ref={ref} type={type ? type : "text"} {...props} />;
});
export default Text;
