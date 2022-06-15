"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var Tag = function Tag(_ref) {
  var children = _ref.children,
      altColor = _ref.altColor;
  return /*#__PURE__*/_react.default.createElement(_styles.TagBody, null, children);
};

var _default = Tag;
exports.default = _default;