"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchContainer = exports.Field = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var SearchContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n\n  svg {\n    cursor: pointer;\n    height: 1.25rem;\n    width: 1.25rem;\n    top: 10px;\n    left: 16px;\n    position: absolute;\n    stroke: var(--color-primary-03);\n  }\n"])));

exports.SearchContainer = SearchContainer;

var Field = _styledComponents.default.input(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-secundary-05);\n  border: none;\n  border-radius: 1.25rem;\n  color: var(--color-primary-03);\n  font-size: 0.875rem;\n  letter-spacing: 0;\n  padding-left: 3.1875rem;\n  padding-right: 1.5625rem;\n  height: 2.5rem;\n  width: 100%;\n  outline: none;\n\n  ::placeholder {\n    font-style: italic;\n    color: var(--color-primary-03);\n  }\n"])));

exports.Field = Field;