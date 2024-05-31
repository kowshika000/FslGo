import React, { useState, useEffect } from "react";
import { Dialog, Typography } from "@mui/material";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Pagination1 from "../../../Core-Components/Pagination1";

const BookFor = ({ bookForModal, handleCancel }) => {
  const datas = [
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
    {
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
  ];
  const [selectedRows, setSelectedRows] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  useEffect(() => {
    setFilteredData(datas);
  }, []);

  console.log("q booking", filteredData);

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
  return (
    <Dialog open={bookForModal} onClose={handleCancel} fullScreen>
      <div
        className="w-100 "
        style={{
          height: "100vh",
          position: "fixed",
          backgroundColor:"black"
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            backgroundColor: "white",
            padding: "40px 90px 40px 90px",
            height: "100%",
            // position:"absolute",
            // justifyContent:"center",
            // marginLeft:"auto"
            overflowY: "auto",
          }}
          className="mx-auto "
        >
          <Typography style={{ fontSize: "28px", fontWeight: "700" }}>
            Recent Bookings
          </Typography>
          <Typography>
            Speed up your booking process by reusing details from your recent
            bookings
          </Typography>
          <div className="pt-2">
            <Input
              placeholder="Search Mode,Shipper,Consignee , POL,POD, Commodity... "
              prefix={<SearchOutlined style={{ color: "#94A2B2" }} />}
              style={{
                width: "420px",
                padding: "4px 11px",
                borderRadius: "4px",
                fontSize:"14px",
                color:"#94A2B2",
                fontWeight:"bolder",
              
              }}
            />
          </div>

          <div className="mt-3">
            <div style={{ height: "375px", overflowY: "auto" }}>
              <table id="customers">
                <tr>
                  <th>Select</th>
                  <th>Mode</th>
                  <th>Shipper</th>
                  <th>Consignee</th>
                  <th>POL</th>
                  <th>POD</th>
                  <th>Commodity</th>
                </tr>

                {currentPageData?.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        id={`select-${index}`}
                        className="custom-checkbox"
                        checked={!!selectedRows[startIndex + index]}
                        onChange={() =>
                          handleCheckboxChange(startIndex + index)
                        }
                      />
                      <label htmlFor={`select-${index}`} />
                    </td>
                    <td style={{ fontWeight: "bold" }}>{data.mode}</td>
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
                // backgroundColor: "3f3f3f",
                color: "white",
                fontSize:"18px",
                height:"40px",
                borderRadius:"10px"
              }}
              className="bg-dark"
              onClick={handleCancel}
            >
              No, Continue as New Booking
            </Button>
            <Button type="primary" 
            style={{
              backgroundColor: "red",
              color: "white",
              fontSize:"18px",
              height:"40px",
              borderRadius:"10px"
            }}
            onClick={handleCancel}
            >
              Yes, Proceed
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default BookFor;
