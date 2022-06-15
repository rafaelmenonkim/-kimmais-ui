import React from "react";
import { Container } from "./styles";

const Panel = ({ children, noPadding, ...props }) => {
  return (
    <Container noPadding={noPadding} {...props}>
      {children}
    </Container>
  );
};

export default Panel;
