"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _components = require("@/components");

var _progress = _interopRequireDefault(require("../progress"));

var _functionUtils = require("../../../utils/functionUtils");

var _filesize = _interopRequireDefault(require("filesize"));

var _style = require("./style");

var _excluded = ["cancelUpload", "children", "error", "exclude", "formatsLabel", "maxSize", "onDrop", "setError", "uploadingFile"];

var Dropline = function Dropline(_ref) {
  var cancelUpload = _ref.cancelUpload,
      children = _ref.children,
      error = _ref.error,
      exclude = _ref.exclude,
      formatsLabel = _ref.formatsLabel,
      maxSize = _ref.maxSize,
      onDrop = _ref.onDrop,
      setError = _ref.setError,
      uploadingFile = _ref.uploadingFile,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var errorMessages = {
    "file-invalid-type": "Apenas arquivos nos formatos ".concat(formatsLabel, " s\xE3o aceitos."),
    "file-too-large": "Arquivo limitado a ".concat((0, _filesize.default)(maxSize))
  };
  return /*#__PURE__*/_react.default.createElement(_reactDropzone.default, Object.assign({
    maxSize: maxSize,
    onDrop: onDrop,
    onDropRejected: function onDropRejected(e) {
      return setError && setError(errorMessages[e[0].errors[0].code]);
    }
  }, props), function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
    return /*#__PURE__*/_react.default.createElement(_style.DropContainer, Object.assign({
      fileName: uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.name,
      error: error
    }, getRootProps()), !(uploadingFile !== null && uploadingFile !== void 0 && uploadingFile.uploading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex"
      }
    }, /*#__PURE__*/_react.default.createElement(_style.Document, null, /*#__PURE__*/_react.default.createElement(_components.Icon, {
      fileName: uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.name,
      name: "document"
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_style.FileTitle, null, children), uploadingFile !== null && uploadingFile !== void 0 && uploadingFile.name ? /*#__PURE__*/_react.default.createElement(_style.FileName, null, /*#__PURE__*/_react.default.createElement("strong", null, (0, _functionUtils.reduceBigTextLines)(uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.name, 25)), " ", error ? /*#__PURE__*/_react.default.createElement(_style.Error, null, "Houve uma falha no envio") : "adicionado") : /*#__PURE__*/_react.default.createElement(_style.SubText, null, "Formatos suportados: ", formatsLabel))), (uploadingFile === null || uploadingFile === void 0 ? void 0 : uploadingFile.name) && /*#__PURE__*/_react.default.createElement(_components.Icon.ActionIcon, {
      name: "trash",
      hover: "Excluir",
      onClick: function onClick(e) {
        e.stopPropagation();
        exclude && exclude();
      }
    })) : /*#__PURE__*/_react.default.createElement(_progress.default, {
      uploadingFile: uploadingFile,
      onCancel: cancelUpload
    }), /*#__PURE__*/_react.default.createElement("input", getInputProps()));
  });
};

var _default = Dropline;
exports.default = _default;