import React, { useMemo, useState } from "react";
import { Box } from "./styles";

const CheckBox = ({ checked, controlled, onChange, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  useMemo(() => {
    onChange && onChange(isChecked);
    // eslint-disable-next-line
  }, [isChecked]);

  function handleOnChange() {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <Box className="check-box" disabled={props.disabled}>
        <input
          type="checkbox"
          checked={controlled ? checked : isChecked}
          onChange={handleOnChange}
          {...props}
        />
        <div />
      </Box>
    </>
  );
};

export default CheckBox;
