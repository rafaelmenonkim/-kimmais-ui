import React from "react";
import { CustomTh } from "./styles";

const Th = ({ children, ...props }) => (
  <CustomTh {...props}>{children}</CustomTh>
);

export default Th;
