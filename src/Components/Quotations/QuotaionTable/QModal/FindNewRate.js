import React, { useState } from "react";
import Navbar from "../../../Layout/Navbar";
import { Card, Checkbox, Tabs } from "antd";
import "./FindNewRate.css";
import Location from "../../../../assets/location.svg";
import Union from "../../../../assets/Union.png";
import info from "../../../../assets/Info.svg";
import { Tooltip } from "antd";
import arrow from "../../../../assets/arrow.png";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Search from "../../../../assets/Search.png";
import img from "../../../../assets/Framethumbs.png";
import icon from "../../../../assets/Group 2057.png";
import Line from "../../../../assets/Line 3.png";
import Vector from "../../../../assets/logoc.png";
import flow from "../../../../assets/flowlogo.png";
import Cargo from "../../../../assets/Cargoiocn.png";
import Share from "../../../../assets/Share.png";

function FindNewRate() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const Details = [
    {
      id: "0",
      Vessel: "X-PRESS ALTAIR",
      Voyage: "23017",
      Cutoff: "19-May-2023",
      Departure: "23-May-2023",
      Arrival: "23-May-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$300",
    },
    {
      id: "1",
      Vessel: "NORTHERN DEDICATION",
      Voyage: "2308",
      Cutoff: "20-May-2023",
      Departure: "24-May-2023",
      Arrival: "30-May-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$320",
    },
    {
      id: "2",
      Vessel: "NORTHERN PRACTISE",
      Voyage: "41",
      Cutoff: "24-May-2023",
      Departure: "28-May-2023",
      Arrival: "30-May-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$350",
    },
    {
      id: "3",
      Vessel: "MONTPELLIER",
      Voyage: "23005E",
      Cutoff: "27-May-2023",
      Departure: "31-May-2023",
      Arrival: "06-Jun-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$380",
    },
  ];
  const [showCharges, setShowCharges] = useState(false);

  const handleShowCharges = (index) => {
    setShowCharges(!showCharges);
  };
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#F8FAFC" }}>
      <div style={{ backgroundColor: "white" }}>
        <div
          style={{ maxWidth: "1255px", padding: "26px 0px 20px 0px" }}
          className="mx-auto"
        >
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
                    <img src={Search} alt="search p-2" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div>
        <div style={{ maxWidth: "1255px" }} className="mx-auto">
          <div className="row mt-4">
            <div className="col-3 Service-Included">
              <Card title="Service Included">
                <div className="Service-card">
                  <p className="service-title">
                    Origin
                    <span
                      className="me-1"
                      style={{
                        float: "right",
                        width: "16px",
                        color: "#495a6e",
                      }}
                    >
                      <ExpandLessIcon />
                    </span>
                  </p>
                  <p className="checkbox-p">
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
                    <Checkbox onChange={onChange}>
                      Export Clearance
                      <span>
                        <img src={img} alt="icon" className="ms-2 mb-1" />
                      </span>
                    </Checkbox>
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
                    <Checkbox onChange={onChange}>
                      International Freight
                    </Checkbox>
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
                <div className="Service-card">
                  <p className="service-title">
                    Destination
                    <span
                      className="me-1"
                      style={{
                        float: "right",
                        width: "16px",
                        color: "#495a6e",
                      }}
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
                    <Checkbox onChange={onChange}>
                      Import Clearance
                      <span>
                        <img src={img} alt="icon" className="ms-2 mb-1" />
                      </span>
                    </Checkbox>
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
                <div className="Service-card mt-2">
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
                    <Checkbox onChange={onChange}>
                      Cargo Insurance
                      <span>
                        <img src={img} alt="icon" className="ms-2 mb-1" />
                      </span>
                    </Checkbox>
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
                <div className="Service-card mt-2">
                  <p className="service-title">
                    Cargo Type
                    <span
                      className="me-1"
                      style={{
                        float: "right",
                        width: "16px",
                        color: "#495a6e",
                      }}
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
                    <Checkbox onChange={onChange}>
                      Non Harzardous Cargo
                    </Checkbox>
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
                      {/* <ul>
                        <li className="dropdown-item">LCL</li>
                        <li className="dropdown-item">FCL</li>
                        <li className="dropdown-item">Air</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="cargo-pick mb-2">
                <div className="d-flex justify-content-between align-items-center">
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
                    <p className="m-0 cargo-pickup-p">Nhava Sheva</p>
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
                      <img src={Union} alt="union" className="mb-2" />
                    </span>
                    <span style={{ height: "10px" }}>
                      <img src={flow} alt="flow" />
                      <img src={flow} alt="flow" />
                    </span>
                  </div>
                  <div>
                    <p className="m-0 cargo-pickup-p">Jebel Ali</p>
                  </div>
                  <div style={{ opacity: "40%" }}>
                    <img src={Line} alt="line" />
                    <img src={Vector} alt="car" className="mx-2" />
                    <img src={Line} alt="line" />
                  </div>
                  <div>
                    <p
                      className="m-0 cargo-pickup-p"
                      style={{ opacity: "40%" }}
                    >
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
              {Details.map((data, index) => (
                <Card className="track1 mb-2" key={index}>
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
                        {data.TotalPrice}
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
                      <p className="p-value">{data.Vessel}</p>
                    </div>
                    <div>
                      <p className="card-label">VOYAGE</p>
                      <p className="p-value">{data.Voyage}</p>
                    </div>
                    <div>
                      <p className="card-label">CUT OFF</p>
                      <p className="p-value">{data.Cutoff}</p>
                    </div>
                    <div>
                      <p className="card-label">Depature Date</p>
                      <p className="p-value">{data.Departure}</p>
                    </div>
                    <div>
                      <p className="card-label">Arrival Date</p>
                      <p className="p-value">{data.Arrival}</p>
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
                          fontSize:"14px",
                          lineHeight:"24px",
                          letterSpacing:"1%",
                          fontWeight:"400",
                          textAlign:"center"
                        }}
                        onClick={() => handleShowCharges(index)}
                      >
                        {showCharges ? "Hide" : "Show"} Charges Breakdown
                      </p>
                    </div>
                    <div className="lock-btn ms-auto me-2">
                      Lock Price at {data.Price}
                    </div>
                    <div className="book-btn">Book Now</div>
                  </div>
                </Card>
              ))}
              <hr />
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
                        10 Days
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
                      $306
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
                <div className="cardl">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="cargo-pickup-p">
                      <img src={icon} alt="icon" className="me-1" />
                      3150,Chennai
                    </div>
                    <div>
                      <img src={Line} alt="line" />
                      <img src={Vector} alt="car" className="mx-2" />
                      <img src={Line} alt="line" />
                    </div>
                    <div>
                      <p className="m-0 cargo-pickup-p">MAA</p>
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
                        <img src={Union} alt="union" className="mb-2" />
                      </span>
                      <span style={{ height: "10px" }}>
                        <img src={flow} alt="flow" />
                        <img src={flow} alt="flow" />
                      </span>
                    </div>
                    <div>
                      <p className="m-0 cargo-pickup-p">NGB</p>
                    </div>
                    <div>
                      <img src={Line} alt="line" />
                      <img src={Vector} alt="car" className="mx-2" />
                      <img src={Line} alt="line" />
                    </div>
                    <div>
                      <p className="m-0 cargo-pickup-p">
                        <img
                          src={Cargo}
                          alt="cargo"
                          className="me-1 mb-1"
                          style={{ width: "13px", height: "17px" }}
                        />
                        1007,Shanghai
                      </p>
                    </div>
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
    </div>
  );
}

export default FindNewRate;
