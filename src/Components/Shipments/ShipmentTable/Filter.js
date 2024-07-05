import React, { useState } from "react";
import { Drawer, Select, Input, Button, DatePicker } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";

const FilterDrawer = ({ visible, onClose }) => {
  const [focused, setFocused] = useState(null);
  return (
    <Drawer
      title="Filters"
      placement="right"
      closable={true}
      onClose={onClose}
      open={visible}
      width="378px"
      style={{
        borderRadius: "8px 0 0 0",
        backgroundColor: "rgb(248, 250, 252)",
      }}
      closeIcon={
        <CloseOutlined
          style={{
            fontSize: "12px",
            color: "#000",
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            borderRadius: "4px",
            padding:"6px"
            
          }}
          className="mx-auto"
        />
      }
    >
      <div>
        <div
          className="div-colaligned justify-content-between height-full"
          style={{ backgroundColor: "white" }}
        >
          <div
            className="ant-row allfilters-container css-1vr7spz "
            style={{ rowGap: "20px" }}
          >
            <div className="ant-col ant-col-24 css-1vr7spz">
              <div className="div-colaligned gap-4 filter-section">
                <span className="filter-heading">Booking ID</span>
                <Input
                  className={`filter-wrapper ${
                    focused === "booking" ? "focused-border" : ""
                  } filter-heading`}
                  size="large"
                  style={{ height: "50px", fontSize: "14px" }}
                  placeholder="Type here"
                  prefix={
                    <img src="https://www.fslgo.com/_next/static/media/bookingid.8055f8f1.svg" />
                  }
                  onBlur={() => setFocused(null)}
                  onFocus={() => setFocused("booking")}
                />
              </div>
            </div>
            <div className="ant-col ant-col-24 css-1vr7spz">
              <div className="quotation-filters div-colaligned gap-4">
                <span className="filter-heading">Mode</span>
                <div
                  className={`filter-wrapper ${
                    focused === "mode" ? "focused-border" : ""
                  }`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    padding: "4px 11px",
                    height: "50px",
                  }}
                >
                  <img src="https://www.fslgo.com/_next/static/media/pullicon.8a2f56ed.svg" />
                  <Select
                    style={{ width: "100%", border: "none"}}
                    placeholder="Select type"
                    prefixCls=""
                    className="filter-heading"
                    suffixIcon={
                      <CaretDownOutlined
                        style={{ fontSize: "16px", color: "#000" }}
                      />
                    }
                    options={[
                      {
                        value: "FSC (Full Container Load)",
                        label: "FSC (Full Container Load)",
                      },
                      {
                        value: "LSC (Less Container Load)",
                        label: "LSC (Less Container Load)",
                      },
                      { value: "AIR", label: "AIR" },
                    ]}
                    onFocus={() => setFocused("mode")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>
            </div>
            <div className="ant-col ant-col-24 css-1vr7spz">
              <div className="quotation-filters div-colaligned gap-4 quotation-datepicker">
                <span className="filter-heading">ETD</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    padding: "4px 11px",
                    height: "50px",
                  }}
                  className={`filter-wrapper ${
                    focused === "etd" ? "focused-border" : ""
                  }`}
                >
                  <img src="https://www.fslgo.com/_next/static/media/filtercalendar.6dba3ae4.svg" />
                  <DatePicker
                    style={{ width: "100%" }}
                    className="filter-heading"
                    suffixIcon={
                      <CaretDownOutlined
                        style={{ fontSize: "16px", color: "#000" }}
                        onFocus={() => setFocused("etd")}
                        onBlur={() => setFocused(null)}
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="ant-col ant-col-24 css-1vr7spz">
              <div className="quotation-filters div-colaligned gap-4 quotation-datepicker">
                <span className="filter-heading">ETA</span>
                <div
                  className={`filter-wrapper ${
                    focused === "eta" ? "focused-border" : ""
                  }`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    padding: "4px 11px",
                    height: "50px",
                  }}
                >
                  <img src="https://www.fslgo.com/_next/static/media/filtercalendar.6dba3ae4.svg" />
                  <DatePicker
                    style={{ width: "100%" }}
                    className="filter-heading"
                    suffixIcon={
                      <CaretDownOutlined
                        style={{ fontSize: "16px", color: "#000" }}
                        onFocus={() => setFocused("eta")}
                        onBlur={() => setFocused(null)}
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="ant-col ant-col-24 css-1vr7spz">
              <div className="quotation-filters div-colaligned gap-4">
                <span className="filter-heading">Origin</span>
                <div
                  className={`filter-wrapper ${
                    focused === "origin" ? "focused-border" : ""
                  }`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    padding: "4px 11px",
                    height: "50px",
                  }}
                >
                  <img
                    src="https://www.fslgo.com/_next/static/media/filterlocation.5ae0235b.svg"
                    height="26px"
                    width="26px"
                  />
                  <Select
                    className="filter-heading"
                    style={{ width: "100%", border: "none" }}
                    placeholder="Enter Sea/Air port, City or Zip Code"
                    suffixIcon=""
                    onFocus={() => setFocused("origin")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>
            </div>
            <div className="ant-col ant-col-24 css-1vr7spz">
              <div className="quotation-filters div-colaligned gap-4">
                <span className="filter-heading">Destination</span>
                <div
                  className={`filter-wrapper ${
                    focused === "destination" ? "focused-border" : ""
                  }`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    padding: "4px 11px",
                    height: "50px",
                  }}
                >
                  <img
                    src="https://www.fslgo.com/_next/static/media/filterlocation.5ae0235b.svg"
                    height="26px"
                    width="26px"
                  />
                  <Select
                    className="filter-heading"
                    style={{ width: "100%", border: "none" }}
                    placeholder="Enter Sea/Air port, City or Zip Code"
                    suffixIcon=""
                    onFocus={() => setFocused("destination")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            borderTop: "1px solid rgba(5, 5, 5, 0.06)",
          }}
          className="p-3"
        >
          <Button
            type=""
            style={{ height: "40px", padding: "6.4px 15px", fontSize: "16px" }}
          >
            Click Filter
          </Button>
          <Button
            type="primary"
            style={{
              height: "40px",
              padding: "6.4px 15px",
              fontSize: "16px",
              backgroundColor: "red",
            }}
            className="ms-2 "
          >
            Apply
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterDrawer;
