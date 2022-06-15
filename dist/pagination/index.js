"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pages = _interopRequireDefault(require("./pages"));

var _resultAmount = _interopRequireDefault(require("./resultAmount"));

var _footer = _interopRequireDefault(require("./footer"));

var Pagination = _pages.default;
Pagination.ResultAmount = _resultAmount.default;
Pagination.Footer = _footer.default;
var _default = Pagination;
exports.default = _default;