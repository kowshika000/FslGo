import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ReactComponent as Location } from "../../../assets/location.svg";
import { Typography } from "@mui/material";
import { portRequest } from "../../../Redux/Actions/PortAction";
import "./Port.css";
import CountryFlag from "../../Core-Components/CountryFlag";
import { Col, Row } from "antd";
import anchor from "../../../assets/anch.jpeg";
import { opensailingRequest } from "../../../Redux/Actions/OpneSailingAction";
import {CircularProgress,Box} from "@mui/material"

export const Port = () => {
  const [searchOriginPort, setSearchOriginPort] = useState("");
  const [orgPortCode, setOrgPortCode] = useState("");
  const [desPortCode, setDesPortCode] = useState("");
  const [searchDestPort, setSearchDestPort] = useState("");
  // const [originPortValue, setOriginPortValue] = useState("");
  // const [destPortValue, setDestPortValue] = useState("");
  const [originPort, setOriginPort] = useState(null);
  const [destPort, setDestPort] = useState(null);
  const [originPortOptionsVisible, setOriginPortOptionsVisible] =
    useState(false);
  const [destPortOptionsVisible, setDestPortOptionsVisible] = useState(false);

  const originPortData = useSelector((state) => state.Port);
  const {loading,error} = useSelector((state) => state.Port);
  const originPortDataValue = originPortData?.portData?.Data;
  console.log("originPortvalue", originPortDataValue);

  const dispatch = useDispatch();

  const handleOriginPortChange = (event) => {
    const { value } = event.target;
    setSearchOriginPort(value);
    if (value.length >= 4) {
      dispatch(portRequest({ search_key: value, limits: "4" }));
    }
    setOriginPortOptionsVisible(true);
    setDestPortOptionsVisible(false);
    if (value=== "") {
      setOriginPort(null);
    }
  };

  const handleDestPortChange = (event) => {
    const { value } = event.target;
    setSearchDestPort(value);
    if (value?.length >= 4) {
      dispatch(portRequest({ search_key: value, limits: "4" }));
    }
    setDestPortOptionsVisible(true);
    setOriginPortOptionsVisible(false);

    if (value === "") {
      setDestPort(null);
    }
  };

  const handleOriginPortSelect = (port) => {
    console.log("Port selected:", port);
    // setOriginPortValue(port?.port_name);
    setSearchOriginPort(port?.port_name);
    setOrgPortCode(port?.port_code);
    setOriginPortOptionsVisible(false);
    setOriginPort(port);
  };
  const handleDestPortSelect = (port) => {
    console.log("Dest selected:", port);
    // setDestPortValue(port?.port_name);
    setSearchDestPort(port?.port_name);
    setDesPortCode(port?.port_code);
    setDestPortOptionsVisible(false);
    setDestPort(port);
  };

  useEffect(() => {
    if (orgPortCode && desPortCode) {
      console.log(
        "API call with origin and destination ports:",
        orgPortCode,
        desPortCode
      );

      const orign = orgPortCode;
      const destination = desPortCode;

      dispatch(opensailingRequest({ orign, destination }));
    }
  }, [orgPortCode, desPortCode]);
  // const openSailingData1 = useSelector((state) => state.openSailingData);
  // console.log("pppppp", openSailingData1);

  return (
    <div
      className=" w-100 d-flex justify-content-between sailing-heading "
      style={{
        backgroundColor: "#F8FAFC",
        borderBottom: "1px solid #E7EAF0",
        padding: "0 20px 0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "850px",
          justifyContent: "space-between",
        }}
      >
        <Typography
          className=" "
          style={{ fontSize: "20px", fontWeight: "500" }}
        >
          Upcoming Sailings
        </Typography>{" "}
        <div
          className="d-flex my-2 rounded-1 "
          style={{
            border: "1px solid #E7EAF0",
            padding: "6px 10px",
            justifyContent: "space-between",
            background: "white",
            position: "relative",
            width:"300px"
          }}
        >
          <Location className="pt-1" style={{ width: "22px" }} />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "13px",
              color: "#495A6E",
              padding: "3px",
            }}
          >
            Origin:{" "}
          </Typography>
          {originPort && (
            <CountryFlag
              countryCode={originPort.port_country}
              className="port-flag input-port-flag"
            />
          )}
          <input
            type="text"
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              fontWeight: "400",
              fontSize: "13px",
              position: "relative",
            }}
            placeholder="Enter Port"
            className="placeholder-color"
            onChange={handleOriginPortChange}
            value={searchOriginPort}
         
          />
          <ArrowDropDownIcon />
     
    
          {originPortOptionsVisible && (
            <div className="outer-port">
                   {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <CircularProgress style={{color:"red"}}/>
              </Box>
            ) : (
              <div className="inner-port">
                <div>
                  <p
                    style={{
                      marginBottom: 0,
                      padding: "12px 0 8px 0",
                      color: "#181e25",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    Sea Port
                  </p>
                </div>
                <div>
                  {originPortDataValue?.map((port, index) => (
                    <div
                      key={index}
                      onClick={() => handleOriginPortSelect(port)}
                      className=""
                    >
                      <Row className="justify-content-between p-2 port-content">
                        <Col className="d-flex">
                          <Row className="gap-2">
                            <div className="mt-1 p-1">
                              <CountryFlag
                                countryCode={port?.port_country}
                                className="port-flag"
                              />{" "}
                            </div>
                            <div>
                              <p className="portnamecode ">
                                {port?.port_name}-{port?.air_port_code}
                              </p>
                              <p className="portCountry">
                                {port?.port_country}
                              </p>
                            </div>
                          </Row>
                        </Col>
                        <Col style={{ marginRight: "20px" }}>
                          <img
                            src="https://www.fslgo.com/_next/static/media/anchor.20b5ab46.svg"
                            style={{
                              width: "24px",
                              height: "24px",
                            }}
                          />
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              </div>
              )}
            </div>
          )}{" "}
         
        </div>
        <div
          className="d-flex my-2 rounded-1 "
          style={{
            border: "1px solid #E7EAF0",
            padding: "6px 10px",
            justifyContent: "space-between",
            background: "white",
            position: "relative",
            width:"330px"
          }}
        >
          <Location className="pt-1" style={{ width: "22px" }} />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "13px",
              color: "#495A6E",
              padding: "3px",
            }}
          >
            Destination:{" "}
          </Typography>
          {destPort && (
            <CountryFlag
              countryCode={destPort.port_country}
              className="port-flag input-port-flag"
            />
          )}
          <input
            type="text"
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              fontWeight: "400",
              fontSize: "13px",
            }}
            placeholder="Enter Port"
            className="placeholder-color"
            onChange={handleDestPortChange}
            value={searchDestPort}
          />
          <ArrowDropDownIcon />
          {destPortOptionsVisible && (
            <div className="outer-dest-port">
           {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <CircularProgress style={{color:"red"}}/>
              </Box>
            ) : (
              <div className="inner-port">
                <div>
                  <p
                    style={{
                      marginBottom: 0,
                      padding: "12px 0 8px 0",
                      color: "#181e25",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    Sea Port
                  </p>
                </div>
                <div>
                  {originPortDataValue?.map((port, index) => (
                    <div
                      key={index}
                      onClick={() => handleDestPortSelect(port)}
                      className=""
                    >
                      <Row className="justify-content-between p-2 port-content">
                        <Col className="d-flex">
                          <Row className=" gap-2">
                            <div className="mt-1 p-1">
                              <CountryFlag
                                countryCode={port?.port_country}
                                className="port-flag"
                              />{" "}
                            </div>
                            <div>
                              <p className="portnamecode ">
                                {port?.list_value}
                              </p>
                              <p className="portCountry">
                                {port?.port_country}
                              </p>
                            </div>
                          </Row>
                        </Col>
                        <Col style={{ marginRight: "20px" }}>
                          <img
                            src="https://www.fslgo.com/_next/static/media/anchor.20b5ab46.svg"
                            style={{
                              width: "24px",
                              height: "24px",
                            }}
                          />
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              </div>
            )}
            </div>
          )}{" "}
        </div>
      </div>
      <div className="dropdown my-2" style={{ width: "5%", float: "left" }}>
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="true"
          style={{ fontSize: "14px", fontWeight: "400" }}
        >
          LCL
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item">LCL</li>
          <li className="dropdown-item">FCL</li>
          <li className="dropdown-item">Air</li>
        </ul>
      </div>
    </div>
  );
};
