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
import { Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

function FindNewRate() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChangeCollapse = (key) => {
    console.log(key);
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
  const item1 = [
    {
      key: "1",
      label: "Origin",
      children: (
        <>
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
        </>
      ),
    },
  ];
  const item2 = [
    {
      key: "1",
      label: "Destination",
      children: (
        <>
          {" "}
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
        </>
      ),
    },
  ];
  const item3 = [
    {
      key: "1",
      label: "Value Added",
      children: (
        <>
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
        </>
      ),
    },
  ];
  const item4 = [
    {
      key: "1",
      label: "Cargo Type",
      children: (
        <>
          {" "}
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
        </>
      ),
    },
  ];

  const customExpandIcon = ({ isActive }) =>
    isActive ? <UpOutlined /> : <DownOutlined />;

  return (
    <div
      style={{
        Width: "100%",
        minWidth: "1255px",
        padding: "20px",
        backgroundColor: "#f3f5f7",
        marginTop: "100px",
      }}
    >
      <div className="quotationresult-div mx-auto">
        <div className="quotationresult-leftdiv" style={{ flex: "0 0 272px" }}>
          <Card title="Service Included">
            <div className="Service-card">
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item1}
                style={{ borderBottom: "1px solid #F3F5F7" }}
              />
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item2}
                style={{ borderBottom: "1px solid #F3F5F7" }}
              />
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item3}
                style={{ borderBottom: "1px solid #F3F5F7" }}
              />
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item4}
                style={{ borderBottom: "1px solid#F3F5F7" }}
              />
            </div>
          </Card>
        </div>
        <div className="quotationresult-leftdiv" style={{ flex: "1 1 auto" }}>
          <ShipmentTracker Details={Details} />
          {/* <QuoteRequest /> */}
        </div>
      </div>
    </div>
  );
}

export default FindNewRate;
