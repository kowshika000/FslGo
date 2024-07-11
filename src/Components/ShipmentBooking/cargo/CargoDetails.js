import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./cargo.css";
import TotalShipment from "./LCL/TotalShipment";
import UnitType from "./LCL/UnitType";
import boxes from '../../../assets/3256182_boxes_cargo_delivery_logistics_warehouse_icon 2.svg'
import fcl from '../../../assets/661303_cargo_container_delivery_lift_logistic_icon 1.svg'
import Fcl from "./FCL/Fcl";

export default function CargoDetails({ onClose,eximchange,setCargo, setCargoOptionsVisible,settserrmsg }) {
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
            <div className="d-flex text-center" style={{margin:"30px 0px"}}>
              <div
                className={`lcl-card1 w-50 ${
                  isByTotalShipmentOpen ? "hovered" : ""
                }`}
                onClick={toggleByTotalShipment}
              >
                By Total Shipment
              </div>
              <div
                className={`lcl-card2 w-50 ${
                  isByUnitTypeOpen ? "hovered" : ""
                }`}
                onClick={toggleByUnitType}
              >
                By Unit Type
              </div>
            </div>

            {/* By Total Shipment*/}

            {isByTotalShipmentOpen && (
              <TotalShipment setCargo={setCargo} eximchange={eximchange} setCargoOptionsVisible={setCargoOptionsVisible} settserrmsg={settserrmsg} />
            )}

            {/* By Unit Type*/}

            {isByUnitTypeOpen && (
              <UnitType setCargo={setCargo} eximchange={eximchange} setCargoOptionsVisible={setCargoOptionsVisible} settserrmsg={settserrmsg}  />
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
            <Fcl onClose={onClose} eximchange={eximchange} setCargo={setCargo} setCargoOptionsVisible={setCargoOptionsVisible} settserrmsg={settserrmsg} />
          </TabPanel>
        </TabView>
      {/* </div> */}
    </div>
  );
}
