"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _standard = _interopRequireDefault(require("./standard"));

var _oneOption = _interopRequireDefault(require("./oneOption"));

var _twoOptions = _interopRequireDefault(require("./twoOptions"));

var Modal = _standard.default;
Modal.OneOption = _oneOption.default;
Modal.TwoOptions = _twoOptions.default;
var _default = Modal;
exports.default = _default;