"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownList = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _constants = require("../../utils/constants");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

var DropdownList = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  min-height: 30px;\n  position: absolute;\n  top: calc(100% + 8px);\n  background-color: var(--color-primary-05);\n  border-radius: 8px;\n  box-shadow: 0px 2px 5px #00000029;\n  overflow: hidden;\n  z-index: 30;\n  transition: opacity 0.2s, width 0.3s;\n  padding: 32px;\n\n  ", "\n\n  ", "\n\n  @media (max-width: ", ") {\n    right: 50%;\n    transform: translateX(50%);\n  }\n"])), function (_ref) {
  var open = _ref.open;
  return !open && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      max-height: 0;\n      min-height: 0;\n      width: 0;\n      max-width: 0;\n      opacity: 0;\n      padding: 0;\n    "])));
}, function (_ref2) {
  var position = _ref2.position;
  return position && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n      top: ", "px;\n      right: ", "px;\n    "])), position.top + position.fieldSizeY, position.right);
}, _constants.BREAK_POINTS.sm);

exports.DropdownList = DropdownList;