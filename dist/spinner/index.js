"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _spinner = _interopRequireDefault(require("./spinner"));

var _box = _interopRequireDefault(require("./box"));

var _fullscreen = _interopRequireDefault(require("./fullscreen"));

var Spinner = _spinner.default;
Spinner.Box = _box.default;
Spinner.Fullscreen = _fullscreen.default;
var _default = Spinner;
exports.default = _default;