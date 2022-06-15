import React from "react";
import { Text } from "./styles";

const SubTitle = ({ children, ...props }) => <Text {...props}>{children}</Text>;

export default SubTitle;
