import Button from "../../button";
import React from "react";
import Modal from "react-responsive-modal";
import { ButtonWrapper, Content } from "../styles";

const OneOption = ({
  open,
  onClose,
  onOptionClick,
  optionText = "Ok",
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose} center>
      <Content>
        {children}
        <ButtonWrapper>
          <Button onClick={onOptionClick}>{optionText}</Button>
        </ButtonWrapper>
      </Content>
    </Modal>
  );
};

export default OneOption;
