import React, { useState, useEffect } from "react";
import { Tabs, Row, Col } from "antd";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
// import AllBookings from "./AllBookings";
import "../../Shipments/ShipBookingTabs.css";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import QuotationTable from "./QuotationTable";

const QuotationTabs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeKey, setActiveKey] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const [showText, setShowText] = useState(false);
  let schedule;

  const [filteredData, setFilteredData] = useState(data);
  const filterData = (status) => {
    if (status === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => status.includes(item.status)));
    }
  };

  useEffect(() => {
    const newFilteredData = data.filter((item) =>
      item.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(newFilteredData);
  }, [searchQuery, data]);

  const onChange = (key) => {
    setActiveKey(key);
    switch (key) {
      case "1":
        filterData(["All"]);
        setCurrentPage(1)
        break;
      case "2":
        filterData(["Active"]);
        setCurrentPage(1)
        break;
      case "3":
        filterData(["Booked"]);
        setCurrentPage(1)
        break;
      case "4":
        filterData(["Expired"]);
        setCurrentPage(1)
        break;
      case "5":
        filterData(["Requested "]);
        setCurrentPage(1)
        break;
      default:
        filterData(["All"]);
        setCurrentPage(1)
    }
  };

  return (
    <div
      className="mx-auto mt-5 "
      style={{
        minWidth: "1255px",
        borderRadius: "8px",
      }}
    >
      <Row className="border" style={{ borderRadius: "8px" }}>
        <Col span={24} style={{ backgroundColor: "#F8FAFC" }}>
          <Row justify="space-between" style={{ height: "57px" }}>
            <Col span={20}>
              <Tabs activeKey={activeKey} onChange={onChange}>
                <Tabs.TabPane tab={`All Bookings ()`} key="1" />
                <Tabs.TabPane tab={`Active ()`} key="2" />
                <Tabs.TabPane tab={`Booked ()`} key="3" />
                <Tabs.TabPane tab={`Expired ()`} key="4" />
                <Tabs.TabPane tab={`Requested ()`} key="5" />
              </Tabs>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ padding: "20px", backgroundColor: "white" }}>
          <QuotationTable
            filterData={filteredData}
            selectedStatus={filterData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Col>
      </Row>
    </div>
  );
};

export default QuotationTabs;
