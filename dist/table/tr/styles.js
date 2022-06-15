"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTr = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var CustomTr = _styledComponents.default.tr(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  align-items: left;\n  border-bottom: 1px solid var(--color-secundary-04);\n  height: 40px;\n  white-space: nowrap;\n  :only-child {\n    border: none;\n  }\n\n  tbody &:hover {\n    background-color: var(--color-secundary-05);\n  }\n"])));

exports.CustomTr = CustomTr;