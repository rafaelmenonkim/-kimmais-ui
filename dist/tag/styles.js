"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagBody = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var TagBody = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  padding: 2px 4px;\n  background-color: var(--color-primary-01);\n  color: var(--color-primary-05);\n  display: inline-block;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: var(--font-weight-bold);\n  cursor: default;\n  user-select: none;\n"])));

exports.TagBody = TagBody;