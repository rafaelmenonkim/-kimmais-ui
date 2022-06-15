"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _excluded = ["checked", "controlled", "onChange"];

var CheckBox = function CheckBox(_ref) {
  var checked = _ref.checked,
      controlled = _ref.controlled,
      onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(checked || false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isChecked = _useState2[0],
      setIsChecked = _useState2[1];

  (0, _react.useMemo)(function () {
    onChange && onChange(isChecked); // eslint-disable-next-line
  }, [isChecked]);

  function handleOnChange() {
    setIsChecked(!isChecked);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Box, {
    className: "check-box",
    disabled: props.disabled
  }, /*#__PURE__*/_react.default.createElement("input", Object.assign({
    type: "checkbox",
    checked: controlled ? checked : isChecked,
    onChange: handleOnChange
  }, props)), /*#__PURE__*/_react.default.createElement("div", null)));
};

var _default = CheckBox;
exports.default = _default;