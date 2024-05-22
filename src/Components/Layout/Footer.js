import { Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <div
      className="d-flex justify-content-between bg-dark text-white   "
      style={{
        minWidth: "1330px",
        width: "100%",
        height: "76px",
        alignItems: "center",
        padding: "20px 24px 20px 24px",
      }}
    >
      <div
        className="d-flex justify-content-between gap-5 "
        style={{ width: "453px", color: "#FFFFFF" }}
      >
        <Typography
          sx={{ fontSize: "15px", fontWeight: "400", lineHeight: "23.44px" }}
        >
          Terms and Service
        </Typography>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "400", lineHeight: "23.44px" }}
        >
          Privacy Policy
        </Typography>
      </div>
      <div>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "400", lineHeight: "23.44px" }}
        >
          All Rights Reserved @ Freight Systems 2024
        </Typography>
      </div>
    </div>
  );
};
