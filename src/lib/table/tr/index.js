import React from "react";
import { CustomTr } from "./styles";

const Tr = ({ children, ...props }) => (
  <CustomTr {...props}>{children}</CustomTr>
);

export default Tr;
