"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signature = exports.Container = exports.Body = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

var Body = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)([""])));

exports.Body = Body;

var Container = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 40px 0 40px 0;\n  min-height: calc(100vh - var(--menu-height) - var(--footer-height));\n  height: auto;\n  position: relative;\n  display: flex;\n  margin: 0 auto;\n  overflow: hidden;\n  /* background: #fff; */\n"])));

exports.Container = Container;

var Signature = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  color: var(--color-primary-03);\n  bottom: 45px;\n"])));

exports.Signature = Signature;