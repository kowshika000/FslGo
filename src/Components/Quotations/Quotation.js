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
    internationalFreight: true,
    DestinationCharges: false,
    ImportClearance: false,
    CargoDelivery: false,
    CargoInsurance: false,
    StackableCargo: true,
    NonHarzardousCargo: true,
  });
  console.log(checkedItems);
  const [exim, setexim] = useState("I");
  const [highlightShipmentCard, setHighlightShipmentCard] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDeliveryValue, setSelectedDeliveryValue] = useState("");
  const [insuranceValue, setInsuranceValue] = useState("");
  const [selectedCode, setSelectedCode] = useState(null);
  const [selectedCode1, setSelectedCode1] = useState(null);
  const [originPort, setOriginPort] = useState(null);
  const [destPort, setDestPort] = useState(null);
  const [toscheck, settoscheck] = useState(false);
  const [selectedDataToPatch, setSelectedDataToPatch] = useState();
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

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [highlightShipmentCard]);

  const [origin, setorigin] = useState(originPort?.port_name)
  const [dest, setdes] = useState(destPort?.port_name)

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
            className={`col-lg px-0 py-1  ${
              !showHeader ? "fixed-shipment-card" : ""
            }
           ${highlightShipmentCard ? "dimmed-background1" : ""}
             `}
          >
            <ShipmentCard
              setShowReselt={setShowReselt}
              selectedCurrency={selectedCurrency}
              showHeader={showHeader}
              setHighlightShipmentCard={setHighlightShipmentCard}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
              exim={exim}
              setexim={setexim}
              selectedValue={selectedValue}
              selectedDeliveryValue={selectedDeliveryValue}
              insuranceValue={insuranceValue}
              setSelectedValue={setSelectedValue}
              selectedCode={selectedCode}
              setSelectedCode={setSelectedCode}
              selectedCode1={selectedCode1}
              setSelectedCode1={setSelectedCode1}
              originPort={originPort}
              setOriginPort={setOriginPort}
              destPort={destPort}
              setDestPort={setDestPort}
              showReselt={showReselt}
              toscheck={toscheck}
              settoscheck={settoscheck}
              setSelectedDeliveryValue={setSelectedDeliveryValue}
              selectedDataToPatch={selectedDataToPatch}
              setorigin={setorigin}
              setdes={setdes}
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
          {showHeader ? "" : <div style={{ marginTop: "4rem" }}></div>}
          {showReselt ? (
            <FindNewRate
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
              showHeader={showHeader}
              setShowReselt={setShowReselt}
              exim={exim}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              selectedDeliveryValue={selectedDeliveryValue}
              setSelectedDeliveryValue={setSelectedDeliveryValue}
              insuranceValue={insuranceValue}
              setInsuranceValue={setInsuranceValue}
              selectedCode={selectedCode}
              setSelectedCode={setSelectedCode}
              selectedCode1={selectedCode1}
              setSelectedCode1={setSelectedCode1}
              originPort={originPort}
              destPort={destPort}
              settoscheck={settoscheck}
              toscheck={toscheck}
              origin={origin}
              dest={dest}
            />
          ) : (
            <div className={`${highlightShipmentCard ? "marginTop" : ""}`}>
              <QuotationTabs
                setHighlightShipmentCard={setHighlightShipmentCard}
                selectedDataToPatch={selectedDataToPatch}
                setSelectedDataToPatch={setSelectedDataToPatch}
              />
            </div>
          )}
        </div>
      </div>
      {/* <QuotationTabs/> */}
    </div>
  );
};

export default Quotation;
