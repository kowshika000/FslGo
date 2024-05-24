import React,{useState} from "react";
import Stepper from "./Stepper";
import { Modal } from "antd";
import CountryFlag from "../../../Core-Components/CountryFlag";
import { useSelector } from "react-redux";
import arrow1 from "../../../../assets/arrow1.png";
import Union from "../../../../assets/Union.png";
import menu from "../../../../assets/menustepper.png";

function Steppertrack({ isModalOpen, handleCancel, rowData }) {
  console.log("dfghj", rowData);
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
  
  return (
    <Modal open={isModalOpen} onCancel={handleCancel} width="1146px" >
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
                </p>
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
          <div
            className="mt-2 tracker-body"
            style={{
              width:"100%",
              // minWidth: "1585px",
              height: "107px",
              padding: "20px 0px 20px 0px",
              backgroundColor: "#F3F5F7",
              borderRadius: "8px",
              overflowX: "auto",
              overflowY: "hidden",

             
            }}
          >
            <Stepper data={rowData} />
            
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
          <button className="viewDetails d-block ms-auto">
            View Detailed Tracking
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Steppertrack;
