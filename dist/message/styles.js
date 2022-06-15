"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageBox = exports.IconContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var MessageBox = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  border-radius: 1rem;\n  color: var(--color-primary-03);\n  font-size: 1.125rem;\n  font-weight: var(--font-weight-bold);\n  align-items: center;\n  display: flex;\n  height: 7.5rem;\n  min-width: 24.125rem;\n  max-width: min(90vw, 950px);\n  overflow: hidden;\n  padding: 0 1.25rem 0 8.75rem;\n  position: fixed;\n  top: ", ";\n  right: 15px;\n  z-index: 1001;\n\n  > svg {\n    fill: var(--color-primary-03);\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    height: 1.375rem;\n    width: 1.375rem;\n    transition: all 0.1s linear;\n\n    :hover {\n      transform: scale(1.3);\n    }\n\n    :active {\n      transform: scale(0.9);\n    }\n  }\n"])), function (_ref) {
  var messagePosition = _ref.messagePosition;
  return messagePosition;
});

exports.MessageBox = MessageBox;

var IconContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 7.5rem;\n  position: absolute;\n  left: 0;\n\n  ", "\n\n  ", "\n\n    ", "\n\n    svg {\n    height: 1.875rem;\n    width: 1.875rem;\n    stroke: white;\n  }\n"])), function (props) {
  return props.type === "error" && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n      background-color: var(--color-message-03);\n    "])));
}, function (props) {
  return props.type === "warning" && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n      background-color: var(--color-message-02);\n    "])));
}, function (props) {
  return props.type === "ok" && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      background-color: var(--color-message-01);\n    "])));
});

exports.IconContainer = IconContainer;