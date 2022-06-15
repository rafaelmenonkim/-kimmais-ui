import React from "react";
import { ItemContainer } from "./styles";

const Item = ({ children, ...props }) => {
  return <ItemContainer {...props}>{children}</ItemContainer>;
};

export default Item;
