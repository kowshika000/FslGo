import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import sort from "../../../assets/sort.png";
import Pagination from "../../Core-Components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { bookingRequest } from "../../../Redux/Actions/BookingAction";
import { Tooltip } from "antd";
import CountryFlag from "../../Core-Components/CountryFlag";
import Steppertrack from "../Track/StepperTrack";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { FilterMatchMode } from "primereact/api";
import "./Booking.css";
import { Row, Col, Input, Image } from "antd";
import { SearchOutlined, CaretDownFilled } from "@ant-design/icons";
import FilterDrawer from "./Filter";
import filter from "../../../assets/Filter 2.png";
import calendar from "../../../assets/calendar.png";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { Dropdown } from "primereact/dropdown";

const AllBookings = ({ filterData, selectedStatus }) => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    origin: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    destination: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    booked_on: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // etd/atd: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // eta/ata: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    status: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filterValue, setFilterValue] = useState(15);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const dispatch = useDispatch();

  const payload = {
    filter_month: "",
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
    filter_days: filterValue,
  };

  useEffect(() => {
    dispatch(bookingRequest({ payload }));
  }, [filterValue]);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(filterData);
  }, [selectedStatus]);
  console.log("booking", filteredData);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData?.length);

  // Extract the data for the current page
  const currentPageData = filteredData?.slice(startIndex, endIndex);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRowData, setModalRowData] = useState(null);
  const showModal = (rowData) => {
    setModalRowData(rowData);
    setIsModalOpen(true);
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
      <div style={{ textAlign: "start" }}>
        <span className="bold px-4">{rowData?.id}</span>
        <div
          style={{
            color: "rgba(103, 120, 142, 1)",
            fontSize: "13px",
            textAlign: "start",
          }}
          className="mt-1 px-4"
        >
          LCL
        </div>
      </div>
    );
  };
  const originBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell" style={{ textAlign: "start" }}>
        <CountryFlag countryCode={rowData?.origin_countrycode} />
        <span
          style={{
            padding: "8px",
            fontWeight: "400",
            width: "50px",
            textWrap: "wrap",
            textAlign: "start",
          }}
        >
          {rowData?.origin.length <= 20 ? (
            rowData?.origin
          ) : (
            <Tooltip placement="topLeft" title={rowData?.origin}>
              <span role="button">
                {rowData?.origin.slice(0, 20).trim().split(" ").join("") + ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const destinationBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell" style={{ textAlign: "start" }}>
        <CountryFlag countryCode={rowData?.destination_countrycode} />
        <span style={{ padding: "8px", fontWeight: "400", textWrap: "wrap" }}>
          {rowData?.destination.length <= 20 ? (
            rowData?.destination
          ) : (
            <Tooltip placement="topLeft" title={rowData?.destination}>
              <span role="button">
                {rowData?.destination.slice(0, 20).trim().split("").join("") +
                  ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const handleSort = (col) => {
    console.log("Ascending");
    const sorted = [...filteredData].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];
      if (!isNaN(valA) && !isNaN(valB)) {
        return valA - valB;
      }
      if (col === "etd/atd" || col === "eta/ata") {
        const dateA = parseDate1(valA);
        const dateB = parseDate1(valB);
        return dateA - dateB;
      }
      return valA > valB ? 1 : -1;
    });
    setFilteredData(sorted);
  };
  const parseDate1 = (dateString) => {
    const parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };
  const parseDate2 = (dateString) => {
    const parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };

  const handleSortDown = (col) => {
    console.log("Descending");
    const sorted = [...filteredData].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];

      // Check if the values are numbers
      if (!isNaN(valA) && !isNaN(valB)) {
        return valB - valA;
      }

      // Handle date strings
      if (col === "etd/atd" || col === "eta/ata") {
        const dateA = parseDate2(valA);
        const dateB = parseDate2(valB);
        return dateB - dateA;
      }

      // Default string comparison
      return valA < valB ? 1 : -1;
    });
    setFilteredData(sorted);
  };

  // Function to parse dates in the "dd/mm/yyyy" format
  const parseDate = (dateString) => {
    const parts = dateString.split("/");
    // month is 0-based, so subtract 1 from the month
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState("Past 15 Days");

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

  const renderHeader = () => {
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
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
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
                className="w-full md:w-14rem"
                style={{ border: "none" }}
              />
            </div>
          </div>

          <div className="filter d-flex">
            <div className="ant-image cursor-pointer" onClick={showDrawer}>
              <img
                src={filter}
                className="ant-image-img me-1 my-1"
                style={{
                  marginTop: "2px",
                  cursor: "pointer",
                }}
              />
              <span
                style={{
                  cursor: "pointer",
                  color: "#495A6E",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "13px",
                  letterSpacing: "1%",
                  
                }}
              >
                Filters
              </span>
            </div>
          </div>

          <FilterDrawer visible={visible} onClose={onClose} />
        </Col>
      </Row>
    );
  };
  const header = renderHeader();

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <DataTable
        value={currentPageData}
        dataKey="shipmentId"
        paginator={false}
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        currentPageReportTemplate="{first} to {last} out of {totalRecords} "
        // paginatorTemplate=" PrevPageLink PageLinks NextPageLink  CurrentPageReport "
        removableSort
        header={header}
        filters={filters}
        globalFilterFields={[
          "id",
          "origin",
          "destination",
          "booked_on",
          "etd/atd",
          "eta/ata",
          "status",
        ]}
        rowClassName={rowClassName}
      >
        <Column
          field="id"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="px-4 d-flex"
            >
              Shipment ID
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("id");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("id");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          body={shipmentTemplate}
        ></Column>

        <Column
          field="origin"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="d-flex"
            >
              Origin
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("origin");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("origin");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          body={originBodyTemplate}
          headerClassName="custom-header p-3"
          className="p-3"
        ></Column>
        <Column
          field="destination"
          header={
            <span
              className="p-3 d-flex"
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
            >
              Destination
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("destination");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("destination");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          body={destinationBodyTemplate}
          className="p-3"
        ></Column>
        <Column
          field="booked_on"
          header={
            <span className="p-3 d-flex">
              Booked on
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("booked_on");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("booked_on");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3"
        ></Column>
        <Column
          field="etd/atd"
          header={
            <span className="p-3 d-flex">
              ETD/ATD
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("etd/atd");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("etd/atd");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3"
        ></Column>
        <Column
          field="eta/ata"
          header={
            <span className="p-3 d-flex">
              ETA/ATA
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("eta/ata");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("eta/ata");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3"
        ></Column>
        <Column
          field="status"
          header={
            <span className="p-3 d-flex">
              Status
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("status");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("status");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          bodyClassName={(rowData) =>
            rowData.status === "Booking In Progress"
              ? "booking-progress-cell"
              : "booked-cell "
          }
          className=" m-3 px-2"
        ></Column>
        <Column
          field="action"
          body={actionBodyTemplate}
          header={<span className="p-3">Action</span>}
          className="p-3 text-start"
        ></Column>
      </DataTable>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filteredData?.length}
      />
      <Steppertrack
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        rowData={modalRowData}
      />
    </div>
  );
};

export default AllBookings;
