import React, { useState, useEffect } from "react";
import { Tabs, Row, Col} from "antd";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import AllBookings from "./AllBookings";
import "../ShipBookingTabs.css";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function BookingTabs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const ShipmentData = useSelector((state) => state.Booking);
  const bookingData = ShipmentData?.booking;
  const tabCount = ShipmentData?.booking?.statuswise_count;
  const [showText, setShowText] = useState(false);
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
        <Col span={24} style={{backgroundColor:"#F8FAFC"}}>
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
        <Col span={24} style={{padding:"20px",backgroundColor:"white"}}>
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
    </div>
  );
}

export default BookingTabs;
