import React from "react";
import { Background } from "./styles";

const Backdrop = ({ children, ...props }) => {
  return <Background {...props}>{children}</Background>;
};

export default Backdrop;
