import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./cargo.css";
import TotalShipment from "./LCL/TotalShipment";
import UnitType from "./LCL/UnitType";
import boxes from "../../../assets/3256182_boxes_cargo_delivery_logistics_warehouse_icon 2.svg";
import fcl from "../../../assets/661303_cargo_container_delivery_lift_logistic_icon 1.svg";
import Fcl from "./FCL/Fcl";

export default function CargoDetails({
  onClose,
  eximchange,
  setCargo,
  setCargoOptionsVisible,
  settserrmsg,
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
  inputFields,
  setInputFields,
  saveddatas,
  setsaveddatas,
  editeddata,
  setediteddata,
  editedId,
  seteditedId,
  uterrors,
  setuterrors,
  utediterrors,
  setutediterrors,
  utDatas,
  setutDatas,
  fclinputFields,
  setfclInputFields,
  fclsaveddatas,
  setfclsaveddatas,
  fclediteddata,
  setfclediteddata,
  fcleditedId,
  setfcleditedId,
  fclDatas,
  setfclDatas,
  fclerrors,
  setfclerrors,
  fclediterrors,
  setfclediterrors,
}) {
  const [isByTotalShipmentOpen, setIsByTotalShipmentOpen] = useState(true);
  const [isByUnitTypeOpen, setIsByUnitTypeOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleByTotalShipment = () => {
    setIsByTotalShipmentOpen(true);
    setIsByUnitTypeOpen(false);
  };

  const toggleByUnitType = () => {
    setIsByUnitTypeOpen(true);
    setIsByTotalShipmentOpen(false);
  };

  return (
    <div className="cargo_details_section">
      {/* <div className="card w-100 d-flex " style={{ padding: "20px" }}> */}
      <TabView
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
              settserrmsg={settserrmsg}
              tsDatas={tsDatas}
              settsDatas={settsDatas}
              errors={errors}
              seterrors={seterrors}
              tsexim={tsexim}
              settsexim={settsexim}
              setshowcargo={setshowcargo}
            />
          )}

          {/* By Unit Type*/}

          {isByUnitTypeOpen && (
            <UnitType
              setCargo={setCargo}
              eximchange={eximchange}
              setCargoOptionsVisible={setCargoOptionsVisible}
              settserrmsg={settserrmsg}
              utexim={utexim}
              setutexim={setutexim}
              inputFields={inputFields}
              setInputFields={setInputFields}
              saveddatas={saveddatas}
              setsaveddatas={setsaveddatas}
              editeddata={editeddata}
              setediteddata={setediteddata}
              editedId={editedId}
              seteditedId={seteditedId}
              uterrors={uterrors}
              setuterrors={setuterrors}
              utediterrors={utediterrors}
              setutediterrors={setutediterrors}
              utDatas={utDatas}
              setutDatas={setutDatas}
              setshowcargo={setshowcargo}
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
            settserrmsg={settserrmsg}
            fclexim={fclexim}
            setfclexim={setfclexim}
            fclinputFields={fclinputFields}
            setfclInputFields={ setfclInputFields}
            fclsaveddatas={fclsaveddatas}
            setfclsaveddatas={setfclsaveddatas}
            fclediteddata={fclediteddata}
            setfclediteddata={setfclediteddata}
            fcleditedId={fcleditedId}
            setfcleditedId={setfcleditedId}
            fclDatas={fclDatas}
            setfclDatas={ setfclDatas}
            fclerrors={fclerrors}
            setfclerrors={setfclerrors}
            fclediterrors={fclediterrors}
            setfclediterrors={setfclediterrors}
            setshowcargo={setshowcargo}
          />
        </TabPanel>
      </TabView>
      {/* </div> */}
    </div>
  );
}
