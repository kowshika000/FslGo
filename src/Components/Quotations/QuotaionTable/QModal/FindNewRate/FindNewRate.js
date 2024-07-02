import React, { useState } from "react";
import Navbar from "../../../../Layout/Navbar";
import { Card, Checkbox } from "antd";
import "./FindNewRate.css";
import ShipmentTracker from "./ShipmentTracker";
import Location from "../../../../../assets/location.svg";
import info from "../../../../../assets/Info.svg";
import { Tooltip } from "antd";
import arrow from "../../../../../assets/arrow.png";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Search from "../../../../../assets/Search.png";
import img from "../../../../../assets/Framethumbs.png";
import QuoteRequest from "./QuoteRequest";

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
    {
      id: "4",
      Vessel: "MONTPELLIER",
      Voyage: "23005E",
      Cutoff: "27-May-2023",
      Departure: "31-May-2023",
      Arrival: "06-Jun-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$380",
    },
    {
      id: "5",
      Vessel: "MONTPELLIER",
      Voyage: "23005E",
      Cutoff: "27-May-2023",
      Departure: "31-May-2023",
      Arrival: "06-Jun-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$380",
    },
    {
      id: "6",
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

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#F8FAFC",Width:"100%",minWidth:"1255px"}} >
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
            <div className="col-3 Service-Included mb-3">
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
              <ShipmentTracker Details={Details}/>
              {/* <QuoteRequest /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindNewRate;
