import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { GiCargoCrate } from "react-icons/gi";
import { CiBoxes } from "react-icons/ci";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import {
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Button,
} from "@mui/material";
import "./cargo.css";
import TotalShipment from "./LCL/TotalShipment";
import UnitType from "./LCL/UnitType";

export default function CargoDetails({ onClose }) {
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
    <>
      <div className="card w-75 d-flex " style={{ padding: "20px" }}>
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
              <CiBoxes style={{ marginRight: "20px", fontSize:'45px' }} />
            }
            style={{ fontSize: "25px", marginRight: "20rem", width: "100%" }}
          >
            <div className="d-flex text-center mt-3">
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
              <TotalShipment/>
            )}

            {/* By Unit Type*/}

            {isByUnitTypeOpen && (
              <UnitType/>
            )}
          </TabPanel>

          {/* FCL */}

          <TabPanel
            header="FCL"
            leftIcon={
              <GiCargoCrate style={{ marginRight: "20px", fontSize:'35px' }} />
            }
            style={{ fontSize: "25px", width: "100%" }}
          >
            <div className="d-flex mt-3">
              <div className="w-50 m-3">
                <Typography sx={{ fontWeight: "700", opacity: "0.5" }}>
                  Container Type
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">select Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                  >
                    <MenuItem value="">Ten</MenuItem>
                  </Select>
                </FormControl>{" "}
              </div>
              <div className="w-50 m-3">
                <Typography sx={{ fontWeight: "700", opacity: "0.5" }}>
                 Quantity
                </Typography>
                <input className="form-control p-3" />
              </div>
            </div>
            <div className="m-3 d-flex " style={{ justifyContent: "space-between" }}>
              <div
                className=" d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <Typography
                  sx={{ fontWeight: "500", opacity: "0.6", padding: "15px" }}
                >
                  EXIM Type
                </Typography>
                <input type="radio" name="exim" />
                <Typography
                  sx={{ fontWeight: "700", opacity: "0.7", padding: "15px" }}
                >
                  Import
                </Typography>
                <input type="radio" name="exim" />
                <Typography
                  sx={{ fontWeight: "700", opacity: "0.7", padding: "15px" }}
                >
                  Export
                </Typography>
              </div>
              <div>
                <button onClick={onClose} className="confirm">
                  Confirm
                </button>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </>
  );
}
