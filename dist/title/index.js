"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mainTitle = _interopRequireDefault(require("./mainTitle"));

var _subTitle = _interopRequireDefault(require("./subTitle"));

var Title = _mainTitle.default;
Title.SubTitle = _subTitle.default;
var _default = Title;
exports.default = _default;