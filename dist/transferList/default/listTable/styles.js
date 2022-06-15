"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var Header = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  color: var(--color-primary-03);\n  background-color: var(--color-primary-05);\n  position: sticky;\n  top: 0px;\n  > span {\n    font-weight: var(--font-weight-semi-bold);\n  }\n"])));

exports.Header = Header;