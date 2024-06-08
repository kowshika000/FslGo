import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Image } from "antd";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import AllBookings from "./AllBookings";
import "../ShipBookingTabs.css";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { SearchHeader } from "./SearchHeader";
import calendar from "../../../assets/calendar.png";
import { Dropdown } from "primereact/dropdown";
import ButtonList from "../../../assets/ButtonList.png";
import Group1 from "../../../assets/Group1.png";
import FilterDrawer from "./Filter";

function BookingTabs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const ShipmentData = useSelector((state) => state.Booking);
  const bookingData = ShipmentData?.booking;
  const tabCount = ShipmentData?.booking?.statuswise_count;
  const [showText, setShowText] = useState(false);
  const [visible, setVisible] = useState(false);

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

  const items = ["Past 60 Days", "Past 30 Days", "Past 15 Days"];
  useEffect(() => {
    if (selectedDropdownItem === "Past 15 Days") {
      setFilterValue(15);
    } else if (selectedDropdownItem === "Past 30 Days") {
      setFilterValue(30);
    } else if (selectedDropdownItem === "Past 60 Days") {
      setFilterValue(60);
    }
  }, [selectedDropdownItem]);
  const onChange = (key) => {
    switch (key) {
      case "1":
        filterData("All");
        break;
      // case "2":
      //   filterData(["Booked In Progress"]);
      //   break;
      case "2":
        filterData(["Booked", "Cargo Pickup", "Cargo Received"]);
        break;
      case "3":
        filterData(["In Transit", "Departed"]);
        break;
      case "4":
        filterData(["Arrived"]);
        break;
      case "5":
        filterData(["Delivered"]);
        break;
      case "6":
        filterData(["Canceled"]);
        break;
      default:
        filterData("All");
    }
  };

  const toggleDisplayMode = () => {
    setShowText(!showText);
  };
  const toggleDisplayNone = () => {
    setShowText(false);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div
      className="mx-auto mb-4"
      style={{
        minWidth: "1255px",
        borderRadius: "8px",
      }}
    >
      <SearchHeader bookingData={bookingData} />
      <Row className="border" style={{ borderRadius: "8px" }}>
        <Col span={24} style={{ backgroundColor: "#F8FAFC" }}>
          <Row justify="space-between" style={{ height: "57px" }}>
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

                <div className="ant-img d-flex">
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
                        height:"36px",
                      
                      }}
                    >
                      <Dropdown
                        value={selectedDropdownItem}
                        onChange={(e) => {
                          console.log("Selected item:", e.value); // Add logging statement
                          setSelectedDropdownItem(e.value);
                        }}
                        options={items}
                        // placeholder="Past 15 Days"
                        className="w-full md:w-14rem"
                        style={{ border: "none" }}
                      />
                    </div>
                  </div>
                  <div style={{ alignSelf:"center"}}>
                  <img
                    src={ButtonList}
                    width="32px"
                    height="32px"
                    style={{ cursor: "pointer" }}
                   onClick={()=>setVisible(true)}
                  />
                  </div>
                 
                  <div style={{
                    alignSelf:"center",
                  }}
                  className="ms-2 "
                  >
                  <img
                    src={Group1}                   
                    style={{ cursor: "pointer", }}                   
                  />
                  </div>              
                </div>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ padding: "20px", backgroundColor: "white" }}>
          {!showText ? (
            <AllBookings
              filterData={filteredData}
              selectedStatus={filterData}
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
                <Column field="" header="Booking No." className="p-3"></Column>
                <Column field="" header="Booking Date" className="p-3"></Column>
                <Column field="" header="Origin" className="p-3"></Column>
                <Column field="" header="POL" className="p-3"></Column>
                <Column field="" header="POD" className="p-3"></Column>
              </DataTable>
            </div>
          )}
        </Col>
      </Row>
      <FilterDrawer visible={visible} onClose={onClose}/>
    </div>
  );
}

export default BookingTabs;
