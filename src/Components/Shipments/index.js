import React, { useState } from "react";
import Map from "./Map/Map";
import BookingTabs from "./ShipmentTable/BookingTabs";
import { Typography } from "@mui/material";
import Navbar from "../Layout/Navbar";
import "./ShipBookingTabs.css";
import MapboxMap from "./Map/MapBox";
import UpcomingSailings from "../Dashboard/Upcoming/UpcomingSailings";

const ShipmentsHome = () => {
  const [showText, setShowText] = useState(false);
  const [showmap, setShowmap] = useState(false);

  const handleShowMap = () => {
    setShowmap(true);
  };
  const handleCloseMap = () => {
    setShowmap(false);
  };

  return (
    <div
      style={{
        width: "100%",
        background:
          "linear-gradient(to bottom, white 49%,  rgb(248, 250, 252) 45%)",
      }}
    >
      <div
        style={{ maxWidth: "1255px" }}
        className="shipmentIndex mb-4 mx-auto"
      >
        {showmap && <Map />}
        {/* <Map/> */}
        {/* <br /> */}
        <BookingTabs
          handleCloseMap={handleCloseMap}
          handleShowMap={handleShowMap}
          showText={showText}
          setShowText={setShowText}
        />
        {showText ? "" : <UpcomingSailings />}
      </div>
    </div>
  );
};

export default ShipmentsHome;
