import React from "react";
import { Col, Modal, Row, Image } from "antd";
import "./FindNewRate.css";

function QuoteRequestModal({ showModal, onCancel }) {
  return (
    <Modal open={showModal} onCancel={onCancel}>
      <div className="modaldiv-container">
        <Row justify="center" align="middle" style={{ rowGap: "10px" }}>
          <Col span={24}>
            <div className="div-rowcentered">
              <Image />
            </div>
          </Col>
          <Col span={24}></Col>
        </Row>
      </div>
    </Modal>
  );
}

export default QuoteRequestModal;
