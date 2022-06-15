"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionTitle = exports.OptionContainer = exports.IconContainer = exports.Container = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var Container = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  & + & {\n    margin-top: 26px;\n  }\n"])));

exports.Container = Container;

var OptionContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"])));

exports.OptionContainer = OptionContainer;

var IconContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-primary-05);\n  min-height: 35px;\n  min-width: 35px;\n  background-color: ", ";\n  border-radius: 50%;\n  margin-right: 10px;\n  > svg {\n    min-height: 20px;\n    min-width: 20px;\n  }\n"])), function (_ref) {
  var iconColor = _ref.iconColor;
  return iconColor ? iconColor : "var(--color-primary-02)";
});

exports.IconContainer = IconContainer;

var OptionTitle = _styledComponents.default.p(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 1.375rem;\n  font-weight: var(--font-weight-semi-bold);\n  white-space: nowrap;\n"])));

exports.OptionTitle = OptionTitle;