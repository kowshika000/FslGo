import React, { useState, useRef, useEffect } from "react";
import { Typography } from "@mui/material";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { RiShipFill } from "react-icons/ri";
import "./ShipmentCard.css";
import Cargo from "./cargo/Cargo";
import Origin from "./Origin/Origin";
import Destination from "./Destination/Destination";
import { Link } from "react-router-dom";
import Line from "../../assets/line.png";
import { SearchOutlined } from "@ant-design/icons";
import Arrow from "../../assets/arrow.png";
import { useDispatch } from "react-redux";
import { FindNewRateRequest } from "../../Redux/Actions/FindNewRateAction";

const ShipmentCard = ({ setShowReselt,selectedCurrency }) => {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState("");
  const [isCargoOpen, setIsCargoOpen] = useState(false);
  const [active, setActive] = useState(false);
  const cargoRef = useRef(null);
  const [originPortOptionsVisible, setOriginPortOptionsVisible] =
    useState(false);
  const [destPortOptionsVisible, setDestPortOptionsVisible] = useState(false);
  const [cargoOptionsVisible, setCargoOptionsVisible] = useState(false);
  const [originPort, setOriginPort] = useState(null);
  const [destPort, setDestPort] = useState(null);
  useEffect(() => {
    if (destination && cargoRef.current) {
      cargoRef.current.focus();
    }
  }, [destination]);

  const handleCargoFocus = () => {
    setIsCargoOpen(true);
  };
  const handleConfirmCargo = () => {
    setIsCargoOpen(false);
  };

  const [error, seterror] = useState();
  const inputdata = {
    freight_mode: "S",
    lcl_fcl_air: "LCL",
    import_export: "I",
    package_type: "BOX",
    no_of_units: "10",
    total_volume: "2",
    total_weight: "222",
    lcl_dimensions: [
      {
        length: 0,
        width: 0,
        height: 0,
        type: "KG",
      },
    ],
    fcl_dimensions: [
      {
        container_type: "",
        no_of_containers: 0,
      },
    ],
    volume_type: "KG",
    weight_type: "CBM",
    origin: "CNNGB",
    destination: "AEJEA",
    origin_country_code: "CN",
    dest_country_code: "AE",
    TOS: "FOB",
    is_pickup_req: "",
    pickup_place: "",
    is_hazardous: "",
    is_stackable: "",
    is_insurance: "",
    UID: "15085",
    currency: selectedCurrency
  };
  const handleSearch = () => {
    setShowReselt(true);
  };
  useEffect(()=>{
    dispatch(FindNewRateRequest({ inputdata }));
  },[handleSearch,selectedCurrency])
  return (
    <div>
      <div
        className="mx-auto my-5 w-100 card shadow"
        style={{
          minWidth: "1270px",
          border: "1px solid #E7EAF0",
          borderRadius: "8px",
        }}
      >
        <div className="card-body d-flex p-0">
          <Origin
            setOriginPortOptionsVisible={setOriginPortOptionsVisible}
            originPortOptionsVisible={originPortOptionsVisible}
            setDestPortOptionsVisible={setDestPortOptionsVisible}
            setCargoOptionsVisible={setCargoOptionsVisible}
            originPort={originPort}
            setOriginPort={setOriginPort}
            destPort={destPort}
          />
          <div
            className="align-content-center ps-2"
            style={{ minWidth: "3.03%" }}
          >
            <img
              src={Arrow}
              width="26px"
              height="26px"
              style={{
                alignContent: "center",
                margin: "auto",
                alignSelf: "center",
              }}
            />
          </div>
          <Destination
            setOriginPortOptionsVisible={setOriginPortOptionsVisible}
            destPortOptionsVisible={destPortOptionsVisible}
            setDestPortOptionsVisible={setDestPortOptionsVisible}
            setCargoOptionsVisible={setCargoOptionsVisible}
            destPort={destPort}
            setDestPort={setDestPort}
            originPort={originPort}
          />
          {/* <div className="icon">
            <div className="divider"></div>
          </div> */}
          <Cargo
            cargoOptionsVisible={cargoOptionsVisible}
            setCargoOptionsVisible={setCargoOptionsVisible}
          />
          {/* Search button */}
          <div
            style={{ minWidth: "5%" }}
            className="d-flex align-content-center justify-content-around align-items-center"
            onClick={handleSearch}
          >
            <div style={{ alignContent: "center" }}>
              <div
                className="px-3 "
                style={{
                  backgroundColor: "#F01E1E",
                  fontWeight: "900",
                  borderRadius: "8px",
                  height: "52px",
                  color: "white",
                  alignContent: "center ",
                  alignItems: "center",
                }}
              >
                <SearchOutlined
                  width="20px"
                  style={{
                    fontWeight: "700",
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                />
              </div>
            </div>
            {/* <div className="align-content-center ">
              <img src={Line} />
            </div> */}
            {/* <div
              className="d-flex align-content-center justify-content-start pe-4"
              style={{alignContent:'center'}}
            >
              
              <Link to="/">
                <button
                  style={{
                    backgroundColor: "rgba(240, 30, 30, 1)",
                    color: "white",
                    maxWidth: "150px",
                   
                    borderRadius: "5px",
                    padding: "8px",
                    border: "none",
                    alignSelf:'center'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "23px",
                    }}
                  >
                    Quick Booking
                  </Typography>
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* {isCargoOpen && (
        <div className="overlay">
          <div className="suggestions-cargo cargo-port">
            <Cargo onClose={handleConfirmCargo} />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ShipmentCard;
