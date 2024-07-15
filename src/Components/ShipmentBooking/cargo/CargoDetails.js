import React, { useEffect, useRef, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./cargo.css";
import TotalShipment from "./LCL/TotalShipment";
import UnitType from "./LCL/UnitType";
import boxes from "../../../assets/3256182_boxes_cargo_delivery_logistics_warehouse_icon 2.svg";
import fcl from "../../../assets/661303_cargo_container_delivery_lift_logistic_icon 1.svg";
import Fcl from "./FCL/Fcl";
import { useDispatch, useSelector } from "react-redux";
import { containerpackRequest } from "../../../Redux/Actions/ContainerPackAction";

export default function CargoDetails({
  onClose,
  eximchange,
  setCargo,
  setCargoOptionsVisible,
  seterrmsg,
  tsDatas,
  settsDatas,
  errors,
  seterrors,
  tsexim,
  settsexim,
  fclexim,
  setfclexim,
  utexim,
  setutexim,
  setshowcargo,
  // inputFields,
  // setInputFields,
  // saveddatas,
  // setsaveddatas,
  // editeddata,
  // setediteddata,
  // editedId,
  // seteditedId,
  // uterrors,
  // setuterrors,
  // utediterrors,
  // setutediterrors,
  utDatas,
  setutDatas,
  utclickedId,
  setutclickedId,
  // fclinputFields,
  // setfclInputFields,
  // fclsaveddatas,
  // setfclsaveddatas,
  // fclediteddata,
  // setfclediteddata,
  // fcleditedId,
  // setfcleditedId,
  fclDatas,
  setfclDatas,
  setclickedId,
  clickedId,
  // fclerrors,
  // setfclerrors,
  // fclediterrors,
  // setfclediterrors,
  cargo,
  showcargo,
  setlastsaved,
  lastsaved,
  activeIndex,
  setactiveIndex,
  isByTotalShipmentOpen,
  setIsByTotalShipmentOpen,
  isByUnitTypeOpen,
  setIsByUnitTypeOpen
}) {
  
  const hasPageBeenRendered = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch()
  const containerPack = useSelector((state) => state?.ContainerPack?.cpack);
  console.log(containerPack)
  const container_types = containerPack?.container_type
  const packages = containerPack?.package
  // const [lastsavedfcl, setlastsavedfcl] = useState(false)
  // console.log("lastsaved",lastsavedfcl)
  // console.log(cargo)
  // const tos = cargo.substring(0,3)
  // console.log(tos)
  

  

  


  console.log(lastsaved)
  


  // useEffect(() => {
  //   if (hasPageBeenRendered.current) {
  //     setCargo("")
  //   }
  //   hasPageBeenRendered.current = true;
  // }, [isByTotalShipmentOpen,isByUnitTypeOpen]);
  

  const toggleByTotalShipment = () => {
    setIsByTotalShipmentOpen(true);
    setIsByUnitTypeOpen(false);
    // setshowcargo("")
  };

  const toggleByUnitType = () => {
    setIsByUnitTypeOpen(true);
    setIsByTotalShipmentOpen(false);
    // setshowcargo("")
  };

  useEffect(() => {
    dispatch(containerpackRequest());
  }, []);
  

  return (
    <div className="cargo_details_section">
      {/* <div className="card w-100 d-flex " style={{ padding: "20px" }}> */}
      <TabView
      activeIndex={activeIndex}
      onTabChange={(e) => {
        setactiveIndex(e.index)
        setCargo("")
      }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          color: "black",
        }}
      >
        {/* LCL */}

        <TabPanel
          header="LCL/AIR"
          leftIcon={
            // <CiBoxes style={{ marginRight: "20px", fontSize:'45px' }} />
            <img src={boxes} alt="" className="me-2" />
          }
          style={{ fontSize: "25px", width: "100%" }}
        >
          <div className="d-flex text-center" style={{ margin: "30px 0px" }}>
            <div
              className={`lcl-card1 w-50 ${
                isByTotalShipmentOpen ? "hovered" : ""
              }`}
              onClick={toggleByTotalShipment}
            >
              By Total Shipment
            </div>
            <div
              className={`lcl-card2 w-50 ${isByUnitTypeOpen ? "hovered" : ""}`}
              onClick={toggleByUnitType}
            >
              By Unit Type
            </div>
          </div>

          {/* By Total Shipment*/}

          {isByTotalShipmentOpen && (
            <TotalShipment
              setCargo={setCargo}
              eximchange={eximchange}
              setCargoOptionsVisible={setCargoOptionsVisible}
              seterrmsg={seterrmsg}
              tsDatas={tsDatas}
              settsDatas={settsDatas}
              errors={errors}
              seterrors={seterrors}
              tsexim={tsexim}
              settsexim={settsexim}
              setshowcargo={setshowcargo}
              packages={packages}
              setlastsaved={setlastsaved}
            />
          )}

          {/* By Unit Type*/}

          {isByUnitTypeOpen && (
            <UnitType
              setCargo={setCargo}
              eximchange={eximchange}
              setCargoOptionsVisible={setCargoOptionsVisible}
              seterrmsg={seterrmsg}
              utexim={utexim}
              setutexim={setutexim}
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
              setutclickedId={setutclickedId}
              utclickedId={utclickedId}
              setshowcargo={setshowcargo}
              packages={packages}
              setlastsaved={setlastsaved}
            />
          )}
        </TabPanel>

        {/* FCL */}

        <TabPanel
          header="FCL"
          leftIcon={
            // <GiCargoCrate style={{ marginRight: "20px", fontSize:'35px' }} />
            <img src={fcl} alt="fcl" className="me-2" />
          }
          style={{ fontSize: "25px", width: "100%" }}
          
        >
          <Fcl
            onClose={onClose}
            eximchange={eximchange}
            setCargo={setCargo}
            setCargoOptionsVisible={setCargoOptionsVisible}
            seterrmsg={seterrmsg}
            fclexim={fclexim}
            setfclexim={setfclexim}
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
            setshowcargo={setshowcargo}
            container_types={container_types}
            // setlastsaved={setlastsaved}
          />
        </TabPanel>
      </TabView>
      {/* </div> */}
    </div>
  );
}
