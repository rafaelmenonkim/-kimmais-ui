"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownList = exports.CustomButton = exports.ButtonTitle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

var VARIANTS = {
  default: (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n    color: #2c3361;\n    background: none;\n    border: none;\n    border-radius: 16px;\n    padding: 8px;\n    white-space: nowrap;\n    font-size: 1rem;\n    transition: all 0.1s;\n    box-shadow: inset 0 0 0 1px #cffdb9;\n    position: relative;\n    :hover {\n      background-color: #cffdb9;\n      color: #2c3361;\n      > svg {\n        fill: #2c3361;\n        stroke: #2c3361;\n      }\n    }\n    > svg {\n      fill: #2c3361;\n      stroke: #2c3361;\n      min-height: 24px;\n      min-width: 24px;\n      max-height: 24px;\n      max-width: 24px;\n    }\n  "]))),
  solid: (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n    color: #2c3361;\n    background-color: #cffdb9;\n    border: none;\n    border-radius: 16px;\n    padding: 8px;\n    white-space: nowrap;\n    font-size: 1rem;\n    transition: all 0.1s;\n    box-shadow: inset 0 0 0 1px #cffdb9;\n    position: relative;\n    :hover {\n      background: none;\n      color: #2c3361;\n      > svg {\n        fill: #2c3361;\n        stroke: #2c3361;\n      }\n    }\n    > svg {\n      fill: #2c3361;\n      stroke: #2c3361;\n      min-height: 24px;\n      min-width: 24px;\n      max-height: 24px;\n      max-width: 24px;\n    }\n  "])))
};

var CustomButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 44px;\n  width: 100%;\n  position: relative;\n  cursor: pointer;\n  ", "\n  &:disabled {\n    background-color: #cffdb9;\n    filter: grayscale(100%);\n    cursor: not-allowed;\n  }\n"])), function (_ref) {
  var variant = _ref.variant;
  return VARIANTS[variant || "default"];
});

exports.CustomButton = CustomButton;

var ButtonTitle = _styledComponents.default.span(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  margin: 0 8px;\n"])));

exports.ButtonTitle = ButtonTitle;

var DropdownList = _styledComponents.default.div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  min-height: 30px;\n  width: 200px;\n  position: absolute;\n  top: calc(100% + 8px);\n  background-color: var(--color-primary-05);\n  border-radius: 8px;\n  box-shadow: 0px 2px 5px #00000029;\n  overflow: hidden;\n  z-index: 30;\n  transition: opacity 0.2s, width 0.3s;\n\n  ", "\n\n  ", "\n"])), function (_ref2) {
  var open = _ref2.open;
  return !open && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n      max-height: 0;\n      min-height: 0;\n      width: 0;\n      opacity: 0;\n    "])));
}, function (_ref3) {
  var position = _ref3.position;
  return position && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n      top: ", "px;\n      left: ", "px;\n      width: ", "px;\n    "])), position.top + position.fieldSizeY + 8, position.left, position.fieldSizeX);
});

exports.DropdownList = DropdownList;