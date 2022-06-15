"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuboptionTitle = exports.OptionContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var OptionContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n"])));

exports.OptionContainer = OptionContainer;

var SuboptionTitle = _styledComponents.default.p(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 1rem;\n  letter-spacing: 0.26px;\n  font-weight: var(--font-weight-regular);\n  white-space: nowrap;\n  margin-top: 8px;\n  cursor: pointer;\n  :first-child {\n    margin-top: 15px;\n  }\n"])));

exports.SuboptionTitle = SuboptionTitle;