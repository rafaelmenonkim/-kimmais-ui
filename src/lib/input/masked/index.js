import React, { forwardRef } from "react";
import { Input } from "./styles";

const Masked = forwardRef(({ ...props }, ref) => {
  return (
    <Input ref={ref} type="text" isText={!!props.displayType} {...props} />
  );
});
export default Masked;
