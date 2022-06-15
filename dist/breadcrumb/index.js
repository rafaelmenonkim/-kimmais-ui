"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _styles = require("./styles");

var Breadcrumb = function Breadcrumb(_ref) {
  var location = _ref.location,
      props = _ref.props,
      history = _ref.history,
      routesAlias = _ref.routesAlias;
  var pathname = location.pathname;
  var pathnames = pathname.split("/").filter(function (x) {
    return x;
  });

  function generateCrumbs(pathnames) {
    return pathnames.map(function (name, index) {
      var routeTo = "/".concat(pathnames.slice(0, index + 1).join("/"));
      var isLast = index === pathnames.length - 1;
      return /*#__PURE__*/_react.default.createElement(_styles.Crumb, {
        key: index + "_link",
        isLast: isLast,
        onClick: function onClick() {
          !isLast && history.push(routeTo);
        }
      }, routesAlias[routeTo] ? routesAlias[routeTo] : name.charAt(0).toUpperCase() + name.slice(1));
    });
  }

  return /*#__PURE__*/_react.default.createElement(_styles.CrumbsContainer, props, /*#__PURE__*/_react.default.createElement(_styles.Crumb, {
    onClick: function onClick() {
      history.push("/");
    }
  }, "In\xEDcio"), generateCrumbs(pathnames));
};

var _default = (0, _reactRouter.withRouter)(Breadcrumb);

exports.default = _default;