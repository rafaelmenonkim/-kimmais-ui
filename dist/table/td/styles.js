"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTd = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var CustomTd = _styledComponents.default.td(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-04);\n  font-size: 16px;\n  padding: 0 24px;\n"])));

exports.CustomTd = CustomTd;