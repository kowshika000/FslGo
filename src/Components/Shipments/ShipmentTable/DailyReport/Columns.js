import React, { useState } from "react";
import { Menu } from "primereact/menu";
import { Checkbox, FormControlLabel, Input, Switch,Box } from "@mui/material";
import styled from "styled-components";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { LuSigma } from "react-icons/lu";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: "black",
    opacity: "unset",

    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const Columns = () => {
  const [check, setcheck] = useState(false);
  const [checked, setChecked] = React.useState([false, false]);
  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="= Child 1"
        control={
          <Checkbox
            checked={checked[0]}
            onClick={handleChange2}
            sx={{
              color: "black",
              "&.Mui-checked": {
                color: "red",
              },
            }}
          />
        }
      />
      <FormControlLabel
        label="= Child 2"
        control={
          <Checkbox
            checked={checked[1]}
            onClick={handleChange3}
            sx={{
              color: "black",
              "&.Mui-checked": {
                color: "red",
              },
            }}
          />
        }
      />
    </Box>
  );
  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  let items = [
    {
      label: (
        <FormControlLabel
          control={
            <Android12Switch
              checked={check}
              onClick={(e) => setcheck(e.target.checked)}
            />
          }
          label="Pivot Mode"
        />
      ),
    },
    {
      separator: true,
    },
    {
      label: (
        <FormControlLabel
          label={<Input placeholder="Search..." />}
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onClick={handleChange1}
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
          }
        />
      ),
      // {children}
    },
    {
      separator: true,
    },
    {
      label: children,
    },
    {
      separator: true,
    },
    {
      label: (
        <div className="d-flex align-items-start">
          <FaArrowUpWideShort className="me-2" />
          <div>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: ".01em",
                marginBottom: "7px",
              }}
            >
              Row Groups
            </p>
            <p
              className="m-0"
              style={{ fontSize: "11px", letterSpacing: ".01em" }}
            >
              Drag here to set row groups
            </p>
          </div>
        </div>
      ),
    },
    {
      separator: true,
    },
    {
      label: (
        <div className="d-flex align-items-start">
          <LuSigma className="me-2" />
          <div>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: ".01em",
                marginBottom: "7px",
              }}
            >
              Values
            </p>
            <p
              className="m-0"
              style={{ fontSize: "11px", letterSpacing: ".01em" }}
            >
              Drag here to aggregate
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Menu
      model={items}
      className="w-full md:w-15rem"
      style={{ position: "absolute", top: "20px", right: "20px" }}
    />
  );
};

export default Columns;
