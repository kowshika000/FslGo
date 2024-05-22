import React, { useState } from "react";
import {
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../cargo.css";

const TotalShipment = ({ onClose }) => {
  const [inputFields, setInputFields] = useState([{}]);

  const handleAddLoad = () => {
    setInputFields([...inputFields, {}]);
  };
  const handleCloseLoad = (index) => {
    if (inputFields.length === 1) {
      return;
    }
    setInputFields(inputFields.filter((_, i) => i !== index));
  };
  return (
    <>
    {inputFields.map((load, index)=>(
      <React.Fragment key={index} >
        <div className="d-flex">
          <div className="w-50 m-3">
            <Typography sx={{ fontWeight: "700", opacity: "0.5" }}>
              Package Type
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Package</InputLabel>
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
              No.of Units
            </Typography>
            <div
              className="btn-group w-100"
              role="group"
              style={{ border: "1px solid rgba(0,0,0,0.3)" }}
            >
              <input
                className="form-control "
                placeholder="2"
                style={{
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                  padding: "13px",
                }}
              />
              <button
                type="button"
                style={{ border: "none", paddingX: "15px", background: "none" }}
              >
                -
              </button>
              <button
                type="button"
                style={{
                  border: "none",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  paddingX: "15px",
                  background: "none",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="w-50 m-3">
            <Typography sx={{ fontWeight: "700", opacity: "0.5" }}>
              Total Volume
            </Typography>

            <div
              className="btn-group "
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <input
                type="text"
                style={{
                  border: "1px solid grey",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  padding: "10px",
                  fontSize: "20px",
                }}
                className="w-100"
                value="5"
              />
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn dropdown-toggle "
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    background: "rgba(0,0,0,0.03)",
                    border: "1px solid grey",
                  }}
                >
                  CM
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="#">
                    CBM
                  </a>
                  <a className="dropdown-item" href="#">
                    CFT
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 m-3">
            <Typography sx={{ fontWeight: "700", opacity: "0.5" }}>
              Total Weight
            </Typography>
            <div
              className="btn-group"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <input
                type="text"
                style={{
                  border: "1px solid rgba(0,0,0,0.3)",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  fontSize: "20px",
                  padding: "10px",
                }}
                className="w-100"
                value="100"
              />
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    background: "rgba(0,0,0,0.03)",
                    border: "1px solid rgba(0,0,0,0.3)",
                  }}
                >
                  KG
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="#">
                    KG
                  </a>
                  <a className="dropdown-item" href="#">
                    LB
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <DeleteIcon onClick={handleCloseLoad} color="error"/> */}
      </React.Fragment>))}
      <button className="btn" onClick={handleAddLoad}>
        <Typography sx={{ fontWeight: "500", opacity: "0.8" }}>
          + Add Another Load
        </Typography>
      </button>

      <div className="m-3 d-flex justify-content-between">
        <div className=" d-flex" style={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: "500",
              opacity: "0.6",
              padding: "15px",
            }}
          >
            EXIM Type
          </Typography>
          <input type="radio" name="exim" />
          <Typography
            sx={{
              fontWeight: "700",
              opacity: "0.7",
              padding: "15px",
            }}
          >
            Import
          </Typography>
          <input type="radio" name="exim" />
          <Typography
            sx={{
              fontWeight: "700",
              opacity: "0.7",
              padding: "15px",
            }}
          >
            Export
          </Typography>
        </div>
        <div>
          <button className="confirm" onClick={onClose}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default TotalShipment;
