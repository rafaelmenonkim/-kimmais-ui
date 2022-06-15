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

var _excluded = ["paginator"];

var Footer = function Footer(_ref) {
  var paginator = _ref.paginator,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(paginator),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      internalPaginator = _useState2[0],
      setInternalPaginator = _useState2[1];

  (0, _react.useEffect)(function () {
    return paginator.page && setInternalPaginator(paginator);
  }, [paginator]);
  var initialItem = internalPaginator.pageSize * (internalPaginator.page - 1) + 1;
  var lastItem = Math.min(internalPaginator.pageSize * internalPaginator.page, internalPaginator.totalItens);
  return /*#__PURE__*/_react.default.createElement(_styles.Text, props, "Exibindo resultados ".concat(internalPaginator.totalItens > 0 ? initialItem : 0, " - ").concat(lastItem, " de ").concat(internalPaginator.totalItens, "."));
};

var _default = Footer;
exports.default = _default;