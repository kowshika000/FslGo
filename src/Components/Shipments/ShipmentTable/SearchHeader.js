import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Booking.css";
import ShipmentBase from "../../ShipmentDetails/ShipmentTable/ShipmentBase";
import { Dialog, DialogContent } from "@mui/material";


export const SearchHeader = ({
  bookingData,
  handleUpcomingDep,
  handleUpcomingArr,
  selectedButton,
}) => {
  //This is for searching according to booking_id,hbl number
  const [notfoundmodal, setNotfoundmodal] = useState(false);

  const [modal, setmodal] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");
  const [filterdata, setFilterData] = useState("");
  const data = bookingData?.data;
  console.log("bookingData", data);

  //This function call only when pressing enter key
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      console.log(searchvalue);
      const filteredId = bookingData?.data?.filter(
        (item) => searchvalue === item.id
      );
      if (filteredId.length) {
        setFilterData(filteredId);
        setmodal(true); //This is for show datafoundModal
        setNotfoundmodal(false); //This is for hide Not foundModal
      } else {
        setmodal(false); //This is for hide datafoundModal
        setNotfoundmodal(true); //This is for show Not foundModal
        console.log("not exist");
      }
    }
  };

  const Shipmentpopup = (show) => {
    return (
      <ShipmentBase open={modal} close={setmodal} rowData={filterdata[0]} />
    );
  };
  const Notfoundpopup = () => {
    return (
      <Dialog open={notfoundmodal} onClose={() => setNotfoundmodal(false)}>
        <DialogContent>
          <p>Data Not found !</p>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <>
      
      <Row
        justify="space-between"
        className="w-full mb-3"
        style={{ backgroundColor: "white" }}
      >
        <Col>
          <Input
            placeholder="Search shipment by PO/ Booking / HBL / Invoice Number "
            prefix={<SearchOutlined style={{ color: "#94A2B2" }} />}
            style={{
              width: "368.13px",
              padding: "4px 11px",
              borderRadius: "4px",
            }}
            value={searchvalue}
            onChange={(e) => setSearchvalue(e.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
          />
        </Col>
        <Col className="d-flex ">
          <div className="d-flex  justify-content-end ">
            <button
              className={`${
                selectedButton === "Upcoming Departures" ? "selected" : ""
              } upcoming-dep me-2 `}
              onClick={handleUpcomingDep}
            >
              Upcoming Departures
            </button>
            <button
              className={`${
                selectedButton === "Upcoming Arrivals" ? "  selected" : ""
              } upcoming-dep me-2`}
              onClick={handleUpcomingArr}
            >
              Upcoming Arrivals
            </button>
            {modal && Shipmentpopup(filterdata)}
            {notfoundmodal && Notfoundpopup()}
          </div>
        </Col>
      </Row>
    </>
  );
};
