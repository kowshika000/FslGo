import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import "./shipmentDetails.css";
import { Link } from "react-router-dom";
import RecentBooking from "../../QuickBooking/RecentBooking";
import { Dropdown } from "primereact/dropdown";
import ShipmentHistory from "../ShipmentHistory/ShipmentHistory";
import ToDo from "./ToDo";
import Inbox from "./Inbox";
import "../ShipmentDetails/shipmentDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { shipmentCountRequest } from "../../../Redux/Actions/ShipmentAction";

const Shipments = () => {
  const dispatch = useDispatch();
  const ShipmentData = useSelector((state) => state.ShipmentCount);
  const {loading,error} = useSelector((state) => state.ShipmentCount);
  console.log(ShipmentData);
  const ShipmentData1 = ShipmentData
    ? ShipmentData.shipmentCount.statuswise_count
    : "null";
  console.log(ShipmentData1);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Last 7 days");
  const items = ["Last 7 days", "Last 15 days", "Last 30 days"];
  const [filterValue, setFilterValue] = useState(7);
 
  // const handleDropdownChange = (e) => {
  //   setSelectedItem(e.value);
  // };
  // const handleModalOpen = () => {
  //   setIsShowModal(true);
  // };
  useEffect(() => {
    if (selectedItem === "Last 7 days") {
      setFilterValue(7);
      setSelectedStatus(false);
    } else if (selectedItem === "Last 15 days") {
      setFilterValue(15);
      setSelectedStatus(false);
    } else if (selectedItem === "Last 30 days") {
      setFilterValue(30);
      console.log(filterValue);
      setSelectedStatus(false);
    }
  }, [selectedItem]);

  useEffect(() => {
    dispatch(shipmentCountRequest({ filter: filterValue }));

  }, [dispatch, filterValue]);

  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleClickNewRequests = () => {
    setSelectedStatus("New Requests");
    console.log(selectedStatus);
  };
  const handleClickBooked = () => {
    setSelectedStatus("Booked");
  };
  const handleClickArrived = () => {
    setSelectedStatus("Arrived");
  };
  const handleClickDeparted = () => {
    setSelectedStatus("Departed");
  };
  const handleClickReceived = () => {
    setSelectedStatus("Received");
  };
  const handleClickDelivered = () => {
    setSelectedStatus("Delivered");
  };
  const handleShipmentsClick = () => {
    setSelectedStatus("Shipments");
    console.log(selectedStatus);
  };
  return (
    <>
      <div className="d-flex flex-column">
        <div
          className="d-flex w-100 justify-content-between"
          style={{
            minWidth: "1269px",
            borderRadius: "8px",
          }}
        >
          <div className="layout shadow p-3 ">
          {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <CircularProgress style={{color:"red"}}/>
              </Box>
            ) : (
              <>
            <div className="row pb-1 px-1">
              <div className="col ">
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box
                    sx={{ display: "flex", padding: "8px" }}
                    role="button"
                    onClick={handleShipmentsClick}
                  >
                    <Typography className="bold heading ">
                      Shipments{" "}
                      <span style={{ color: "#B3B2BA" }}>
                        ({ShipmentData1?.overall_count})
                      </span>
                    </Typography>
                  </Box>
                  <div style={{ alignContent: "center" }} className="px-2">
                    <Dropdown
                      value={selectedItem}
                      onChange={(e) => {
                        console.log("Selected item:", e.value); // Add logging statement
                        setSelectedItem(e.value);
                      }}
                      options={items}
                      placeholder="Last 7 days"
                      className="w-full md:w-14rem "
                    />
                  </div>
                </Box>
              </div>
            </div>
            
              <div
                style={{
                  border: "1px solid rgba(230, 230, 230, 1)",
                  borderRadius: "7px",
                  backgroundColor: "#FAFAFD",
                }}
                className="shipments-layout p-3 mx-auto mt-4"
              >
                <div className="w-100 d-flex">
                  <div
                    className={`w-50 card-row shipment-col p-2 align-content-center ${
                      selectedStatus === "New Requests" ? "selected" : ""
                    }`}
                    role="button"
                    style={{
                      borderRight: "1px solid rgba(30, 41, 59, 0.1)",
                      borderBottom: "1px solid rgba(30, 41, 59, 0.1)",
                    }}
                    onClick={handleClickNewRequests}
                  >
                    <Typography
                      className="bold text-start"
                      sx={{ fontSize: "20px" }}
                    >
                     { ShipmentData1?.new_request}
                       
                    </Typography>
                    <Typography
                      className="text-start"
                      sx={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      New Requests
                    </Typography>
                  </div>
                  <div
                    className={`w-50 card-row shipment-col p-2 align-content-center ${
                      selectedStatus === "Booked" ? "selected" : ""
                    }`}
                    style={{
                      borderLeft: "1px solid rgba(30, 41, 59, 0.1)",
                      borderBottom: "1px solid rgba(30, 41, 59, 0.1)",
                    }}
                    role="button"
                    onClick={handleClickBooked}
                  >
                    <Typography
                      className="bold text-start px-3"
                      sx={{ fontSize: "20px" }}
                    >
                      {ShipmentData1?.booked }
                    </Typography>
                    <Typography
                      className=" text-start px-3"
                      sx={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Booked
                    </Typography>
                  </div>
                </div>
                <div className="w-100 d-flex">
                  <div
                    className={`w-50 card-row shipment-col p-2 align-content-center ${
                      selectedStatus === "Received" ? "selected" : ""
                    }`}
                    role="button"
                    style={{
                      borderRight: "1px solid rgba(30, 41, 59, 0.1)",
                      borderBottom: "1px solid rgba(30, 41, 59, 0.1)",
                    }}
                    onClick={handleClickReceived}
                  >
                    <Typography
                      className="bold text-start "
                      sx={{ fontSize: "20px" }}
                    >
                      {ShipmentData1?.received}
                    </Typography>
                    <Typography
                      className=" text-start"
                      sx={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Received
                    </Typography>
                  </div>
                  <div
                    className={`w-50 card-row shipment-col p-2 align-content-center ${
                      selectedStatus === "Departed" ? "selected" : ""
                    }`}
                    role="button"
                    style={{
                      borderLeft: "1px solid rgba(30, 41, 59, 0.1)",
                      borderBottom: "1px solid rgba(30, 41, 59, 0.1)",
                    }}
                    onClick={handleClickDeparted}
                  >
                    <Typography
                      className="bold text-start px-3"
                      sx={{ fontSize: "20px" }}
                    >
                      {ShipmentData1?.departed}
                    </Typography>
                    <Typography
                      className="text-start px-3"
                      sx={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Departed
                    </Typography>
                  </div>
                </div>
                <div className="w-100 d-flex mb-4">
                  <div
                    className={`w-50 card-row shipment-col p-2 align-content-center ${
                      selectedStatus === "Arrived" ? "selected" : ""
                    }`}
                    role="button"
                    style={{ borderRight: "1px solid rgba(30, 41, 59, 0.1)" }}
                    onClick={handleClickArrived}
                  >
                    <Typography
                      className="bold text-start"
                      sx={{ fontSize: "20px" }}
                    >
                      {ShipmentData1?.arrived}
                    </Typography>
                    <Typography
                      className="bold text-start"
                      sx={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Arrived
                    </Typography>
                  </div>
                  <div
                    className={`w-50 card-row shipment-col p-2 align-content-center ${
                      selectedStatus === "Delivered" ? "selected" : ""
                    }`}
                    role="button"
                    style={{ borderLeft: "1px solid rgba(30, 41, 59, 0.1)" }}
                    onClick={handleClickDelivered}
                  >
                    <Typography
                      className="bold text-start px-3"
                      sx={{ fontSize: "20px" }}
                    >
                      {ShipmentData1?.delivered }
                    </Typography>
                    <Typography
                      className="bold text-start px-3"
                      sx={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Delivered
                    </Typography>
                   
                  
                  </div>
                 
                </div>
              </div>
            </>
          )}
            
            {/* <RecentBooking show={isShowModal} onClose={() => setIsShowModal(false)} /> */}
          </div>
          <ToDo />
          <Inbox />
        </div>
        <div className=" w-100">
          <ShipmentHistory
            selectedStatus={selectedStatus}
            filterDays={filterValue}
            setSelectedStatus={setSelectedStatus}
          />
        </div>
      </div>
    </>
  );
};

export default Shipments;
