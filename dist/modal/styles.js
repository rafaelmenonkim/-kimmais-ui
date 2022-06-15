"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.ButtonsWrapper = exports.ButtonWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

var Content = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  height: 100%;\n  width: 100%;\n  padding: 32px;\n"])));

exports.Content = Content;

var ButtonWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  margin: auto;\n  max-width: 250px;\n  margin-top: 32px;\n"])));

exports.ButtonWrapper = ButtonWrapper;

var ButtonsWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: 32px;\n\n  > button + button {\n    margin-left: 32px;\n  }\n"])));

exports.ButtonsWrapper = ButtonsWrapper;