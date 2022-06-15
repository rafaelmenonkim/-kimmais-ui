"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var Container = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  padding: ", ";\n  position: relative;\n  background-color: var(--color-primary-05);\n  border-radius: 8px;\n  width: 100%;\n  overflow: hidden;\n"])), function (_ref) {
  var noPadding = _ref.noPadding;
  return noPadding ? "0" : "32px";
});

exports.Container = Container;