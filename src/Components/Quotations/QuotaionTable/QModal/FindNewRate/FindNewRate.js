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
import CargoDeliveryPopOver from "./CargoDeliveryPopOver";
import pencil from "../../../../../assets/Pencil.svg";
import img from "../../../../../assets/thumbsgr.svg";
import uparrow from "../../../../../assets/uparrowcargo.svg"

function FindNewRate() {
  const [checkedItems, setCheckedItems] = useState({
    originCharges: false,
    exportClearance: false,
    cargoPickup: false,
    internationalFreight: false,
    DestinationCharges: false,
    ImportClearance: false,
    CargoDelivery: false,
    CargoInsurance: false,
    StackableCargo: false,
    NonHarzardousCargo: false,
  });
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [isDeliveryPopoverOpen, setDeliveryPopoverOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDeliveryValue, setSelectedDeliveryValue] = useState("");
  const onChange = (e) => {
    const { name, checked } = e.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
    if (name === "cargoPickup") {
      setPopoverOpen(checked);
    }
    if (name === "CargoDelivery") {
      setDeliveryPopoverOpen(checked);
    }
  };

  const onChangeCollapse = (key) => {
    console.log(key);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(`selectedjhgfds ${selectedValue}`);

  const FilterCheckbox = ({
    label,
    tooltipText,
    onChange,
    value,
    checked,
    children,
    vname,
    disabled,
    defaultChecked,
  }) => {
    const handlePopoverOpenChange = (open) => {
      setPopoverOpen(open);
    };
    const handleDeliveryPopoverOpenChange = (open) => {
      setDeliveryPopoverOpen(open);
    };

    return (
      <div className="filter-quotation">
        {(value === "cargoPickup" || value === "CargoDelivery") &&
          checked &&
          (isPopoverOpen || isDeliveryPopoverOpen) && (
            <>
              <div className="dimmed-background"></div>
            </>
          )}
        <div className="filter-quotation-wrapper">
          <div className="singlefilter-leftstyling">
            <div className="div-rowcentered">
              <Checkbox
                onChange={onChange}
                value={value}
                checked={checked}
                name={vname}
                disabled={disabled}
                defaultChecked={defaultChecked}
              >
                {label}
                {children}
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
          {(value === "cargoPickup" || value === "CargoDelivery") &&
            checked && (
              <div
                className="div-rowcentered justify-atstart displaycheckbox-value"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {!isPopoverOpen && !isDeliveryPopoverOpen && (
                  <h6
                    style={{
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "18px",
                      letterSpacing: "1%",
                      color: "#384656",
                      marginBottom: "0px",
                    }}
                  >
                    ZIP Code :&nbsp;&nbsp;
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "13px",
                        lineHeight: "19px",
                        color: "#384656",
                        letterSpacing: "1%",
                      }}
                    >
                      {value === "cargoPickup"
                        ? selectedValue
                        : selectedDeliveryValue}
                    </span>
                  </h6>
                )}
                <Popover
                  placement="bottom"
                  content={
                    value === "cargoPickup" ? (
                      <CargoPickupPopOver
                        setSelectedValue={setSelectedValue}
                        setPopoverOpen={setPopoverOpen}
                      />
                    ) : (
                      <CargoDeliveryPopOver
                        setSelectedValue={setSelectedDeliveryValue}
                        setPopoverOpen={setDeliveryPopoverOpen}
                      />
                    )
                  }
                  open={
                    value === "cargoPickup"
                      ? isPopoverOpen
                      : isDeliveryPopoverOpen
                  }
                  onOpenChange={
                    value === "cargoPickup"
                      ? handlePopoverOpenChange
                      : handleDeliveryPopoverOpenChange
                  }
                  trigger="click"
                >
                  <Button
                    type="link"
                    className={`editpencil-btn ${
                      (selectedValue || selectedDeliveryValue) &&
                      !isPopoverOpen &&
                      !isDeliveryPopoverOpen
                        ? "ms-auto"
                        : ""
                    }`}
                    style={{
                      position: "relative",
                      width: "20.6px",
                      height: "32px",
                      bordeRadius: "6px",
                      padding: "1px",
                    }}
                    onClick={() => {
                      if (value === "cargoPickup") {
                        setPopoverOpen(true);
                      } else if (value === "CargoDelivery") {
                        setDeliveryPopoverOpen(true);
                      }
                    }}
                  >
                    <Image src={pencil} alt="pencil" preview={false} />
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
              vname="originCharges"
              checked={checkedItems.originCharges}
              value="originCharges"
              tooltipText="This includes Origin documentation, Port/Airport handling."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Export Clearance"
              checked={checkedItems.exportClearance}
              value="exportClearance"
              vname="exportClearance"
              tooltipText="Charges for filing with Export customs."
              onChange={onChange}
            >
              <span>
                <img src={img} alt="icon" className="ms-2 mb-1" />
              </span>
            </FilterCheckbox>
            <FilterCheckbox
              label="Cargo Pickup"
              checked={checkedItems.cargoPickup}
              value="cargoPickup"
              vname="cargoPickup"
              tooltipText="Transportation from factory/warehouse to Port/Airport."
              onChange={onChange}
            />
            <FilterCheckbox
              label="International Freight"
              value="internationalFreight"
              vname="internationalFreight"
              // checked={checkedItems.internationalFreight}
              tooltipText="Transportation from Origin port to Destination port."
              onChange={onChange}
              defaultChecked={true}
              disabled={true}
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
              checked={checkedItems.DestinationCharges}
              value="DestinationCharges"
              vname="DestinationCharges"
              tooltipText="This includes destination documentation, Port/Airport handling."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Import Clearance"
              checked={checkedItems.ImportClearance}
              value="ImportClearance"
              vname="ImportClearance"
              tooltipText="Charges only for Import clearance, duties and taxes will be billed as per receipt."
              onChange={onChange}
            >
              <span>
                <img src={img} alt="icon" className="ms-2 mb-1" />
              </span>
            </FilterCheckbox>
            <FilterCheckbox
              label="Cargo Delivery"
              checked={checkedItems.CargoDelivery}
              value="CargoDelivery"
              vname="CargoDelivery"
              tooltipText="Transportation from Port/Airport to Factory/Warehouse."
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
              checked={checkedItems.CargoInsurance}
              value="CargoInsurance"
              vname="CargoInsurance"
              tooltipText="Insurance that generally protects shipments from loss, damage, or theft while in transit. The cargo insurance coverage includes events mentioned in the policy like vehicle accidents, cargo renunciation, damage due to natural calamities, acts of war, piracy, etc."
              onChange={onChange}
            >
              <span>
                <img src={img} alt="icon" className="ms-2 mb-1" />
              </span>
            </FilterCheckbox>
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
              checked={checkedItems.StackableCargo}
              value="StackableCargo"
              vname="StackableCargo"
              tooltipText="Cargo will be stacked. If your cargo is non-stackable rates will change."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Non Harzardous Cargo"
              checked={checkedItems.NonHarzardousCargo}
              value="NonHarzardousCargo"
              vname="NonHarzardousCargo"
              tooltipText="Cargo should not have any hazardous substances. Cargo is not corrosive, toxic, flammable, or reactive and does not require a warning label."
              onChange={onChange}
            />
          </div>
        </>
      ),
    },
  ];

  const customExpandIcon = ({ isActive }) =>
    isActive ? <Image src={uparrow} alt="arrow"/> : <DownOutlined />;

  return (
    <div
      style={{
        Width: "100%",
        minWidth: "1255px",
        padding: "20px",
        backgroundColor: "#f3f5f7",
        // marginTop: "100px",
      }}
    >
      <div className="quotationresult-div mx-auto">
        <div
          className="quotationresult-leftdiv"
          style={{ flex: "0 0 272px", height: "100vh" }}
        >
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
          <ShipmentTracker />
          {/* <QuoteRequest /> */}
        </div>
      </div>
    </div>
  );
}

export default FindNewRate;
