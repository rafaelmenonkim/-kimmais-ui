"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _components = require("@/components");

var _react = _interopRequireDefault(require("react"));

var _loading = _interopRequireDefault(require("@/assets/loading.gif"));

var _excluded = ["style"];

var Fullscreen = function Fullscreen(_ref) {
  var style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_components.Backdrop, Object.assign({}, props, {
    style: {
      zIndex: "300000"
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: _loading.default,
    alt: "loading...",
    style: style
  }));
};

var _default = Fullscreen;
exports.default = _default;