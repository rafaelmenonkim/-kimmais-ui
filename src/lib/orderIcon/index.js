import React from "react";
import { Triangle, Wrapper } from "./styles";

const OrderIcon = ({ clickUp, clickDown, props }) => {
  return (
    <Wrapper {...props}>
      <Triangle onClick={clickUp} />
      <Triangle onClick={clickDown} down />
    </Wrapper>
  );
};

export default OrderIcon;
