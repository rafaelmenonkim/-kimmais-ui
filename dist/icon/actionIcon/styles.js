"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Icon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _icon = _interopRequireDefault(require("../icon"));

var _templateObject, _templateObject2, _templateObject3;

var Wrapper = _styledComponents.default.span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  :hover > div {\n    display: inline-block !important;\n  }\n\n  ", "\n"])), function (_ref) {
  var activePosition = _ref.activePosition;
  return !activePosition && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      position: relative;\n    "])));
});

exports.Wrapper = Wrapper;
var Icon = (0, _styledComponents.default)(_icon.default)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  stroke: var(--color-primary-04);\n  stroke-width: 2;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n\n  :hover {\n    stroke: var(--color-primary-01);\n  }\n"])));
exports.Icon = Icon;