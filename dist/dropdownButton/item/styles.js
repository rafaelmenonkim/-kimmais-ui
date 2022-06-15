"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var ItemContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  padding: 14px 18px;\n  :nth-child(2n + 1) {\n    background-color: var(--color-secundary-02);\n  }\n  :only-child {\n    background-color: var(--color-primary-05);\n    padding: 18px;\n  }\n  :first-child {\n    padding-top: 18px;\n  }\n  :last-child {\n    padding-bottom: 18px;\n  }\n  cursor: pointer;\n"])));

exports.ItemContainer = ItemContainer;