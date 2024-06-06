import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Booking.css";

export const SearchHeader = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  
  const handleUpcomingDep=()=>{
    setSelectedButton(true)
  }
  const handleUpcomingArr=()=>{
    setSelectedButton(true)
  }
  return (
    <Row
      justify="space-between"
      className="w-full mb-3"
      style={{ backgroundColor: "white" }}
    >
      <Col>
        <Input
          placeholder="Search booking id , origin, destination... "
          prefix={<SearchOutlined style={{ color: "#94A2B2" }} />}
          style={{
            width: "368.13px",
            padding: "4px 11px",
            borderRadius: "4px",
          }}
          // value={globalFilterValue}
          // onChange={onGlobalFilterChange}
        />
      </Col>
      <Col className="d-flex " >
        <div className="d-flex  justify-content-end ">
          <button
            className={`${
              selectedButton === "Upcoming Departures" ? "selected" : ""
            } upcoming-dep me-2 `}
              onClick={handleUpcomingDep}
          >
            Upcoming Departures
          </button>
          <button
            className={`${
              selectedButton === "Upcoming Arrivals" ? "  selected" : ""
            } upcoming-dep me-2`}
              onClick={handleUpcomingArr}
          >
            Upcoming Arrivals
          </button>
        </div>
      </Col>
    </Row>
  );
};
