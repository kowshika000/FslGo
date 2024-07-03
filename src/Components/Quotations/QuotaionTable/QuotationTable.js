import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Pagination1 from "../../Core-Components/Pagination1";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "antd";
import CountryFlag from "../../Core-Components/CountryFlag";
// import Steppertrack from "../Track/StepperTrack";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { FilterMatchMode } from "primereact/api";
import { Row, Col, Input, Image } from "antd";
import { SearchOutlined, CaretDownFilled } from "@ant-design/icons";
import FilterDrawer from "./Fillter";
import filter from "../../../assets/Filter 2.png";
import calendar from "../../../assets/calendar.png";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { Dropdown } from "primereact/dropdown";
import Vector from "../../../assets/Vector1.png";
import Verified from "../../../assets/Verified.png";
import { QData } from "./QuotationData";
import BookFor from "./QModal/BookFor";
import Requested from "./QModal/Requested";
import { useNavigate } from "react-router-dom";
import { QuotationRequest } from "../../../Redux/Actions/QuotationAction";

const QuotationTable = ({ filterData, selectedStatus }) => {
  const [bookForModal, setbookForModal] = useState(false);
  const [requstedModal, setrequstedModal] = useState(false);

  const navigate = useNavigate();
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
  const itemsPerPage = 10; // Number of items per page
  const dispatch = useDispatch();
  const payload = {
    filter_month: "",
    quotation_type: "",
    spagesize: "",
    sperpage: "",
    quotation_no: "",
    origin: "",
    destination: "",
    mode: "",
    etd: "",
    eta: "",
  };
  useEffect(() => {
    dispatch(QuotationRequest({ payload }));
  }, [dispatch]);
  const quotationData = useSelector(
    (state) => state?.QuotationList?.Quotation?.data
  );
  const quotation = useSelector((state) => state?.QuotationList?.Quotation);

  // const quotationData = QData ? QData.filter((data) => data) : [];
  console.log(quotation, "qudata");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(filterData.length ? filterData : quotationData);
  }, [selectedStatus]);
  console.log("q booking", filteredData);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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
    btnClass = "cargo-picked-up";
    if (rowData.status === "Requested") {
      buttonLabel = (
        <>
          Requested{" "}
          {/* <ReportIcon
            style={{ width: "15px", height: "15px", marginTop: "-2px" }}
          /> */}
          <img src={Vector} style={{ marginTop: "-2px", marginLeft: "4px" }} />
        </>
      );
      btnClass = "waringBtn";
    } else if (rowData.status === "Book For $300") {
      buttonLabel = "Book For $300";
      btnClass = "dangerBtn";
    } else if (rowData.status === "Active") {
      buttonLabel = "Book For $300";
      btnClass = "dangerBtn";
    } else if (rowData.status === "Find New Rates" || "Expired") {
      buttonLabel = (
        <>
          Find New Rates{" "}
          <img src={Vector} style={{ marginTop: "-2px", marginLeft: "4px" }} />
        </>
      );
      btnClass = "waringBtn";
    } else if (rowData.status === "Booked") {
      buttonLabel = (
        <>
          <img
            src={Verified}
            style={{ marginTop: "-2px", marginRight: "4px" }}
          />{" "}
          Booked
        </>
      );
      btnClass = "booked";
    }
    const hadleModalOpen = () => {
      if (rowData.status === "Requested") {
        setrequstedModal(true);

        setbookForModal(false);
      } else if (rowData.status === "Active") {
        setbookForModal(true);
        setrequstedModal(false);
      } else if (rowData.status === "Expired") {
        navigate("/findnewrate");
      }
    };
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
        onClick={hadleModalOpen}
      />
    );
  };

  const rowClassName = () => {
    return "custom-row";
  };
  const shipmentTemplate = (rowData) => {
    return (
      <div style={{ textAlign: "start" }}>
        <div className="bold px-4">{rowData?.ref_id}</div>
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
      if (col === "etd" || col === "eta") {
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
      if (col === "etd" || col === "eta") {
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
        // value={tableValue}
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
          "Load",
          "etd",
          "eta",
          "rate_validity",
        ]}
        rowClassName={rowClassName}
      >
        <Column
          field="ref_id"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="px-4 d-flex"
            >
              Ref. ID
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
          field="load"
          header={
            <span className="p-3 d-flex">
              Load
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("Load");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("Load");
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
          field="etd"
          header={
            <span className="p-3 d-flex">
              ETD
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("etd");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("etd");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3 text-start"
        ></Column>
        <Column
          field="eta"
          header={
            <span className="p-3 d-flex">
              ETA
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("eta");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("eta");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3 text-start"
        ></Column>
        <Column
          field="rate_validity"
          header={
            <span className="p-3 d-flex">
              Rate Validity
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("Rate Validity");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("Rate Validity");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          //   bodyClassName={(rowData) =>
          //     rowData.status === "Booking In Progress"
          //       ? "booking-progress-cell"
          //       : "booked-cell "
          //   }
          className="text-start p-3"
        ></Column>
        <Column
          field="status"
          body={actionBodyTemplate}
          header={<span className="p-3">Action</span>}
          className="p-3 text-start"
        ></Column>
      </DataTable>
      <Pagination1
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filteredData?.length}
        // itemsPerPage={itemsPerPage}
      />
      {/* <Steppertrack
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        rowData={modalRowData}
      /> */}
      <BookFor
        bookForModal={bookForModal}
        handleCancel={() => setbookForModal(false)}
      />
      <Requested
        requstedModal={requstedModal}
        handleCancel={() => setrequstedModal(false)}
      />
    </div>
  );
};

export default QuotationTable;
