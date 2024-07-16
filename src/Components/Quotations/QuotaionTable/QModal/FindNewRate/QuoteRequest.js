import React, { useState } from "react";
import { Card, Col, Row, Button, Image } from "antd";
import "./FindNewRate.css";
import Stripes from "../../../../../assets/Stripes.png";
import Avatar from "../../../../../assets/Avatar.png";
import RightArrow from "../../../../../assets/rightarrow.svg";
import QuoteRequestModal from "./QuoteRequestModal";
import { LeftOutlined } from "@ant-design/icons";

function QuoteRequest({ setShowReselt, checkedItems }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const closeicon = document.querySelector(".ant-modal-close");
  if (closeicon) {
    closeicon.remove();
  }
  const Footer = document.querySelector(".ant-modal-footer");
  if (Footer) {
    Footer.remove();
  }
  const contentPara = () => {
    if (checkedItems?.StackableCargo === false) {
      return (
        <>
          Apologies for the inconvenience. At present, we are unable to provide
          instant results for non-stackable cargo. Kindly submit a non-instant
          quote request, and our dedicated customer service team will promptly
          review your request, providing you with the applicable non-stackable
          charges as soon as possible.
        </>
      );
    } else if (checkedItems?.NonHarzardousCargo === false) {
      return (
        <>
          Apologies for the inconvenience. At present, we are unable to provide
          instant results for hazardous cargo. Kindly submit a non-instant quote
          request, and our dedicated customer service team will promptly address
          your inquiry, providing you with the applicable charges for hazardous
          cargo as soon as possible.
        </>
      );
    } else {
      return (
        <>
          Apologies for the inconvenience. At present, we are unable to provide
          instant results for this cargo. Kindly submit a non-instant quote
          request, and our dedicated customer service team will promptly review
          your request, providing you with the applicable freight charges as
          soon as possible.
        </>
      );
    }
  };

  const ButtonLabel = () => {
    if (checkedItems?.StackableCargo === false) {
      return <>Add Stackable Cargo charges</>;
    } else if (checkedItems?.NonHarzardousCargo === false) {
      return <>Add Harzardous Cargo charges</>;
    } else {
      return <>Go Back</>;
    }
  };
  return (
    <>
      <Card className="Quote-Card" style={{ padding: "0px" }}>
        <Row style={{ rowGap: "40px", padding: "55px 8px" }}>
          <Col span={24}>
            <img src={Stripes} alt="lines" className="img-stripe" />
            <img src={Avatar} alt="Avatar" className="img-avatar" />
          </Col>
          <Col span={24} className="content" style={{ textAlign: "center" }}>
            <p className="content-title">Non-Instant Quote request</p>
            <p
              className="content-description mb-0"
              style={{
                maxWidth: "571px",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              {contentPara()}
            </p>
            <p className="mb-0" style={{ marginTop: "16px" }}>
              Thank you for considering FSL GO for your shipping needs.
            </p>
          </Col>
          <Col span={24}>
            <div
              className="Requestbtn-div"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="primary"
                className="request-btn"
                onClick={showModal}
                style={{ cursor: "pointer" }}
              >
                Request Non-Instant Quote
              </Button>
            </div>
            <div
              className="div-rowcentered"
              style={{ marginTop: "20px", justifyContent: "center" }}
            >
              <Button
                type="link"
                icon={
                  checkedItems?.NonHarzardousCargo !== false &&
                  checkedItems?.StackableCargo !== false ? (
                    <LeftOutlined
                      style={{
                        width: "12px",
                        height: "12px",
                        marginTop: "10px",
                      }}
                    />
                  ) : (
                    ""
                  )
                }
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "1%",
                  cursor: "pointer",
                }}
              >
                {ButtonLabel()}
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
      {showModal && (
        <QuoteRequestModal
          showModal={isModalOpen}
          onCancel={handleCancel}
          setShowReselt={setShowReselt}
        />
      )}
    </>
  );
}

export default QuoteRequest;
