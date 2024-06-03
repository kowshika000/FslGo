import React, { useState } from "react";
import Navbar from "../../../Layout/Navbar";
import { Card, Checkbox, Tabs } from "antd";
import "./FindNewRate.css";
import Location from "../../../../assets/location.svg";
import Union from "../../../../assets/Union.png";
import info from "../../../../assets/Info.svg";
import { Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import arrow from "../../../../assets/arrow.png";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function FindNewRate() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [showCharges, setShowCharges] = useState(false);

  const handleShowCharges = () => {
    setShowCharges(!showCharges);
  };
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#F8FAFC", position: "relative" }}
    >
      <div style={{ backgroundColor: "white", position: "absolute" }}></div>
      <div style={{ maxWidth: "1255px" }} className="py-5 mx-auto">
        <div className="pb-3">
          <Navbar />
        </div>
        <div className="location-card">
          <Card
            style={{
              width: "100%",
            }}
            className="shadow"
          >
            <div className="row location-bar">
              <div className="col d-flex cargo-loc me-4">
                <div className="align-self-center mx-2">
                  <img src={Location} alt="loc" />
                </div>
                <div>
                  <p className="p-label">Origin</p>
                  {/* <img src="" alt="map" /> */}
                  <p className="p-value">Nhava Sheva(INNSA)</p>
                </div>
                <div
                  className="align-self-center"
                  style={{ position: "absolute", marginLeft: "376px" }}
                >
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
              <div className="col d-flex cargo-loc">
                <div className="align-self-center mx-2">
                  <img src={Location} alt="loc" />
                </div>
                <div>
                  <p className="p-label">Destination</p>
                  {/* <img src="" alt="map" /> */}
                  <p className="p-value">Jebel Ali(AEJEA)</p>
                </div>
              </div>
              <div className="col d-flex">
                <div className="align-self-center mx-2">
                  <img
                    src="https://www.fslgo.com/_next/static/media/cargo.8d7c215b.svg"
                    alt="loc"
                  />
                </div>
                <div>
                  <p className="p-label">Cargo</p>
                  <p className="p-value">LCL, 2 Unit | Total : 100KG, 5CBM</p>
                </div>
                <div className="align-self-center ms-auto cargo-search">
                  <SearchOutlined className="mt-1" />
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="row mt-5 ">
          <div className="col-3 Service-Included">
            <Card title="Service Included">
              <div className="Service-card">
                <p className="service-title">
                  Origin
                  <span
                    className="me-1"
                    style={{ float: "right", width: "16px", color: "#495a6e" }}
                  >
                    <ExpandLessIcon />
                  </span>
                </p>
                <p>
                  <Checkbox onChange={onChange}>Origin Charges</Checkbox>
                  <Tooltip
                    placement="topLeft"
                    title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
                  >
                    <span style={{ float: "right" }} role="button">
                      <img src={info} alt="more" />
                    </span>
                  </Tooltip>
                </p>
                <p>
                  <Checkbox onChange={onChange}>Export Clearance</Checkbox>
                  <Tooltip
                    placement="topLeft"
                    title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
                  >
                    <span style={{ float: "right" }} role="button">
                      <img src={info} alt="more" />
                    </span>
                  </Tooltip>
                </p>
                <p>
                  <Checkbox onChange={onChange}>Cargo Pickup</Checkbox>
                  <Tooltip
                    placement="topLeft"
                    title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
                  >
                    <span style={{ float: "right" }} role="button">
                      <img src={info} alt="more" />
                    </span>
                  </Tooltip>
                </p>
                <p>
                  <Checkbox onChange={onChange}>International Freight</Checkbox>
                  <Tooltip
                    placement="topLeft"
                    title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
                  >
                    <span style={{ float: "right" }} role="button">
                      <img src={info} alt="more" />
                    </span>
                  </Tooltip>
                </p>
              </div>
              <hr style={{ backgroundColor: "#f0f0f0", borderTop: "none" }} />
              <div className="Service-card">
                <p className="service-title">
                  Destination
                  <span
                    className="me-1"
                    style={{ float: "right", width: "16px", color: "#495a6e" }}
                  >
                    <ExpandLessIcon />
                  </span>
                </p>
                <p>
                  <Checkbox onChange={onChange}>Destination Charges</Checkbox>
                  <Tooltip
                    placement="topLeft"
                    title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
                  >
                    <span style={{ float: "right" }} role="button">
                      <img src={info} alt="more" />
                    </span>
                  </Tooltip>
                </p>
                <p>
                  <Checkbox onChange={onChange}>Import Clearance</Checkbox>
                  <Tooltip
                    placement="topLeft"
                    title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
                  >
                    <span style={{ float: "right" }} role="button">
                      <img src={info} alt="more" />
                    </span>
                  </Tooltip>
                </p>
                <p>
                  <Checkbox onChange={onChange}>Cargo Delivery</Checkbox>
                  <Tooltip
                    placement="topLeft"
                    title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
                  >
                    <span style={{ float: "right" }} role="button">
                      <img src={info} alt="more" />
                    </span>
                  </Tooltip>
                </p>
              </div>
              <hr style={{ backgroundColor: "#f0f0f0", borderTop: "none" }} />
              <div className="Service-card">
                <p className="service-title">
                  Value Added
                  <span
                    className="me-1"
                    style={{ float: "right", width: "16px" }}
                  >
                    <ExpandLessIcon />
                  </span>
                </p>
                <p>
                  <Checkbox onChange={onChange}>Cargo Insurance</Checkbox>
                  <Tooltip
                    placement="topLeft"
                    title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
                  >
                    <span style={{ float: "right" }} role="button">
                      <img src={info} alt="more" />
                    </span>
                  </Tooltip>
                </p>
              </div>
              <hr style={{ backgroundColor: "#f0f0f0", borderTop: "none" }} />
              <div className="Service-card">
                <p className="service-title">
                  Cargo Type
                  <span
                    className="me-1"
                    style={{ float: "right", width: "16px", color: "#495a6e" }}
                  >
                    <ExpandLessIcon />
                  </span>
                </p>
                <p>
                  <Checkbox onChange={onChange}>Stackable Cargo</Checkbox>
                  <Tooltip
                    placement="topLeft"
                    title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
                  >
                    <span style={{ float: "right" }} role="button">
                      <img src={info} alt="more" />
                    </span>
                  </Tooltip>
                </p>
                <p>
                  <Checkbox onChange={onChange}>Non Harzardous Cargo</Checkbox>
                  <Tooltip
                    placement="topLeft"
                    title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
                  >
                    <span style={{ float: "right" }} role="button">
                      <img src={info} alt="more" />
                    </span>
                  </Tooltip>
                </p>
              </div>
            </Card>
          </div>
          <div className="col-9">
            <Card className="tabs mb-2">
              <div className="row">
                <div className="col-9">
                  <Tabs
                    defaultActiveKey="1"
                    items={[
                      {
                        label: "All(0)",
                        key: "1",
                      },
                      {
                        label: "Ocean(0)",
                        key: "2",
                      },
                      {
                        label: "Air(0)",
                        key: "3",
                      },
                    ]}
                  ></Tabs>
                </div>
                <div className="col-1 align-self-center">
                  <div className="dropdown" style={{ width: "5%" }}>
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      USD
                    </button>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">LCL</li>
                      <li className="dropdown-item">FCL</li>
                      <li className="dropdown-item">Air</li>
                    </ul>
                  </div>
                </div>
                <div className="col-2 align-self-center">
                  <div className="dropdown" style={{ width: "5%" }}>
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      Low to High
                    </button>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">LCL</li>
                      <li className="dropdown-item">FCL</li>
                      <li className="dropdown-item">Air</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="cargo-pick mb-2">
              <div className="d-flex"></div>
            </Card>
            <Card className="track1 mb-2">
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{ fontSize: "15px" }}>
                    <img
                      src={Union}
                      className="pe-2 mb-1"
                      style={{ height: "12px" }}
                    />
                    <span
                      style={{
                        fontweight: "100",
                        fontSize: "15px",
                        lineHeight: "25px",
                        letterSpacing: "1%",
                      }}
                    >
                      Est.T/T
                    </span>
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
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "red",
                      fontWeight: "500",
                    }}
                  >
                    $300
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="track-btn">LCL</div>
                <div className="track-btn mx-2">Direct</div>
                <div className="track-btn">Cheapest</div>
                <div className="ms-auto align-self-center">
                  Validity : <b>16 May 2023</b>
                </div>
              </div>
              <div className="detail-card">
                <div>
                  <p>VESSEL</p>
                  <p className="p-value">X-PRESS ALTAIR</p>
                </div>
                <div>
                  <p>VOYAGE</p>
                  <p className="p-value">23017</p>
                </div>
                <div>
                  <p>CUT OFF</p>
                  <p className="p-value">19-May-2023</p>
                </div>
                <div>
                  <p>Depature Date</p>
                  <p className="p-value">23-May-2023</p>
                </div>
                <div>
                  <p>Arrival Date</p>
                  <p className="p-value">23-May-2023</p>
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
                          <td className="pickupcharge ps-4">Pickup Charges</td>
                          <td className="price-value">$55</td>
                        </tr>
                        <tr>
                          <td className="pickupcharge ps-4">B/L Issuance</td>
                          <td className="price-value">$45</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">
                            International Freight Charges
                          </td>
                          <td className="one">$80</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">Destination Charges</td>
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
                            {" "}
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
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={handleShowCharges}
                  >
                    {showCharges ? "Hide" : "Show"} Charges Breakdown
                  </p>
                </div>
                <div className="lock-btn ms-auto me-2">Lock Price at $50</div>
                <div className="book-btn">Book Now</div>
              </div>
            </Card>
            <Card className="track1 mb-2">
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{ fontSize: "15px" }}>
                    <img
                      src={Union}
                      className="pe-2 mb-1"
                      style={{ height: "12px" }}
                    />
                    <span
                      style={{
                        fontweight: "100",
                        fontSize: "15px",
                        lineHeight: "25px",
                        letterSpacing: "1%",
                      }}
                    >
                      Est.T/T
                    </span>
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
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "red",
                      fontWeight: "500",
                    }}
                  >
                    $300
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="track-btn">LCL</div>
                <div className="track-btn mx-2">Direct</div>
                <div className="track-btn">Cheapest</div>
                <div className="ms-auto align-self-center">
                  Validity : <b>16 May 2023</b>
                </div>
              </div>
              <div className="detail-card">
                <div>
                  <p>VESSEL</p>
                  <p className="p-value">X-PRESS ALTAIR</p>
                </div>
                <div>
                  <p>VOYAGE</p>
                  <p className="p-value">23017</p>
                </div>
                <div>
                  <p>CUT OFF</p>
                  <p className="p-value">19-May-2023</p>
                </div>
                <div>
                  <p>Depature Date</p>
                  <p className="p-value">23-May-2023</p>
                </div>
                <div>
                  <p>Arrival Date</p>
                  <p className="p-value">23-May-2023</p>
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
                          <td className="pickupcharge ps-4">Pickup Charges</td>
                          <td className="price-value">$55</td>
                        </tr>
                        <tr>
                          <td className="pickupcharge ps-4">B/L Issuance</td>
                          <td className="price-value">$45</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">
                            International Freight Charges
                          </td>
                          <td className="one">$80</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">Destination Charges</td>
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
                            {" "}
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
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={handleShowCharges}
                  >
                    {showCharges ? "Hide" : "Show"} Charges Breakdown
                  </p>
                </div>
                <div className="lock-btn ms-auto me-2">Lock Price at $50</div>
                <div className="book-btn">Book Now</div>
              </div>
            </Card>
            <Card className="track1 mb-2">
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{ fontSize: "15px" }}>
                    <img
                      src={Union}
                      className="pe-2 mb-1"
                      style={{ height: "12px" }}
                    />
                    <span
                      style={{
                        fontweight: "100",
                        fontSize: "15px",
                        lineHeight: "25px",
                        letterSpacing: "1%",
                      }}
                    >
                      Est.T/T
                    </span>
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
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "red",
                      fontWeight: "500",
                    }}
                  >
                    $300
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="track-btn">LCL</div>
                <div className="track-btn mx-2">Direct</div>
                <div className="track-btn">Cheapest</div>
                <div className="ms-auto align-self-center">
                  Validity : <b>16 May 2023</b>
                </div>
              </div>
              <div className="detail-card">
                <div>
                  <p>VESSEL</p>
                  <p className="p-value">X-PRESS ALTAIR</p>
                </div>
                <div>
                  <p>VOYAGE</p>
                  <p className="p-value">23017</p>
                </div>
                <div>
                  <p>CUT OFF</p>
                  <p className="p-value">19-May-2023</p>
                </div>
                <div>
                  <p>Depature Date</p>
                  <p className="p-value">23-May-2023</p>
                </div>
                <div>
                  <p>Arrival Date</p>
                  <p className="p-value">23-May-2023</p>
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
                          <td className="pickupcharge ps-4">Pickup Charges</td>
                          <td className="price-value">$55</td>
                        </tr>
                        <tr>
                          <td className="pickupcharge ps-4">B/L Issuance</td>
                          <td className="price-value">$45</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">
                            International Freight Charges
                          </td>
                          <td className="one">$80</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">Destination Charges</td>
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
                            {" "}
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
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={handleShowCharges}
                  >
                    {showCharges ? "Hide" : "Show"} Charges Breakdown
                  </p>
                </div>
                <div className="lock-btn ms-auto me-2">Lock Price at $50</div>
                <div className="book-btn">Book Now</div>
              </div>
            </Card>
            <Card className="track1 mb-2">
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{ fontSize: "15px" }}>
                    <img
                      src={Union}
                      className="pe-2 mb-1"
                      style={{ height: "12px" }}
                    />
                    <span
                      style={{
                        fontweight: "100",
                        fontSize: "15px",
                        lineHeight: "25px",
                        letterSpacing: "1%",
                      }}
                    >
                      Est.T/T
                    </span>
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
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "red",
                      fontWeight: "500",
                    }}
                  >
                    $300
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="track-btn">LCL</div>
                <div className="track-btn mx-2">Direct</div>
                <div className="track-btn">Cheapest</div>
                <div className="ms-auto align-self-center">
                  Validity : <b>16 May 2023</b>
                </div>
              </div>
              <div className="detail-card">
                <div>
                  <p>VESSEL</p>
                  <p className="p-value">X-PRESS ALTAIR</p>
                </div>
                <div>
                  <p>VOYAGE</p>
                  <p className="p-value">23017</p>
                </div>
                <div>
                  <p>CUT OFF</p>
                  <p className="p-value">19-May-2023</p>
                </div>
                <div>
                  <p>Depature Date</p>
                  <p className="p-value">23-May-2023</p>
                </div>
                <div>
                  <p>Arrival Date</p>
                  <p className="p-value">23-May-2023</p>
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
                          <td className="pickupcharge ps-4">Pickup Charges</td>
                          <td className="price-value">$55</td>
                        </tr>
                        <tr>
                          <td className="pickupcharge ps-4">B/L Issuance</td>
                          <td className="price-value">$45</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">
                            International Freight Charges
                          </td>
                          <td className="one">$80</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">Destination Charges</td>
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
                            {" "}
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
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={handleShowCharges}
                  >
                    {showCharges ? "Hide" : "Show"} Charges Breakdown
                  </p>
                </div>
                <div className="lock-btn ms-auto me-2">Lock Price at $50</div>
                <div className="book-btn">Book Now</div>
              </div>
            </Card>
            <Card className="track1 mb-2">
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{ fontSize: "15px" }}>
                    <img
                      src={Union}
                      className="pe-2 mb-1"
                      style={{ height: "12px" }}
                    />
                    <span
                      style={{
                        fontweight: "100",
                        fontSize: "15px",
                        lineHeight: "25px",
                        letterSpacing: "1%",
                      }}
                    >
                      Est.T/T
                    </span>
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
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "red",
                      fontWeight: "500",
                    }}
                  >
                    $300
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="track-btn">LCL</div>
                <div className="track-btn mx-2">Direct</div>
                <div className="track-btn">Cheapest</div>
                <div className="ms-auto align-self-center">
                  Validity : <b>16 May 2023</b>
                </div>
              </div>
              <div className="detail-card">
                <div>
                  <p>VESSEL</p>
                  <p className="p-value">X-PRESS ALTAIR</p>
                </div>
                <div>
                  <p>VOYAGE</p>
                  <p className="p-value">23017</p>
                </div>
                <div>
                  <p>CUT OFF</p>
                  <p className="p-value">19-May-2023</p>
                </div>
                <div>
                  <p>Depature Date</p>
                  <p className="p-value">23-May-2023</p>
                </div>
                <div>
                  <p>Arrival Date</p>
                  <p className="p-value">23-May-2023</p>
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
                          <td className="pickupcharge ps-4">Pickup Charges</td>
                          <td className="price-value">$55</td>
                        </tr>
                        <tr>
                          <td className="pickupcharge ps-4">B/L Issuance</td>
                          <td className="price-value">$45</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">
                            International Freight Charges
                          </td>
                          <td className="one">$80</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">Destination Charges</td>
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
                            {" "}
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
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={handleShowCharges}
                  >
                    {showCharges ? "Hide" : "Show"} Charges Breakdown
                  </p>
                </div>
                <div className="lock-btn ms-auto me-2">Lock Price at $50</div>
                <div className="book-btn">Book Now</div>
              </div>
            </Card>
            <Card className="track1 mb-2">
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{ fontSize: "15px" }}>
                    <img
                      src={Union}
                      className="pe-2 mb-1"
                      style={{ height: "12px" }}
                    />
                    <span
                      style={{
                        fontweight: "100",
                        fontSize: "15px",
                        lineHeight: "25px",
                        letterSpacing: "1%",
                      }}
                    >
                      Est.T/T
                    </span>
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
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "red",
                      fontWeight: "500",
                    }}
                  >
                    $300
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="track-btn">LCL</div>
                <div className="track-btn mx-2">Direct</div>
                <div className="track-btn">Cheapest</div>
                <div className="ms-auto align-self-center">
                  Validity : <b>16 May 2023</b>
                </div>
              </div>
              <div className="detail-card">
                <div>
                  <p>VESSEL</p>
                  <p className="p-value">X-PRESS ALTAIR</p>
                </div>
                <div>
                  <p>VOYAGE</p>
                  <p className="p-value">23017</p>
                </div>
                <div>
                  <p>CUT OFF</p>
                  <p className="p-value">19-May-2023</p>
                </div>
                <div>
                  <p>Depature Date</p>
                  <p className="p-value">23-May-2023</p>
                </div>
                <div>
                  <p>Arrival Date</p>
                  <p className="p-value">23-May-2023</p>
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
                          <td className="pickupcharge ps-4">Pickup Charges</td>
                          <td className="price-value">$55</td>
                        </tr>
                        <tr>
                          <td className="pickupcharge ps-4">B/L Issuance</td>
                          <td className="price-value">$45</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">
                            International Freight Charges
                          </td>
                          <td className="one">$80</td>
                        </tr>
                        <tr className="header">
                          <td className="origincharge">Destination Charges</td>
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
                            {" "}
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
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={handleShowCharges}
                  >
                    {showCharges ? "Hide" : "Show"} Charges Breakdown
                  </p>
                </div>
                <div className="lock-btn ms-auto me-2">Lock Price at $50</div>
                <div className="book-btn">Book Now</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindNewRate;
