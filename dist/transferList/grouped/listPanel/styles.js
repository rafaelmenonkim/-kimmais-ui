"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitlePanel = exports.IconArrows = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _icon = _interopRequireDefault(require("../../../icon"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var TitlePanel = _styledComponents.default.p(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  color: var(--color-primary-04);\n  font-weight: 600;\n  font-size: 16px;\n"])));

exports.TitlePanel = TitlePanel;
var IconArrows = (0, _styledComponents.default)(_icon.default)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  width: 70px;\n  background-color: var(--color-primary-05);\n  stroke: var(--color-primary-01);\n  height: 60px;\n  cursor: pointer;\n  margin: 32px;\n\n  :active {\n    transform: scale(0.9);\n  }\n\n  :last-of-type {\n    transform: scaleX(-1);\n    :active {\n      transform: scale(0.9) scaleX(-1);\n    }\n  }\n"])));
exports.IconArrows = IconArrows;