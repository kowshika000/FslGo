import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Image } from "antd";
import AllBookings from "./AllBookings";
import "../ShipBookingTabs.css";
import { useSelector } from "react-redux";
import { SearchHeader } from "./SearchHeader";
import calendar from "../../../assets/calendar.png";
import { Dropdown } from "primereact/dropdown";
import ButtonList from "../../../assets/ButtonList.png";
import Group1 from "../../../assets/Group1.png";
import FilterDrawer from "./Filter";
import Navbar from "../../Layout/Navbar";
import image1 from "../../../assets/Shape1.png";
import image2 from "../../../assets/Shape (1).png";
import image3 from "../../../assets/Shape (2).png";
import DailyReportTable from "./DailyReportTable";

function BookingTabs({ showText, setShowText, }) {
  const [searchQuery] = useState("");
  const [data, setData] = useState([]);
  const ShipmentData = useSelector((state) => state.Booking);
  const bookingData = ShipmentData?.booking;
  const tabCount = ShipmentData?.booking?.statuswise_count;
  const [visible, setVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

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

  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState("Past 60 Days");
  const [filterValue, setFilterValue] = useState(60);

  const items = ["Past 30 Days", "Past 60 Days", "Past 90 Days", "Past 6 Months"];
  useEffect(() => {
    if (selectedDropdownItem === "Past 90 Days") {
      setFilterValue(90);
    } else if (selectedDropdownItem === "Past 30 Days") {
      setFilterValue(30);
    } else if (selectedDropdownItem === "Past 60 Days") {
      setFilterValue(60);
    }else if (selectedDropdownItem === "Past 6 Days") {
      setFilterValue(6);
    }

  }, [selectedDropdownItem]);
  const onChange = (key) => {
    switch (key) {
      case "1":
        filterData("All");
        setSelectedButton(null);
       
        break;
      // case "2":
      //   filterData(["Booked In Progress"]);
      //   break;
      case "2":
        filterData(["Booked", "Cargo Pickup", "Cargo Received"]);
        setSelectedButton(null);
        break;
      case "3":
        filterData(["In Transit", "Departed"]);
        setSelectedButton(null);
        break;
      case "4":
        filterData(["Arrived"]);
        setSelectedButton(null);
        break;
      case "5":
        filterData(["Delivered"]);
        setSelectedButton(null);
        break;
      case "6":
        filterData(["Canceled"]);
        setSelectedButton(null);
        break;
      default:
        filterData("All");
        setSelectedButton(null);
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
  console.log("filteredData", filteredData);

  const handleTableChange = () => {
    setShowText(true);
  };
  const handlShowFilter=()=>{
    if(!showText){
      setVisible(true)
    }else if(showText){
      setShowText(false)
    }
  }
  return (
    <div
      className="mx-auto mb-4"
      style={{
        minWidth: "1255px",
        borderRadius: "8px",
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
          <Navbar />
        </div>
      ) : (
        <SearchHeader
          bookingData={bookingData}
          handleUpcomingArr={handleUpcomingArr}
          handleUpcomingDep={handleUpcomingDep}
          selectedButton={selectedButton}
        />
      )}
      <Row className="border mt-3" style={{ borderRadius: "8px" }}>
        <Col span={24} style={{ backgroundColor: "#F8FAFC" }}>
          <Row justify="between" style={{ height: "57px" }}>
            <Col span={20}>
              {!showText ? (
                <Tabs defaultActiveKey="1" onChange={onChange}>
                  <Tabs.TabPane
                    tab={`All Bookings (${schedule?.all})`}
                    key="1"
                  />
                  {/* <Tabs.TabPane
                    tab={`Pending Action (${schedule?.pending})`}
                    key="2"
                  /> */}
                  <Tabs.TabPane tab={`Booked (${schedule?.booked})`} key="2" />
                  <Tabs.TabPane
                    tab={`In-Transit (${schedule?.in_transit})`}
                    key="3"
                  />
                  <Tabs.TabPane
                    tab={`Arrived (${schedule?.arrived})`}
                    key="4"
                  />
                  <Tabs.TabPane
                    tab={`Delivered (${schedule?.arrived})`}
                    key="5"
                  />
                  <Tabs.TabPane
                    tab={`Cancelled (${schedule?.cancelled})`}
                    key="6"
                  />
                </Tabs>
              ) : (
                ""
              )}
            </Col>
            <Col
              span={4}
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
                  style={{
                    alignSelf: "center",
                    border: "1px solid #E7EAF0",
                    borderRadius: "8px",
                    backgroundColor:"white",
                  }}
                  className="px-1 d-flex me-2 datehover"
                >
                  <Image
                    src={calendar}
                    width="14px"
                    height="14px"
                    className="mt-2"
                  />

                  <div
                    style={{
                      alignContent: "center",
                      border: "none ",
                      outline: "none ",
                      height: "36px",
                    }}
                    className="datehover"
                  >
                    <Dropdown
                      value={selectedDropdownItem}
                      onChange={(e) => {
                        console.log("Selected item:", e.value); // Add logging statement
                        setSelectedDropdownItem(e.value);
                      }}
                      options={items}
                      placeholder="Past 60 Days"
                      className="w-full md:w-14rem datehover"
                      style={{ border: "none" }}
                      
                    />
                  </div>
                </div>
              )}
              <div
                style={{
                  alignSelf: "center",
                  height: "32px",
                  width: "32px",
                }}
              >
                <img
                  src={ButtonList}
                  width="32px"
                  height="32px"
                  style={{ cursor: "pointer" }}
                  onClick={handlShowFilter}
                />
              </div>
              <div
                style={{
                  alignSelf: "center",
                  backgroundColor: "#F3F5F7",
                  height: "32px",
                  width: "28.77px",
                }}
                className="me-2"
                onClick={handleTableChange}
              >
                <img
                  src={Group1}
                  style={{ cursor: "pointer" }}
                  className="mt-2 ms-2"
                />
              </div>
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
        <Col span={24} style={{ padding: "20px", backgroundColor: "white" }}>
          {!showText ? (
            <AllBookings
              filterData={filteredData}
              selectedStatus={filterData}
              filterValue={filterValue}
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
