"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _styles = require("./styles");

var PageHeader = function PageHeader(_ref) {
  var children = _ref.children,
      location = _ref.location;
  return /*#__PURE__*/_react.default.createElement(_styles.PageHeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PageName, null, children), /*#__PURE__*/_react.default.createElement(_.Breadcrumb, null));
};

var _default = PageHeader;
exports.default = _default;