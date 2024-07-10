import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
// import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Logo from "../../assets/fresGoLogo.jpg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { Drawer, Dropdown, notification } from "antd";
import { useSelector } from "react-redux";
import notificationIcon from '../../assets/notificationIcon.svg'
import greenIcon from '../../assets/greenIcon.svg'

const Header = ({ setShowText, setShowmap }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [headerFocused, setHeaderFocused] = useState(true);
  const FirstLetter = useSelector((state) => state.ProfileData?.profileData?.company?.charAt(0));
  const [visible, setVisible] = useState(false)

  const onClose = () =>{
    setVisible(false)
  }

  const handleHeaderFocus = () => {
    setHeaderFocused(true);
  };

  const handleHeaderBlur = () => {
    setHeaderFocused(false);
  };

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    window.location.href = "http://www.freightsystems.com";
  };

  const items = [
    {
      key: "1",
      label: (
        <Link
          to="/profile"
          className="text-decoration-none "
          style={{
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: ".01em",
            color: "black",
            marginRight: "70px",
            lineHeight: "27px",
          }}
        >
          <AccountCircleIcon
            sx={{ fontSize: "23px", color: "#384656" }}
            className="me-3"
          />
          Profile
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          className="text-decoration-none"
          style={{
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: ".01em",
            color: "black",
            marginRight: "70px",
            lineHeight: "27px",
          }}
          onClick={() => handleLogout()}
        >
          <LogoutIcon
            sx={{ fontSize: "23px", color: "#384656" }}
            className="me-3"
          />
          Logout
        </Link>
      ),
    },
  ];
  const handleRedirectToShipments = () => {
    navigate("/");
    setShowmap(false);
    setShowText(false);
  };
  return (
    <div
      className="d-flex justify-content-between"
      onFocus={handleHeaderFocus}
      onBlur={handleHeaderBlur}
      style={{
        position: "fixed",
        top: 0,
        minWidth: "1255px",
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
          <img
            src={Logo}
            width="120px"
            height="35px"
            alt="Logo"
            onClick={handleRedirectToShipments}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            paddingLeft: "20px",
          }}
        >
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
          <Link to="/" style={{ textDecoration: "none" }} onClick={handleRedirectToShipments}>
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
          {/* <Link to="/invoice" style={{ textDecoration: "none" }}>
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
          </Link> */}
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
        className="d-flex align-items-center"
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
          onClick={() => setVisible(!visible)}
        >
          <Bell
            width="25px"
            height="25px"
            style={{ position: "absolute", left: "4px", cursor:"pointer"}}
            alt="Bell"
          />

          <div
            style={{
              borderRadius: "50px",
              widht: "50px",
              height: "20px",
              background: "#ffd7d9",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: "400",
                textAlign: "center",
                padding: "6px",
                color: "#da1e28",
                alignItems: "start",
                
                paddingTop: "2px",
                cursor:"pointer"
              }}
            >
              3
        </Typography>
        <Drawer title='Notification' open={visible} onClose={onClose} style={{overflow:"auto"}}>
              <div className="notification_header" style={{marginLeft:"20px",marginTop:"22px", display:"flex", gap:"10px"}}>
                  <img src={notificationIcon} style={{
                    width:"18.88px",
                    height:"18.64px",
                  }}/>
                  <p style={{
                    fontSize:"15px",
                    fontWeight:"500",
                    letterSpacing:".01em",
                    lineHeight:"22px",
                    color:"#181E25"
                  }}>Booking Created</p>
              </div>
              <div className="notification_content" style={{marginLeft:"48px"}}>
                  <p style={{
                    fontSize:"13px",
                    fontWeight:"400",
                    lineHeight:"16px",
                    width:"296px"
                  }}>Your LCL booking # <Link className="text-decoration-none">120893000710</Link>for Nhava sheva to Jebel Ali has been created</p>
                  <div className="timeview d-flex justify-content-space-evenly align-items-start" style={{
                     fontSize:"13px",
                     fontWeight:"400",
                     lineHeight:"16px",
                  }}>
                    <span>
                      <img src={greenIcon} className="me-1" style={{
                        width:"8px",
                        height:"8px",
                      }} /> 
                      1m ago
                    </span>
                    <span><Link style={{color:"#29333D",marginLeft:"240px"}}>view</Link></span>
                  </div>
              </div>
              <div className="border" style={{
                border:"1px solid rgb(246, 241, 241)",
                marginTop:"25px",
              }}></div>
              <div className="notification_header" style={{marginLeft:"20px",marginTop:"22px", display:"flex", gap:"10px"}}>
                  <img src={notificationIcon} style={{
                    width:"18.88px",
                    height:"18.64px",
                  }}/>
                  <p style={{
                    fontSize:"15px",
                    fontWeight:"500",
                    letterSpacing:".01em",
                    lineHeight:"22px",
                    color:"#181E25"
                  }}>ETD Changed</p>
              </div>
              <div className="notification_content" style={{marginLeft:"48px"}}>
                  <p style={{
                    fontSize:"13px",
                    fontWeight:"400",
                    lineHeight:"16px",
                    justifyContent:"center",
                    width:"296px"
                  }}>Your LCL booking # <Link className="text-decoration-none">120893000710</Link>for Nhava sheva to Jebel Ali has been created</p>
                  <div className="timeview d-flex justify-content-space-between align-items-center" style={{
                     fontSize:"13px",
                     fontWeight:"400",
                     lineHeight:"16px"
                  }}>
                    <img src={greenIcon} className="me-1" style={{
                        width:"8px",
                        height:"8px",
                      }}/> 
                    <span>
                      2m ago
                    </span>
                    <span><Link style={{color:"#29333D",marginLeft:"240px"}}>view</Link></span>
                  </div>
              </div>
              <div className="border" style={{
                border:"1px solid rgb(246, 241, 241)",
                marginTop:"25px",
              }}></div>
              <div className="notification_header" style={{marginLeft:"20px",marginTop:"22px", display:"flex", gap:"10px"}}>
                  <img src={notificationIcon} style={{
                    width:"18.88px",
                    height:"18.64px",
                  }}/>
                  <p style={{
                    fontSize:"15px",
                    fontWeight:"500",
                    letterSpacing:".01em",
                    lineHeight:"22px",
                    color:"#181E25"
                  }}>Booking Cancelled</p>
              </div>
              <div className="notification_content" style={{marginLeft:"48px"}}>
                  <p style={{
                    fontSize:"13px",
                    fontWeight:"400",
                    lineHeight:"16px",
                    justifyContent:"center",
                    width:"296px"
                  }}>Your booking <Link className="text-decoration-none">#25986</Link> #25986 for Nhava Sheva to Jebal ali has been created.</p>
                  <div className="timeview d-flex justify-content-space-between align-items-center" style={{
                     fontSize:"13px",
                     fontWeight:"400",
                     lineHeight:"16px"
                  }}>
                    <img src={greenIcon} className="me-1" style={{
                        width:"8px",
                        height:"8px",
                      }}/> 
                    <span>
                      2 Month ago
                    </span>
                    <span><Link style={{color:"#29333D",marginLeft:"210px"}}>view</Link></span>
                  </div>
              </div>
              <div className="border" style={{
                border:"1px solid rgb(246, 241, 241)",
                marginTop:"25px",
              }}></div>
              <div className="bgnotification" style={{
                // backgroundColor:"gray",
                // padding:"20px 15px 20px 15px"
              }}>
              <div className="notification_header" style={{marginLeft:"20px",marginTop:"22px", display:"flex", gap:"10px"}}>
                  <img src={notificationIcon} style={{
                    width:"18.88px",
                    height:"18.64px",
                  }}/>
                  <p style={{
                    fontSize:"15px",
                    fontWeight:"500",
                    letterSpacing:".01em",
                    lineHeight:"22px",
                    color:"#181E25"
                  }}>Booking Created</p>
              </div>
              <div className="notification_content" style={{marginLeft:"48px"}}>
                  <p style={{
                    fontSize:"13px",
                    fontWeight:"400",
                    lineHeight:"16px",
                    justifyContent:"center",
                    width:"296px"
                  }}>Your booking <Link className="text-decoration-none">#25986</Link> #25986 for Nhava Sheva to Jebal ali has been created.</p>
                  <div className="timeview d-flex justify-content-space-between align-items-center" style={{
                     fontSize:"13px",
                     fontWeight:"400",
                     lineHeight:"16px"
                  }}>
                    <img src={greenIcon} className="me-1" style={{
                        width:"8px",
                        height:"8px",
                      }}/> 
                    <span>
                      2 Month ago
                    </span>
                    {/* <span><Link style={{color:"#29333D",marginLeft:"200px"}}>view</Link></span> */}
                  </div>
              </div>
              </div>
        </Drawer>
          </div>
       </div> 
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow={{
            pointAtCenter: true,
          }}
          trigger={["click"]}
        >
          <div
            style={{
              backgroundColor: "#FB450C",
              width: "43px",
              height: "41px",
              borderRadius: "50%",
              alignSelf: "center",
              alignContent: "center",
            }}
            role="button"
            className="justify-text-center align-content-center"
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              {FirstLetter}
            </Typography>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};


export default Header;
