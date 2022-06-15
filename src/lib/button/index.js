import React from "react";
import { CustomButton } from "./styles";
import Icon from "../icon";

const ButtonV2 = ({ children, icon, ...props }) => {
  return (
    <CustomButton {...props}>
      {icon && <Icon name={icon} />}
      {children}
    </CustomButton>
  );
};

export default ButtonV2;
