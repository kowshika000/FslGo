import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Button } from "antd";
import Pagination1 from "../Core-Components/Pagination1";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { datas } from "./data";
import { MultiSelect } from "primereact/multiselect";
import { Tooltip } from "antd";
import CreateNewBooking from "./Modal/CreateNewBooking";
import BookingSuccess from "./Modal/BookingScs";

const Qbooking = () => {
  const dataq = datas?.map((data) => data);
  const [selectedRows, setSelectedRows] = useState({});
  const [filteredData, setFilteredData] = useState(dataq);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingSuccessMdl, setBookingSuccessMdl] = useState(false);
  const [newBooking, setNewBooking] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const itemsPerPage = 10;
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(filteredData);
  const [tblFilter, setTblFilter] = useState({
    mode: [],
    shipper: [],
    consignee: [],
    pol: [],
    pod: [],
    commodity: [],
  });
  useEffect(() => {
    const filterDataTable = dataq?.filter((item) =>
      Object.keys(tblFilter).every(
        (key) =>
          tblFilter[key]?.length === 0 || tblFilter[key]?.includes(item[key])
      )
    );
    setFilteredData(filterDataTable);
    setCurrentPage(1);
  }, [tblFilter, dataq]);
  const getUniqueOptions = (array, key) => {
    if (!Array.isArray(array) || !array?.length) {
      return [];
    }
    return Array.from(new Set(array.map((data) => data[key]))).map((value) => ({
      label: value,
      value,
    }));
  };

  useEffect(() => {
    if (clicked) {
      setData(filteredData);
    }
  }, [clicked]);
  const mode_ = getUniqueOptions(data, "mode");
  const shipper_ = getUniqueOptions(data, "shipper");
  const consignee_ = getUniqueOptions(data, "consignee");
  const pol_ = getUniqueOptions(data, "pol");
  const pod_ = getUniqueOptions(data, "pod");
  const commodity_ = getUniqueOptions(data, "commodity");

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const handleCheckboxChange = (index) => {
    setSelectedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Extract the data for the current page
  const currentPageData = filteredData?.slice(startIndex, endIndex);

  // sort data
  const sort = (col) => {
    const handleSort = (key) => {
      let direction = "asc";
      if (sortConfig.key === key && sortConfig.direction === "asc") {
        direction = "desc";
      }
      setSortConfig({ key, direction });
      const sortedData = [...filteredData].sort((a, b) => {
        const valA = a[key];
        const valB = b[key];
        if (!isNaN(valA) && !isNaN(valB)) {
          return direction === "asc" ? valA - valB : valB - valA;
        }
        return direction === "asc"
          ? valA > valB
            ? 1
            : -1
          : valA < valB
          ? 1
          : -1;
      });
      setFilteredData(sortedData);
    };
    return (
      <div className="d-flex sorticon" style={{ flexDirection: "column" }}>
        <IconButton
          onClick={() => handleSort(col)}
          className="p-0"
          style={{ color: "white" }}
        >
          <ExpandLessIcon className="sortup" />
        </IconButton>
        <IconButton
          onClick={() => handleSort(col)}
          className="p-0"
          style={{ color: "white" }}
        >
          <ExpandMoreIcon className="sortdown" />
        </IconButton>
      </div>
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChangeFilter = (field, filterValues) => {
    if (field === "all") {
      setTblFilter({
        mode: [],
        shipper: [],
        consignee: [],
        pol: [],
        pod: [],
        commodity: [],
      });
    } else {
      setTblFilter((prevFilters) => ({
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
        onFocus={() => setClicked(true)}
        onBlur={() => setClicked(false)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
      />
    );
  }
  return (
    <div
      style={{ backgroundColor: "#F8FAFC", Width: "100%", minWidth: "1255px" }}
      className="mx-auto"
    >
      <div
        style={{
          backgroundColor: "white",
        }}
        className="pt-1"
      >
        <Typography
          style={{
            fontSize: "16px",
            lineHeight: "20px",
            color: "#29333D",
            fontWeight: 700,
          }}
          className="mt-4"
        >
          Speed up your booking process by reusing details from your recent
          bookings
        </Typography>
        <div className="mt-3">
          <div style={{ height: "535px" }}>
            <table id="customers">
              <tr>
                <th>Select </th>
                <th>
                  <div
                    className="d-flex justify-content-between"
                    style={{ paddingX: "8px" }}
                  >
                    Mode
                    {MultiSelectFilter("mode", mode_, tblFilter.mode)}
                    {sort("mode")}
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between">
                    Shipper
                    {MultiSelectFilter("shipper", shipper_, tblFilter.shipper)}
                    {sort("shipper")}
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between">
                    Consignee
                    {MultiSelectFilter(
                      "consignee",
                      consignee_,
                      tblFilter.consignee
                    )}
                    {sort("consignee")}
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between">
                    POL
                    {MultiSelectFilter("pol", pol_, tblFilter.pol)}
                    {sort("pol")}
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between">
                    POD
                    {MultiSelectFilter("pod", pod_, tblFilter.pod)}
                    {sort("pod")}
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between">
                    Commodity
                    {MultiSelectFilter(
                      "commodity",
                      commodity_,
                      tblFilter.commodity
                    )}
                    {sort("commodity")}
                  </div>
                </th>
              </tr>

              {currentPageData?.map((data, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="checkbox"
                      id={`select-${index}`}
                      className="custom-checkbox"
                      checked={!!selectedRows[startIndex + index]}
                      onChange={() => handleCheckboxChange(startIndex + index)}
                    />
                    <label htmlFor={`select-${index}`} />
                  </td>
                  <td>{data.mode}</td>
                  <td>{data.shipper}</td>
                  <td>{data.consignee}</td>
                  <td>{data.pol}</td>
                  <td>{data.pod}</td>
                  <td>{data.commodity}</td>
                </tr>
              ))}
            </table>
          </div>
          <Pagination1
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={filteredData?.length}
            // itemsPerPage={itemsPerPage}
          />
        </div>
        <div className="d-flex justify-content-end gap-3 mt-3">
          <Button
            type="primary"
            style={{
              backgroundColor: "#212121",
              color: "white",
              height: "44px",
              borderRadius: "10px",
              padding: "10px",
            }}
            className="bg-dark "
            onClick={() => setNewBooking(true)}
          >
            <span className="btnfamily">No, Continue as New Booking</span>
          </Button>
          <Button
            type="primary"
            style={{
              backgroundColor: "#F80606",
              color: "white",
              height: "44px",
              borderRadius: "10px",
              lineHeight: "24px",
              padding: "10px",
            }}
            onClick={() => setBookingSuccessMdl(true)}
          >
            <span className="btnfamily">Yes, Proceed </span>
          </Button>
        </div>
      </div>
      <BookingSuccess
        open={bookingSuccessMdl}
        close={() => setBookingSuccessMdl(false)}
      />
      <CreateNewBooking open={newBooking} close={() => setNewBooking(false)} />
    </div>
  );
};

export default Qbooking;
