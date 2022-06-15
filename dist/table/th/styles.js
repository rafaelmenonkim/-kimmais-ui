"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTh = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var CustomTh = _styledComponents.default.th(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-01);\n  text-align: left;\n  font-size: 16px;\n  font-weight: var(--font-weight-semi-bold);\n  letter-spacing: 0;\n  white-space: nowrap;\n  padding: 0 24px;\n\n  > div {\n    margin-right: 9px;\n  }\n"])));

exports.CustomTh = CustomTh;