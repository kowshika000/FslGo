import React, { useState, useRef, useEffect } from "react";
import Stepper from "./Stepper";
import { Modal } from "antd";
import CountryFlag from "../../../Core-Components/CountryFlag";
import { useSelector } from "react-redux";
import arrow1 from "../../../../assets/arrow1.png";
import Union from "../../../../assets/Union.png";
import menu from "../../../../assets/menustepper.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../../../ShipmentDetails/ShipmentTable/ShipmentHeader.css";
import { useNavigate } from "react-router-dom";

function Steppertrack({ isModalOpen, handleCancel, rowData }) {
  const mileStoneData = useSelector((state) => state.Booking);
  const bookingData = mileStoneData?.booking; 
  const data = bookingData?.data;
  const handleStatusLabel = () => {
    if (rowData?.status === "Arrived") {
      return <button className="Booked me-3">Arrived</button>;
    } else if (rowData?.status === "Delivered") {
      return <button className="Booked me-3">Delivered</button>;
    } else if (rowData?.status === "Departed") {
      return <button className="Booked me-3">Departed</button>;
    } else if (rowData?.status === "Received") {
      return <button className="Booked me-3">Received</button>;
    } else if (rowData?.status === "Booked") {
      return <button className="Booked me-3">Booked</button>;
    } else if (rowData?.status === "Booking In Progress") {
      return <button className="cancel me-3">Booking In Progress</button>;
    }
  };

  const stepbox = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const getlastStatus = document.getElementsByClassName("Inprogress");
  const navigate = useNavigate()
  useEffect(() => {
    if (stepbox.current) {
      const getlastStatus = document.getElementsByClassName("Inprogress");
      if (getlastStatus.length > 0) {
        stepbox.current.scrollLeft = getlastStatus[0].offsetLeft;
      }
    }
  }, [stepbox.current]);

  const manageIcons = () => {
    let ScrollValue = Math.round(stepbox.current.scrollLeft);
    let maxscrollwidth =
      stepbox.current.scrollWidth - stepbox.current.clientWidth;
    if (ScrollValue > 0) {
      setShowLeftArrow(true);
    } else {
      setShowLeftArrow(false);
    }

    if (maxscrollwidth > ScrollValue) {
      setShowRightArrow(true);
    } else {
      setShowRightArrow(false);
    }
  };
  const dragging = (e) => {
    // if(!isDragging) return;
    stepbox.current.scrollLeft -= e.movementX;
    manageIcons();
  };
  const dragStop = () => {
    setIsDragging(false);
  };
  const handleScrollRight = () => {
    stepbox.current.scrollLeft += 125;
    manageIcons();
  };
  const handleScrollLeft = () => {
    stepbox.current.scrollLeft -= 125;
    manageIcons();
  };

  //remove close button
  const button = document.querySelector(".ant-modal-close");
  if (button) {
    button.remove();
  }
  return (
    <Modal open={isModalOpen} onCancel={handleCancel} width="1146px">
      <div className="tracker">
        <div
          className="tracker-header "
          style={{ height: "199px", padding: "20px" }}
        >
          <div className="d-flex justify-content-between">
            {rowData && (
              <div className="d-flex">
                <div>
                  <CountryFlag
                    countryCode={rowData?.origin_countrycode}
                    style={{ width: "18.67px", height: "14px" }}
                  />
                </div>
                <div
                  className="ms-2"
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "26px",
                    letterSpacing: "1%",
                    textAlign: "center",
                  }}
                >
                  {rowData?.origin}
                </div>
                <img
                  src={arrow1}
                  className="mx-2"
                  style={{ width: "11px", height: "6px", marginTop: "10px" }}
                />
                <div
                  className="px-1"
                  style={{
                    width: "18.67px",
                    height: "14px",
                    paddingRight: "5px",
                  }}
                >
                  <CountryFlag countryCode={rowData?.destination_countrycode} />
                </div>
                <div
                  className="ms-2"
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "26px",
                    letterSpacing: "1%",
                  }}
                >
                  {rowData?.destination}
                </div>
                <p className="mx-3">|</p>
                <p style={{ fontSize: "15px" ,fontWeight: "500",}}>Shipment ID :&nbsp;&nbsp;</p>
                {rowData?.id}
{/* 
                <p style={{ fontSize: "15px" }}>
                  <img src={Union} className="pe-2" />
                  <span
                    style={{
                      fontweight: "100",
                      fontSize: "15px",
                      lineHeight: "25px",
                      letterSpacing: "1%",
                    }}
                  >
                    Est.T/T
                  </span>{" "}
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "22px",
                      letterSpacing: "1%",
                    }}
                  >
                    9 days(5 Days Port to Port)
                  </span>
                </p> */}
              </div>
            )}
            <div>
              {/* {rowData?.status === "In Transit" ? (
                <button className="Booked me-3">Booked</button>
              ) : (
                <button className="cancel me-3">Cancellation Requested</button>
              )}  */}
              {handleStatusLabel()}
              <span
                style={{
                  backgroundColor: "#F2F4F8",
                  padding: "8px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "4px",
                }}
              >
                <img src={menu} alt="menu" />
              </span>
            </div>
          </div>
          <div className="ship_section">
            <div
              className="booking_status_row"
              style={{ position: "relative" }}
            >
              <div
                className="table-responsive dragging"
                ref={stepbox}
                id="tab"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => dragStop()}
                onMouseMove={(e) => dragging(e)}
              >
                <div className="arrow_icon">
                  {showLeftArrow && (
                    <IoIosArrowBack
                      size={17}
                      color="rgb(109 114 120)"
                      onClick={() => handleScrollLeft()}
                    />
                  )}
                </div>
                <Stepper data={rowData} />
                <div className="arrow_icon">
                  {showRightArrow && (
                    <IoIosArrowForward
                      size={17}
                      color="rgb(109 114 120)"
                      onClick={() => handleScrollRight()}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tracker-footer"
          style={{
            height: "62px",
            padding: "8px 20px 8px 20px",
            backgroundColor: "#F8FAFC",
            borderRadius: "0px 0px 8px 8px",
          }}
        >
          <button className="viewDetails d-block ms-auto" onClick={()=>navigate("shipmentdetails", { state: { rowData } })}>
            View Detailed Tracking
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Steppertrack;
