import React, { useState, useEffect } from "react";
import { Dialog, Typography } from "@mui/material";
import { Button, Input } from "antd";
import Pagination1 from "../Core-Components/Pagination1";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { datas } from "./data";

const Qbooking = ({ bookForModal, handleCancel }) => {
  const data = datas?.map((data) => data);
  const [selectedRows, setSelectedRows] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingSuccessMdl, setBookingSuccessMdl] = useState(false);
  const [newBooking, setNewBooking] = useState(false);
  const itemsPerPage = 10;
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
  const handleSort = (col) => {
    console.log("Ascending");
    const sorted = [...filteredData].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];
      if (!isNaN(valA) && !isNaN(valB)) {
        return valA - valB;
      }
      return valA > valB ? 1 : -1;
    });
    setFilteredData(sorted);
  };

  const handleSortDown = (col) => {
    console.log("Descending");
    const sorted = [...filteredData].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];

      if (!isNaN(valA) && !isNaN(valB)) {
        return valB - valA;
      }
      return valA < valB ? 1 : -1;
    });
    setFilteredData(sorted);
  };
  return (
    <div
      style={{ backgroundColor: "#F8FAFC", Width: "100%", minWidth: "1255px" }}
      className="mx-auto"
    >
      <div
        style={{
          //   maxWidth: "1049px",
          backgroundColor: "white",
          // padding: "40px 90px 40px 90px",
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
        >
          Speed up your booking process by reusing details from your recent
          bookings
        </Typography>
        <div className="mt-3" style={{ maxWidth: "1025px" }}>
          <div>
            <table id="customers">
              <tr>
                <th>Select </th>
                <th>
                  <div
                    className="d-flex justify-content-between"
                    style={{ paddingX: "8px" }}
                  >
                    Mode{" "}
                    <div
                      className="d-flex sorticon"
                      style={{ flexDirection: "column" }}
                    >
                      <IconButton
                        onClick={() => {
                          handleSort("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandLessIcon className="sortup" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleSortDown("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandMoreIcon className="sortdown" />
                      </IconButton>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between">
                    Shipper{" "}
                    <div
                      className="d-flex sorticon"
                      style={{ flexDirection: "column" }}
                    >
                      <IconButton
                        onClick={() => {
                          handleSort("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandLessIcon className="sortup" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleSortDown("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandMoreIcon className="sortdown" />
                      </IconButton>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between">
                    Consignee{" "}
                    <div
                      className="d-flex sorticon"
                      style={{ flexDirection: "column" }}
                    >
                      <IconButton
                        onClick={() => {
                          handleSort("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandLessIcon className="sortup" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleSortDown("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandMoreIcon className="sortdown" />
                      </IconButton>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between">
                    POL{" "}
                    <div
                      className="d-flex sorticon"
                      style={{ flexDirection: "column" }}
                    >
                      <IconButton
                        onClick={() => {
                          handleSort("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandLessIcon className="sortup" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleSortDown("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandMoreIcon className="sortdown" />
                      </IconButton>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between">
                    POD{" "}
                    <div
                      className="d-flex sorticon"
                      style={{ flexDirection: "column" }}
                    >
                      <IconButton
                        onClick={() => {
                          handleSort("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandLessIcon className="sortup" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleSortDown("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandMoreIcon className="sortdown" />
                      </IconButton>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between">
                    Commodity{" "}
                    <div
                      className="d-flex sorticon"
                      style={{ flexDirection: "column" }}
                    >
                      <IconButton
                        onClick={() => {
                          handleSort("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandLessIcon className="sortup" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleSortDown("id");
                        }}
                        className="p-0"
                        style={{ color: "white" }}
                      >
                        <ExpandMoreIcon className="sortdown" />
                      </IconButton>
                    </div>
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

      {/* //    <BookingCreateSuccess
    //     open={bookingSuccessMdl}
    //     close={() => setBookingSuccessMdl(false)}
    //   />
    //   <NewBooking open={newBooking} close={() => setNewBooking(false)} /> */}
    </div>
  );
};

export default Qbooking;
