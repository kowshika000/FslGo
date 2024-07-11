import React, { useState, useEffect } from "react";
import Navbar from "../Layout/Navbar";
import { Typography } from "@mui/material";
import QuotationTabs from "./QuotaionTable/QuotationTabs";
import "./Quotation.css";
import ShipmentCard from "../ShipmentBooking/ShipmentCard";
import FindNewRate from "./QuotaionTable/QModal/FindNewRate/FindNewRate";

const Quotation = ({
  showReselt,
  setShowReselt,
  showHeader,
  setShowHeader,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleScroll = () => {
    if (showReselt) {
      const scrollTop = window.scrollY;
      setShowHeader(scrollTop <= 0);
    } else {
      setShowHeader(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showReselt]);

  return (
    <div
      style={{
        width: "100%",
        background:
          "linear-gradient(to bottom, white 20%,  rgb(248, 250, 252) 15%)",
      }}
    >
      <div
        className="shipmentIndex py-5 mx-auto row"
        style={{ maxWidth: "1255px",gap:"18px" }}

      >
        <div className="col-lg">
        {showHeader && (
          <>
            <Typography
              style={{ fontSize: "28px", fontWeight: "700" }}
              className="shipments-head"
            >
              Quotations
            </Typography>
            <Navbar showReselt={showReselt} />
          </>
        )}
        </div>
        <div
        //  className={`${!showHeader ? "fixed-shipment-card" : ""} col-lg` }
         >
        <ShipmentCard
          setShowReselt={setShowReselt}
          selectedCurrency={selectedCurrency}
          showHeader={showHeader}
          // setShowHeader={setShowHeader}
          // showReselt={showReselt}
          
        />
        </div>
       
        {showReselt ? (
          <FindNewRate
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
          />
        ) : (
          <QuotationTabs />
        )}
        {/* <QuotationTabs/> */}
      </div>
    </div>
  );
};

export default Quotation;
