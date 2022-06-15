"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _excluded = ["setPageSize", "useOnClickOutside"];

var ResultAmount = function ResultAmount(_ref) {
  var setPageSize = _ref.setPageSize,
      useOnClickOutside = _ref.useOnClickOutside,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = (0, _react.useState)([10, 15, 20, 25, 50, 100]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  var clickOut = useOnClickOutside(function () {
    setIsOpened(false);
  });

  function handleOnClick() {
    setIsOpened(!isOpened);
  }

  function handleOnOptionClick(index, amount) {
    options[index] = options[0];
    var orderedOptions = options.slice(1, options.length).sort(function (a, b) {
      return a - b;
    });
    setOptions([amount].concat((0, _toConsumableArray2.default)(orderedOptions)));
    setPageSize && setPageSize(amount);
  }

  return /*#__PURE__*/_react.default.createElement(_styles.Container, Object.assign({
    ref: clickOut
  }, props), /*#__PURE__*/_react.default.createElement(_styles.Text, null, "Exibir"), /*#__PURE__*/_react.default.createElement(_styles.SelectPositionHolder, null, /*#__PURE__*/_react.default.createElement(_styles.SelectAmount, {
    opened: isOpened,
    onClick: handleOnClick
  }, options.map(function (amount, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      onClick: function onClick() {
        handleOnOptionClick(index, amount);
      }
    }, amount);
  })), /*#__PURE__*/_react.default.createElement(_styles.Arrow, {
    name: "arrow-down",
    onClick: handleOnClick
  })), /*#__PURE__*/_react.default.createElement(_styles.Text, null, "resultados"));
};

var _default = ResultAmount;
exports.default = _default;