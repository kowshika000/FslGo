import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./DailyReportTable.css";
import Pagination from "../../../Core-Components/Pagination";
import group from "../../../../assets/Group 20851.svg";
import { Menu } from "primereact/menu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import { reportData } from "./ReportData";
import Columns from "./Columns";
import { Tooltip } from "antd";
import { MultiSelect } from "primereact/multiselect";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Input,
  Switch,
  TextField,
} from "@mui/material";

const itemRenderer = (item) => (
  <div className="p-menuitem-content">
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  </div>
);

function DailyReportTable() {
  //Hooks
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebaropen, setSidebaropen] = useState(false);
  const report = reportData.map((item) => item);

  const [dsrFilter, setDsrFilter] = useState({
    service: [],
    order_no: [],
    status: [],
    booking_no: [],
    booking_date: [],
    origin: [],
    POL1: [],
    POL2: [],
    final_destination: [],
    cargo_received: [],
    pickup_date: [],
    cargo_received2: [],
    etd_origin: [],
  });
  const [filterReport, setFilterReport] = useState(report);
  useEffect(() => {
    const filterReportTbl = report.filter((items) =>
      Object.keys(dsrFilter).every(
        (key) => dsrFilter[key]?.length === 0 || dsrFilter[key]?.includes(items[key])
      )
    );
    setFilterReport(filterReportTbl);
    setCurrentPage(1);
  });

  const getUniqueOptions = (array, key) => {
    if (!Array.isArray(array) || !array?.length) {
      return [];
    }
    return Array.from(new Set(array.map((data) => data[key]))).map((value) => ({
      label: value,
      value,
    }));
  };
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(filterReport);
  useEffect(() => {
    if (clicked) {
      setData(filterReport);
    }
  }, [clicked]);

  const service_ = getUniqueOptions(data, "service");
  const orderId_ = getUniqueOptions(data, "order_no");
  const status_ = getUniqueOptions(data, "status");
  const bNo_ = getUniqueOptions(data, "booking_no");
  const bData_ = getUniqueOptions(data, "booking_date");
  const org_ = getUniqueOptions(data, "origin");
  const pol1 = getUniqueOptions(data, "POL1");
  const pol2 = getUniqueOptions(data, "POL2");
  const finalDest_ = getUniqueOptions(data, "final_destination");
  const cargoR1_ = getUniqueOptions(data, "cargo_received");
  const pickupDate_ = getUniqueOptions(data, "pickup_date");
  const cargoR2_ = getUniqueOptions(data, "cargo_received2");
  const etdOrg_ = getUniqueOptions(data, "etd_origin");

  const handleChangeFilter = (field, filterValues) => {
    if (field === "all") {
      setDsrFilter({
        service: [],
        order_no: [],
        status: [],
        booking_no: [],
        booking_date: [],
        origin: [],
        POL1: [],
        POL2: [],
        final_destination: [],
        cargo_received: [],
        pickup_date: [],
        cargo_received2: [],
        etd_origin: [],
      });
    } else {
      setDsrFilter((prevFilters) => ({
        ...prevFilters,
        [field]: filterValues,
      }));
    }
  };
  function MultiSelectFilter(filterKey, options, value, additionalStyles) {
    const renderOption = (option) => {
      if (option.label.length <= 14) {
        return <span>{option.label}</span>;
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + "..";
        return (
          <Tooltip placement="topLeft" title={option.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };

    return (
      <MultiSelect
        className="custom-multi-select"
        value={value}
        options={options}
        name="ShipId"
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
          ...additionalStyles,
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter(filterKey, e.value)}
        onFocus={() => setClicked(true)} // Track when the MultiSelect gains focus
        onBlur={() => setClicked(false)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
      />
    );
  }
  //This is for sort ascending order
  const handleSort = (col) => {
    const sorted = [...report].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];
      if (!isNaN(valA) && !isNaN(valB)) {
        return valA - valB;
      }
      if (
        col === "booking_date" ||
        col === "pickup_date" ||
        col === "etd_origin"
      ) {
        const dateA = parseDate1(valA);
        const dateB = parseDate1(valB);
        return dateA - dateB;
      }
      return valA > valB ? 1 : -1;
    });
    setFilterReport(sorted);
  };
  const parseDate1 = (dateString) => {
    const parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };
  parseDate1("12/05/2020");
  const parseDate2 = (dateString) => {
    const parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };

  const handleSortDown = (col) => {
    const sorted = [...report].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];

      if (!isNaN(valA) && !isNaN(valB)) {
        return valB - valA;
      }

      if (
        col === "booking_date" ||
        col === "pickup_date" ||
        col === "etd_origin"
      ) {
        const dateA = parseDate2(valA);
        const dateB = parseDate2(valB);
        return dateB - dateA;
      }
      return valA < valB ? 1 : -1;
    });
    setFilterReport(sorted);
  };

  //This is for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedData = filterReport?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const noData = () => {
    return <div className="no-options ">No Data Found</div>;
  };
  return (
    <>
      <div className="dsr_section mb-2">
        <DataTable
          value={paginatedData}
          style={{ height: "380px", width: "1500px" }}
          emptyMessage={noData()}
        >
          <Column
            field="service"
            header={
              <span className=" d-flex">
                Service
                {MultiSelectFilter("service", service_ , dsrFilter.service)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("service");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("service");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            style={{
              padding: "15px",
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="order_no"
            header={
              <span className=" d-flex">
                Order No.
                {MultiSelectFilter("order_no", orderId_ , dsrFilter.order_no)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("order_no");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("order_no");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="status"
            header={
              <span className=" d-flex">
                Status
                {MultiSelectFilter("status", status_, dsrFilter.status)}
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
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="booking_no"
            header={
              <span className=" d-flex">
                Booking No.
                {MultiSelectFilter("booking_no", bNo_ , dsrFilter.booking_no)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("booking_no");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("booking_no");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="booking_date"
            header={
              <span className=" d-flex">
                Booking Date
                {MultiSelectFilter("booking_date", bData_ , dsrFilter.booking_date)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("booking_date");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("booking_date");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="origin"
            header={
              <span className=" d-flex">
                Origin
                {MultiSelectFilter("origin", org_ , dsrFilter.origin)}
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
                      handleSortDown("storiginatus");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="POL1"
            header={
              <span className=" d-flex">
                POL
                {MultiSelectFilter("POL1", pol1 , dsrFilter.POL1)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("POL1");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("POL1");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="POL2"
            header={
              <span className=" d-flex">
                POL
                {MultiSelectFilter("POL2", pol2, dsrFilter.POL2)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("POL2");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("POL2");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="final_destination"
            header={
              <span className=" d-flex">
                Final Destination
                {MultiSelectFilter("final_destination", finalDest_ , dsrFilter.final_destination)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("final_destination");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("final_destination");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="cargo_received"
            header={
              <span className=" d-flex">
                Cargo Received
                {MultiSelectFilter("cargo_received", cargoR1_, dsrFilter.cargo_received)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("cargo_received");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("cargo_received");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="pickup_date"
            header={
              <span className=" d-flex">
                Pickup Date
                {MultiSelectFilter("pickup_date", pickupDate_, dsrFilter.pickup_date)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("pickup_date");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("pickup_date");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="cargo_received2"
            header={
              <span className=" d-flex">
                Cargo Received
                {MultiSelectFilter("cargo_received2", cargoR2_, dsrFilter.cargo_received2)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("cargo_received2");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("cargo_received2");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="etd_origin"
            header={
              <span className=" d-flex">
                ETD Origin
                {MultiSelectFilter("etd_origin", etdOrg_ , dsrFilter.etd_origin)}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("etd_origin");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("etd_origin");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
            }
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
        </DataTable>
        <div
          style={{
            position: "absolute",
            top: "75px",
            right: "-50px",
            transform: "rotate(90deg)",
            borderBottom: "2px solid black",
          }}
          onClick={() => setSidebaropen((prev) => !prev)}
          role="button"
        >
          <p
            className="m-0 px-4"
            style={{
              letterSpacing: ".01em",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            <img className="me-2" src={group}></img>Columns
          </p>
        </div>
        {sidebaropen && <Columns />}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filterReport?.length}
        onPageChange={() => setCurrentPage(1)}
      />
    </>
  );
}

export default DailyReportTable;
