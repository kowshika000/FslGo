import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Image } from "antd";
import AllBookings from "./AllBookings";
import "../ShipBookingTabs.css";
import { useSelector } from "react-redux";
import { SearchHeader } from "./SearchHeader";
import { Dropdown } from "primereact/dropdown";
import ButtonList from "../../../assets/Button.svg";
import Buttonfade from "../../../assets/Buttonfade.svg";
import Group1 from "../../../assets/CButton.svg";
import Groupfade from "../../../assets/CButtonfade.svg";
import button16 from "../../../assets/Button16.svg";
import FilterDrawer from "./Filter";
import Navbar from "../../Layout/Navbar";
import image1 from "../../../assets/Shape.svg";
import image2 from "../../../assets/Shape1.svg";
import image3 from "../../../assets/Shape2.svg";
import DailyReportTable from "./DailyReport/DailyReportTable";
import { CalendarOutlined, CaretDownOutlined } from "@ant-design/icons";
import cal from "../../../assets/calVector.svg";

function BookingTabs({ showText, setShowText }) {
  const [searchQuery] = useState("");
  const [data, setData] = useState([]);
  const ShipmentData = useSelector((state) => state.Booking);
  const bookingData = ShipmentData?.booking;
  const tabCount = ShipmentData?.booking?.statuswise_count;
  const [visible, setVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("1");

  let schedule;
  if (tabCount && tabCount.length > 0) {
    schedule = tabCount[0];
  } else {
  }
  useEffect(() => {
    if (bookingData && bookingData.data) {
      setData(bookingData?.data);
    }
  }, [bookingData]);

  // console.log(data);

  const [filteredData, setFilteredData] = useState(data);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const filterData = (status) => {
    if (status === "All") {
      setFilteredData(data);
      setSelectedStatus("All");
    } else {
      setFilteredData(data.filter((item) => status.includes(item.status)));
      setSelectedStatus(status);
    }
  };

  useEffect(() => {
    const newFilteredData = data.filter((item) =>
      item.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(newFilteredData);
  }, [searchQuery, data]);

  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState("Past 60 Days");
  const [filterValue, setFilterValue] = useState(60);

  const [filterMonthValue, setFilterMonthValue] = useState(null);

  const items = [
    "Past 30 Days",
    "Past 60 Days",
    "Past 90 Days",
    "Past 6 Months",
  ];
  useEffect(() => {
    if (selectedDropdownItem === "Past 90 Days") {
      setFilterValue(90);
      setFilterMonthValue(null);
      setActiveTab("1"); 
    } else if (selectedDropdownItem === "Past 30 Days") {
      setFilterValue(30);
      setFilterMonthValue(null);
      setActiveTab("1"); 
    } else if (selectedDropdownItem === "Past 60 Days") {
      setFilterValue(60);
      setFilterMonthValue(null);
      setActiveTab("1"); 
    } else if (selectedDropdownItem === "Past 6 Months") {
      setFilterMonthValue(null);
      setFilterValue(180);
      setActiveTab("1"); 
    }
  }, [selectedDropdownItem]);

  const onChange = (key) => {
    setActiveTab(key);
    switch (key) {
      case "1":
        filterData("All");
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      // case "2":
      //   filterData(["Booked In Progress"]);
      //   break;
      case "2":
        filterData(["Booked", "Cargo Pickup", "Cargo Received"]);
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      case "3":
        filterData(["In Transit", "Departed"]);
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      case "4":
        filterData(["Arrived"]);
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      case "5":
        filterData(["Delivered"]);
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      case "6":
        filterData(["Canceled"]);
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      default:
        filterData("All");
        setSelectedButton(null);
        setCurrentPage(1);
    }
  };

  const [isAscending, setIsAscending] = useState(true);
  const handleUpcomingDep = () => {
    console.log("clicked upcoming departure");
    setSelectedButton("Upcoming Departures");
    const filteredDatas = data?.filter(
      (item) =>
        item.status === "Booking In Progress" ||
        item.status === "Booked" ||
        item.status === "Cargo Received" ||
        item.status === "Cargo Picked Up"
    );
    const sortedData = [...filteredDatas].sort((a, b) => {
      const dateA = new Date(a["etd/atd"]);
      const dateB = new Date(b["etd/atd"]);
      return isAscending ? dateA - dateB : dateB - dateA;
    });
    setFilteredData(sortedData);
    setIsAscending(!isAscending);
  };
  const handleUpcomingArr = () => {
    console.log("clicked upcoming departure");
    setSelectedButton("Upcoming Arrivals");
    const filteredDatas = data?.filter(
      (item) => item.status === "In Transit" || item.status === "Departed"
    );

    const sortedData = [...filteredDatas].sort((a, b) => {
      const dateA = new Date(a["eta/ata"]);
      const dateB = new Date(b["eta/ata"]);
      return isAscending ? dateA - dateB : dateB - dateA;
    });
    setFilteredData(sortedData);
    setIsAscending(!isAscending);
  };
  console.log(filteredData, "from the upcoming status");
  const onClose = () => {
    setVisible(false);
  };

  const handleTableChange = () => {
    setShowText(true);
  };
  const handlShowFilter = () => {
    setShowText(false);
  };
  const valueTemplate = () => {
    return (
      <div>
        <Image
          src={cal}
          alt="cal"
          style={{
            width: "12px",
            height: "12px",
            marginTop: "-2px",
            marginRight: "7px",
          }}
        />
        <span
          style={{
            color: "#495A6E",
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "19px",
            letterSpacing: "1%",
            textAlign: "center",
          }}
        >
          {selectedDropdownItem}
        </span>
        <CaretDownOutlined className="ms-1" style={{ color: "#67788E" }} />
      </div>
    );
  };
  const dropdownbutton = document.querySelector(".p-dropdown-trigger");
  if (dropdownbutton) {
    dropdownbutton.remove();
  }
  return (
    <div
      className="mx-auto mb-4"
      style={{
        minWidth: "1255px",
      }}
    >
      {showText ? (
        <div>
          <p
            style={{
              marginTop: "100px",
              fontWeight: "700",
              fontSize: "28px",
              lineHeight: "38px",
              letterSpacing: "1%",
              color: "#181E25",
              marginBottom: "0px",
            }}
          >
            Daily Status Report
          </p>
          <Navbar setShowText={setShowText} />
        </div>
      ) : (
        <SearchHeader
          bookingData={bookingData}
          handleUpcomingArr={handleUpcomingArr}
          handleUpcomingDep={handleUpcomingDep}
          selectedButton={selectedButton}
          showText={showText}
        />
      )}
      <Row className="mt-3 border" style={{ borderRadius: "8px" }}>
        <Col
          span={24}
          style={{ backgroundColor: "#F8FAFC", borderRadius: "8px" }}
        >
          <Row justify="between" style={{ height: "57px" }}>
            <Col span={19}>
              {!showText ? (
                <Tabs activeKey={activeTab} onChange={onChange} >
                  <Tabs.TabPane
                    tab={`All Bookings (${schedule?.all ? schedule?.all : 0})`}
                    key="1"
                  />
                  {/* <Tabs.TabPane
                    tab={`Pending Action (${schedule?.pending})`}
                    key="2"
                  /> */}
                  <Tabs.TabPane
                    tab={`Booked (${schedule?.booked ? schedule?.booked : 0})`}
                    key="2"
                  />
                  <Tabs.TabPane
                    tab={`In-Transit (${
                      schedule?.in_transit ? schedule?.in_transit : 0
                    })`}
                    key="3"
                  />
                  <Tabs.TabPane
                    tab={`Arrived (${
                      schedule?.arrived ? schedule?.arrived : 0
                    })`}
                    key="4"
                  />
                  <Tabs.TabPane
                    tab={`Delivered (${
                      schedule?.delivered ? schedule?.delivered : 0
                    })`}
                    key="5"
                  />
                  <Tabs.TabPane
                    tab={`Cancelled (${
                      schedule?.cancelled ? schedule?.cancelled : 0
                    })`}
                    key="6"
                  />
                </Tabs>
              ) : (
                ""
              )}
            </Col>
            <Col
              span={5}
              className="viewtab-col d-flex justify-content-end"
              style={{
                borderBottom: "1px solid #e7eaf0",
                height: "57px",
                float: "right",
              }}
            >
              {showText ? (
                ""
              ) : (
                <div
                  className="dropdownfield mx-2"
                  style={{ alignContent: "center" }}
                >
                  <Dropdown
                    value={selectedDropdownItem}
                    onChange={(e) => {
                      console.log("Selected item:", e.value); // Add logging statement
                      setSelectedDropdownItem(e.value);
                    }}
                    options={items}
                    valueTemplate={valueTemplate}
                    className="w-full md:w-14rem datehover"
                    style={{ border: "none" }}
                  />
                </div>
              )}
              {!showText ? (
                <>
                  <div
                    style={{
                      alignSelf: "center",
                      height: "32px",
                      width: "32px",
                    }}
                  >
                    <img
                      src={ButtonList}
                      style={{ cursor: "pointer" }}
                      onClick={handlShowFilter}
                    />
                  </div>
                  <div
                    style={{
                      alignSelf: "center",
                      width: "32px",
                      height: "32px",
                    }}
                    className="ms-1 me-2"
                    onClick={handleTableChange}
                  >
                    <img src={Group1} style={{ cursor: "pointer" }} />
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      alignSelf: "center",
                      width: "32px",
                    }}
                  >
                    <img
                      src={Buttonfade}
                      style={{ cursor: "pointer" }}
                      onClick={handlShowFilter}
                    />
                  </div>
                  <div
                    style={{
                      alignSelf: "center",
                      height: "32px",
                      width: "32px",
                    }}
                    className="ms-1 me-2"
                    onClick={handleTableChange}
                  >
                    <img src={button16} style={{ cursor: "pointer" }} />
                  </div>
                </>
              )}
              {!showText ? (
                ""
              ) : (
                <div className="d-flex align-items-center">
                  <img
                    src={image1}
                    alt="img"
                    className="me-1"
                    style={{ width: "12px", height: "13.5px" }}
                  />
                  <img
                    src={image2}
                    alt="img"
                    className="mx-1"
                    style={{ width: "12px", height: "13.5px" }}
                  />
                  <img
                    src={image3}
                    alt="img"
                    className="ms-1 me-3"
                    style={{ width: "12px", height: "13.5px" }}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Col>
        <Col
          span={24}
          style={{
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          {!showText ? (
            <AllBookings
              filterData={filteredData}
              selectedStatus={selectedStatus}
              filterValue={filterValue}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              filterMonthValue={filterMonthValue}
            />
          ) : (
            <DailyReportTable />
          )}
        </Col>
      </Row>
      <FilterDrawer visible={visible} onClose={onClose} />
    </div>
  );
}

export default BookingTabs;
