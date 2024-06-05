import { Typography } from "@mui/material";
import "./invoice.css";
import React from "react";
import Navbar from "../Layout/Navbar";
import InvoiceDetails from "./InvoiceDetails";

const Invoice = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{ maxWidth: "1255px" }}
        className="shipmentIndex py-5 mx-auto"
      >
        <Typography
          style={{ fontSize: "28px", fontWeight: "700" }}
          className="shipments-head"
        >
          Invoice
        </Typography>
        <div>
          <Navbar />
        </div>
       <div className='shadow'>

        <InvoiceDetails />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
