import React from "react";
import Icon from "../icon";
import { MessageBox, IconContainer } from "./styles";

const Message = ({ children, type, onXClick, ...props }) => {
  const scrollPosition = document.querySelector("html").scrollTop;
  const menuHeight =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--menu-height")
      .replace("px", "") || 223;

  const messagePosition = menuHeight - scrollPosition;
  return (
    <MessageBox
      messagePosition={messagePosition <= 0 ? "20px" : `${messagePosition}px`}
      {...props}
    >
      <IconContainer type={type}>
        <Icon name={type} />
      </IconContainer>
      <p>{children}</p>
      <Icon name="x" onClick={onXClick} />
    </MessageBox>
  );
};

export default Message;
