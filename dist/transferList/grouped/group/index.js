"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _functionUtils = require("../../../utils/functionUtils");

var _index = require("../../../index");

var _checkbox = _interopRequireDefault(require("../../../input/checkbox"));

var _styles = require("./styles");

var Group = function Group(_ref) {
  var allGroup = _ref.allGroup,
      checked = _ref.checked,
      checkboxClick = _ref.checkboxClick,
      displayName = _ref.displayName,
      filter = _ref.filter,
      checkIfGroupIsChecked = _ref.checkIfGroupIsChecked,
      group = _ref.group,
      groupName = _ref.groupName,
      disabled = _ref.disabled,
      isVisible = _ref.isVisible,
      setIsVisible = _ref.setIsVisible;
  var generatedGroupRows = generateRows(group);

  function generateRows(list) {
    var filteredItems = list.filter(function (item) {
      return item[displayName].toLowerCase().includes((filter === null || filter === void 0 ? void 0 : filter.toLowerCase()) || "");
    });
    return filteredItems.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement(_styles.CustomRow, {
        key: index,
        disabled: disabled
      }, /*#__PURE__*/_react.default.createElement(_index.Table.Td, null, /*#__PURE__*/_react.default.createElement(_index.Input.CheckBox, {
        controlled: true,
        checked: checked && checked.includes(item.id),
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return checkboxClick(item.id);
        },
        disabled: disabled
      }), /*#__PURE__*/_react.default.createElement("span", null, (0, _functionUtils.reduceBigTextLines)(item[displayName], 25))));
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, generatedGroupRows.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CustomRow, {
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(_index.Table.Td, null, /*#__PURE__*/_react.default.createElement(_styles.GroupRow, null, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    onClick: function onClick() {
      return allGroup(groupName);
    },
    checked: !checkIfGroupIsChecked(groupName),
    controlled: true,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement(_styles.GroupName, {
    checked: true,
    visible: isVisible
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, {
    onClick: function onClick() {
      return setIsVisible(groupName);
    }
  }, "".concat(groupName, " (").concat(generatedGroupRows.length, ")"), /*#__PURE__*/_react.default.createElement(_index.Icon, {
    name: "triangle"
  })))))), /*#__PURE__*/_react.default.createElement(_styles.GroupContentTr, {
    visible: isVisible
  }, /*#__PURE__*/_react.default.createElement(_index.Table.Td, {
    colSpan: 2
  }, /*#__PURE__*/_react.default.createElement(_index.Table, null, /*#__PURE__*/_react.default.createElement("tbody", null, generatedGroupRows))))));
};

var _default = Group;
exports.default = _default;