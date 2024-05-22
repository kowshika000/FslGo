import React, {useState} from "react";
import {
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const UnitType = ({ onClose }) => {
  const [inputFields, setInputFields] = useState([{}]);

  const handleAddLoad = () => {
    setInputFields([...inputFields, {}]);
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
            className="btn-group"
            role="group"
            style={{ border: "1px solid  rgba(0,0,0,0.3)" }}
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
        <div className="w-100 m-3">
          <Typography sx={{ fontWeight: "700", opacity: "0.5" }}>
            Dimentions
          </Typography>

          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
            style={{
              border: "1px solid rgba(0,0,0,0.3)", 
            }}
          >
            <input
              type="text"
              style={{
                border: "1px solid rgba(0,0,0,0.3)",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                fontSize: "20px", padding: "12px",
              }}
              className="w-100"
              placeholder="5"
            />
            <input
              type="text"
              style={{
                border: "1px solid rgba(0,0,0,0.3)",
                fontSize: "20px",
              }}
              className="w-100"
              placeholder="100"
            />
            <input
              type="text"
              style={{
                border: "1px solid rgba(0,0,0,0.3)",
                fontSize: "20px",
              }}
              className="w-100"
              placeholder="H"
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
                  border: "1px solid grey",
                }}
              >
                CBM
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
      </div>
      <div className="d-flex m-3">
        <div className="w-full ">
          <Typography sx={{ fontWeight: "700", opacity: "0.5" }}>
            Total Weight
          </Typography>
          <div
            className="btn-group w-100"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <input
              type="text"
              style={{
                border: "1px solid grey",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                fontSize: "20px", padding: "12px",
              }}
              className="w-100"
              placeholder="1KG"
            />
            <div className="btn-group" role="group" >
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  background: "rgba(0,0,0,0.03)",
                  border: "1px solid grey",
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

export default UnitType;
