"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = require("@/store/modules/notification/actions");

var _constants = require("../utils/constants");

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _notificationMessage = _interopRequireDefault(require("../notificationMessage"));

var Notification = function Notification() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var notificationsStore = (0, _reactRedux.useSelector)(function (state) {
    return state.notifications;
  });
  var notifications = notificationsStore.messages;
  (0, _react.useEffect)(function () {
    if (!notifications.length) return;
    setTimeout(function () {
      dispatch((0, _actions.popNotification)());
    }, _constants.TEN_SECONDS); // eslint-disable-next-line
  }, [notifications]);

  var renderMessage = function renderMessage() {
    if (!notifications.length) return null;
    return /*#__PURE__*/_react.default.createElement(_notificationMessage.default, {
      onClose: function onClose() {
        return dispatch((0, _actions.popNotification)());
      },
      notificationType: notifications[0].type,
      waitTime: _constants.TEN_SECONDS / 1000
    }, notifications[0].content);
  };

  return renderMessage();
};

var _default = Notification;
exports.default = _default;