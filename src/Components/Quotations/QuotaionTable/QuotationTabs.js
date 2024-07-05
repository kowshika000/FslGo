import React, { useState, useEffect } from "react";
import { Tabs, Row, Col } from "antd";
import "../../Shipments/ShipBookingTabs.css";
import { useSelector } from "react-redux";
import QuotationTable from "./QuotationTable";

const QuotationTabs = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState("Past 30 Days");
  const quotationData = useSelector((state) => state?.QuotationList?.Quotation);

  const filterData = (status) => {
    const dataa = data.filter((item) => status.includes(item.status));
    console.log(dataa, "selectstatus");
    if (status === "All") {
      setFilteredData(data);
      setSelectedStatus("All");
    } else {
      setFilteredData(dataa);
      setSelectedStatus(status);
    }
  };

  useEffect(() => {
    if (quotationData && quotationData?.data) {
      setData(quotationData?.data);
    }
  }, [quotationData]);

  useEffect(() => {
    setActiveKey("1");
    filterData("All");
  }, [selectedDropdownItem]);

  const onChange = (key) => {
    setActiveKey(key);
    switch (key) {
      case "1":
        filterData("All");
        setCurrentPage(1);
        break;
      case "2":
        filterData(["Active"]);
        setCurrentPage(1);
        break;
      case "3":
        filterData(["Booked"]);
        setCurrentPage(1);
        break;
      case "4":
        filterData(["Expired"]);
        setCurrentPage(1);
        break;
      case "5":
        filterData(["Requested"]);
        setCurrentPage(1);
        break;
      default:
        filterData("All");
        setCurrentPage(1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const tabs = [
    { label: `All Bookings (${data?.length})`, key: "1" },
    {
      label: `Active (${
        filteredData.filter((item) => item.status === "Active").length
      })`,
      key: "2",
    },
    {
      label: `Booked (${
        filteredData.filter((item) => item.status === "Booked").length
      })`,
      key: "3",
    },
    {
      label: `Expired (${
        filteredData.filter((item) => item.status === "Expired").length
      })`,
      key: "4",
    },
    {
      label: `Requested (${
        filteredData.filter((item) => item.status === "Requested").length
      })`,
      key: "5",
    },
  ];

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
              <Tabs
                activeKey={activeKey}
                onChange={onChange}
                items={tabs}
              ></Tabs>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ padding: "20px", backgroundColor: "white" }}>
          <QuotationTable
            filterData={filteredData}
            selectedStatus={selectedStatus}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setActiveKey={setActiveKey}
            selectedDropdownItem={selectedDropdownItem}
            setSelectedDropdownItem={setSelectedDropdownItem}
          />
        </Col>
      </Row>
    </div>
  );
};

export default QuotationTabs;
