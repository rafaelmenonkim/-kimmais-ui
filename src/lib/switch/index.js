import React, { useState } from "react";
import ReactSwitch from "react-switch";
import HoverText from "./hoverText";
import { Body } from "./styles";

const Switch = ({ checked, onChange, hover, onText, offText }) => {
  const [isHoverVisible, setIsHoverVisible] = useState(false);
  return (
    <Body
      checked={checked}
      onMouseEnter={() => setIsHoverVisible(true)}
      onMouseLeave={() => setIsHoverVisible(false)}
    >
      {hover && (
        <HoverText
          visible={isHoverVisible}
          hover={checked ? onText : offText}
        />
      )}
      <ReactSwitch
        checked={checked}
        onChange={onChange}
        onColor="#5e39ca"
        offColor="#f8f8f8"
        onHandleColor="#FFF"
        offHandleColor="#707070"
        activeBoxShadow="none"
        handleDiameter={13}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
    </Body>
  );
};

export default Switch;
