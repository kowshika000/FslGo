import React, { useState, useEffect } from "react";
import { Dialog, Typography } from "@mui/material";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Pagination1 from "../../../Core-Components/Pagination1";

const BookFor = ({ bookForModal, handleCancel }) => {
  const datas = [
    {
      select: "1",
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    }, {
      select: "1",
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    }, {
      select: "1",
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    }, {
      select: "1",
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    }, {
      select: "1",
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    }, {
      select: "1",
      mode: "LCL",
      shipper: "GLOBAL CO.LTD",
      consignee: "INDIA AUTOMOBILE LTD",
      pol: "NHAVA SHEVA",
      pod: "JEBEL ALI",
      commodity: "Automotive ssss",
    },
  ];
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  useEffect(() => {
    setFilteredData(datas);
  }, []);
  console.log("q booking", filteredData);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Extract the data for the current page
  const currentPageData = filteredData?.slice(startIndex, endIndex);
  return (
    <Dialog open={bookForModal} onCancel={handleCancel} fullScreen>
      <div className="w-100 bg-dark">
        <div
          style={{
            maxWidth: "1200px",
            backgroundColor: "white",
            padding: "40px 90px 40px 90px",
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
              placeholder="Search booking id , origin, destination... "
              prefix={<SearchOutlined style={{ color: "#94A2B2" }} />}
              style={{
                width: "368.13px",
                padding: "4px 11px",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="card mt-3">
            <DataTable
              value={datas}
              // paginator
              // rows={5}
              // rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column
                field="select"
                align="center"
                header="Select"
                className="p-2"
              ></Column>
              <Column
                field="mode"
                align="center"
                header="Mode"
                className="p-2"
              ></Column>
              <Column
                field="shipper"
                align="center"
                header="Shipper"
                className="p-2"
              ></Column>
              <Column
                field="consignee"
                align="center"
                header="Consignee"
                className="p-2"
              ></Column>
              <Column
                field="pol"
                align="center"
                header="POL"
                className="p-2"
              ></Column>
              <Column
                field="pod"
                align="center"
                header="POD"
                className="p-2"
              ></Column>
              <Column
                field="commodity"
                align="center"
                header="Commodity"
                className="p-2"
              ></Column>
            </DataTable>
            <Pagination1
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalItems={filteredData?.length}
              // itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default BookFor;
