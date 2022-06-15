import React, { useState, useRef } from "react";
import { MenuContainer, Dot, FloatingList } from "./styles";

const ActionMenu = ({
  activePosition,
  children,
  useOnClickOutside,
  ...props
}) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const list = useRef(null);
  const clickOutside = useOnClickOutside(() => {
    setIsListVisible(false);
  });

  function handleOnClick(e) {
    activePosition && positioningFloatingList(e);
    setIsListVisible(!isListVisible);
  }

  function positioningFloatingList(e) {
    const relativeParent = list.current.offsetParent;
    const menuElement = e.currentTarget;

    const parentDistanceToBottom =
      window.pageYOffset + relativeParent.getBoundingClientRect().bottom;
    const menuDistanceToBottom =
      window.pageYOffset + menuElement.getBoundingClientRect().bottom;

    const parentDistanceToLeft =
      window.pageYOffset + relativeParent.getBoundingClientRect().left;
    const menuDistanceToLeft =
      window.pageYOffset + menuElement.getBoundingClientRect().left;

    const menuHeight = menuElement.offsetHeight;

    const MARGIN = 8;

    setPosition({
      x: menuDistanceToLeft - parentDistanceToLeft,
      y: parentDistanceToBottom - menuDistanceToBottom + menuHeight + MARGIN,
    });
  }

  return (
    <MenuContainer
      activePosition={activePosition}
      onClick={handleOnClick}
      {...props}
      ref={clickOutside}
    >
      <Dot></Dot>
      <Dot></Dot>
      <Dot></Dot>
      <FloatingList
        visible={isListVisible}
        bottom={position.y}
        left={position.x}
        ref={list}
        activePosition={activePosition}
      >
        {children}
      </FloatingList>
    </MenuContainer>
  );
};

export default ActionMenu;
