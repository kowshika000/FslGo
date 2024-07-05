import React, {useState} from "react";
import {
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";
import minus from '../../../../assets/9021673_minus_bold_icon 1.svg'
import plus from '../../../../assets/material-symbols_add-rounded.svg'

const UnitType = ({ onClose }) => {
  const [inputFields, setInputFields] = useState([{}]);
  const [noofunits,setNoofunits] = useState(0)

  const handleAddLoad = () => {
    setInputFields([...inputFields, {}]);
  };
  return (
    <>
    {inputFields.map((load, index)=>(
      <React.Fragment key={index} >
      <div className="d-flex">
        <div className="w-50 my-3 ms-0 me-3">
          <Typography sx={{ fontWeight: "500", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(103, 120, 142, 1)" }}>
            Package Type
          </Typography>
          <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">Package</InputLabel> */}
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              // label="Age"
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">Ten</MenuItem>
            </Select>
          </FormControl>{" "}
        </div>
        <div className="w-50 my-3 ms-3 me-0">
          <Typography sx={{ fontWeight: "500", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(103, 120, 142, 1)" }}>
            No.of Units
          </Typography>
          <div
            className="btn-group"
            role="group"
            style={{ border: "1px solid rgb(207, 214, 223)" }}
          >
            <input
              className="form-control "
              placeholder="Units"
              value={noofunits ? noofunits : ""}
                onChange={(e)=>setNoofunits(parseInt(e.target.value))}
              style={{
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                padding: "13px",
                border:"none"
              }}
            />
            <button
              onClick={()=>setNoofunits((prev)=>prev>1?prev-1:1)}
              type="button"
              style={{ border: "none", paddingRight: "6px",paddingLeft:"6px", background: "none", borderRight:"1px solid #f0f0f0", margin:"8px 0px" }}

            >
                <img src={minus} alt="minus"  />
            </button>
            <button
              onClick={()=>setNoofunits((prev)=>prev<999?prev+1:999)}
              type="button"
              style={{
                border: "none",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                paddingRight: "6px",
                paddingLeft:"6px",
                background: "none"
              }}
            >
              <img src={plus} alt="add"  />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="w-100 my-3">
          <Typography sx={{ fontWeight: "500", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(103, 120, 142, 1)" }}>
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
                padding: "12px"
              }}
              className="w-100"
              placeholder="100"
            />
            <input
              type="text"
              style={{
                border: "1px solid rgba(0,0,0,0.3)",
                fontSize: "20px",
                padding: "12px"
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
      <div className="d-flex my-3">
        <div className="w-100">
          <Typography sx={{ fontWeight: "500", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(103, 120, 142, 1)" }}>
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
        <Typography sx={{ fontWeight: "400", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(73, 90, 110, 1)" }}>
          + Add Another Load
        </Typography>
      </button>
      <div className="my-3 d-flex justify-content-between">
        <div className=" d-flex" style={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize:"13px",
              lineHeight:"19px",
              letterSpacing:".01em",
              color:"rgba(103, 120, 142, 1)",
              padding: "13px 8px 13px 0px",
            }}
          >
            EXIM Type
          </Typography>
          <FormControlLabel
            value="Import"
            style={{fontWeight:"400",fontSize:"13px",lineHeight:"19px",letterSpacing:".01em",color:"rgba(41, 51, 61, 1)"}}
            control={<Radio   
              size="small" 
              label="Import"
              sx={{
                color: "black",
                '&.Mui-checked': {
                  color: "black",
                },
              }}
            />}
            label="Import"
            labelPlacement="right"
          />
          <FormControlLabel
            value="Export"
            style={{fontWeight:"400",fontSize:"13px",lineHeight:"19px",letterSpacing:".01em",color:"rgba(41, 51, 61, 1)"}}
            control={<Radio   
              size="small" 
              label="Import"
              sx={{
                color: "black",
                '&.Mui-checked': {
                  color: "black",
                },
              }}
            />}
            label="Export"
            labelPlacement="right"
          />
          {/* <input type="radio" name="exim" />
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
          </Typography> */}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="confirm" onClick={onClose}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default UnitType;
