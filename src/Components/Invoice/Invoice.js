import {
  Typography,
  Tab,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import "./invoice.css";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Button } from "primereact/button";
import React, { useState, useRef } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import InvoiceDetails from "./InvoiceDetails";
import SearchButton from "../Core-Components/SearchButton";

const Invoice = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const actionBodyTemplate = () => {
    return (
      <>
        <Button icon="" rounded className="mr-2" />
      </>
    );
  };
  return (
    <>
      
      <div className=" shadow w-100 invoice-card mx-auto mt-5"  style={{
        minWidth: "1269px",
        borderRadius: "8px",
      }}>
      <div className="card-header p-3" style={{backgroundColor:'#F8FAFC', borderBottom:'1px solid #E7EAF0', padding:'0 20px 0 20px'}}><Typography style={{fontSize:'20px', }} className="fw-bold">
        Invoice
      </Typography></div>
        <InvoiceDetails />

        {/* <div className="mt-5 p-5"> 
          <div className="w-50">
            <SearchButton children="Search PO, Invoice" />
          </div>
          <div className=" w-100 mt-5">
            <Box sx={{ width: "100%", typography: "body1" }} className="mt-5">
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    background: "rgba(0, 0, 0, 0.03)",
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="ALL" value="1" className="fw-bold" />
                    <Tab label="Pending" value="2" className="fw-bold" />
                    <Tab label="Overdue" value="3" className="fw-bold" />
                    <FormControl
                      sx={{ m: 1, minWidth: 120 }}
                      className="ms-auto"
                    >
                      <InputLabel id="dropdown" sx={{ fontSize: "12px" }}>
                        Past 30 Days
                      </InputLabel>
                      <Select
                        labelId="dropdown"
                        id="dropdown1"
                        label="Last 30 Days"
                        sx={{ fontSize: "12px" }}
                      >
                        <MenuItem value="" sx={{ fontSize: "12px" }}>
                          Past 30 Days
                        </MenuItem>
                        <MenuItem value="" sx={{ fontSize: "12px" }}>
                          Past 3 Months
                        </MenuItem>
                        <MenuItem value="" sx={{ fontSize: "12px" }}>
                          Past 6 Months
                        </MenuItem>
                        <MenuItem value="" sx={{ fontSize: "12px" }}>
                          Past 1 Year
                        </MenuItem>
                        <MenuItem value="" sx={{ fontSize: "12px" }}>
                          customs
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <DataTable tableStyle={{ minWidth: "50rem" }}>
                    <Column
                      field="code"
                      header="Invoice Number"
                      sortable
                    ></Column>
                    <Column
                      field="name"
                      header="Invoice Date"
                      sortable
                    ></Column>
                    <Column
                      field="h_num"
                      header="House Number"
                      sortable
                    ></Column>
                    <Column
                      field="due_date"
                      header="Due Date"
                      sortable
                    ></Column>
                    <Column field="days" header="Days" sortable></Column>
                    <Column field="amount" header="Amount" sortable></Column>
                    <Column field="balance" header="Balance" sortable></Column>
                    <Column body={actionBodyTemplate}></Column>
                  </DataTable>
                  
                </TabPanel>
                <TabPanel value="2">
                  <table className="w-100 table table-hover">
                    <thead className="table-light">
                      <th>Invoice Number</th>
                      <th>Invoice Date</th>
                      <th>House Number</th>
                      <th>Due Date</th>
                      <th>Days</th>
                      <th>Amount</th>
                      <th>Balance</th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>INV - 34567</td>
                        <td>19 MAR 2024</td>
                        <td>CI56789</td>
                        <td>19 MAR 2024</td>
                        <td>25</td>
                        <td>450</td>
                        <td>400</td>
                        <td>
                          <button
                            className="btn px-4"
                            style={{ background: "#f44336", color: "white" }}
                          >
                            Download <DownloadIcon />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel value="3">
                  <table className="w-100">
                    <tr style={{ background: "rgba(0, 0, 0, 0.03)" }}>
                      <th>Invoice Number</th>
                      <th>Invoice Date</th>
                      <th>House Number</th>
                      <th>Due Date</th>
                      <th>Days</th>
                      <th>Amount</th>
                      <th>Balance</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>INV - 34567</td>
                      <td>19 MAR 2024</td>
                      <td>CI56789</td>
                      <td>19 MAR 2024</td>
                      <td>25</td>
                      <td>450</td>
                      <td>400</td>
                      <td>
                        <button
                          className="btn px-4 "
                          style={{ background: "#f44336", color: "white" }}
                        >
                          Download <DownloadIcon />
                        </button>
                      </td>
                    </tr>
                  </table>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
         </div> */}
      </div>
      
    </>
  );
};

export default Invoice;
