import React from "react";
import Modal from "react-responsive-modal";
import { Content } from "../styles";

const ModalV2 = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose} center>
      <Content>{children}</Content>
    </Modal>
  );
};

export default ModalV2;
