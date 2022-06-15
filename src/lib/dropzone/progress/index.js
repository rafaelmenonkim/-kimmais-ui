import React from "react";
import {
  CloseIcon,
  Container,
  FileName,
  FileSize,
  FilledPercentage,
  ProgressBar,
  UploadPercentage,
} from "./styles";

const Progress = ({ uploadingFile, onCancel }) => {
  return (
    <Container>
      <div style={{ width: "88%", position: "relative" }}>
        <FileName>{uploadingFile?.name}</FileName>
        <FileSize>{uploadingFile?.readeableSize}</FileSize>
        <UploadPercentage>{uploadingFile?.percentage}%</UploadPercentage>
        <ProgressBar>
          <FilledPercentage sended={uploadingFile?.percentage} />
        </ProgressBar>
      </div>
      <CloseIcon
        name="error"
        onClick={(e) => {
          e.stopPropagation();
          onCancel && onCancel();
        }}
      />
    </Container>
  );
};

export default Progress;
