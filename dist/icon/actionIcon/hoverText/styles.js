"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Triangle = exports.FloatingBox = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

var FloatingBox = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background-color: var(--color-primary-05);\n  border-radius: 4px;\n  box-shadow: 0 0.125rem 0.3125rem var(--color-secundary-04);\n  color: var(--color-primary-02);\n  text-align: center;\n  min-height: 26px;\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 8px;\n  display: none;\n  text-transform: capitalize;\n  white-space: nowrap;\n  z-index: 15;\n  ", ";\n"])), function (_ref) {
  var activePosition = _ref.activePosition;
  return activePosition && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      bottom: ", ";\n      left: ", ";\n      width: auto;\n    "])), function (_ref2) {
    var bottom = _ref2.bottom;
    return bottom + "px";
  }, function (_ref3) {
    var left = _ref3.left;
    return left + "px";
  });
});

exports.FloatingBox = FloatingBox;

var Triangle = _styledComponents.default.ul(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid var(--color-primary-05);\n  position: absolute;\n  left: 50%;\n  top: 99%;\n  transform: translateX(-50%);\n"])));

exports.Triangle = Triangle;