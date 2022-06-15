"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.CustomTable = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _table = _interopRequireDefault(require("../../../table"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var Header = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  color: var(--color-primary-03);\n  background-color: var(--color-primary-05);\n  position: sticky;\n  top: 0px;\n  > span {\n    font-weight: var(--font-weight-semi-bold);\n  }\n"])));

exports.Header = Header;
var CustomTable = (0, _styledComponents.default)(_table.default)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  border-bottom: 1px solid var(--color-secundary-04);\n\n  div {\n    max-height: initial;\n  }\n\n  th + th {\n    text-align: right;\n  }\n\n  tr:last-child {\n    border: none;\n  }\n\n  tr:hover {\n    background-color: var(--color-primary-05);\n  }\n\n  table tr:hover {\n    background-color: var(--color-secundary-04);\n  }\n\n  > tbody > tr > td[colspan=\"2\"] {\n    padding: 0;\n  }\n"])));
exports.CustomTable = CustomTable;