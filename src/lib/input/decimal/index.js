import React from "react";
import { DecimalInput } from "./styles";

const Decimal = ({ ...props }) => (
  <DecimalInput
    decimalSeparator={","}
    thousandSeparator={"."}
    decimalScale={2}
    fixedDecimalScale={true}
    {...props}
  />
);

export default Decimal;
