import React, { useState, useEffect, Children } from "react";
import { Tabs, Row, Col, Input, Select, Table, Image } from "antd";
import { SearchOutlined, CaretDownFilled } from "@ant-design/icons";
import { Drawer } from "antd";
import { Dropdown, Space, Menu } from "antd";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import calendar from "../../../assets/calendar.png";
import filter from "../../../assets/Filter 2.png";
import AllBookings from "./ShipmentTable/AllBookings";
import "../ShipBookingTabs.css";
import { useDispatch, useSelector} from 'react-redux'
import FilterDrawer from "./Filter";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./Booking.css"
import PendingActions from "./PendingActions"  
import BookedTab from "./ShipmentTable/BookedTab";
import InTransitTab from "./InTransitTab";



function BookingTabs() {
  const [visible, setVisible] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);
  const [selectedTabKey, setSelectedTabKey] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const ShipmentData = useSelector(state => state.Booking);
  const bookingData = ShipmentData?.booking;
  const tabCount = ShipmentData?.booking?.statuswise_count;
  const [showText, setShowText] = useState(false);
  console.log('tabCount',tabCount)
  let schedule;
  if (tabCount && tabCount.length > 0) {
    schedule = tabCount[0];
  } else {
  }

  
  useEffect(() => {
    // Check if bookingData is available before updating data state
    if (bookingData && bookingData.data) {
      setData(bookingData?.data);
    }
  }, [bookingData]);
  
  console.log(data); 
  

  const filterData = (data) => {
    console.log('Data:', data);
    let filteredData = data;
  
    switch (selectedTabKey) {
      case "1":
        return data;
      case "2":
        return data.filter(item => item.status === "pending");
      case "3":
        return data.filter(item => item.status === "booked");
      case "4":
        return data.filter(item => item.status === "In Transit" );
        case "5":
        return data.filter(item => item.status === "Arrived");
        case "6":
        return data.filter(item => item.status === "cancelled");
        default:
          break;
      }
  
      // Filter by search query (booking ID)
      filteredData = filteredData.filter(item => item.bookingId.toLowerCase().includes(searchQuery.toLowerCase()));
  
      return filteredData;
    
  };
  
  const TabItems = [
    {
      key: "1",
      label: `All Bookings (${schedule?.all})`,
      children: <AllBookings/>
    },
    {
      key: "2",
      label: `Pending Action (${schedule?.pending})`,
      children: <PendingActions />
    },
    {
      key: "3",
      label: `Booked (${schedule?.booked})`,
      children: <BookedTab />
    },
    {
      key: "4",
      label: `In-Transit (${schedule?.in_transit})`,
      children: <InTransitTab />
    },
    {
      key: "5",
      label: `Delivered (${schedule?.arrived})`,
    },
    {
      key: "6",
      label: `Cancelled (${schedule?.cancelled})`,
    },
  ];
  
  // useEffect(() => {
  //   setData(filterData(bookingData?.data));
  // }, [bookingData, selectedTabKey]);

  const onChange = (key) => {
    setSelectedTabKey(key);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const items = [
    {
      label: "Past 30 Days",
      key: "1",
    },
    {
      label: "Past 15 days",
      key: "2",
    },
    {
      label: "Past 60 days",
      key: "3",
    },
  ];
  const onClick = (item) => {
    setSelectedDropdownItem(item);
    console.log("Selected item:", item);
  };
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
     <Row className="border" style={{ borderRadius: "8px",backgroundColor:"#F8FAFC" ,height:"600px" }}>
        <Col span={24} style={{ height: "57px" }}>
          <Row justify="space-between" style={{ height: "57px" }}>
            <Col span={20}>
              {!showText ? (
                <Tabs
                  defaultActiveKey="1"
                  items={TabItems}
                  onChange={onChange}
                />
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
        <Col span={24}>
        {!showText ? (
            <div style={{backgroundColor:"color"}}>{TabItems.children}</div>
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
                <Column field="" header="Service" style={{padding:"15px"}}></Column>
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
    </div>
  );
}

export default BookingTabs;
