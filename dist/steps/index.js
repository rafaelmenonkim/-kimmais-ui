"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _icon = _interopRequireDefault(require("../icon"));

var _styles = require("./styles");

var _excluded = ["currentStep", "steps"];
var STATUS = {
  NOT_STARTED: "notstarted",
  ONGOING: "ongoing",
  DONE: "done"
};

var Steps = function Steps(_ref) {
  var currentStep = _ref.currentStep,
      steps = _ref.steps,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  currentStep -= 1;
  return /*#__PURE__*/_react.default.createElement(_styles.StepsContainer, {
    style: {
      flexDirection: "row",
      display: "flex"
    }
  }, steps.map(function (step, index) {
    var status = index === currentStep ? STATUS.ONGOING : index < currentStep ? STATUS.DONE : STATUS.NOT_STARTED;
    return /*#__PURE__*/_react.default.createElement(_styles.Step, Object.assign({
      status: status,
      navigable: step.navigable,
      key: index,
      onClick: step.navigable ? function () {
        return step.handleNavigation();
      } : null
    }, props), currentStep > index ? /*#__PURE__*/_react.default.createElement(_icon.default, {
      name: "ok"
    }) : index + 1, /*#__PURE__*/_react.default.createElement("label", null, step.name));
  }), /*#__PURE__*/_react.default.createElement(_styles.DashedLine, null));
};

var _default = Steps;
exports.default = _default;