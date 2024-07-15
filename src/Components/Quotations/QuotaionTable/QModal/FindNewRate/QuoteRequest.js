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
import { Card, Col, Row, Button } from "antd";
import "./FindNewRate.css";
import Stripes from "../../../../../assets/Stripes.png";
import Avatar from "../../../../../assets/Avatar.png";
import RightArrow from "../../../../../assets/rightarrow.png";
import QuoteRequestModal from "./QuoteRequestModal";

function QuoteRequest({ setShowReselt }) {
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
  return (
    <>
      <Card className="Quote-Card">
        <Row>
          <Col span={24}>
            <img src={Stripes} alt="lines" className="img-stripe" />
            <img src={Avatar} alt="Avatar" className="img-avatar" />
          </Col>
          <Col span={24}>
            <div className="content">
              <p className="content-title">Non-Instant Quote request</p>
              <p className="content-description">
                Apologies for the inconvenience. At present, we are unable to
                provide instant results for this cargo. Kindly submit a
                non-instant quote request, and our dedicated customer service
                team will promptly review your request, providing you with the
                applicable freight charges as soon as possible.
                <br />
                <span className="mt-2">
                  Thank you for considering FSL GO for your shipping needs.
                </span>
              </p>
            </div>
          </Col>
          <Col span={24} className="mt-5">
            <div
              className="Requestbtn-div"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
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
            <div className="go-back">
              <div>
                <img
                  src={RightArrow}
                  alt="arrow"
                  className="me-1"
                  style={{ width: "18px", height: "18px", cursor: "pointer",color:"#03b2cb" }}
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
