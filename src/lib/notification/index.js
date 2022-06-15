import { popNotification } from "@/store/modules/notification/actions";
import { TEN_SECONDS } from "../../utils/constants";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationMessage from "../notificationMessage";

const Notification = () => {
  const dispatch = useDispatch();
  const notificationsStore = useSelector((state) => state.notifications);
  const notifications = notificationsStore.messages;

  useEffect(() => {
    if (!notifications.length) return;
    setTimeout(() => {
      dispatch(popNotification());
    }, TEN_SECONDS);
    // eslint-disable-next-line
  }, [notifications]);

  const renderMessage = () => {
    if (!notifications.length) return null;
    return (
      <NotificationMessage
        onClose={() => dispatch(popNotification())}
        notificationType={notifications[0].type}
        waitTime={TEN_SECONDS / 1000}
      >
        {notifications[0].content}
      </NotificationMessage>
    );
  };

  return renderMessage();
};

export default Notification;
