import React from "react";
import { Body } from "./styles";

const Content = ({ children, limit, props }) => {
  return (
    <Body limit={limit} {...props}>
      {children}
    </Body>
  );
};

export default Content;
