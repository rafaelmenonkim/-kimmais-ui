import React from "react";
import { Body, Container } from "./styles";

const Background = ({ children, ...props }) => (
  <Body {...props}>
    <Container>
      {children}
      {/* <Signature>Desenvolvido por Kim+ Benefícios</Signature> */}
    </Container>
  </Body>
);

export default Background;
