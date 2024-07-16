import React, { useState, useRef, useEffect } from "react";
import { FormHelperText, Typography } from "@mui/material";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Modal from "@mui/material/Modal";
import "../ShipmentCard.css";
import CargoDetails from "./CargoDetails";
import { ReactComponent as Ship } from "../../../assets/cargo.8d7c215b.svg";
import { Dropdown } from "primereact/dropdown";
import { IoClose } from "react-icons/io5";
import { containerpackRequest } from "../../../Redux/Actions/ContainerPackAction";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Cargo = ({
  setCargoOptionsVisible,
  cargoOptionsVisible,
  exim,
  setexim,
  setFinaldetails,
  setmode,
  tserrmsg, 
  seterrmsg,
  // fclexim,
  // setfclexim,
  // utexim,
  // setutexim,
  tsDatas, 
  settsDatas,
  fclDatas, 
  setfclDatas,
  utDatas, 
  setutDatas,
  cbm, setcbm,
   kg, setkg,
   unit, setunits
}) => {
  const [lastsaved,setlastsaved] = useState("")
  const [activeIndex,setactiveIndex] = useState(0)
  const [cargo, setCargo] = useState("");
  const [showcargo, setshowcargo] = useState(false);
  const [isByTotalShipmentOpen, setIsByTotalShipmentOpen] = useState(true);
  const [isByUnitTypeOpen, setIsByUnitTypeOpen] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);

  const cargoRef = useRef(null);

  const handleCargoChange = (event) => {
    const { value } = event.target;
    setCargo(value);
  };

  // const handleCargoFocus = () => {
  //     setModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };

  //This is for total shipment

  // const [tsDatas, settsDatas] = useState({
  //   package_type: "",
  //   no_of_units: "",
  //   total_volume: "",
  //   total_weight: "",
  //   volume_type: "CBM",
  //   weight_type: "KG",
  // });

  const [errors, seterrors] = useState({
    no_of_units: false,
    total_volume: false,
    total_weight: false,
  });

  //This is for Unit Shipment

  const [utclickedId, setutclickedId] = useState([0])

  //this is for fcl

  // const [fclinputFields, setfclInputFields] = useState( [{}]
  // );
  // const [fclsaveddatas, setfclsaveddatas] = useState([]
  // );
  // const [fclediteddata, setfclediteddata] = useState({});
  // const [fcleditedId, setfcleditedId] = useState("");
  const [clickedId, setclickedId] = useState([0])


  // const [fclerrors, setfclerrors] = useState({
  //     no_of_containers: false,
  //     container_type:false,
  //   }
  // );
  // const [fclediterrors, setfclediterrors] = useState({
  //   no_of_containers: false,
  // });

  //This is for error

  
  const handleClose = () => {
    setCargoOptionsVisible(false);
    setFinaldetails("")
    setCargo("");
    setmode("")
    setlastsaved("LCLTOTAL")
  };

  console.log(lastsaved)

  // useEffect(() => {
  //   dispatch(containerpackRequest())
  //   console.log("dis")
  // }, [])

  useEffect(() => {
    if(lastsaved === 'LCLTOTAL'){
      setIsByUnitTypeOpen(false);
      setIsByTotalShipmentOpen(true);
      setactiveIndex(0)
    }
    else if(lastsaved === 'LCLUNIT'){
      setIsByUnitTypeOpen(true);
      setIsByTotalShipmentOpen(false);
      setactiveIndex(0)
    }
    else if(lastsaved === 'FCL'){
      // setIsByUnitTypeOpen(false);
      // setIsByTotalShipmentOpen(false);
      setactiveIndex(1)
    }
  }, [lastsaved])
  console.log(lastsaved)

  // useEffect(() => {
  //   setshowcargo("")
  // }, [activeIndex])
  
  return (
    <>
      <div
        className="column "
        style={{ display: "flex", minWidth: "33%", position: "relative" }}
      >
        <div className="align-content-center">
          <Ship style={{ width: "20px", height: "20px" }} className="mx-2" />
        </div>
        <div className="w-100">
          <Typography
            className="fw-bold"
            style={{ fontSize: "14px", fontWeight: "700", lineHeight: "20px" }}
          >
            Cargo
          </Typography>
          <input
            type="text"
            style={{
              border: "none",
              outline: "none",
              width: "90%",
              background: "transparent",
              fontWeight:"600",
              fontSize:"16",
              lineHeight:"22px",
              letterSpacing:".01em"
            }}
            className="input-field "
            placeholder="Enter your Cargo details"
            // ref={cargoRef}
            // onChange={handleCargoChange}
            // onFocus={handleCargoFocus}
            // onBlur={()=>setCargoOptionsVisible(false)}
            onClick={() => setCargoOptionsVisible((prev) => !prev)}
            value={showcargo ? cargo: ""}
            readOnly
          />
          {/* <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                editable placeholder="Enter your Cargo details" className="w-full md:w-14rem" /> */}
          {cargo && (
            <IoClose
              role="button"
              style={{ position: "absolute", top: "51%", right: "20px" }}
              onClick={handleClose}
            />
          )}
          {tserrmsg && (
            <FormHelperText
              style={{
                color: "red",
                fontStyle: "italic",
              }}
            >
              {tserrmsg}
            </FormHelperText>
          )}
          {cargoOptionsVisible && (
            <div className="outer-cargo-port">
              <CargoDetails
                setCargo={setCargo}
                setCargoOptionsVisible={setCargoOptionsVisible}
                seterrmsg={seterrmsg}
                errors={errors}
                seterrors={seterrors}
                tsDatas={tsDatas}
                settsDatas={settsDatas}
                exim={exim}
                setexim={setexim}
                setFinaldetails={setFinaldetails}
                setmode={setmode}
                // utexim={utexim}
                // setutexim={setutexim}
                // fclexim={fclexim}
                // setfclexim={setfclexim}
                setshowcargo={setshowcargo}
                // inputFields={inputFields}
                // setInputFields={setInputFields}
                // saveddatas={saveddatas}
                // setsaveddatas={setsaveddatas}
                // editeddata={editeddata}
                // setediteddata={setediteddata}
                // editedId={editedId}
                // seteditedId={seteditedId}
                // uterrors={uterrors}
                // setuterrors={setuterrors}
                // utediterrors={utediterrors}
                // setutediterrors={setutediterrors}
                utDatas={utDatas}
                setutDatas={setutDatas}
                utclickedId={utclickedId}
                setutclickedId={setutclickedId}
                // fclinputFields={fclinputFields}
                // setfclInputFields={ setfclInputFields}
                // fclsaveddatas={fclsaveddatas}
                // setfclsaveddatas={setfclsaveddatas}
                // fclediteddata={fclediteddata}
                // setfclediteddata={setfclediteddata}
                // fcleditedId={fcleditedId}
                // setfcleditedId={setfcleditedId}
                fclDatas={fclDatas}
                setfclDatas={ setfclDatas}
                clickedId={clickedId}
                setclickedId={setclickedId}
                // fclerrors={fclerrors}
                // setfclerrors={setfclerrors}
                // fclediterrors={fclediterrors}
                // setfclediterrors={setfclediterrors}
                cargo={cargo}
                showcargo={showcargo}
                setlastsaved={setlastsaved}
                lastsaved={lastsaved}
                activeIndex={activeIndex}
                setactiveIndex={setactiveIndex}
                isByTotalShipmentOpen={isByTotalShipmentOpen}
                setIsByTotalShipmentOpen={setIsByTotalShipmentOpen}
                isByUnitTypeOpen={isByUnitTypeOpen}
                setIsByUnitTypeOpen={setIsByUnitTypeOpen}
                cbm={cbm} 
                setcbm={setcbm}
                kg={kg} 
                setkg={setkg}
                unit={unit}
                setunits={setunits}
              />
            </div>
          )}
        </div>
      </div>

      {/* <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{top:'50%', left:'50%'}}
      >
        <CargoDetails onClose={handleCloseModal} />
      </Modal> */}
    </>
  );
};

export default Cargo;
