"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeIdentifier = exports.TimeAnimation = exports.NotificationMessageBody = exports.MessageContainer = exports.Message = exports.CloseIcon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ri = require("react-icons/ri");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var NotificationMessageBody = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  border-radius: 16px;\n  color: var(--color-primary-03);\n  font-size: 1.125rem;\n  font-weight: var(--font-weight-bold);\n  align-items: center;\n  display: flex;\n  min-height: 132px;\n  min-width: 24.125rem;\n  max-width: min(90vw, 950px);\n  overflow: hidden;\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  z-index: 1001;\n  padding: 48px 20px 40px 148px;\n"])));

exports.NotificationMessageBody = NotificationMessageBody;
var CloseIcon = (0, _styledComponents.default)(_ri.RiCloseLine)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  fill: var(--color-primary-03);\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  min-height: 24px;\n  max-height: 24px;\n  min-width: 24px;\n  max-width: 24px;\n  transition: all 0.1s linear;\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.3);\n  }\n\n  :active {\n    transform: scale(0.9);\n  }\n"])));
exports.CloseIcon = CloseIcon;

var TypeIdentifier = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  height: 100%;\n  width: 132px;\n  background-color: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  > svg {\n    fill: var(--color-primary-05);\n    stroke: var(--color-primary-05);\n    min-height: 48px;\n    max-height: 48px;\n    min-width: 48px;\n    max-width: 48px;\n  }\n"])), function (_ref) {
  var color = _ref.color;
  return color;
});

exports.TypeIdentifier = TypeIdentifier;

var MessageContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  max-height: 200px;\n  overflow: auto;\n"])));

exports.MessageContainer = MessageContainer;

var Message = _styledComponents.default.p(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  overflow-wrap: break-word;\n"])));

exports.Message = Message;

var TimeAnimation = _styledComponents.default.div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  left: 132px;\n  height: 5px;\n  background-color: var(--color-secundary-08);\n  bottom: 0;\n  animation: notification-message-disappear-time\n    ", "s linear infinite;\n\n  @keyframes notification-message-disappear-time {\n    from {\n      width: 0;\n    }\n    to {\n      width: calc(100% - 132px);\n    }\n  }\n"])), function (_ref2) {
  var animationTime = _ref2.animationTime;
  return animationTime;
});

exports.TimeAnimation = TimeAnimation;