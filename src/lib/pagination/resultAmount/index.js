import React, { useState } from "react";
import {
  Arrow,
  Container,
  Text,
  SelectAmount,
  SelectPositionHolder,
} from "./styles";

const ResultAmount = ({ setPageSize, useOnClickOutside, ...props }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [options, setOptions] = useState([10, 15, 20, 25, 50, 100]);
  const clickOut = useOnClickOutside(() => {
    setIsOpened(false);
  });
  function handleOnClick() {
    setIsOpened(!isOpened);
  }

  function handleOnOptionClick(index, amount) {
    options[index] = options[0];
    const orderedOptions = options
      .slice(1, options.length)
      .sort((a, b) => a - b);
    setOptions([amount, ...orderedOptions]);
    setPageSize && setPageSize(amount);
  }

  return (
    <Container ref={clickOut} {...props}>
      <Text>Exibir</Text>
      <SelectPositionHolder>
        <SelectAmount opened={isOpened} onClick={handleOnClick}>
          {options.map((amount, index) => (
            <li
              key={index}
              onClick={() => {
                handleOnOptionClick(index, amount);
              }}
            >
              {amount}
            </li>
          ))}
        </SelectAmount>
        <Arrow name="arrow-down" onClick={handleOnClick} />
      </SelectPositionHolder>
      <Text>resultados</Text>
    </Container>
  );
};

export default ResultAmount;
