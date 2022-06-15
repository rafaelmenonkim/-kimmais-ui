"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("../utils/constants");

var _styles = require("./styles");

var _ai = require("react-icons/ai");

var NotificationMessage = function NotificationMessage(_ref) {
  var children = _ref.children,
      notificationType = _ref.notificationType,
      onClose = _ref.onClose,
      waitTime = _ref.waitTime;

  var chooseIcon = function chooseIcon() {
    if (notificationType === _constants.NOTIFICATION_TYPE.ERROR) return /*#__PURE__*/_react.default.createElement(_ai.AiOutlineCloseCircle, null);else if (notificationType === _constants.NOTIFICATION_TYPE.SUCCESS) return /*#__PURE__*/_react.default.createElement(_ai.AiOutlineCheckCircle, null);else if (notificationType === _constants.NOTIFICATION_TYPE.WARNING) return /*#__PURE__*/_react.default.createElement(_ai.AiOutlineExclamationCircle, null);
  };

  var chooseColor = function chooseColor() {
    if (notificationType === _constants.NOTIFICATION_TYPE.ERROR) return "var(--color-message-03)";else if (notificationType === _constants.NOTIFICATION_TYPE.SUCCESS) return "var(--color-message-01)";else if (notificationType === _constants.NOTIFICATION_TYPE.WARNING) return "var(--color-message-02)";
  };

  return /*#__PURE__*/_react.default.createElement(_styles.NotificationMessageBody, null, /*#__PURE__*/_react.default.createElement(_styles.TypeIdentifier, {
    color: chooseColor()
  }, chooseIcon()), /*#__PURE__*/_react.default.createElement(_styles.CloseIcon, {
    onClick: onClose
  }), /*#__PURE__*/_react.default.createElement(_styles.MessageContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Message, null, children)), waitTime && /*#__PURE__*/_react.default.createElement(_styles.TimeAnimation, {
    color: chooseColor(),
    animationTime: waitTime
  }));
};

var _default = NotificationMessage;
exports.default = _default;