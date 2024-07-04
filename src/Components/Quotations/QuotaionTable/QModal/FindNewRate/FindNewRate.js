import React, { useEffect } from "react";
import { Card, Checkbox } from "antd";
import "./FindNewRate.css";
import ShipmentTracker from "./ShipmentTracker";
import info from "../../../../../assets/Info.svg";
import { Tooltip } from "antd";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const FilterCheckbox = ({ label, tooltipText, onChange }) => {
    return (
      <div className="filter-quotation">
        <div className="filter-quotation-wrapper">
          <div className="singlefilter-leftstyling">
            <div className="div-rowcentered">
              <Checkbox onChange={onChange}>{label}</Checkbox>
            </div>
            <div
              className="div-rowcentered"
              style={{ justifyContent: "flex-start" }}
            >
              <Tooltip placement="topLeft" title={tooltipText}>
                <span style={{ float: "right" }} role="button">
                  <img src={info} alt="more" />
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const item1 = [
    {
      key: "1",
      label: "Origin",
      children: (
        <>
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Origin Charges"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Export Clearance"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Cargo Pickup"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="International Freight"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
          </div>
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
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Destination Charges"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Import Clearance"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Cargo Delivery"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
          </div>
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
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Cargo Insurance"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
          </div>
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
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Stackable Cargo"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Non Harzardous Cargo"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
          </div>
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
