"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _lodash = _interopRequireDefault(require("lodash"));

var _2 = _interopRequireDefault(require(".."));

var _useOnClickOutside = _interopRequireDefault(require("@/hooks/useOnClickOutside"));

var _spinner = _interopRequireDefault(require("@/components/spinner"));

var _ri = require("react-icons/ri");

var _styles = require("./styles");

var MultiSelect = function MultiSelect(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "Selecione" : _ref$placeholder,
      _ref$multiSelectionLa = _ref.multiSelectionLabel,
      multiSelectionLabel = _ref$multiSelectionLa === void 0 ? "itens selecionados" : _ref$multiSelectionLa,
      _ref$noOptionLabel = _ref.noOptionLabel,
      noOptionLabel = _ref$noOptionLabel === void 0 ? "Sem opções" : _ref$noOptionLabel,
      _ref$getOptionValue = _ref.getOptionValue,
      getOptionValue = _ref$getOptionValue === void 0 ? function (option) {
    return option.value;
  } : _ref$getOptionValue,
      _ref$getOptionLabel = _ref.getOptionLabel,
      getOptionLabel = _ref$getOptionLabel === void 0 ? function (option) {
    return option.label;
  } : _ref$getOptionLabel,
      _ref$isClearable = _ref.isClearable,
      isClearable = _ref$isClearable === void 0 ? true : _ref$isClearable,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {
    return null;
  } : _ref$onChange,
      _ref$onInputChange = _ref.onInputChange,
      onInputChange = _ref$onInputChange === void 0 ? function () {
    return null;
  } : _ref$onInputChange,
      inputRef = _ref.inputRef;
  var positionRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isListOpen = _useState2[0],
      setIsListOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      selecteds = _useState6[0],
      setSelecteds = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      filter = _useState8[0],
      setFilter = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      isFocused = _useState10[0],
      setIsFocused = _useState10[1];

  var clickOutside = (0, _useOnClickOutside.default)(function (e) {
    if (!positionRef.current.contains(e.target)) {
      setIsListOpen(false);
      setFilter("");
    }

    setIsFocused(false);
  });
  (0, _react.useEffect)(function () {
    return !isDisabled && onChange(selecteds);
  }, [onChange, selecteds, isDisabled]);
  (0, _react.useEffect)(function () {
    return !isDisabled && onInputChange(filter);
  }, [onInputChange, filter, isDisabled]);
  var canClear = isClearable && selecteds.length > 0;

  var isSelected = function isSelected(option) {
    return selecteds.findIndex(function (selected) {
      return getOptionValue(option) === getOptionValue(selected);
    }) >= 0;
  };

  var handleOptionClick = function handleOptionClick(option) {
    setSelecteds(function (state) {
      var newState = (0, _toConsumableArray2.default)(state);
      var optionIndex = newState.findIndex(function (selected) {
        return getOptionValue(option) === getOptionValue(selected);
      });

      if (optionIndex >= 0) {
        newState.splice(optionIndex, 1);
        return newState;
      } else {
        newState.push(option);
        return newState;
      }
    });
  };

  var defineLabel = function defineLabel() {
    if (selecteds.length === 0) {
      return placeholder;
    } else if (selecteds.length === 1) {
      return getOptionLabel(selecteds[0]);
    } else {
      return "".concat(selecteds.length, " ").concat(multiSelectionLabel);
    }
  };

  var getSelectedsOutOptions = function getSelectedsOutOptions() {
    return selecteds.filter(function (selected) {
      return !options.some(function (option) {
        return getOptionValue(option) === getOptionValue(selected);
      });
    }) || [];
  };

  var generateRenderArray = function generateRenderArray() {
    var optionsToRender = [];

    if (filter !== "") {
      var filteredOptions = options.filter(function (option) {
        var label = String(getOptionLabel(option)).toLowerCase();
        var value = String(getOptionValue(option)).toLowerCase();
        if (label.includes(filter) || value.includes(filter)) return true;
        return false;
      });
      optionsToRender = [].concat((0, _toConsumableArray2.default)(optionsToRender), (0, _toConsumableArray2.default)(filteredOptions));
    } else {
      var out = getSelectedsOutOptions();
      optionsToRender = [].concat((0, _toConsumableArray2.default)(optionsToRender), (0, _toConsumableArray2.default)(options), (0, _toConsumableArray2.default)(out));
    }

    return optionsToRender;
  };

  var renderItensList = function renderItensList() {
    if (isLoading) return;
    var optionsToRender = generateRenderArray();
    return optionsToRender.length > 0 ? optionsToRender.map(function (option) {
      return /*#__PURE__*/_react.default.createElement(_styles.FloatingListItem, {
        onClick: function onClick() {
          return handleOptionClick(option);
        },
        key: _lodash.default.uniqueId()
      }, /*#__PURE__*/_react.default.createElement(_2.default.CheckBox, {
        controlled: true,
        checked: isSelected(option),
        onClick: null
      }), /*#__PURE__*/_react.default.createElement(_styles.FloatingListItemLabel, null, getOptionLabel(option)));
    }) : /*#__PURE__*/_react.default.createElement(_styles.FloatingListItem, null, /*#__PURE__*/_react.default.createElement(_styles.FloatingListItemLabel, null, noOptionLabel));
  };

  var handleOnClearClick = function handleOnClearClick(e) {
    e.stopPropagation();
    setIsListOpen(false);
    setFilter("");
    setSelecteds([]);
  };

  var handleButtonClick = function handleButtonClick(e) {
    setIsFocused(true);
    !clickOutside.current.contains(e.target) && setIsListOpen(function (state) {
      return !state;
    });
    var distances = positionRef.current.getBoundingClientRect();
    setPosition({
      top: distances.top + document.querySelector("html").scrollTop + positionRef.current.offsetHeight + 8,
      right: distances.right,
      left: distances.left,
      fieldSizeX: positionRef.current.offsetWidth
    });
  };

  return /*#__PURE__*/_react.default.createElement(_styles.SelectContainer, {
    ref: positionRef,
    onClick: handleButtonClick,
    disabled: isDisabled
  }, /*#__PURE__*/_react.default.createElement(_styles.SelectedInput, {
    placeholder: defineLabel(),
    ref: inputRef,
    onChange: function onChange(e) {
      setFilter(e.target.value);
    },
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    value: filter,
    disabled: isDisabled
  }), /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_styles.FloatingList, {
    ref: clickOutside,
    visible: isListOpen,
    position: position
  }, /*#__PURE__*/_react.default.createElement(_styles.FloatingListContent, null, renderItensList())), document.querySelector("#root")), canClear && !isLoading && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    isfocused: isFocused
  }, /*#__PURE__*/_react.default.createElement(_ri.RiCloseFill, {
    onClick: handleOnClearClick
  })), isLoading && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    isfocused: isFocused
  }, /*#__PURE__*/_react.default.createElement(_spinner.default, {
    variant: "sm"
  })), /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    isfocused: isFocused
  }, /*#__PURE__*/_react.default.createElement(_ri.RiArrowDownSLine, null)));
};

var _default = MultiSelect;
exports.default = _default;