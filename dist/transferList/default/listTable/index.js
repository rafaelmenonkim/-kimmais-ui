"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../../index");

var _styles = require("./styles");

var _functionUtils = require("../../../../utils/functionUtils");

var ListTable = function ListTable(_ref) {
  var allClick = _ref.allClick,
      checkedItems = _ref.checkedItems,
      checkboxClick = _ref.checkboxClick,
      displayName = _ref.displayName,
      filter = _ref.filter,
      isAllChecked = _ref.isAllChecked,
      list = _ref.list,
      loading = _ref.loading;

  function generateRows(list) {
    var filteredItems = list.filter(function (item) {
      var _item$displayName;

      return (_item$displayName = item[displayName]) === null || _item$displayName === void 0 ? void 0 : _item$displayName.toLowerCase().includes((filter === null || filter === void 0 ? void 0 : filter.toLowerCase()) || "");
    });
    return filteredItems.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement(_index.Table.Tr, {
        key: index,
        style: {
          cursor: "pointer"
        }
      }, /*#__PURE__*/_react.default.createElement(_index.Table.Td, null, (0, _functionUtils.reduceBigTextLines)(item[displayName], 25)), /*#__PURE__*/_react.default.createElement(_index.Table.Td, {
        style: {
          textAlign: "right"
        }
      }, /*#__PURE__*/_react.default.createElement(_index.Input.CheckBox, {
        controlled: true,
        checked: checkedItems && checkedItems.includes(item.id),
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return checkboxClick(item.id);
        }
      })));
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.Table, {
    loading: loading
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement(_index.Table.Tr, null, /*#__PURE__*/_react.default.createElement(_index.Table.Th, {
    colSpan: 2
  }, /*#__PURE__*/_react.default.createElement(_styles.Header, null, "Total: ", list.length, /*#__PURE__*/_react.default.createElement("span", null, "Selecionar Todos", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginLeft: "8px"
    }
  }), /*#__PURE__*/_react.default.createElement(_index.Input.CheckBox, {
    controlled: true,
    checked: isAllChecked,
    onClick: allClick
  })))))), /*#__PURE__*/_react.default.createElement("tbody", null, list && generateRows(list))));
};

var _default = ListTable;
exports.default = _default;