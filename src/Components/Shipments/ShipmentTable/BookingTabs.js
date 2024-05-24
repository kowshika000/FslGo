import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Input, Select, Table, Image } from "antd";
import { SearchOutlined, CaretDownFilled } from "@ant-design/icons";
import { Drawer } from "antd";
import { Space, Menu } from "antd";
import { Dropdown } from "primereact/dropdown";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import calendar from "../../../assets/calendar.png";
import filter from "../../../assets/Filter 2.png";
import AllBookings from "./AllBookings";
import "../ShipBookingTabs.css";
import { useDispatch, useSelector } from "react-redux";
import FilterDrawer from "./Filter";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function BookingTabs() {
  const [visible, setVisible] = useState(false);
  // const [selectedTabKey, setSelectedTabKey] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const ShipmentData = useSelector((state) => state.Booking);
  const bookingData = ShipmentData?.booking;
  const tabCount = ShipmentData?.booking?.statuswise_count;
  const [showText, setShowText] = useState(false);
  // console.log("tabCount", tabCount);
  let schedule;
  if (tabCount && tabCount.length > 0) {
    schedule = tabCount[0];
  } else {
  }
  const [selectedItem, setSelectedItem] = useState("Last 7 days");
  useEffect(() => {
    // Check if bookingData is available before updating data state
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

  const onChange = (key) => {
    switch (key) {
      case "1":
        filterData("All");
        break;
      case "2":
        filterData(["Booked In Progress"]);
        break;
      case "3":
        filterData(["Booked", "Cargo Pickup", "Cargo Received"]);
        break;
      case "4":
        filterData(["In Transit", "Departed"]);
        break;
      case "5":
        filterData(["Arrived"]);
        break;
      case "6":
        filterData(["Delivered"]);
        break;
      case "7":
        filterData(["Canceled"]);
        break;
      default:
        filterData("All");
    }
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState("Past 15 Days");
  const [filterValue, setFilterValue] = useState(15);
  const items = ["Past 15 Days", "Past 30 Days", "Past 60 Days"];
  useEffect(() => {
    if (selectedDropdownItem === "Past 15 Days") {
      setFilterValue(15);
    } else if (selectedDropdownItem === "Past 30 Days") {
      setFilterValue(30);
    } else if (selectedDropdownItem === "Past 60 Days") {
      setFilterValue(60);
    }
  }, [selectedDropdownItem]);

  console.log("tab FilterValue", filterValue);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDisplayMode = () => {
    setShowText(!showText);
  };
  const toggleDisplayNone = () => {
    setShowText(false);
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
        <Col span={24}>
          <Row justify="space-between" style={{ height: "57px" }}>
            <Col span={20}>
              {!showText ? (
                <Tabs defaultActiveKey="1" onChange={onChange}>
                  <Tabs.TabPane
                    tab={`All Bookings (${schedule?.all})`}
                    key="1"
                  />
                  <Tabs.TabPane
                    tab={`Pending Action (${schedule?.pending})`}
                    key="2"
                  />
                  <Tabs.TabPane tab={`Booked (${schedule?.booked})`} key="3" />
                  <Tabs.TabPane
                    tab={`In-Transit (${schedule?.in_transit})`}
                    key="4"
                  />
                  <Tabs.TabPane
                    tab={`Arrived (${schedule?.arrived})`}
                    key="5"
                  />
                  <Tabs.TabPane
                    tab={`Delivered (${schedule?.arrived})`}
                    key="6"
                  />
                  <Tabs.TabPane
                    tab={`Cancelled (${schedule?.cancelled})`}
                    key="7"
                  />
                </Tabs>
              ) : (
                <div style={{ padding: "3px 6px 3px 4px", marginTop: "15px" }}>
                  <h6 className="px-4">Customized Daily Reports</h6>
                </div>
              )}
            </Col>
            <Col
              span={4}
              className="viewtab-col"
              style={{ borderBottom: "1px solid #e7eaf0", height: "57px" }}
            >
              <div className="viewtab-outer">
                <div className="ant-img d-flex">
                  <img
                    src={img1}
                    width="32px"
                    height="32px"
                    style={{ cursor: "pointer" }}
                    onClick={toggleDisplayNone}
                  />
                  <img
                    src={img2}
                    width="32px"
                    height="32px"
                    style={{ cursor: "pointer" }}
                    onClick={toggleDisplayMode}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Row style={{ padding: "20px" }}>
          <Col span={24}>
            <Row
              justify="space-between"
              className="w-full"
              style={{ padding: "0px 0px 20px 0px" }}
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
                  onChange={handleSearch}
                />
              </Col>
              <Col className="d-flex ">
                <div
                  style={{ border: "1px solid #E7EAF0", borderRadius: "8px" }}
                  className="px-1 d-flex me-2"
                >
                  <Image
                    src={calendar}
                    width="16px"
                    height="12px"
                    className="mt-2 pe-1"
                  />

                  <div
                    style={{
                      alignContent: "center",
                      border: "none ",
                      outline: "none ",
                    }}
                  >
                    <Dropdown
                      value={selectedDropdownItem}
                      onChange={(e) => {
                        console.log("Selected item:", e.value); // Add logging statement
                        setSelectedDropdownItem(e.value);
                      }}
                      options={items}
                      placeholder="Past 15 Days"
                      className="w-full md:w-14rem "
                      style={{ border: "none" }}
                    />
                  </div>
                </div>
                <div
                  className="filter d-flex py-1 px-2"
                  style={{
                    border: "1px solid rgb(231,234,240",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    className="ant-image cursor-pointer"
                    onClick={showDrawer}
                  > 
                    <img
                      src={filter}
                      className="ant-image-img me-1 my-1"
                      style={{
                        verticalAlign: "center",
                        marginTop: "2px",
                        cursor: "pointer",
                      }}
                    />


                  </div>
                  <span className="align-items-center">Filters</span>
                </div>

                <FilterDrawer visible={visible} onClose={onClose} />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            {!showText ? (
              <AllBookings
                filterData={filteredData}
                selectedStatus={filterData}
                filterValue={filterValue}
              />
            ) : (
              <div className="mt-3 p-3">
                <DataTable
                  dataKey="shipmentId"
                  paginator={false}
                  rows={10}
                  rowsPerPageOptions={[5, 10, 25]}
                  currentPageReportTemplate="{first} to {last} out of {totalRecords} "
                  // paginatorTemplate=" PrevPageLink PageLinks NextPageLink  CurrentPageReport "
                  removableSort
                >
                  <Column
                    field=""
                    header="Service"
                    style={{ padding: "15px" }}
                  ></Column>
                  <Column field="" header="Order No." className="p-3"></Column>
                  <Column field="" header="Status" className="p-3"></Column>
                  <Column
                    field=""
                    header="Booking No."
                    className="p-3"
                  ></Column>
                  <Column
                    field=""
                    header="Booking Date"
                    className="p-3"
                  ></Column>
                  <Column field="" header="Origin" className="p-3"></Column>
                  <Column field="" header="POL" className="p-3"></Column>
                  <Column field="" header="POD" className="p-3"></Column>
                </DataTable>
              </div>
            )}
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default BookingTabs;

{
  /* <Dropdown
                      overlayStyle={{ minWidth: "200px" }} // Adjust the width as needed
                      overlay={
                        <Menu>
                          {items.map((item) => (
                            <Menu.Item
                              key={item.key}
                              onClick={() => onClick(item)}
                            >
                              {item.label}
                            </Menu.Item>
                          ))}
                        </Menu>
                      }
                      trigger={["click"]}
                    >
                 
                      <a
                        onClick={(e) => e.preventDefault()}
                        style={{ color: "rgba(73, 90, 110, 1)" }}
                      >
                        <Space>
                          <span
                            style={{
                              maxWidth: "160px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {selectedDropdownItem
                              ? selectedDropdownItem.label
                              : "Past 30 days"}
                          </span>
                          <CaretDownFilled style={{ marginLeft: "4px" }} />
                        </Space>
                      </a>
                    </Dropdown> */
}
