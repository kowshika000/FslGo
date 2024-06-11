import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";

// import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Logo from "../../assets/fresGoLogo.jpg"
import { ReactComponent as Bell } from "../../assets/bell.svg";

const Header = ({ activePage }) => {
  const location = useLocation();
  const [headerFocused, setHeaderFocused] = useState(true);

  const handleHeaderFocus = () => {
    setHeaderFocused(true);
  };

  const handleHeaderBlur = () => {
    setHeaderFocused(false);
  };

  return (
    <div
      className="d-flex justify-content-between"
      onFocus={handleHeaderFocus}
      onBlur={handleHeaderBlur}
      style={{
        position: "fixed",
        top: 0,
        minWidth: "1330px",
        width: "100%",
        height: "76px",
        zIndex: "1000",
        overflowY: "hidden",
        background: "#181e25",
        padding: "20px 24px 20px 24px",
        borderBottom: "1px solid #29333d",
      }}
    >
      <div className="d-flex">
        <div className="align-content-center">
          <img src={Logo} width="120px" height="35px" alt="Logo" />
        </div>
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto", paddingLeft:'20px' }}>
          {/* Navigation links */}

          {/* <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                color:
                  location.pathname === "/"
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                padding: "20px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Dashboard
            </Typography>
          </Link> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                color:
                  location.pathname === "/"
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                padding: "20px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Shipments
            </Typography>
          </Link>
          <Link to="/quotation" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                color:
                  location.pathname === "/quotation"
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                padding: "20px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Quotations
            </Typography>
          </Link>
          <Link to="/invoice" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                color:
                  location.pathname === "/invoice"
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                padding: "20px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Invoice
            </Typography>
          </Link>
          <Link to="/quick" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                color:
                  location.pathname === "/quick"
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                padding: "20px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
             Quick Booking
            </Typography>
          </Link>
        </Box>
      </div>
      <div
        className="d-flex align-items-center me-5"
        style={{ justifyContent: "space-between", gap: "25px" }}
      >
        <div
          style={{
            border: "1px solid #D1D9D3",
            borderRadius: "20px",
            padding: "8px 12px",
            width: "70px",
            gap: "0",
            position: "relative",
          }}
          className="d-flex justify-content-end align-items-center"
        >
          <Bell
            width="25px"
            height="25px"
            style={{ position: "absolute", left: "4px" }}
            alt="Bell"
          />

          <div
            style={{
              borderRadius: "50px",
              widht:'50px',
              height:'20px',
              background: "#ffd7d9",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: "400",
                textAlign: "center",
                padding:'6px',
                color: "#da1e28",
                alignItems: "start",
               paddingTop:'3px'
              }}
            >
              3
              {/* 3<sup>+</sup> */}
            </Typography>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#FB450C",
            width: "43px",
            height: "35px",
            borderRadius: "50px",
          }}
          className="justify-text-center align-content-center"
        >
          <Link to='/profile' className="text-decoration-none">
            <Typography
              sx={{
                color: "white",
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
            G
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
