import React from "react";
import { CustomTd } from "./styles";

const Td = ({ children, ...props }) => (
  <CustomTd {...props}>{children}</CustomTd>
);

export default Td;
