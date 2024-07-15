// import React from "react";
// import { Card, Col, Row, Input } from "antd";
// import "./FindNewRate.css";
// import Stripes from "../../../../../assets/Stripes.png";
// import Avatar from "../../../../../assets/Avatar.png";
// import RightArrow from "../../../../../assets/rightarrow.png";
// import Email from "../../../../../assets/Email.png";
// import info from "../../../../../assets/Info.svg";
// import SubmitArr from "../../../../../assets/monochrome.png";

// function QuoteRequest() {
//   return (
//     <>
//       <Card className="Quote-Card">
//         <Row>
//           <Col span={24}>
//             <img src={Stripes} alt="lines" className="img-stripe" />
//             <img src={Avatar} alt="Avatar" className="img-avatar" />
//           </Col>
//           <Col span={24}>
//             <div className="content">
//               <p className="content-title">Non-Instant Quote request</p>
//               <p className="content-description">
//                 Sorry for the inconvenience . Currently We couldn't find any
//                 instant results for this Non-Stackable Cargo. You can continue
//                 to book and our operations team will get in touch with you
//                 additional charges
//               </p>
//             </div>
//           </Col>
//           <Col span={24} className="mt-4">
//             {/* <div className="request-btn">Request Non-Instant Quote</div> */}
//             <div className="form">
//               <p
//                 style={{
//                   margin: "0",
//                   fontSize: "14px",
//                   fontWeight: "500",
//                   lineHeight: "24px",
//                   letterSpacing: "1%",
//                   color: "#67788E",
//                 }}
//               >
//                 Email
//               </p>
//               <Input
//                 size="large"
//                 placeholder="johnedoe@gmail.com"
//                 className="mb-3"
//                 prefix={<img src={Email} alt="email" />}
//                 suffix={
//                   <p
//                     style={{
//                       fontWeight: "400",
//                       fontSize: "13px",
//                       lineHeight: "19px",
//                       letterSpacing: "1%",
//                       margin: "0px",
//                       color: "#2C83EC",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Verify
//                   </p>
//                 }
//               />
//               <p
//                 style={{
//                   margin: "0",
//                   fontSize: "13px",
//                   fontWeight: "500",
//                   lineHeight: "19px",
//                   letterSpacing: "1%",
//                   color: "#181E25",
//                 }}
//               >
//                 MSMD Document
//                 <img src={info} alt="more" className="ms-1" />
//               </p>
//               <Input
//                 size="large"
//                 placeholder="You can drag & drop here"
//                 className="mt-1"
//                 addonAfter="Upload"
//               />
//               <div className="submit-btn">
//                 Submit
//                 <img src={SubmitArr} alt="arr" className="ms-2" />
//               </div>
//             </div>
//             <div className="go-back">
//               <div>
//                 <img
//                   src={RightArrow}
//                   alt="arrow"
//                   className="me-1"
//                   style={{ width: "18px", height: "18px", cursor: "pointer" }}
//                 />
//               </div>
//               <div>
//                 <span
//                   style={{
//                     fontSize: "14px",
//                     fontWeight: "400",
//                     lineHeight: "24px",
//                     letterSpacing: "1%",
//                     color: "#000000",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Go Back
//                 </span>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Card>
//     </>
//   );
// }

// export default QuoteRequest;

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
      return (
        <>
          <span
            style={{
              width: "18px",
              height: "18px",
            }}
          ></span>
          Go Back
        </>
      );
    }
  };
  const image =
    checkedItems?.NonHarzardousCargo !== false &&
    checkedItems?.StackableCargo !== false ? (
      <Image
        src={RightArrow}
        alt="arrow"
        className="me-3"
        preview={false}
        style={{
          cursor: "pointer",
          color: "#69b1ff",
        }}
      />
    ) : (
      ""
    );
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
                    <LeftOutlined style={{ width: "13px", height: "13px",marginTop:"8px" }} />
                  ) : (
                    ""
                  )
                }
              >
                {ButtonLabel()}
              </Button>
              {/* <div className="go-back">
                  <div>
                    <img
                      src={RightArrow}
                      alt="arrow"
                      className="me-1"
                      style={{
                        width: "18px",
                        height: "18px",
                        cursor: "pointer",
                        color: "#03b2cb",
                      }}
                    />
                  </div>

                  <div onClick={() => setShowReselt(false)}>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        letterSpacing: "1%",
                        color: "#03b2cb",
                        cursor: "pointer",
                      }}
                    >
                      Go Back
                    </span>
                  </div>
                </div> */}
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
