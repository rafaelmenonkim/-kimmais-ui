"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var Progress = function Progress(_ref) {
  var uploadingFile = _ref.uploadingFile,
      onCancel = _ref.onCancel;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "88%",
      position: "relative"
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.FileName, null, uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.name), /*#__PURE__*/_react.default.createElement(_styles.FileSize, null, uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.readeableSize), /*#__PURE__*/_react.default.createElement(_styles.UploadPercentage, null, uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.percentage, "%"), /*#__PURE__*/_react.default.createElement(_styles.ProgressBar, null, /*#__PURE__*/_react.default.createElement(_styles.FilledPercentage, {
    sended: uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.percentage
  }))), /*#__PURE__*/_react.default.createElement(_styles.CloseIcon, {
    name: "error",
    onClick: function onClick(e) {
      e.stopPropagation();
      onCancel && onCancel();
    }
  }));
};

var _default = Progress;
exports.default = _default;