"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactSelect = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _templateObject;

var ReactSelect = (0, _styledComponents.default)(_reactSelect.default)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  white-space: nowrap;\n\n  .Select__control {\n    height: 40px;\n    width: 100%;\n    border-radius: 4px;\n    cursor: pointer;\n    border: 1px solid var(--color-secundary-06);\n  }\n\n  .Select__control:hover,\n  .Select__control:focus {\n    border: 1px solid var(--color-secundary-06);\n  }\n\n  .Select__control--is-focused {\n    box-shadow: none;\n    outline: none;\n  }\n\n  .Select__indicator-separator {\n    display: none;\n  }\n\n  .Select__menu {\n    color: var(--color-primary-04);\n  }\n\n  .Select__menu-list {\n    padding: 0;\n  }\n\n  .Select__option--is-focused {\n    background-color: var(--color-secundary-05);\n    color: var(--color-primary-04);\n  }\n\n  .Select__option--is-selected {\n    background-color: var(--color-secundary-04);\n    color: var(--color-primary-04);\n  }\n\n  .Select__option:active {\n    background-color: var(--color-secundary-04);\n  }\n"])));
exports.ReactSelect = ReactSelect;