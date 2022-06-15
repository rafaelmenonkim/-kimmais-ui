"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Triangle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var Wrapper = _styledComponents.default.span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-left: 0.5em;\n"])));

exports.Wrapper = Wrapper;

var Triangle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  cursor: pointer;\n  width: 0;\n  border-bottom: 6px solid black;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n\n  + div {\n    margin-top: 3px;\n  }\n\n  ", ";\n"])), function (_ref) {
  var down = _ref.down;
  return down && " transform: scaleY(-1)";
});

exports.Triangle = Triangle;