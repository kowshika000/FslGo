import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header";
import RecentBooking from "./Components/QuickBooking/RecentBooking";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Inbox";
import ShipmentsHome from "./Components/Shipments";
import Invoice from "./Components/Invoice/Invoice";
import { Footer } from "./Components/Layout/Footer";
import Quotation from "./Components/Quotations/Quotation";
import { useSelector, useDispatch } from "react-redux";
import { LoginRequest } from "./Redux/Actions/LoginAction";
import Cookies from "js-cookie";
import Inbox from "./Components/Inbox/Inbox";
import ShipmentBase from "./Components/ShipmentDetails/ShipmentTable/ShipmentBase";
import { CircularProgress, Box } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const jwtToken = useSelector((state) => state.Login?.booking?.Token);
  const [loading, setLoading] = useState(true);
  let isTokenReceived = false;

  useEffect(() => {
    const currentUrl = window.location.href;
    const queryString = currentUrl?.split("?")[1];
    const paramsArray = queryString?.split("&");
    const params = {};

    if (paramsArray) {
      paramsArray.forEach((param) => {
        const [key, value] = param?.split("=");
        params[key] = value;
      });
    }

    const id = params["id"];
    const token = params["token"];
    console.log(token);

    dispatch(LoginRequest({ sUsername: id, spassword: token }));

    if (jwtToken) {
      setLoading(false);
    }

    const timeout = setTimeout(() => {
      if (!jwtToken) {
        window.location.href = "http://www.freightsystems.com";
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [dispatch, jwtToken]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
    <CircularProgress style={{ color: "red" }} />
      </Box>
    );
  }

  if (jwtToken) {
    Cookies.set("jwtToken", jwtToken, { expires: 7 });
  }

  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: "4rem" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shipments" element={<ShipmentsHome />} />
          <Route path="/recentBooking" element={<RecentBooking />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/shipmentdetails" element={<ShipmentBase />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
