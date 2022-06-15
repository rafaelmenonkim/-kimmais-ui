"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2;

var VARIANTS = {
  default: (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n    color: #2c2d5c;\n    background: #cfffb9;\n    border: none;\n    border-radius: 16px;\n    padding: 8px;\n    white-space: nowrap;\n    font-size: 1rem;\n    transition: all 0.1s;\n    :hover {\n      filter: opacity(0.8);\n    }\n    > svg {\n      fill: #2c2d5c;\n      stroke: #2c2d5c;\n      min-height: 24px;\n      min-width: 24px;\n      max-height: 24px;\n      max-width: 24px;\n    }\n  "])))
};

var CustomButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 44px;\n  width: 100%;\n  position: relative;\n  cursor: pointer;\n  ", "\n  > svg {\n    margin-right: 8px;\n  }\n"])), function (_ref) {
  var variant = _ref.variant;
  return VARIANTS[variant || "default"];
});

exports.CustomButton = CustomButton;