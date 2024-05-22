import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import CloseIcon from "@mui/icons-material/Close";
import "./ShipmentHistory.css";
import sort from "../../../assets/sort.png";
import { ReactComponent as India } from "../../../assets/in.svg";
import { ReactComponent as AE } from "../../../assets/ae.svg";
import Pagination from "../../Core-Components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { bookingRequest } from "../../../Redux/Actions/BookingAction";
import { Tooltip } from "antd";
import CountryFlag from "../../Core-Components/CountryFlag";
import Steppertrack from "./Track/StepperTrack";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";

const ShipmentHistory = ({ selectedStatus }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const [selectedButton, setSelectedButton] = useState(null);
  const dispatch = useDispatch();
  const ShipmentData = useSelector((state) => state.Booking);
  console.log(ShipmentData);

  const bookingData = ShipmentData?.booking;
  const data = bookingData?.data;
  console.log(data);
  const payload = {
    booking_type: "",
    status: "",
    spagesize: "",
    sperpage: "",
    booking_number: "",
    origin: "",
    destination: "",
    mode: "",
    etd: "",
    eta: "",
    filter_days: "7",
    filter_month: "",
  };

  useEffect(() => {
    console.log(payload);
    dispatch(bookingRequest({ payload }));
  }, []);

  const [tableVisible, setTableVisible] = useState(true); // State to toggle table visibility

  const handleToggleTable = () => {
    setTableVisible(false);
  };
  console.log(selectedStatus);
  const [filteredData, setFilteredData] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  useEffect(() => {
    // Filter data based on selected status
    let filteredData = [];
    if (selectedStatus === "New Requests") {
      filteredData = data?.filter(
        (item) => item.status === "Booking In Progress"
      );
      setTableVisible(true);
    } else if (selectedStatus === "Booked") {
      filteredData = data?.filter((item) => item.status === "Booked");
      setTableVisible(true);
    } else if (selectedStatus === "Delivered") {
      filteredData = data?.filter((item) => item.status === "Cargo Picked Up");
      setTableVisible(true);
    } else if (selectedStatus === "Shipments") {
      filteredData = data;
      setTableVisible(true);
    } else if (selectedStatus === "Arrived") {
      filteredData = data?.filter((item) => item.status === "Arrived");
      setTableVisible(true);
    } else if (selectedStatus === "Received") {
      filteredData = data?.filter((item) => item.status === "Received");
      setTableVisible(true);
    } else if (selectedStatus === "Departed") {
      filteredData = data?.filter((item) => item.status === "Departed");
      setTableVisible(true);
    } else {
      filteredData = data;
    }
    setFilteredData(filteredData);
    setCurrentPage(1);
  }, [selectedStatus, data]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData?.length);

  // Extract the data for the current page
  const currentPageData = filteredData?.slice(startIndex, endIndex);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRowData, setModalRowData] = useState(null);
  const showModal = (rowData) => {
    console.log("shipmentRowData", rowData);
    setModalRowData(rowData);
    setIsModalOpen(true);
    console.log("shipmentData:", modalRowData);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const actionBodyTemplate = (rowData) => {
    let buttonLabel;
    let btnClass;
    if (rowData.action === "Track") {
      buttonLabel = "Track";
      btnClass = "cargo-picked-up";
    } else if (rowData.action === "Booking In Progress") {
      buttonLabel = "-";
    } else if (rowData.action === "Cargo Picked Up") {
      buttonLabel = "Track";
      btnClass = "cargo-picked-up";
    }
    return (
      <Button
        outlined
        className={btnClass}
        style={{
          background: "rgba(240, 30, 30, 1)",
          color: "white",
          borderRadius: "8px",
          width: "160px",
          height: "30px",
          padding: "",
          gap: "8px",
        }}
        label={buttonLabel}
        onClick={() => showModal(rowData)}
      />
    );
  };

  const rowClassName = () => {
    return "custom-row";
  };
  const shipmentTemplate = (rowData) => {
    return (
      <div>
        <span className="bold px-4">{rowData?.id}</span>
        <div
          style={{ color: "rgba(103, 120, 142, 1)", fontSize: "13px" }}
          className="px-4 mt-1"
        >
          LCL
        </div>
      </div>
    );
  };
  const originBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell">
        <CountryFlag countryCode={rowData?.origin_countrycode} />
        <span
          style={{
            padding: "8px",
            fontWeight: "400",
            textTransform: "capitalize",
          }}
        >
          {rowData?.origin.length <= 20 ? (
            rowData?.origin
          ) : (
            <Tooltip placement="topLeft" title={rowData?.origin}>
              <span role="button">
                {rowData?.origin.slice(0, 20).trim().split("").join("") + "..."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const destinationBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell">
        <CountryFlag
          countryCode={rowData?.destination_countrycode}
          width={20}
        />
        <span style={{ padding: "8px", fontWeight: "400" }}>
          {rowData?.destination.length <= 20 ? (
            rowData?.destination
          ) : (
            <Tooltip placement="topLeft" title={rowData?.destination}>
              <span role="button" style={{ textTransform: "capitalize" }}>
                {rowData?.destination.slice(0, 20).trim().split("").join("") +
                  "..."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };

  const handleSort = (field, order) => {
    const newSortOrder = sortField === field && sortOrder === 1 ? -1 : 1;
    const sortedData = [...filteredData].sort((a, b) => {
      if (order === 1) {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    setFilteredData(sortedData);
    setSortField(field);
    setSortOrder(newSortOrder);
  };
  const handleSortDown=(field, order)=>{
    const newSortOrder1 = sortField === field && sortOrder === 1 ? -1 : 1;

    const sortedData = [...filteredData].sort((a, b) => {
      if (order === 1) {
        return a[field] < b[field] ? 1 : -1;
      } else {
        return a[field] > b[field] ? 1 : -1;
      }
    });
    setFilteredData(sortedData);
    setSortField(field);
    setSortOrder(newSortOrder1);
  }

  const handleUpcomingDep = () => {
    setSelectedButton("Upcoming Departures");
    const filteredData1 = filteredData.filter((item) => item["etd/atd"]);

    // Sort the data by ETD/ATD in ascending order
    const sortedData = [...filteredData1].sort((a, b) => {
      // Parse the ETD/ATD dates using parseDate function
      const dateA = parseDate(a["etd/atd"]);
      const dateB = parseDate(b["etd/atd"]);
      // Compare the dates
      return dateA - dateB;
    });

    // Update the filtered data with the sorted data
    setFilteredData(sortedData);
  };

  const handleUpcomingArr = () => {
    setSelectedButton("Upcoming Arrivals");
    const filteredData1 = filteredData.filter((item) => item["eta/ata"]);

    // Sort the data by ETD/ATD in ascending order
    const sortedData = [...filteredData1].sort((a, b) => {
      // Parse the ETD/ATD dates using parseDate function
      const dateA = parseDate(a["eta/ata"]);
      const dateB = parseDate(b["eta/ata"]);
      // Compare the dates
      return dateA - dateB;
    });

    // Update the filtered data with the sorted data
    setFilteredData(sortedData);
  };
  const handleBookedOn = () => {
    const filteredData1 = filteredData.filter((item) => item["booked_on"]);

    const sortedData = [...filteredData1].sort((a, b) => {
      const dateA = parseDate(a["booked_on"]);
      const dateB = parseDate(b["booked_on"]);
      return dateA - dateB;
    });

    setFilteredData(sortedData);
  };

  const parseDate = (dateString) => {
    const parts = dateString.split("-"); // Split the date string by hyphen
    const day = parseInt(parts[0]); // Extract day
    const monthAbbrev = parts[1]; // Extract month abbreviation
    const year = parseInt(parts[2]); // Extract year
    const monthMap = {
      // Define a map for month abbreviations to month index
      JAN: 0,
      FEB: 1,
      MAR: 2,
      APR: 3,
      MAY: 4,
      JUN: 5,
      JUL: 6,
      AUG: 7,
      SEP: 8,
      OCT: 9,
      NOV: 10,
      DEC: 11,
    };
    const month = monthMap[monthAbbrev]; // Get month index from map
    // Construct a Date object using extracted day, month index, and year
    return new Date(year, month, day);
  };

  return (
    <div className="mt-5" style={{ minWidth: "1269px", borderRadius: "8px" }}>
      {tableVisible && (
        <>
          <div className="d-flex mb-2 justify-content-end ">
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
            <CloseIcon
              style={{ fontSize: "18px" }}
              role="button"
              onClick={handleToggleTable}
            />
          </div>
          <div style={{ width: "100%", borderRadius: "8px" }}>
            <div className="shadow">
              <DataTable
                value={currentPageData}
                dataKey="shipmentId"
                paginator={false}
                rows={10}
                // rowsPerPageOption
                s={[5, 10, 25]}
                // currentPageReportTemplate="{first} to {last} out of {totalRecords} "
                // removableSort
                rowClassName={rowClassName}
                handleSort={handleSort}
              >
                <Column
                  field="id"
                  header={
                    <span
                      onClick={() => handleSort("id")}
                      style={{
                        fontFamily: "Roboto",
                        cursor: "pointer",
                      }}
                      className="d-flex"
                    >
                      Shipment ID
                      {/* <img src={sort} alt="Sort Icon" className="px-1" /> */}
                      <div
                        className="d-flex sorticon"
                        style={{ flexDirection: "column" }}
                      >
                        <IconButton onClick={()=>{handleSort("id")}} className="p-0">
                          <ExpandLessIcon className="sortup" />
                        </IconButton>
                        <IconButton onClick={()=>{handleSortDown("id")}} className="p-0">
                          <ExpandMoreIcon className="sortdown" />
                        </IconButton>
                      </div>
                    </span>
                  }
                  headerClassName="p-4"
                  body={shipmentTemplate}
                ></Column>
                <Column
                  field="origin"
                  header={
                    <span
                      onClick={() =>
                        handleSort("origin", sortOrder === 1 ? -1 : 1)
                      }
                      style={{ cursor: "pointer" }}
                      className="d-flex"
                    >
                      Origin
                      {/* <img src={sort} alt="Sort Icon" className="px-1" /> */}
                      <div
                        className="d-flex sorticon"
                        style={{ flexDirection: "column" }}
                      >
                        <IconButton onClick={()=>{handleSort("origin")}} className="p-0">
                          <ExpandLessIcon className="sortup" />
                        </IconButton>
                        <IconButton onClick={()=>{handleSort("origin")}} className="p-0">
                          <ExpandMoreIcon className="sortdown" />
                        </IconButton>
                      </div>
                    </span>
                  }
                  body={originBodyTemplate}
                  headerClassName="custom-header "
                  style={{ width: "200px" }}
                ></Column>
                <Column
                  field="destination"
                  header={
                    <span
                      onClick={() =>
                        handleSort("destination", sortOrder === 1 ? -1 : 1)
                      }
                      style={{ cursor: "pointer", width: "150px" }}
                      className="d-flex"
                    >
                      Destination
                      {/* <img src={sort} alt="Sort Icon" className="px-1" /> */}
                      <div
                        className="d-flex sorticon"
                        style={{ flexDirection: "column" }}
                      >
                        <IconButton onClick={()=>{handleSort("destination")}} className="p-0">
                          <ExpandLessIcon className="sortup" />
                        </IconButton>
                        <IconButton onClick={()=>{handleSort("destination")}} className="p-0">
                          <ExpandMoreIcon className="sortdown" />
                        </IconButton>
                      </div>
                    </span>
                  }
                  body={destinationBodyTemplate}
                  headerClassName="custom-header "
                  style={{ width: "200px" }}
                ></Column>
                <Column
                  field="booked_on"
                  header={
                    <span className="d-flex" tyle={{ cursor: "pointer" }}>
                      Booked On
                      {/* <img
                        src={sort}
                        alt="Sort Icon"
                        className="px-1"
                        onClick={handleBookedOn}
                        style={{ cursor: "pointer" }}
                      /> */}
                      <div
                        className="d-flex sorticon"
                        style={{ flexDirection: "column" }}
                      >
                        <IconButton onClick={()=>{handleSort("booked_on")}} className="p-0">
                          <ExpandLessIcon className="sortup" />
                        </IconButton>
                        <IconButton onClick={()=>{handleSort("booked_on")}} className="p-0">
                          <ExpandMoreIcon className="sortdown" />
                        </IconButton>
                      </div>
                    </span>
                  }
                  bodyClassName="custom-cell"
                ></Column>
                <Column
                  field="etd/atd"
                  header={
                    <span className="d-flex">
                      ETD/ATD
                      {/* <img
                        src={sort}
                        alt="Sort Icon"
                        className="px-1"
                        onClick={handleUpcomingDep}
                        style={{ cursor: "pointer" }}
                      /> */}
                      <div
                        className="d-flex sorticon"
                        style={{ flexDirection: "column" }}
                      >
                        <IconButton onClick={()=>{handleUpcomingDep("etd/atd")}} className="p-0">
                          <ExpandLessIcon className="sortup" />
                        </IconButton>
                        <IconButton onClick={()=>{handleUpcomingDep("etd/atd")}} className="p-0">
                          <ExpandMoreIcon className="sortdown" />
                        </IconButton>
                      </div>
                    </span>
                  }
                  bodyClassName="custom-cell"
                ></Column>
                <Column
                  field="eta/ata"
                  header={
                    <span className="d-flex">
                      ETA/ATA
                      {/* <img
                        src={sort}
                        alt="Sort Icon"
                        className="px-1"
                        onClick={handleUpcomingArr}
                        style={{ cursor: "pointer" }}
                      /> */}
                      <div
                        className="d-flex sorticon"
                        style={{ flexDirection: "column" }}
                      >
                        <IconButton onClick={()=>handleUpcomingArr("eta/ata")} className="p-0">
                          <ExpandLessIcon className="sortup" />
                        </IconButton>
                        <IconButton onClick={()=>handleUpcomingArr("eta/ata")} className="p-0">
                          <ExpandMoreIcon className="sortdown" />
                        </IconButton>
                      </div>
                    </span>
                  }
                  bodyClassName="custom-cell"
                ></Column>
                <Column
                  field="status"
                  header={
                    <span className="d-flex">
                      Status
                      <div
                        className="d-flex sorticon"
                        style={{ flexDirection: "column" }}
                      >
                        <IconButton onClick={()=>{handleSort("status")}} className="p-0">
                          <ExpandLessIcon className="sortup" />
                        </IconButton>
                        <IconButton onClick={()=>{handleSort("status")}} className="p-0">
                          <ExpandMoreIcon className="sortdown" />
                        </IconButton>
                      </div>
                    </span>
                  }
                  bodyClassName={(rowData) =>
                    rowData?.status === "BookingInProgress"
                      ? "booking-progress-cell"
                      : "booked-cell "
                  }
                  className="pe-2 my-3 "
                ></Column>
                <Column
                  field="action"
                  body={actionBodyTemplate}
                  header={<span className="">Action</span>}
                  className=""
                ></Column>
              </DataTable>

              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItems={filteredData?.length}
              />
            </div>
          </div>
        </>
      )}
      <Steppertrack
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        rowData={modalRowData}
      />
    </div>
  );
};

export default ShipmentHistory;
