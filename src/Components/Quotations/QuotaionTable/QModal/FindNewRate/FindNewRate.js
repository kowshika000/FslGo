import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Checkbox, Popover, Image } from "antd";
import "./FindNewRate.css";
import ShipmentTracker from "./ShipmentTracker";
import info from "../../../../../assets/Info.svg";
import { Tooltip } from "antd";
import QuoteRequest from "./QuoteRequest";
import { Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import CargoPickupPopOver from "./CargoPickupPopOver";
import pencil from "../../../../../assets/Pencil.svg";

function FindNewRate() {
  const [checkedItems, setCheckedItems] = useState({
    originCharges: false,
    exportClearance: false,
    cargoPickup: false,
    internationalFreight: false,
  });
  const onChange = (e) => {
    const { value, checked } = e.target;
    setCheckedItems({
      ...checkedItems,
      [value]: checked,
    });
    console.log(`checked = ${checked}, value = ${value}`);
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
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [checkedItems]);

  const imageRef = useRef(null);

  if (imageRef.current) {
    const mask = imageRef.current.querySelector(".ant-image-mask");
    if (mask) {
      mask.remove();
    }
  }

  const FilterCheckbox = ({ label, tooltipText, onChange, value, checked }) => {
    return (
      <div className="filter-quotation">
        {value === "cargoPickup" && checkedItems.cargoPickup && (
          <div className="dimmed-background"></div>
        )}
        <div className="filter-quotation-wrapper">
          <div className="singlefilter-leftstyling">
            <div className="div-rowcentered">
              <Checkbox onChange={onChange} value={value} checked={checked}>
                {label}
              </Checkbox>
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
          {value === "cargoPickup" && checkedItems.cargoPickup && (
            <div className="div-rowcentered justify-atstart displaycheckbox-value">
              <Popover
                placement="bottom"
                content={CargoPickupPopOver}
                open={true}
              >
                <Button type="link" className="editpencil-btn">
                  <Image src={pencil} alt="pencil" />
                </Button>
              </Popover>
            </div>
          )}
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
              checked={checkedItems.originCharges}
              value="originCharges"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Export Clearance"
              checked={checkedItems.exportClearance}
              value="exportClearance"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Cargo Pickup"
              checked={checkedItems.cargoPickup}
              value="cargoPickup"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="International Freight"
              value="internationalFreight"
              checked={checkedItems.internationalFreight}
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
