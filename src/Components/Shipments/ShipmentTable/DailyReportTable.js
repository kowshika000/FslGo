import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./DailyReportTable.css";
import Pagination from "../../Core-Components/Pagination";
import group from "../../../assets/Group 20851.svg";
import { Menu } from "primereact/menu";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { LuSigma } from "react-icons/lu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Input,
  Switch,
  TextField,
} from "@mui/material";
import styled from "styled-components";

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

//this is for customization style using material_UI
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: "black",
    opacity: "unset",

    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

function DailyReportTable() {

  //Hooks
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [checked, setChecked] = React.useState([false, false]);
  const [check, setcheck] = useState(false);
  const [sidebaropen, setSidebaropen] = useState(false);
  const [dsrFilter, setDsrFilter] = useState({
    shipmentfilterData: [],
    order_no: [],
    modeD: [],
    originD: [],
    DestD: [],
    etdD: [],
    etaD: [],
    statusD: [],
  });

  //Functions

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="= Child 1"
        control={
          <Checkbox
            checked={checked[0]}
            onClick={handleChange2}
            sx={{
              color: "black",
              "&.Mui-checked": {
                color: "red",
              },
            }}
          />
        }
      />
      <FormControlLabel
        label="= Child 2"
        control={
          <Checkbox
            checked={checked[1]}
            onClick={handleChange3}
            sx={{
              color: "black",
              "&.Mui-checked": {
                color: "red",
              },
            }}
          />
        }
      />
    </Box>
  );

  let items = [
    {
      label: (
        <FormControlLabel
          control={
            <Android12Switch
              checked={check}
              onClick={(e) => setcheck(e.target.checked)}
            />
          }
          label="Pivot Mode"
        />
      ),
    },
    {
      separator: true,
    },
    {
      label: (
        <FormControlLabel
          label={<Input placeholder="Search..." />}
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onClick={handleChange1}
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
          }
        />
      ),
      // {children}
    },
    {
      separator: true,
    },
    {
      label: children,
    },
    {
      separator: true,
    },
    {
      label: (
        <div className="d-flex align-items-start">
         <FaArrowUpWideShort className="me-2" />
          <div>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: ".01em",
                marginBottom: "7px",
              }}
            >
              Row Groups
            </p>
            <p
              className="m-0"
              style={{ fontSize: "11px", letterSpacing: ".01em" }}
            >
              Drag here to set row groups
            </p>
          </div>
        </div>
      ),
    },
    {
      separator: true,
    },
    {
      label: (
        <div className="d-flex align-items-start">
          <LuSigma className="me-2" />
          <div>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: ".01em",
                marginBottom: "7px",
              }}
            >
              Values
            </p>
            <p
              className="m-0"
              style={{ fontSize: "11px", letterSpacing: ".01em" }}
            >
              Drag here to aggregate
            </p>
          </div>
        </div>
      ),
    },
  ];


  const data = [
    {
      service: "AIR",
      order_no: "3PD000421",
      status: "Active",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "13/05/2024",
    },
    {
      service: "LCL",
      order_no: "3PD000422",
      status: "NotActive",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "13/05/2014",
    },
    {
      service: "LCL",
      order_no: "3PD000423",
      status: "Active",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "09/05/2024",
    },
    {
      service: "FCL",
      order_no: "3PD000424",
      status: "NotActive",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "10/05/2024",
    },
    {
      service: "FCL",
      order_no: "3PD000425",
      status: "Active",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "12/05/2024",
    },
    {
      service: "LCL",
      order_no: "3PD000426",
      status: "NotActive",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "13/05/2024",
    },
    {
      service: "LCL",
      order_no: "3PD000426",
      status: "NotActive",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "13/05/2024",
    },
  ];

  const [filtereddata, setFiltereddata] = useState(data)

  //This is for sort ascending order
  const handleSort = (col) => {
    console.log("Ascending");
    const sorted = [...data].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];
      if (!isNaN(valA) && !isNaN(valB)) {
        return valA - valB;
      }
      if (col === "booking_date" || col === "pickup_date" || col==="etd_origin") {
        const dateA = parseDate1(valA);
        const dateB = parseDate1(valB);
        return dateA - dateB;
      }
      return valA > valB ? 1 : -1;
    });
    setFiltereddata(sorted);
  };
  const parseDate1 = (dateString) => {
    const parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };
  parseDate1("12/05/2020")
  const parseDate2 = (dateString) => {
    const parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };

  //This is for sort descending order
  const handleSortDown = (col) => {
    console.log("Descending");
    const sorted = [...data].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];

      if (!isNaN(valA) && !isNaN(valB)) {
        return valB - valA;
      }

      if (col === "booking_date" || col === "pickup_date" || col==="etd_origin" ) {
        const dateA = parseDate2(valA);
        const dateB = parseDate2(valB);
        return dateB - dateA;
      }
      return valA < valB ? 1 : -1;
    });
    setFiltereddata(sorted);
  };

  //This is for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filtereddata?.length);
  const paginatedData = filtereddata?.slice(
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
          dataKey="shipmentId"
          paginator={false}
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          currentPageReportTemplate="{first} to {last} out of {totalRecords} "
          // paginatorTemplate=" PrevPageLink PageLinks NextPageLink  CurrentPageReport "
          removableSort
          style={{ height: "380px", width: "1500px" }}
          emptyMessage={noData()}
        >
          <Column
            field="service"
            header={
            <span className=" d-flex">
              Service
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
              {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
            {/* {MultiSelectFilter("statusD", status_, tblFilter.statusD)} */}
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
          <p className="m-0 px-4" style={{ letterSpacing: ".01em",fontSize:"12px",fontWeight:"400" }}>
            <img className="me-2" src={group}></img>Columns
          </p>
        </div>
        {sidebaropen && (
          <Menu
            model={items}
            className="w-full md:w-15rem"
            style={{ position: "absolute", top: "20px", right: "20px" }}
          />
        )}
      </div>
      <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalItems={filtereddata?.length}
      onPageChange={() => setCurrentPage(1)}
      />
    </>
  );
}

export default DailyReportTable;
