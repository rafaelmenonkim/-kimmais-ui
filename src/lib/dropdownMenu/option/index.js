import React from "react";
import {
  Container,
  IconContainer,
  OptionContainer,
  OptionTitle,
} from "./styles";

const Option = ({ children, icon, iconColor, title }) => {
  return (
    <Container>
      <OptionContainer>
        <IconContainer iconColor={iconColor}>{icon}</IconContainer>
        <OptionTitle>{title}</OptionTitle>
      </OptionContainer>
      {children}
    </Container>
  );
};

export default Option;
