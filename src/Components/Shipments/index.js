import React, { useState } from "react";
import Map from "./Map/Map";
import BookingTabs from "./ShipmentTable/BookingTabs";
import "./ShipBookingTabs.css";
import UpcomingSailings from "../Dashboard/Upcoming/UpcomingSailings";
import uil_globe from "../../assets/uil_globe.png";
import ph_table from "../../assets/ph_table.png";

const ShipmentsHome = () => {
  const [showText, setShowText] = useState(false);
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
        {!showText ? (
          <div className="py-4 d-flex justify-content-end">
            <div>
              <img src={ph_table} onClick={haddleCloseMap} />
            </div>
            <div>
              <img src={uil_globe} onClick={haddleShowMap} />
            </div>
          </div>
        ) : (
          ""
        )}
        {showmap && <Map />}
        {/* <Map/> */}
        {/* <br /> */}
        <BookingTabs showText={showText} setShowText={setShowText} />
        {showText ? "" : <UpcomingSailings />}
      </div>
    </div>
  );
};

export default ShipmentsHome;
