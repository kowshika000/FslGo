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
import ProfileBase from "./Components/Profile/ProfileBase";
import FindNewRate from "./Components/Quotations/QuotaionTable/QModal/FindNewRate/FindNewRate";
import Quick from "./Components/QuickBooking/Quick";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const jwtToken = useSelector((state) => state.Login?.booking?.Token);
  const [loading, setLoading] = useState(true);
  const [showmap, setShowmap] = useState(false);
  const [showText, setShowText] = useState(false);

  const parseUrlParams = () => {
    const currentUrl = window.location.href;
    const queryString = currentUrl.split("?")[1];
    const params = {};

    if (queryString) {
      queryString.split("&").forEach((param) => {
        const [key, value] = param.split("=");
        params[key] = value;
      });
    }

    return params;
  };

  useEffect(() => {
    const savedToken = Cookies.get("jwtToken");

    if (savedToken) {
      setLoading(false);
      return;
    }

    const { id, token } = parseUrlParams();

    if (id && token && !jwtToken) {
      dispatch(LoginRequest({ sUsername: id, spassword: token }));
    } else {
      setLoading(false);
    }

    const timeout = setTimeout(() => {
      if (!jwtToken) {
        window.location.href = "http://www.freightsystems.com";
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [dispatch, jwtToken]);

  useEffect(() => {
    if (jwtToken) {
      Cookies.set("jwtToken", jwtToken, { expires: 7 });
      setLoading(false);
    }
  }, [jwtToken]);

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

  return (
    <BrowserRouter>
      <Header setShowmap={setShowmap} setShowText={setShowText} />
      <div style={{ marginTop: "4rem" }}>
        <Routes>
          <Route
            path="/"
            element={
              <ShipmentsHome
                showmap={showmap}
                setShowmap={setShowmap}
                showText={showText}
                setShowText={setShowText}
              />
            }
          />
          <Route path="/recentBooking" element={<RecentBooking />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/shipmentdetails" element={<ShipmentBase />} />
          <Route path="/findnewrate" element={<FindNewRate />} />
          <Route path="/profile" element={<ProfileBase />} />
          <Route path="/quick" element={<Quick />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default React.memo(App);
