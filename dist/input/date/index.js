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

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styles = require("./styles");

var _useOnClickOutside = _interopRequireDefault(require("@/hooks/useOnClickOutside"));

var _functionUtils = require("../../utils/functionUtils");

require("./calendar.css");

var _excluded = ["value", "onChange", "required", "minDate", "maxDate", "ref", "placeholder"];
var LOCALE = "pt-br";

var InputDate = function InputDate(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      required = _ref.required,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      ref = _ref.ref,
      placeholder = _ref.placeholder,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isCalendarVisible = _useState2[0],
      setIsCalendarVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var calendarRef = (0, _react.useRef)();
  var clickOut = (0, _useOnClickOutside.default)(function (e) {
    !calendarRef.current.contains(e.target) && setIsCalendarVisible(false);
  });
  value = typeof value === "string" ? new Date(value) : value;

  function handleOnCalendarChange(date) {
    onChange(date);
    setIsCalendarVisible(false);
  }

  function handleOnFieldChange(e) {
    var input = e.target.value;

    if (input[0] === " " || !input) {
      onChange("");
      return;
    }

    if (input.slice(-1) === " " || !input) return;
    var slicedDate = input.match(/[^/]*[0-9]/gi);
    var dateString = "".concat(slicedDate[1], "/").concat(slicedDate[0], "/").concat(slicedDate[2]);
    var newDate = new Date(dateString);
    onChange(newDate);
  }

  function handleOnIconClick(e) {
    setIsCalendarVisible(!isCalendarVisible);
    var distances = e.target.parentElement.getBoundingClientRect();
    setPosition({
      top: distances.top + document.querySelector("html").scrollTop,
      right: distances.right,
      left: distances.left,
      fieldSize: e.target.parentElement.clientWidth
    });
  }

  function handleOnBlur(e) {
    var input = e.target.value;

    if (input.slice(-1) === " " || !(0, _functionUtils.isValidDate)(value)) {
      e.target.value = null;
      onChange("");
    }
  }

  return /*#__PURE__*/_react.default.createElement(_styles.DateContainer, {
    ref: clickOut
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, Object.assign({
    format: "##/##/####",
    value: value ? value.toLocaleDateString(LOCALE) : null,
    onChange: handleOnFieldChange,
    onBlur: handleOnBlur,
    required: required,
    placeholder: placeholder,
    ref: ref
  }, props)), /*#__PURE__*/_react.default.createElement(_styles.CalendarIcon, {
    name: "calendar",
    onClick: handleOnIconClick
  }), /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    ref: calendarRef
  }, /*#__PURE__*/_react.default.createElement(_styles.Calendar, {
    onChange: handleOnCalendarChange,
    value: (0, _functionUtils.isValidDate)(value) ? value : null,
    visible: isCalendarVisible,
    weekStartDay: 0,
    returnValue: "start",
    calendarType: "US",
    minDetail: "decade",
    navigationLabel: function navigationLabel(_ref2) {
      var label = _ref2.label,
          view = _ref2.view;
      return "".concat(view === "month" ? label.match(/[^ ]*/) : label);
    },
    maxDate: maxDate,
    minDate: minDate,
    position: position
  })), document.querySelector("#root")));
};

var _default = InputDate;
exports.default = _default;