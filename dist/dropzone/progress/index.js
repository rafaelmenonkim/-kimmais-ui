"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var Progress = function Progress(_ref) {
  var uploadingFile = _ref.uploadingFile,
      onCancel = _ref.onCancel;
  return /*#__PURE__*/_react.default.createElement(_style.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "88%",
      position: "relative"
    }
  }, /*#__PURE__*/_react.default.createElement(_style.FileName, null, uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.name), /*#__PURE__*/_react.default.createElement(_style.FileSize, null, uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.readeableSize), /*#__PURE__*/_react.default.createElement(_style.UploadPercentage, null, uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.percentage, "%"), /*#__PURE__*/_react.default.createElement(_style.ProgressBar, null, /*#__PURE__*/_react.default.createElement(_style.FilledPercentage, {
    sended: uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.percentage
  }))), /*#__PURE__*/_react.default.createElement(_style.CloseIcon, {
    name: "error",
    onClick: function onClick(e) {
      e.stopPropagation();
      onCancel && onCancel();
    }
  }));
};

var _default = Progress;
exports.default = _default;