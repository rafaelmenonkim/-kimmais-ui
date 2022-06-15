"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _icon = _interopRequireDefault(require("../icon"));

var _styles = require("./styles");

var _excluded = ["children", "type", "onXClick"];

var Message = function Message(_ref) {
  var children = _ref.children,
      type = _ref.type,
      onXClick = _ref.onXClick,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var scrollPosition = document.querySelector("html").scrollTop;
  var menuHeight = getComputedStyle(document.documentElement).getPropertyValue("--menu-height").replace("px", "") || 223;
  var messagePosition = menuHeight - scrollPosition;
  return /*#__PURE__*/_react.default.createElement(_styles.MessageBox, Object.assign({
    messagePosition: messagePosition <= 0 ? "20px" : "".concat(messagePosition, "px")
  }, props), /*#__PURE__*/_react.default.createElement(_styles.IconContainer, {
    type: type
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    name: type
  })), /*#__PURE__*/_react.default.createElement("p", null, children), /*#__PURE__*/_react.default.createElement(_icon.default, {
    name: "x",
    onClick: onXClick
  }));
};

var _default = Message;
exports.default = _default;