"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageName = exports.PageHeaderContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var PageName = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  font-weight: var(--font-weight-semi-bold);\n  font-size: 1.625rem;\n  white-space: nowrap;\n"])));

exports.PageName = PageName;

var PageHeaderContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 80px;\n  border-bottom: 1px solid var(--color-secundary-04);\n  padding-left: 32px;\n  max-width: 580px;\n"])));

exports.PageHeaderContainer = PageHeaderContainer;