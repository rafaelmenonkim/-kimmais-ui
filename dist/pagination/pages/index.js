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

var _excluded = ["maxVisiblePageSelectors", "paginator", "setPage"];

var Pages = function Pages(_ref) {
  var maxVisiblePageSelectors = _ref.maxVisiblePageSelectors,
      paginator = _ref.paginator,
      setPage = _ref.setPage,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(paginator),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      internalPaginator = _useState2[0],
      setInternalPaginator = _useState2[1];

  (0, _react.useEffect)(function () {
    return paginator.page && setInternalPaginator(paginator);
  }, [paginator]);
  maxVisiblePageSelectors = maxVisiblePageSelectors || 7;
  var isArrowVisible = maxVisiblePageSelectors < internalPaginator.totalPages;
  var pageIndexSequence = Math.ceil(internalPaginator.page / maxVisiblePageSelectors) - 1;
  var firstPageIndex = pageIndexSequence * maxVisiblePageSelectors + 1;
  var selectorPosition = internalPaginator.page - pageIndexSequence * maxVisiblePageSelectors;

  function generatePagesIndex() {
    return Array.from({
      length: maxVisiblePageSelectors
    }).map(function (_, index) {
      return index + firstPageIndex;
    }).map(function (pageIndex) {
      return internalPaginator.totalPages >= pageIndex ? /*#__PURE__*/_react.default.createElement(_styles.PageIndex, {
        key: pageIndex,
        onClick: function onClick() {
          setPage(pageIndex);
        }
      }, pageIndex) : null;
    });
  }

  function previousGroup() {
    var wantedPage = internalPaginator.page - 1;
    wantedPage = Math.max(wantedPage, 1);
    setPage(wantedPage);
  }

  function nextGroup() {
    var wantedPage = internalPaginator.page + 1;
    wantedPage = wantedPage > internalPaginator.totalPages ? internalPaginator.totalPages : wantedPage;
    setPage(wantedPage);
  }

  return /*#__PURE__*/_react.default.createElement(_styles.PagesList, props, isArrowVisible && /*#__PURE__*/_react.default.createElement(_styles.Arrow, {
    name: "arrow-down",
    onClick: previousGroup,
    disabled: internalPaginator.page === 1
  }), /*#__PURE__*/_react.default.createElement(_styles.PagesContainer, null, generatePagesIndex(), /*#__PURE__*/_react.default.createElement(_styles.Selector, {
    currentPage: internalPaginator.page,
    position: selectorPosition
  })), isArrowVisible && /*#__PURE__*/_react.default.createElement(_styles.Arrow, {
    name: "arrow-down",
    direction: "left",
    onClick: nextGroup,
    disabled: internalPaginator.page === internalPaginator.totalPages
  }));
};

var _default = Pages;
exports.default = _default;