import React, { useEffect, useRef, useState } from "react";
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
  Box,
  FormHelperText,
  Tooltip,
} from "@mui/material";
import minus from "../../../../assets/9021673_minus_bold_icon 1.svg";
import plus from "../../../../assets/material-symbols_add-rounded.svg";
import deletedicon from "../../../../assets/ic_outline-delete.svg";
import editicon from "../../../../assets/editpencil.f11da97f.svg";
import { Button } from "antd";

const Fcl = ({
  onClose,
  eximchange,
  setCargo,
  setCargoOptionsVisible,
  settserrmsg,
  fclexim,
  setfclexim,
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
  setshowcargo
}) => {

  console.log(eximchange);
  const hasPageBeenRendered = useRef(false)
  // const [fclexim, setfclexim] = useState("E");

  // const [fclinputFields, setfclInputFields] = useState(
  //   JSON.parse(localStorage.getItem("fclinpfields")) || [{}]
  // );
  // const [fclsaveddatas, setfclsaveddatas] = useState(
  //   JSON.parse(localStorage.getItem("fclDatas")) || []
  // );
  // const [fclediteddata, setfclediteddata] = useState({});
  // const [fcleditedId, setfcleditedId] = useState("");

  const initialData = {
    package_type: "BOX",
    quantity: "",
  };
  // const [fclDatas, setfclDatas] = useState(
  //   JSON.parse(localStorage.getItem("fcldatas")) || {
  //     package_type: "BOX",
  //     quantity: "",
  //   }
  // );

  console.log(fclDatas);

  // const [fclerrors, setfclerrors] = useState(
  //   JSON.parse(localStorage.getItem("fcldatas")) || {
  //     quantity: false,
  //   }
  // );
  console.log(fclerrors);
  // const [fclediterrors, setfclediterrors] = useState({
  //   quantity: false,
  // });
  console.log(fclerrors);

  // useEffect(() => {
  //   localStorage.setItem("fcldatas", JSON.stringify(fclDatas));
  //   localStorage.setItem("fclerrors", JSON.stringify(fclerrors));
  // }, [fclDatas, fclerrors]);

  // const [tseditedDatas, settseditedDatas] = useState(fclediteddata[0]);
  // console.log(tseditedDatas)
  console.log(fclediteddata);
  console.log(fclsaveddatas);
  console.log(fclinputFields.length);
  const IsError = [fclerrors.quantity].some(Boolean);
  const IsEditError = [fclediterrors.quantity].some(Boolean);
  const canAdd = [fclDatas.package_type, fclDatas.quantity].every(Boolean);
  const CanField = Boolean(fclinputFields.length);
  console.log(CanField);
  console.log(canAdd);
  const canSave = [fclDatas.package_type, fclDatas.quantity].every(Boolean);
  console.log(canSave);
  const canEditSave = [fclediteddata.package_type, fclediteddata.quantity].every(
    Boolean
  );
  console.log(canEditSave);

  // useEffect(() => {
  //   localStorage.setItem("fclDatas", JSON.stringify(fclsaveddatas));
  //   localStorage.setItem("fclinpfields", JSON.stringify(fclinputFields));
  // }, [fclsaveddatas, fclinputFields]);
  // console.log(fclexim);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfclDatas((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    console.log(value, typeof value);
    setfclDatas((prev) => {
      return {
        ...prev,
        [name]: !value ? "" : value <= 0 ? 1 : parseInt(value),
      };
    });
  };
  const handleUnitIncrement = () => {
    setfclDatas((prev) => {
      return {
        ...prev,
        quantity:
          prev.quantity === ""
            ? 1
            : parseInt(prev.quantity) < 999
            ? parseInt(prev.quantity) + 1
            : parseInt(prev.quantity),
      };
    });
  };
  const handleQuantityDecrement = () => {
    setfclDatas((prev) => {
      return {
        ...prev,
        quantity:
          prev.quantity === ""
            ? 1
            : parseInt(prev.quantity) > 1
            ? parseInt(prev.quantity) - 1
            : parseInt(prev.quantity),
      };
    });
  };
  console.log(fclDatas);

  const handleAddLoad = () => {
    if (fclinputFields.length > 0) {
      setfclsaveddatas([
        ...fclsaveddatas,
        {
          ...fclDatas,
          id:
            fclsaveddatas.length < 1
              ? 1
              : fclsaveddatas[fclsaveddatas.length - 1].id + 1,
        },
      ]);
      setfclDatas(initialData);
    }
    setfclInputFields([{}]);
  };
  console.log(fclinputFields);
  const handleCloseLoad = (index) => {
    // if (fclinputFields.length === 1) {
    //   return;
    // }
    // setfclInputFields(fclinputFields.filter((_, i) => i !== index));
    setfclInputFields([]);
    setfclDatas(initialData);
  };

  const handleDelete = (e, id) => {
    console.log(id);
    const filteredData = fclsaveddatas.filter((i) => i.id !== id);
    console.log(filteredData);
    setfclsaveddatas(filteredData);
    // setfclediteddata({});
    if (fclsaveddatas.length === 1) {
      setfclInputFields([{}]);
    }
    // setfclsaveddatas(fclsaveddatas.filter((_,i) => i !== index));
  };
  const handleEdit = (e, id) => {
    console.log("edited");
    console.log(id);
    const filteredData = fclsaveddatas.filter((i) => i.id === id);
    console.log(filteredData);
    setfcleditedId(id);
    setfclediteddata(filteredData[0]);
    // if(fclsaveddatas.length===1){
    //   setfclInputFields([{}]);
    // }
    // setfclsaveddatas(fclsaveddatas.filter((_,i) => i !== index));
  };

  const handleSave = () => {
    setfclsaveddatas([
      ...fclsaveddatas,
      {
        ...fclDatas,
        id:
          fclsaveddatas.length < 1 ? 1 : fclsaveddatas[fclsaveddatas.length - 1].id + 1,
      },
    ]);
    setfclDatas(initialData);
    setfclInputFields([]);
  };

  //This is for edit Data
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setfclediteddata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEditQuantity = (e) => {
    const { name, value } = e.target;
    console.log(value, typeof value);
    setfclediteddata((prev) => {
      return { ...prev, [name]: !value ? "" : parseInt(value) };
    });
  };
  const handleEditQuantityIncrement = () => {
    setfclediteddata((prev) => {
      return {
        ...prev,
        quantity:
          prev.quantity === ""
            ? 1
            : parseInt(prev.quantity) < 999
            ? parseInt(prev.quantity) + 1
            : parseInt(prev.quantity),
      };
    });
  };
  const handleEditQuantityDecrement = () => {
    setfclediteddata((prev) => {
      return {
        ...prev,
        quantity:
          prev.quantity === ""
            ? 1
            : parseInt(prev.quantity) > 1
            ? parseInt(prev.quantity) - 1
            : parseInt(prev.quantity),
      };
    });
  };

  const handleUpdate = () => {
    // const { name, value } = e.target;
    const filteredEdit = fclsaveddatas.map((item) =>
      item.id === fcleditedId ? fclediteddata : item
    );
    console.log(filteredEdit);
    // const filteredItems = filteredEdit.push(fclediteddata)
    // console.log(filteredEdit)
    // setfclsaveddatas((prev) => {
    //   return [...prev,fclediteddata];
    // });
    setfclsaveddatas(filteredEdit);
    setfclediteddata({});
    setfcleditedId("");
  };

//This is for one load
const values = `FCL | ${fclDatas?.package_type} : ${fclDatas.quantity},`;

useEffect(() => {
if(hasPageBeenRendered.current){
  console.log(values)
    setCargo(values)
}
hasPageBeenRendered.current = true;
}, [fclDatas])


  const handleFclSubmit = () => {
    console.log(canAdd, !IsError);
    if (!IsError && canAdd) {
      setshowcargo(true)
      console.log(values);
      setCargo(values);
      setCargoOptionsVisible(false);
      settserrmsg("");
      // }
    }
    // else if(fclsaveddatas.length === 1){

    // }
    else if (fclsaveddatas.length >= 1 && fclinputFields.length>=1) {
      console.log("second");
      let generalquantity = 0;
      for (let i = 0; i <= fclsaveddatas.length - 1; i++) {
        generalquantity += fclsaveddatas[i].quantity;
      }
      // console.log(units, weight, volume);
      // const unitscopy = [...fclsaveddatas]
      // let units = unitscopy.reduce((previousValue, currentValue) => previousValue.units += currentValue.units);
      // let weight = unitscopy.reduce((previousValue, currentValue) => previousValue.weight += currentValue.weight);
      // console.log(weight)
      const values = `FCL | ${fclDatas?.package_type} : ${fclDatas.quantity},`;
      setCargo(values);
      setCargoOptionsVisible(false);
      settserrmsg("");
    } else {
      setCargo("");
      if (!canAdd) {
        settserrmsg("Please add proper values for load");
      } else if (fclerrors.quantity) {
        settserrmsg("Please add proper quantity for load");
      } else {
        settserrmsg("");
      }
    }
  };

  return (
    <>
      {fclsaveddatas?.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              borderRadius: "8px",
              backgroundColor: "rgba(243, 245, 247, 1)",
              padding: "12px 24px",
              // display: "flex",
              // justifyContent: "space-between",
              // alignItems: "center",
              margin: "16px 0px 8px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(24, 30, 37, 1)",
                  }}
                >
                  Load {index + 1}
                </span>{" "}
                {fcleditedId !== item.id && (
                  // <>
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "25px",
                      letterSpacing: ".01em",
                      color: "rgba(41, 51, 61, 1)",
                    }}
                  >
                    : {item.quantity} X {item.package_type}
                  </span>
                )}
              </div>

              {/* {fcleditedId !== item.id && (
                <div>
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      lineHeight: "19px",
                      letterSpacing: ".01em",
                      color: "rgba(41, 51, 61, 1)",
                    }}
                  >
                    {item.lengths}x{item.width}x{item.height}{" "}
                    {item.dimensionUnit} | {item.weight} {item.weightUnit} |{" "}
                    {(
                      (item.lengths * item.height * item.width) /
                      1000000
                    ).toFixed(3)}{" "}
                    CBM
                  </span>
                </div>
              )} */}
              <div>
                {fcleditedId !== item.id && (
                  <img
                    src={editicon}
                    role="button"
                    alt="edit"
                    className="me-1"
                    onClick={(e) => handleEdit(e, item.id)}
                  />
                )}
                <img
                  src={deletedicon}
                  role="button"
                  alt="delete"
                  onClick={(e) => handleDelete(e, item.id)}
                />
              </div>
            </div>
            {/* {
              fclediteddata?.map((item,i)=>{
                console.log(item,i)
                console.log(item.id,fcleditedId) */}
            {fcleditedId === item.id && (
              <>
                {
                  fclediteddata && (
                    <div key={fclediteddata?.id}>
                      <div className="d-flex">
                        <div className="w-50 my-3 ms-0 me-3">
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: "13px",
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                              color: "rgba(103, 120, 142, 1)",
                            }}
                          >
                            Package Type
                          </Typography>
                          <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Package</InputLabel> */}
                            <Select
                              style={{ height: "45px" }}
                              // labelId="demo-simple-select-label"
                              // id="demo-simple-select"
                              // label="Age"
                              value={fclediteddata?.package_type}
                              onChange={handleEditChange}
                              name="package_type"
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="20 GENERAL PURPOSE">
                                20 GENERAL PURPOSE
                              </MenuItem>
                              <MenuItem value="40 GENERAL PURPOSE">
                                40 GENERAL PURPOSE
                              </MenuItem>
                              <MenuItem value="40 HICH CUBE">
                                40 HICH CUBE
                              </MenuItem>
                            </Select>
                          </FormControl>{" "}
                        </div>
                        <div className="w-50 my-3 ms-3 me-0">
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: "13px",
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                              color: "rgba(103, 120, 142, 1)",
                            }}
                          >
                            Quantity
                          </Typography>
                          <div
                            className="btn-group w-100"
                            role="group"
                            style={{
                              border: "1px solid rgba(207, 214, 223, 1)",
                              height: "45px",
                              borderColor: fclediterrors.units ? "red" : null,
                            }}
                          >
                            <input
                              type="number"
                              className="form-control placeholder_style"
                              placeholder="Quantity"
                              autoComplete="off"
                              onKeyDown={(e) => {
                                if (
                                  !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                                    e.key
                                  )
                                ) {
                                  e.preventDefault();
                                }
                              }}
                              onBlur={() =>
                                fclediteddata?.quantity < 0 ||
                                fclediteddata?.quantity > 99
                                  ? setfclediterrors((prev) => {
                                      return { ...prev, quantity: true };
                                    })
                                  : setfclediterrors((prev) => {
                                      return { ...prev, quantity: false };
                                    })
                              }
                              onWheel={(e) => e.target.blur()}
                              // value={noofunits ? noofunits : ""}
                              value={fclediteddata?.quantity}
                              name="quantity"
                              // onChange={(e)=>setNoofunits(parseInt(e.target.value))}
                              onChange={handleEditQuantity}
                              style={{
                                borderTopRightRadius: "0",
                                borderBottomRightRadius: "0",
                                padding: "13px",
                                border: "none",
                              }}
                            />
                            <button
                              // onClick={()=>setNoofunits((prev)=>prev>1?prev-1:1)}
                              onClick={handleEditQuantityDecrement}
                              type="button"
                              style={{
                                border: "none",
                                paddingRight: "6px",
                                paddingLeft: "6px",
                                background: "none",
                                borderRight: "1px solid #f0f0f0",
                              }}
                            >
                              <img src={minus} alt="minus" />
                            </button>
                            <button
                              // onClick={()=>setNoofunits((prev)=>prev<999?prev+1:999)}
                              onClick={handleEditQuantityIncrement}
                              type="button"
                              style={{
                                border: "none",
                                borderTopRightRadius: "5px",
                                borderBottomRightRadius: "5px",
                                paddingRight: "6px",
                                paddingLeft: "6px",
                                background: "none",
                              }}
                            >
                              <img src={plus} alt="add" />
                            </button>
                          </div>
                          <FormHelperText
                            style={{ color: "red", fontStyle: "italic" }}
                          >
                            {fclediterrors.quantity && fclediteddata.quantity > 99
                              ? "Maximum 99 allowed"
                              : fclediteddata.quantity < 0
                              ? "Min 1"
                              : null}
                          </FormHelperText>
                        </div>
                      </div>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "unset",
                          border: "none",
                          opacity: !canEditSave ? ".5" : "1",
                        }}
                        onClick={handleUpdate}
                        disabled={!canEditSave || IsEditError}
                      >
                        save
                      </Button>
                    </div>
                  )

                  // })
                }
              </>
            )}

            {/* //   })
            // } */}
          </Box>
        );
      })}
      {fclinputFields.map((load, index) => (
        <React.Fragment key={index}>
          <div className={`${fclsaveddatas.length > 0 && "backgroundStyle"}`}>
            {fclsaveddatas.length > 0 && (
              <>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(24, 30, 37, 1)",
                  }}
                >
                  Load {fclsaveddatas.length + 1}
                </span>
                <span style={{ float: "inline-end" }}>
                  <img
                    src={deletedicon}
                    alt="delete"
                    role="button"
                    onClick={handleCloseLoad}
                  />
                </span>
                <hr style={{ margin: "8px 0px" }} />
              </>
            )}
            <div className="d-flex mt-3">
              <div className="w-50 my-3 ms-0 me-3">
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "13px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(103, 120, 142, 1)",
                  }}
                >
                  Container Type
                </Typography>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">select Type</InputLabel> */}
                  <Select
                    // labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    // label="Age"
                    className="placeholder_style"
                    style={{ height: "45px" }}
                    value={fclDatas.package_type}
                    onChange={handleChange}
                    name="package_type"
                    displayEmpty
                    placeholder="Select Type"
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="20 GENERAL PURPOSE">
                      20 GENERAL PURPOSE
                    </MenuItem>
                    <MenuItem value="40 GENERAL PURPOSE">
                      40 GENERAL PURPOSE
                    </MenuItem>
                    <MenuItem value="40 HICH CUBE">40 HICH CUBE</MenuItem>
                  </Select>
                </FormControl>{" "}
              </div>
              <div className="w-50 my-3 ms-3 me-0">
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "13px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(103, 120, 142, 1)",
                  }}
                >
                  Quantity
                </Typography>
                <div
                  className="btn-group"
                  role="group"
                  style={{
                    border: "1px solid rgb(207, 214, 223)",
                    height: "45px",
                  }}
                >
                  <input
                    type="number"
                    autoComplete="off"
                    className="placeholder_style form-control"
                    placeholder="Quantity"
                    onKeyDown={(e) => {
                      if (
                        !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                          e.key
                        )
                      ) {
                        e.preventDefault();
                      }
                    }}
                    onBlur={() =>
                      fclDatas?.quantity < 0 || fclDatas?.quantity > 99
                        ? setfclerrors((prev) => {
                            return { ...prev, quantity: true };
                          })
                        : setfclerrors((prev) => {
                            return { ...prev, quantity: false };
                          })
                    }
                    onWheel={(e) => e.target.blur()}
                    // onWheel={(e) => e.target.blur()}
                    // value={noofunits ? noofunits : ""}
                    value={fclDatas?.quantity}
                    name="quantity"
                    // onChange={(e)=>setNoofunits(parseInt(e.target.value))}
                    onChange={handleQuantityChange}
                    style={{
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                      padding: "13px",
                      border: "none",
                    }}
                  />
                  <button
                    onClick={handleQuantityDecrement}
                    type="button"
                    style={{
                      border: "none",
                      paddingRight: "6px",
                      paddingLeft: "6px",
                      background: "none",
                      borderRight: "1px solid #f0f0f0",
                    }}
                  >
                    <img src={minus} alt="minus" />
                  </button>
                  <button
                    onClick={handleUnitIncrement}
                    type="button"
                    style={{
                      border: "none",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                      paddingRight: "6px",
                      paddingLeft: "6px",
                      background: "none",
                    }}
                  >
                    <img src={plus} alt="add" />
                  </button>
                </div>
                <FormHelperText style={{ color: "red", fontStyle: "italic" }}>
                  {fclerrors.quantity && fclDatas.quantity > 99
                    ? "Maximum 99 allowed"
                    : fclDatas.quantity < 0
                    ? "Min 1"
                    : null}
                </FormHelperText>
              </div>
            </div>
            {fclsaveddatas.length > 0 && (
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "unset",
                  opacity: !canSave ? ".5" : "1",
                }}
                onClick={handleSave}
                disabled={!canSave || IsError}
              >
                save
              </Button>
            )}
          </div>
        </React.Fragment>
      ))}
      <div className="d-flex">
        <Tooltip
          placement="top"
          title={"Please add proper details for previous loads"}
          trigger={IsError || (!canAdd && "hover")}
        >
          <Button
            style={{
              border: "none",
              background: "none",
              opacity: !CanField ? "1" : canAdd && !IsError ? "1" : ".5",
              boxShadow: "unset",
            }}
            onClick={handleAddLoad}
            disabled={!CanField ? false : !canAdd || IsError}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "19px",
                letterSpacing: ".01em",
                color: "rgba(73, 90, 110, 1)",
                textTransform: "capitalize",
              }}
            >
              + Add Another Load
            </Typography>
          </Button>
        </Tooltip>
      </div>
      <div className="my-3 d-flex " style={{ justifyContent: "space-between" }}>
        <div className=" d-flex" style={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "rgba(103, 120, 142, 1)",
              padding: "13px 8px 13px 0px",
            }}
          >
            EXIM Type
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={fclexim}
          >
            <FormControlLabel
              value="I"
              style={{
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "19px",
                letterSpacing: ".01em",
                color: "rgba(41, 51, 61, 1)",
              }}
              control={
                <Radio
                  name="import_export"
                  value="I"
                  onChange={(e) => setfclexim(e.target.value)}
                  size="small"
                  label="Import"
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              }
              label="Import"
              labelPlacement="right"
            />
            <FormControlLabel
              value="E"
              style={{
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "19px",
                letterSpacing: ".01em",
                color: "rgba(41, 51, 61, 1)",
              }}
              control={
                <Radio
                  name="import_export"
                  value="E"
                  onChange={(e) => setfclexim(e.target.value)}
                  size="small"
                  label="Export"
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              }
              label="Export"
              labelPlacement="right"
            />
          </RadioGroup>
          {/* <input type="radio" name="fclexim" />
                <Typography
                  sx={{ fontWeight: "700", opacity: "0.7", padding: "15px" }}
                >
                  Import
                </Typography>
                <input type="radio" name="fclexim" />
                <Typography
                  sx={{ fontWeight: "700", opacity: "0.7", padding: "15px" }}
                >
                  Export
                </Typography> */}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={handleFclSubmit} className="confirm">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default Fcl;
