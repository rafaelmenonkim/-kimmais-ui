import React, { useRef, useState } from "react";
import HoverText from "./hoverText";
import { Wrapper, Icon } from "./styles";

const MARGIN = 10;

const ActionIcon = ({ activePosition, onClick, hover, name, props }) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const hoverText = useRef(null);

  function handleOnHover(e) {
    activePosition && positioningHoverText(e);
    setIsListVisible(!isListVisible);
  }

  function positioningHoverText(e) {
    const relativeParent = hoverText.current.offsetParent;
    const iconElement = e.currentTarget;
    const parentDistanceToBottom =
      window.pageYOffset + relativeParent.getBoundingClientRect().bottom;
    const iconDistanceToBottom =
      window.pageYOffset + iconElement.getBoundingClientRect().bottom;

    const parentDistanceToLeft =
      window.pageYOffset + relativeParent.getBoundingClientRect().left;
    const iconDistanceToLeft =
      window.pageYOffset + iconElement.getBoundingClientRect().left;

    const iconHeight = iconElement.offsetHeight;

    setPosition({
      x: iconDistanceToLeft - parentDistanceToLeft + MARGIN,
      y: parentDistanceToBottom - iconDistanceToBottom + iconHeight + MARGIN,
    });
  }

  return (
    <Wrapper activePosition={activePosition} onMouseEnter={handleOnHover}>
      <Icon onClick={onClick} name={name} {...props} />
      <HoverText
        hover={hover}
        activePosition={activePosition}
        bottom={position.y}
        left={position.x}
        ref={hoverText}
      />
    </Wrapper>
  );
};

export default ActionIcon;
