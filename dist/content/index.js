"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var Content = function Content(_ref) {
  var children = _ref.children,
      limit = _ref.limit,
      props = _ref.props;
  return /*#__PURE__*/_react.default.createElement(_styles.Body, Object.assign({
    limit: limit
  }, props), children);
};

var _default = Content;
exports.default = _default;