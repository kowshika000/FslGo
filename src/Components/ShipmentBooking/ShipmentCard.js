import React, { useState, useRef, useEffect } from "react";
// import { Typography } from "@mui/material";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { FaArrowRightArrowLeft } from "react-icons/fa6";
// import { IoIosSearch } from "react-icons/io";
// import { RiShipFill } from "react-icons/ri";
import "./ShipmentCard.css";
import Cargo from "./cargo/Cargo";
import Origin from "./Origin/Origin";
import Destination from "./Destination/Destination";
// import { Link } from "react-router-dom";
// import Line from "../../assets/line.png";
import { SearchOutlined } from "@ant-design/icons";
import Arrow from "../../assets/arrow.png";
import { useDispatch } from "react-redux";
import { FindNewRateRequest } from "../../Redux/Actions/FindNewRateAction";

const ShipmentCard = ({
  setShowReselt,
  selectedCurrency,
  checkedItems,
  setCheckedItems,
  setexim,
  exim,
  setHighlightShipmentCard,
}) => {
  const dispatch = useDispatch();
  const [destination] = useState("");
  // const [isCargoOpen, setIsCargoOpen] = useState(false);
  // const [active, setActive] = useState(false);
  const cargoRef = useRef(null);
  const [originPortOptionsVisible, setOriginPortOptionsVisible] =
    useState(false);
  const [destPortOptionsVisible, setDestPortOptionsVisible] = useState(false);
  const [cargoOptionsVisible, setCargoOptionsVisible] = useState(false);
  const [originPort, setOriginPort] = useState(null);
  const [destPort, setDestPort] = useState(null);
  const [searchOriginPort, setSearchOriginPort] = useState("");
  const [searchDestPort, setSearchDestPort] = useState("");
  const [searchOriginCode, setSearchOriginCode] = useState("");
  const [searchDestCode, setSearchDestCode] = useState("");
  const [finalDetails, setFinaldetails] = useState("");
  const [mode, setmode] = useState("");
  // const [exim, setexim] = useState("I");
  const [deserrormsg, setdeserrormsg] = useState(null);
  const [orgerrormsg, setorgerrormsg] = useState(null);
  const [tserrmsg, seterrmsg] = useState("");
  const [cbm, setcbm] = useState("")
  const [kg, setkg] = useState("")
  const [unit, setunits] = useState("");
  const [tsDatas, settsDatas] = useState({
    package_type: "",
    no_of_units: "",
    total_volume: "",
    total_weight: "",
    volume_type: "CBM",
    weight_type: "KG",
  });
  const [fclDatas, setfclDatas] = useState([
    {
      container_type: "",
      no_of_containers: null,
    },
  ]
  );
  const [utDatas, setutDatas] = useState([
    {
      package_type: "",
      unit: "",
      height: "",
      length: "",
      width: "",
      dimensionUnit: "CM",
      weight: "",
      weightUnit: "KG",
    },
  ]
  );
  
  // const copyutDatas = [...utDatas]
  const createNewArrayWithoutPackageType = () => {
    const newArray = utDatas.map(({ package_type, ...rest }) => rest);
    return newArray;
  };

  useEffect(() => {
    if (destination && cargoRef.current) {
      cargoRef.current.focus();
    }
  }, [destination]);

  // const handleCargoFocus = () => {
  //   setIsCargoOpen(true);
  // };
  // const handleConfirmCargo = () => {
  //   setIsCargoOpen(false);
  // };

  // const [error, seterror] = useState();

  let tosValue = "";
  if (exim === "I") {
    if (
      checkedItems.DestinationCharges &&
      checkedItems.originCharges &&
      checkedItems.cargoPickup &&
      checkedItems.CargoDelivery
    ) {
      tosValue = "EXW";
    } else if (
      checkedItems.DestinationCharges &&
      checkedItems.originCharges &&
      checkedItems.cargoPickup
    ) {
      tosValue = "EXW";
    } else if (
      checkedItems.DestinationCharges &&
      checkedItems.originCharges &&
      checkedItems.CargoDelivery
    ) {
      tosValue = "FCA";
    } else if (checkedItems.DestinationCharges && checkedItems.originCharges) {
      tosValue = "FCA";
    } else if (checkedItems.DestinationCharges && checkedItems.CargoDelivery) {
      tosValue = "FOB";
    } else if (checkedItems.DestinationCharges) {
      tosValue = "FOB";
    }
  } else if (exim === "E") {
    if (
      checkedItems.originCharges &&
      checkedItems.cargoPickup &&
      checkedItems.CargoDelivery &&
      checkedItems.DestinationCharges
    ) {
      tosValue = "DAP";
    } else if (checkedItems.originCharges && checkedItems.cargoPickup) {
      tosValue = "CFR";
    } else if (checkedItems.originCharges) {
      tosValue = "CFR";
    }
  }
  const inputdata = {
    freight_mode: "S",
    lcl_fcl_air: mode === 'LCLTOTAL' || mode === "LCLUNIT" ? "LCL" : "FCL",
    import_export: exim,
    package_type: mode === 'LCLTOTAL' ? tsDatas?.package_type : mode === 'LCLUNIT' ? utDatas[0]?.package_type:mode === 'FCL' ? tsDatas?.container_type:null ,
    no_of_units: mode === 'LCLTOTAL' ? tsDatas?.no_of_units : mode === 'LCLUNIT' ?unit: 0,
    total_volume: mode === 'LCLTOTAL' ? tsDatas?.total_volume.toString() : mode === "LCLUNIT" ? cbm.toString():0,
    total_weight: mode === 'LCLTOTAL' ? tsDatas?.total_weight.toString() : mode === "LCLUNIT" ? kg.toString():0,
    lcl_dimensions: mode==="LCLUNIT" ?createNewArrayWithoutPackageType():[],
    fcl_dimensions: mode==="FCL" ? fclDatas : [],
    volume_type: mode === 'LCLTOTAL' ? "CBM": mode === 'LCLUNIT' ? "CBM":null,
    weight_type: mode === 'LCLTOTAL' ? "KG": mode === 'LCLUNIT' ? "KG":null,
    // origin: "DEACH",
    origin: searchOriginCode ? searchOriginCode : null,
    destination: searchDestCode ? searchDestCode : null,
    origin_country_code: originPort ? originPort?.port_country: null,
    dest_country_code: destPort ? destPort?.port_country:null,
    TOS: tosValue,
    is_pickup_req: checkedItems.cargoPickup ? "Y" : "N",
    pickup_place: "N",
    is_hazardous: checkedItems.NonHarzardousCargo ? "N" : "Y",
    is_stackable: checkedItems.StackableCargo ? "Y" : "N",
    is_insurance: checkedItems.CargoInsurance ? "Y" : "N",
    UID: "15085",
    currency: selectedCurrency,
  };

  const handleSearch = () => {
    if (originPort && destPort && finalDetails) {
      setShowReselt(true);
      dispatch(FindNewRateRequest({ inputdata }));
    } else {
      if (!originPort) {
        setorgerrormsg("Please add Origin");
      } else {
        setorgerrormsg("");
      }
      if (!destPort) {
        setdeserrormsg("Please add Destination");
      } else {
        setdeserrormsg("");
      }
      if (!finalDetails) {
        seterrmsg("Please add Caro details");
      } else {
        seterrmsg("");
      }
    }
    setHighlightShipmentCard(false);
  };
  const handleSwap = () => {
    if (originPort && destPort && searchOriginPort && searchDestPort) {
      setSearchDestPort(searchOriginPort);
      setSearchOriginPort(searchDestPort);
      setSearchDestCode(searchOriginCode);
      setSearchOriginCode(searchDestCode);
      setDestPort(originPort);
      setOriginPort(destPort);
      setexim((prev) => (prev === "I" ? "E" : "I"));
      // setutexim((prev) => (prev === "I" ? "E" : "I"));
      // setfclexim((prev) => (prev === "I" ? "E" : "I"));
    } else if (originPort && searchOriginPort) {
      setSearchDestPort(searchOriginPort);
      setDestPort(originPort);
      // setOriginPortOptionsVisible(false)
    } else if (destPort && searchDestPort) {
      setSearchOriginPort(searchDestPort);
      setOriginPort(destPort);
      // setOriginPortOptionsVisible(false)
    } else {
      if (searchOriginPort && !originPort) {
        setSearchOriginPort("");
        setOriginPort(false);
        setOriginPortOptionsVisible(false);
      } else if (searchDestPort && !destPort) {
        setSearchDestPort("");
        setDestPort(false);
        setDestPortOptionsVisible(false);
      }
    }
  };

  console.log(searchDestCode);
  console.log(finalDetails);
  console.log(mode);

  useEffect(() => {
    if (exim === "I") {
      setCheckedItems({ ...checkedItems, DestinationCharges: true });
    } else if (exim === "E") {
      setCheckedItems({ ...checkedItems, originCharges: true });
    }
  }, [exim]);
  useEffect(() => {
    dispatch(FindNewRateRequest({ inputdata }));
  }, [
    selectedCurrency,
    checkedItems.originCharges,
    checkedItems.exportClearance,
    checkedItems.DestinationCharges,
    checkedItems.ImportClearance,
    checkedItems.StackableCargo,
    checkedItems.NonHarzardousCargo,
  ]);
  return (
    <div style={{ maxWidth: "1255px" }} className="mx-auto">
      <div
        className="card shadow"
        style={{
          minWidth: "1255px",
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
            setSearchOriginPort={setSearchOriginPort}
            searchOriginPort={searchOriginPort}
            setSearchOriginCode={setSearchOriginCode}
            searchOriginCode={searchOriginCode}
            orgerrormsg={orgerrormsg}
            setorgerrormsg={setorgerrormsg}
          />
          <div
            className="align-content-center ps-2"
            style={{ minWidth: "3.03%" }}
          >
            <img
              src={Arrow}
              role="button"
              onClick={handleSwap}
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
            setSearchDestPort={setSearchDestPort}
            searchDestPort={searchDestPort}
            setSearchDestCode={setSearchDestCode}
            searchDestCode={searchDestCode}
            deserrormsg={deserrormsg}
            setdeserrormsg={setdeserrormsg}
          />
          {/* <div className="icon">
            <div className="divider"></div>
          </div> */}
          <Cargo
            cargoOptionsVisible={cargoOptionsVisible}
            setCargoOptionsVisible={setCargoOptionsVisible}
            setFinaldetails={setFinaldetails}
            exim={exim}
            setexim={setexim}
            setmode={setmode}
            tserrmsg={tserrmsg}
            seterrmsg={seterrmsg}
            // utexim={utexim}
            // setutexim={setutexim}
            // fclexim={fclexim}
            // setfclexim={setfclexim}
            tsDatas={tsDatas}
            settsDatas={settsDatas}
            fclDatas={fclDatas}
            setfclDatas={setfclDatas}
            utDatas={utDatas}
            setutDatas={setutDatas}
            cbm={cbm}
            setcbm={setcbm}
            kg={kg}
            setkg={setkg}
            unit={unit}
            setunits={setunits}
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
