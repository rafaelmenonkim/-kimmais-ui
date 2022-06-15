"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _components = require("@/components");

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _excluded = ["children", "loading"];

var Table = function Table(_ref) {
  var children = _ref.children,
      loading = _ref.loading,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_styles.TableContainer, null, loading ? /*#__PURE__*/_react.default.createElement(_components.Spinner.Box, {
    style: {
      height: "441px"
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Spinner, null)) : /*#__PURE__*/_react.default.createElement(_styles.CustomTable, props, children));
};

var _default = Table;
exports.default = _default;