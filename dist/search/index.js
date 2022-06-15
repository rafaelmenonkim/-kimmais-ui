"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("../icon"));

var _styles = require("./styles");

var _excluded = ["search", "preventEnter", "searchOnBlur"];

var Search = function Search(_ref) {
  var search = _ref.search,
      preventEnter = _ref.preventEnter,
      searchOnBlur = _ref.searchOnBlur,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var ref = (0, _react.useRef)(null);
  return /*#__PURE__*/_react.default.createElement(_styles.SearchContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Field, Object.assign({
    ref: ref
  }, props, {
    onKeyDown: function onKeyDown(e) {
      return !preventEnter && e.code === "Enter" && search(ref.current.value);
    },
    onBlur: function onBlur() {
      return searchOnBlur && search(ref.current.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_icon.default, {
    name: "search",
    onClick: function onClick() {
      return search(ref.current.value);
    }
  }));
};

var _default = Search;
exports.default = _default;