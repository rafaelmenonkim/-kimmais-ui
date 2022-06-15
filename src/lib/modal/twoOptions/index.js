import Button from "../../button";
import React from "react";
import Modal from "react-responsive-modal";
import { ButtonsWrapper, Content } from "../styles";

const TwoOptions = ({
  open,
  onClose,
  onLeftClick,
  leftText = "Não",
  onRightClick,
  rightText = "Sim",
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose} center>
      <Content>
        {children}
        <ButtonsWrapper>
          <Button variant="outlined" onClick={onLeftClick}>
            {leftText}
          </Button>
          <Button onClick={onRightClick}>{rightText}</Button>
        </ButtonsWrapper>
      </Content>
    </Modal>
  );
};

export default TwoOptions;
