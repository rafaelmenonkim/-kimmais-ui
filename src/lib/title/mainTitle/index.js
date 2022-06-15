import React from "react";
import { Text } from "./styles";

const MainTitle = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

export default MainTitle;
