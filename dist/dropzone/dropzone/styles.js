"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadIcon = exports.TextDecoration = exports.SubText = exports.MainText = exports.DropContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icon = _interopRequireDefault(require("../../icon"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var DropContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-secundary-02);\n  border: 1px dashed #878181;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  max-width: 85%;\n  margin: auto;\n  cursor: pointer;\n"])));

exports.DropContainer = DropContainer;

var MainText = _styledComponents.default.p(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 18px;\n  letter-spacing: 0;\n  margin-top: 40px;\n"])));

exports.MainText = MainText;

var SubText = _styledComponents.default.p(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-03);\n  font-size: 16px;\n  letter-spacing: 0;\n  margin-top: 16px;\n"])));

exports.SubText = SubText;
var UploadIcon = (0, _styledComponents.default)(_icon.default)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  height: 96px;\n  width: 96px;\n  stroke: var(--color-primary-03);\n"])));
exports.UploadIcon = UploadIcon;

var TextDecoration = _styledComponents.default.span(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-02);\n  text-decoration: underline;\n"])));

exports.TextDecoration = TextDecoration;