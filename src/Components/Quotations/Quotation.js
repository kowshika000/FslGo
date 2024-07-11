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
  const [checkedItems, setCheckedItems] = useState({
    originCharges: false,
    exportClearance: false,
    cargoPickup: false,
    internationalFreight: false,
    DestinationCharges: true,
    ImportClearance: false,
    CargoDelivery: false,
    CargoInsurance: false,
    StackableCargo: true,
    NonHarzardousCargo: true,
  });
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
      }}
    >
      <div className="centerdiv-white">
        <div
          className="shipmentIndex mx-auto row"
          style={{ maxWidth: "1255px", gap: "18px" }}
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
            className={`col-lg w-full py-1  ${
              !showHeader ? "fixed-shipment-card" : ""
            } `}
          >
            <ShipmentCard
              setShowReselt={setShowReselt}
              selectedCurrency={selectedCurrency}
              showHeader={showHeader}
              // setShowHeader={setShowHeader}
              // showReselt={showReselt}
              checkedItems={checkedItems}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          Width: "100%",
          minWidth: "1255px",
          padding: "20px",
          backgroundColor: "#f3f5f7",
        }}
      >
        <div style={{ maxWidth: "1255px" }} className="mx-auto">
          {showReselt ? (
            <FindNewRate
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          ) : (
            <QuotationTabs />
          )}
        </div>
      </div>
      {/* <QuotationTabs/> */}
    </div>
  );
};

export default Quotation;