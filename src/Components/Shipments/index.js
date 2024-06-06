import React, { useState } from "react";
import Map from "./Map/Map";
import BookingTabs from "./ShipmentTable/BookingTabs";
import { Typography } from "@mui/material";
import Navbar from "../Layout/Navbar";
import "./ShipBookingTabs.css";
import MapboxMap from "./Map/MapBox";
import UpcomingSailings from "../Dashboard/Upcoming/UpcomingSailings";
import uil_globe from "../../assets/uil_globe.png";
import ph_table from "../../assets/ph_table.png";

const ShipmentsHome = () => {
  const [showmap, setShowmap] = useState(false);

  const haddleShowMap = () => {
    setShowmap(true);
  };
  const haddleCloseMap = () => {
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
        <div className="py-4 d-flex justify-content-end">
          <div>
            <img src={ph_table} onClick={haddleCloseMap} />
          </div>
          <div>
            <img src={uil_globe} onClick={haddleShowMap} />
          </div>
        </div>
        {showmap && <Map />}
        {/* <Map/> */}
        {/* <br /> */}
        <BookingTabs />
        <UpcomingSailings />
      </div>
    </div>
  );
};

export default ShipmentsHome;
