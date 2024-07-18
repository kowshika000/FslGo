import React, { useState } from "react";
import { Card, Tabs, Tooltip } from "antd";
import "./FindNewRate.css";
import Share from "../../../../../assets/Share.svg";
import Line from "../../../../../assets/Line 3.svg";
import Union from "../../../../../assets/UnionCar.svg";
import flow from "../../../../../assets/flowlogo.svg";
import Vector from "../../../../../assets/VectorCar.svg";
import icon from "../../../../../assets/circleCargo.svg";
import Cargo from "../../../../../assets/Cargoicon.svg";
import info from "../../../../../assets/Info.svg";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown } from "primereact/dropdown";
import { useSelector } from "react-redux";
import ShowChargesModal from "./ShowChargesModal";
import { CircularProgress, Box } from "@mui/material";
import airplane from "../../../../../assets/mdi_aeroplane.svg";
import QuoteRequest from "./QuoteRequest";

function ShipmentTracker({
  selectedCurrency,
  setSelectedCurrency,
  selectedValue,
  checkedItems,
  selectedDeliveryValue,
  setShowReselt,
  exim,
  setCheckedItems,
  originPort,
  destPort,
}) {
  const [showAllData, setShowAllData] = useState(false);
  const [showCharges, setShowCharges] = useState(null);
  const [selectedSort, setSelectedSort] = useState("Low to High");
  const FindNRate = useSelector((state) => state?.findRate?.findRate?.rates);
  const { findRate, loading } = useSelector((state) => state?.findRate);
  console.log(FindNRate, "FindNRate");
  function showAll() {
    if (
      findRate?.statusmessage === "information not available" ||
      (exim === "I" && checkedItems?.DestinationCharges === false) ||
      (exim === "E" && checkedItems?.originCharges === false) ||
      checkedItems?.StackableCargo === false ||
      checkedItems?.NonHarzardousCargo === false ||
      checkedItems?.exportClearance === true ||
      checkedItems?.ImportClearance === true ||
      //  ||
      // (checkedItems?.originCharges && FindNRate[0]
      //   ? FindNRate[0]?.origin_charges === ""
      //   : "") ||
      // (checkedItems?.cargoPickup && FindNRate[0]
      //   ? FindNRate[0]?.cargopickup_charge === ""
      //   : "") ||
      // (checkedItems?.DestinationCharges && FindNRate[0]
      //   ? FindNRate[0]?.destination_charges === ""
      //   : "") ||
      // (checkedItems?.CargoDelivery && FindNRate[0]
      //   ? FindNRate[0]?.cargodelivery_charge === ""
      //   : "")
      (checkedItems?.originCharges && FindNRate && FindNRate.length > 0
        ? FindNRate[0]?.origin_charges === ""
        : "") ||
      (checkedItems?.cargoPickup && FindNRate && FindNRate.length > 0
        ? FindNRate[0]?.cargopickup_charge === ""
        : "") ||
      (checkedItems?.DestinationCharges && FindNRate && FindNRate.length > 0
        ? FindNRate[0]?.destination_charges === ""
        : "") ||
      (checkedItems?.CargoDelivery && FindNRate && FindNRate.length > 0
        ? FindNRate[0]?.cargodelivery_charge === ""
        : "")
    ) {
      return 0;
    } else {
      return FindNRate?.length;
    }
  }
  const tabs = [
    { label: `All{${showAll()})`, key: "1" },
    { label: `Ocean(${showAll()})`, key: "2" },
    { label: "Air(0)", key: "3" },
  ];
  const currencyOptions = ["USD", "INR", "AED"];
  const sortOptions = ["Low to High", "High to Low"];

  const handleShowCharges = (index) => {
    if (showCharges === index) {
      setShowCharges(null);
    } else {
      setShowCharges(index);
    }
  };
  const DropdownTemplate = ({ value }) => (
    <div>
      <span className="dropdown-value">{value}</span>
      <CaretDownOutlined className="ms-1" style={{ color: "#67788E" }} />
    </div>
  );
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          flexDirection: "column",
        }}
      >
        <div
          className="text-center"
          style={{ fontWeight: "bold", fontSize: "16px" }}
        >
          Kindly hold for a moment as we search for the most competitive
          <br />
          shipping rates tailored to your needs.
        </div>
        <div
          className="mt-4 d-flex flex-direction-row "
          style={{ fontWeight: "bold", fontSize: "16px" }}
        >
          Powered by &nbsp;&nbsp; <div className="h5 text-danger">FSL GO</div>,
          your trusted logistics partner.
        </div>

        <CircularProgress style={{ color: "red" }} className="mt-4" />
      </Box>
    );
  }
  const displayedData = showAllData ? FindNRate : FindNRate?.slice(0, 4);
  const renderSelectedValue = () => {
    if (!checkedItems.cargoPickup) return "Cargo Pickup";

    if (selectedValue?.length > 10) {
      return (
        <Tooltip placement="topLeft" title={selectedValue}>
          <span>{selectedValue.substring(0, 10) + "..."}</span>
        </Tooltip>
      );
    } else {
      return <span>{selectedValue}</span>;
    }
  };
  const renderSelectedValue1 = () => {
    if (!checkedItems.CargoDelivery) return "Cargo Delivery";

    if (selectedDeliveryValue?.length > 10) {
      return (
        <Tooltip placement="topLeft" title={selectedDeliveryValue}>
          <span>{selectedDeliveryValue.substring(0, 10) + "..."}</span>
        </Tooltip>
      );
    } else {
      return <span>{selectedDeliveryValue}</span>;
    }
  };
  return (
    <>
      <Card className="tabs1 mb-2">
        <div className="row">
          <div className="col-9">
            <Tabs defaultActiveKey="1" items={tabs}></Tabs>
          </div>
          <div className="col-1 align-self-center">
            <div
              className="dropdownfield1 mx-2"
              style={{ alignContent: "center" }}
            >
              <Dropdown
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.value)}
                options={currencyOptions}
                valueTemplate={<DropdownTemplate value={selectedCurrency} />}
                className="w-full md:w-14rem datehover"
                style={{ border: "none" }}
              />
            </div>
          </div>
          <div className="col-2 align-self-center">
            <div
              className="dropdownfield2 mx-2"
              style={{ alignContent: "center" }}
            >
              <Dropdown
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.value)}
                options={sortOptions}
                valueTemplate={<DropdownTemplate value={selectedSort} />}
                className="w-full md:w-14rem datehover"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </Card>

      {displayedData?.map(
        (data, index) =>
          index === 0 &&
          data?.mode === "SEA" && (
            <Card className="cargo-pick mb-2">
              <div
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <div
                  style={{
                    opacity: !checkedItems.cargoPickup ? "40%" : "100%",
                  }}
                  className="cargo-pickup-p"
                >
                  <img
                    src={icon}
                    alt="icon"
                    className="me-1"
                    style={{ marginBottom: "0.1rem" }}
                  />
                  {renderSelectedValue()}
                </div>
                <div
                  style={{
                    opacity: !checkedItems.cargoPickup ? "40%" : "100%",
                  }}
                >
                  <img
                    src="https://www.fslgo.com/_next/static/media/pickup.f4ca650f.svg"
                    alt="line"
                  />
                  {/* <img src={Vector} alt="car" className="mx-2" />
                      <img src={Line} alt="line" /> */}
                </div>
                <div>
                  <p
                    className="m-0 cargo-pickup-p"
                    style={{ fontWeight: "800" }}
                  >
                    {originPort?.port_name}
                  </p>
                </div>
                <div style={{ height: "20px", opacity: "100%" }}>
                  <span
                    style={{
                      display: "block",
                      marginTop: "-5px",
                      textAlign: "center",
                      height: "10px",
                    }}
                  >
                    <img
                      src="https://www.fslgo.com/_next/static/media/ship.2f4cd5cc.svg"
                      alt="union"
                      className="mb-2"
                    />
                  </span>
                  {/* <span style={{ height: "10px" }}>
                        <img src={flow} alt="flow" />
                        <img src={flow} alt="flow" />
                      </span> */}
                </div>
                <div>
                  <p
                    className="m-0 cargo-pickup-p"
                    style={{ fontWeight: "800" }}
                  >
                    {destPort?.port_name}
                  </p>
                </div>
                <div
                  style={{
                    opacity: !checkedItems.CargoDelivery ? "40%" : "100%",
                  }}
                >
                  <img
                    src="https://www.fslgo.com/_next/static/media/pickup.f4ca650f.svg"
                    alt="line"
                  />
                  {/* <img src={Vector} alt="car" className="mx-2" />
                      <img src={Line} alt="line" /> */}
                </div>
                <div>
                  <p
                    className="m-0 cargo-pickup-p"
                    style={{
                      opacity: !checkedItems.CargoDelivery ? "40%" : "100%",
                    }}
                  >
                    <img
                      src={Cargo}
                      alt="cargo"
                      className="me-1 mb-1"
                      style={{ width: "13px", height: "17px" }}
                    />
                    {renderSelectedValue1()}
                  </p>
                </div>
              </div>
            </Card>
          )
      )}
      {displayedData?.map(
        (data, index) =>
          index === 0 &&
          data?.mode === "AIR" && (
            <Card className="cargo-pick mb-2">
              <div
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <div style={{ opacity: "40%" }} className="cargo-pickup-p">
                  <img src={icon} alt="icon" className="me-1" />
                  Cargo Pickup
                </div>
                <div style={{ opacity: "40%" }}>
                  <img src={Line} alt="line" />
                  <img src={Vector} alt="car" className="mx-2" />
                  <img src={Line} alt="line" />
                </div>
                <div>
                  <p className="m-0 cargo-pickup-p">{data?.origin}</p>
                </div>
                <div style={{ height: "20px", opacity: "60%" }}>
                  <span
                    style={{
                      display: "block",
                      marginTop: "-5px",
                      textAlign: "center",
                      height: "10px",
                    }}
                  >
                    <img src={airplane} alt="union" className="mb-2" />
                  </span>
                  <span style={{ height: "10px" }}>
                    <img src={flow} alt="flow" />
                    <img src={flow} alt="flow" />
                  </span>
                </div>
                <div>
                  <p className="m-0 cargo-pickup-p">{data?.destination}</p>
                </div>
                <div style={{ opacity: "40%" }}>
                  <img src={Line} alt="line" />
                  <img src={Vector} alt="car" className="mx-2" />
                  <img src={Line} alt="line" />
                </div>
                <div>
                  <p className="m-0 cargo-pickup-p" style={{ opacity: "40%" }}>
                    <img
                      src={Cargo}
                      alt="cargo"
                      className="me-1 mb-1"
                      style={{ width: "13px", height: "17px" }}
                    />
                    Cargo Delivery
                  </p>
                </div>
              </div>
            </Card>
          )
      )}

      {findRate?.statusmessage === "information not available" ||
      (exim === "I" && checkedItems?.DestinationCharges === false) ||
      (exim === "E" && checkedItems?.originCharges === false) ||
      checkedItems?.StackableCargo === false ||
      checkedItems?.NonHarzardousCargo === false ||
      checkedItems?.exportClearance === true ||
      checkedItems?.ImportClearance === true ||
      //  ||
      // (checkedItems?.originCharges && FindNRate[0]
      //   ? FindNRate[0]?.origin_charges === ""
      //   : "") ||
      // (checkedItems?.cargoPickup && FindNRate[0]
      //   ? FindNRate[0]?.cargopickup_charge === ""
      //   : "") ||
      // (checkedItems?.DestinationCharges && FindNRate[0]
      //   ? FindNRate[0]?.destination_charges === ""
      //   : "") ||
      // (checkedItems?.CargoDelivery && FindNRate[0]
      //   ? FindNRate[0]?.cargodelivery_charge === ""
      //   : "")
      (checkedItems?.originCharges && FindNRate && FindNRate.length > 0
        ? FindNRate[0]?.origin_charges === ""
        : "") ||
      (checkedItems?.cargoPickup && FindNRate && FindNRate.length > 0
        ? FindNRate[0]?.cargopickup_charge === ""
        : "") ||
      (checkedItems?.DestinationCharges && FindNRate && FindNRate.length > 0
        ? FindNRate[0]?.destination_charges === ""
        : "") ||
      (checkedItems?.CargoDelivery && FindNRate && FindNRate.length > 0
        ? FindNRate[0]?.cargodelivery_charge === ""
        : "")
         ? (
        <QuoteRequest
          setShowReselt={setShowReselt}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      ) : (
        <>
          {displayedData?.map(
            (data, index) =>
              data.mode == "SEA" && (
                <Card className="track1 mb-2" key={index}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p style={{ fontSize: "15px" }}>
                        <img
                          src={Union}
                          className="pe-2 mb-1"
                          style={{ height: "12px", color: "#495A6E" }}
                        />
                        <span
                          style={{
                            fontweight: "400",
                            fontSize: "15px",
                            lineHeight: "25px",
                            letterSpacing: "1%",
                            color: "#495A6E",
                          }}
                        >
                          Est.T/T&nbsp;&nbsp;
                        </span>
                        <span
                          style={{
                            fontWeight: "500",
                            fontSize: "15px",
                            lineHeight: "22px",
                            letterSpacing: "1%",
                            color: "#181E25",
                          }}
                        >
                          {data?.total_transit_time} Days ({data?.transit_time}{" "}
                          Days Port to Port)
                        </span>
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "25px",
                          color: "#D32D2F",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        {selectedCurrency}&nbsp;&nbsp;
                        {data.total_amount_in_usd}
                        <span className="ms-2">
                          <img src={Share} alt="share" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="track-btn">LCL</div>
                    <div className="track-btn mx-2">Direct</div>
                    <div className="track-btn">Cheapest</div>
                    <div
                      className="ms-auto align-self-center"
                      style={{
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "24px",
                        letterSpacing: "1%",
                        color: "#495A6E",
                      }}
                    >
                      Validity :&nbsp;&nbsp;
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "14px",
                          lineHeight: "24px",
                          letterSpacing: "1%",
                          color: "#181E25",
                        }}
                      >
                        {data.validity}
                      </span>
                      <span className="ms-2">
                        <img
                          src={info}
                          alt="more"
                          style={{ marginBottom: "3px" }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="detail-card">
                    <div>
                      <p className="card-label">VESSEL</p>
                      <p className="p-value">{data.vessel}</p>
                    </div>
                    <div>
                      <p className="card-label">VOYAGE</p>
                      <p className="p-value">{data.voyage}</p>
                    </div>
                    <div>
                      <p className="card-label">CUT OFF</p>
                      <p className="p-value">{data.cut_off}</p>
                    </div>
                    <div>
                      <p className="card-label">Depature Date</p>
                      <p className="p-value">{data.etd}</p>
                    </div>
                    <div>
                      <p className="card-label">Arrival Date</p>
                      <p className="p-value">{data.eta}</p>
                    </div>
                  </div>
                  {showCharges === index && (
                    <ShowChargesModal FindNRate={data} />
                  )}
                  <div className="d-flex align-items-center">
                    <div>
                      <p
                        className="m-0"
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          fontSize: "14px",
                          lineHeight: "24px",
                          letterSpacing: "1%",
                          fontWeight: "400",
                          textAlign: "center",
                        }}
                        onClick={() => handleShowCharges(index)}
                      >
                        {showCharges === index ? "Hide" : "Show"} Charges
                        Breakdown
                      </p>
                    </div>
                    {/* <div className="lock-btn ms-auto me-2">
                  Lock Price at {data.Price}
                </div> */}
                    <div className="book-btn ms-auto">Book Now</div>
                  </div>
                </Card>
              )
          )}

          {displayedData?.map(
            (data, index) =>
              data.mode == "AIR" && (
                <Card className="track1 mb-2" key={index}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p style={{ fontSize: "15px" }}>
                        <img src={airplane} className="pe-2" />
                        <span
                          style={{
                            fontweight: "400",
                            fontSize: "15px",
                            lineHeight: "25px",
                            letterSpacing: "1%",
                            color: "#495A6E",
                          }}
                        >
                          Est.T/T&nbsp;&nbsp;
                        </span>
                        <span
                          style={{
                            fontWeight: "500",
                            fontSize: "15px",
                            lineHeight: "22px",
                            letterSpacing: "1%",
                            color: "#181E25",
                          }}
                        >
                          9 Days (5 Days Port to Port)
                        </span>
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "25px",
                          color: "#D32D2F",
                          fontWeight: "500",
                        }}
                      >
                        {selectedCurrency}
                        {data.total_amount_in_usd}
                        <span className="ms-2">
                          <img src={Share} alt="share" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="track-btn">LCL</div>
                    <div className="track-btn mx-2">Direct</div>
                    <div className="track-btn">Cheapest</div>
                    <div
                      className="ms-auto align-self-center"
                      style={{
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "24px",
                        letterSpacing: "1%",
                        color: "#495A6E",
                      }}
                    >
                      Validity :&nbsp;&nbsp;
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "14px",
                          lineHeight: "24px",
                          letterSpacing: "1%",
                          color: "#181E25",
                        }}
                      >
                        {data.validity}
                      </span>
                      <span className="ms-2">
                        <img
                          src={info}
                          alt="more"
                          style={{ marginBottom: "3px" }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="detail-card">
                    <div>
                      <p className="card-label">VESSEL</p>
                      <p className="p-value">{data.vessel}</p>
                    </div>
                    <div>
                      <p className="card-label">VOYAGE</p>
                      <p className="p-value">{data.voyage}</p>
                    </div>
                    <div>
                      <p className="card-label">CUT OFF</p>
                      <p className="p-value">{data.cut_off}</p>
                    </div>
                    <div>
                      <p className="card-label">Depature Date</p>
                      <p className="p-value">{data.etd}</p>
                    </div>
                    <div>
                      <p className="card-label">Arrival Date</p>
                      <p className="p-value">{data.eta}</p>
                    </div>
                  </div>
                  {showCharges ? (
                    <div className="charges">
                      <div className="table-responsive">
                        <table class="table">
                          <tbody>
                            <tr className="header">
                              <td className="origincharge">Origin Charges</td>
                              <td className="one">$100</td>
                            </tr>
                            <tr>
                              <td className="pickupcharge ps-4">
                                Pickup Charges
                              </td>
                              <td className="price-value">$55</td>
                            </tr>
                            <tr>
                              <td className="pickupcharge ps-4">
                                B/L Issuance
                              </td>
                              <td className="price-value">$45</td>
                            </tr>
                            <tr className="header">
                              <td className="origincharge">
                                International Freight Charges
                              </td>
                              <td className="one">$80</td>
                            </tr>
                            <tr className="header">
                              <td className="origincharge">
                                Destination Charges
                              </td>
                              <td className="one">$120</td>
                            </tr>
                            <tr>
                              <td className="pickupcharge ps-4">
                                Handling Charges
                              </td>
                              <td className="price-value">$60</td>
                            </tr>
                            <tr>
                              <td className="pickupcharge ps-4">
                                Import Custom Clearance
                              </td>
                              <td className="price-value">$30</td>
                            </tr>
                            <tr>
                              <td className="pickupcharge ps-4">
                                Delivery Charges
                              </td>
                              <td className="price-value">$30</td>
                            </tr>
                            <tr className="total">
                              <th className="totaoriginchargelamount">
                                Total amount :
                              </th>
                              <th className="one">$300 (USD)</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="d-flex align-items-center">
                    <div>
                      <p
                        className="m-0"
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          fontSize: "14px",
                          lineHeight: "24px",
                          letterSpacing: "1%",
                          fontWeight: "400",
                          textAlign: "center",
                        }}
                        onClick={() => handleShowCharges(index)}
                      >
                        {showCharges ? "Hide" : "Show"} Charges Breakdown
                      </p>
                    </div>
                    {/* <div className="lock-btn ms-auto me-2">
                  Lock Price at {data.Price}
                </div> */}
                    <div className="book-btn ms-auto">Book Now</div>
                  </div>
                </Card>
              )
          )}
          {FindNRate?.length > 4 && (
            <div className="hr-with-text">
              <hr />
              <span
                onClick={() => setShowAllData(!showAllData)}
                className="show-more"
              >
                {showAllData ? "Show Less" : "Show More"}
              </span>
              <hr />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ShipmentTracker;
