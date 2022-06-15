"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _excluded = ["isClearable", "multiple", "options", "variant"];
var styles = {
  default: {
    menuPortal: function menuPortal(provided) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, provided), {}, {
        zIndex: 1000
      });
    }
  },
  borderless: {
    menuPortal: function menuPortal(provided) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, provided), {}, {
        zIndex: 1000
      });
    },
    control: function control(provided) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, provided), {}, {
        border: "none !important",
        background: "none"
      });
    },
    singleValue: function singleValue(provided) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, provided), {}, {
        color: "var(--color-primary-04) !important"
      });
    },
    placeholder: function placeholder(provided) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, provided), {}, {
        color: "var(--color-primary-04)"
      });
    },
    dropdownIndicator: function dropdownIndicator(provided) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, provided), {}, {
        color: "var(--color-primary-04)"
      });
    }
  }
};

var Select = function Select(_ref) {
  var _variant;

  var _ref$isClearable = _ref.isClearable,
      isClearable = _ref$isClearable === void 0 ? true : _ref$isClearable,
      multiple = _ref.multiple,
      options = _ref.options,
      variant = _ref.variant,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  variant = (_variant = variant) !== null && _variant !== void 0 ? _variant : "default";
  return /*#__PURE__*/_react.default.createElement(_styles.ReactSelect, Object.assign({
    menuPortalTarget: document.body,
    classNamePrefix: "Select",
    options: options,
    styles: styles[variant],
    menuShouldBlockScroll: true,
    isClearable: isClearable
  }, props));
};

var _default = Select;
exports.default = _default;