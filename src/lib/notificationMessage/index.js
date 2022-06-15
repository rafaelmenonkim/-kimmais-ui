import React from "react";
import { NOTIFICATION_TYPE } from "../../utils/constants";
import {
  CloseIcon,
  Message,
  MessageContainer,
  NotificationMessageBody,
  TimeAnimation,
  TypeIdentifier,
} from "./styles";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";

const NotificationMessage = ({
  children,
  notificationType,
  onClose,
  waitTime,
}) => {
  const chooseIcon = () => {
    if (notificationType === NOTIFICATION_TYPE.ERROR)
      return <AiOutlineCloseCircle />;
    else if (notificationType === NOTIFICATION_TYPE.SUCCESS)
      return <AiOutlineCheckCircle />;
    else if (notificationType === NOTIFICATION_TYPE.WARNING)
      return <AiOutlineExclamationCircle />;
  };

  const chooseColor = () => {
    if (notificationType === NOTIFICATION_TYPE.ERROR)
      return "var(--color-message-03)";
    else if (notificationType === NOTIFICATION_TYPE.SUCCESS)
      return "var(--color-message-01)";
    else if (notificationType === NOTIFICATION_TYPE.WARNING)
      return "var(--color-message-02)";
  };

  return (
    <NotificationMessageBody>
      <TypeIdentifier color={chooseColor()}>{chooseIcon()}</TypeIdentifier>
      <CloseIcon onClick={onClose} />
      <MessageContainer>
        <Message>{children}</Message>
      </MessageContainer>
      {waitTime && (
        <TimeAnimation color={chooseColor()} animationTime={waitTime} />
      )}
    </NotificationMessageBody>
  );
};

export default NotificationMessage;
