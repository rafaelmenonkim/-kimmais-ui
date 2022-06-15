"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../../../index");

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var ListPanel = function ListPanel(_ref) {
  var children = _ref.children,
      filter = _ref.filter,
      setFilter = _ref.setFilter,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement(_index.Panel, {
    style: {
      padding: "32px",
      height: "630px",
      maxWidth: "40%"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflow: "hidden",
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.TitlePanel, null, title), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: "15px",
      width: "70%"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.Search, {
    placeholder: "Buscar na lista abaixo",
    value: filter,
    onChange: function onChange(e) {
      return setFilter(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_index.Spacing, {
    top: "32px"
  }), children));
};

var _default = ListPanel;
exports.default = _default;