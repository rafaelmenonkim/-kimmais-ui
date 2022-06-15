import React from "react";
import { Radio } from "./styles";

const RadioButton = ({ ...props }) => {
  return (
    <Radio>
      <input type="radio" {...props} />
      <div />
    </Radio>
  );
};

export default RadioButton;
