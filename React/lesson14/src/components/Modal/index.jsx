import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./style.scss";
const ModalInfo = ({ myProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{myProduct.description}</p>
        <p>{myProduct.title}</p>
        <img src={myProduct.image} alt="" style={{width:'300px'}} />
      </Modal>
    </div>
  );
};

export default ModalInfo;
