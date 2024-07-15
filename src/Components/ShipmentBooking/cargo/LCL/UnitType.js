import React, { useEffect, useRef, useState } from "react";
import {
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
  Box,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import minus from "../../../../assets/9021673_minus_bold_icon 1.svg";
import plus from "../../../../assets/material-symbols_add-rounded.svg";
import { Button, Tooltip } from "antd";
import deletedicon from "../../../../assets/ic_outline-delete.svg";
import editicon from "../../../../assets/editpencil.f11da97f.svg";
import e from "cors";

const UnitType = ({
  onClose,
  eximchange,
  setCargo,
  setCargoOptionsVisible,
  seterrmsg,
  utexim,
  setutexim,
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
  setutclickedId,
  utclickedId,
  setshowcargo,
  packages,
  setlastsaved
}) => {
 
  console.log("ut",utDatas)
  console.log("clickedut",utclickedId)
  const [disabled, setDisabled] = useState(false);

  const handleAddLoad = () => {
    setutDatas((prevData) => {
      return [...prevData, {
        package_type: "BOX",
        units: "",
        height: "",
        lengths: "",
        width: "",
        dimensionUnit: "CM",
        weight: "",
        weightUnit: "KG",
      }];
    });
    setutclickedId((prevData) => {
      console.log(prevData);
      return [
        ...prevData.filter((i) => i != utDatas.length - 1),
        utDatas.length,
      ];
    });
  };

  const handleChange = (id, e) => {
    console.log(id);
    const { name, value } = e.target;
    setutDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? { ...item, [name]: name === "units" ? parseInt(value) : value}
          : item
      )
    );
    // handleSaveDisabled(id)
  };
  const handleChangeWeightDropDown = (id, e) => {
    console.log(id);
    const { name, value } = e.target;
    setutDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? { ...item, [name]: value,dimensionUnit:value === "KG" ? "CM": "IN"}
          : item
      )
    );
    // handleSaveDisabled(id)
  };
  const handleChangeDimensionDropDown = (id, e) => {
    console.log(id);
    const { name, value } = e.target;
    setutDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? { ...item, [name]: value,weightUnit:value === "CM" ? "KG": "LB"}
          : item
      )
    );
    // handleSaveDisabled(id)
  };

  const handleDelete = (id) => {
    const deletedItems = [...utDatas];
    deletedItems.splice(id, 1);
    setutDatas(deletedItems);
  };
  const handleEdit = (id) => {
    // const EditedItems = fclDatas.map((item,index)=>index === id? id:index)
    setutclickedId((prev) => {
      return [...prev, id];
    });
  };

  const handleSave = (id) => {
    console.log("saved", id);
    const savedItems = utclickedId.filter((item, index) => item !== id);
    setutclickedId(savedItems);
  };

  const handleMinus = (id) => {
    setutDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? {
              ...item,
              units:
                parseInt(item.units) > 1 ? parseInt(item.units) - 1 : 1,
            }
          : item
      )
    );
  };
  const handlePlus = (id) => {
    setutDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? {
              ...item,
              units:
                parseInt(item.units) < 99
                  ? parseInt(item.units) + 1
                  : parseInt(item.units) >= 99
                  ? 99
                  : 1,
            }
          : item
      )
    );
  };

  const handleWholeValue = () => {
    if (utDatas.length > 0) {
      let e,
        total = 0;
      utDatas.forEach((ele) => {
        console.log(ele);
        total += parseInt(ele.quantity);
        ele.quantity < 1 && (e = true);
        ele.quantity > 99 && (e = true);
        ele.quantity === null && (e = false);
        // e.containerType===0 || e.containerType?.includes(null) && (e=true)
      });
      console.log("total", total);
      if (total > 99) {
        seterrmsg("Your total containers exceeds 99");
        setDisabled(true)
      } else {
        seterrmsg("");
        setDisabled(false)
      }
      // if(e){
      //   seterrmsg("Please add proper details for previous loads")
      // }
      // else{
      //   seterrmsg("")
      // }
    }
  };
  useEffect(() => {
    handleWholeValue();
  }, [utDatas]);

  //For Mathematical Operations 

  const KGandLB = (e,t)=>{
    let a = 1;
    return "KG" == e ? a = 1 : "LB" == e && (a = .453),
    parseFloat(t) * a
  }
  const CMandIN = (e,t,a,l)=>{
    let n = 1;
    return "CM" == e ? n = 1e6 : "IN" == e && (n = 61024),
    parseFloat(t) * parseFloat(a) * parseFloat(l) / n
  }

  console.log(KGandLB("KG",11))
  console.log(CMandIN("CM",11,11,11))

  return (
    <>
       
      {utDatas.map((item, index) => (
        <React.Fragment key={index}>
          {
            utclickedId.includes(index) ?(
              <>
                  <div
                  className={`outer_div my-2 ${
                    utDatas.length > 1 && "backgroundStyle"
                  }`}
                >
                    {
                      utDatas.length > 1 && 
                      <>
                           <div className="d-flex justify-content-between">
                        {/* <div> */}
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
                          </span>
                        </div>
                        {utDatas.length > 1 && (
                          <span style={{ float: "inline-end" }}>
                            <img
                              src={deletedicon}
                              alt="delete"
                              role="button"
                              onClick={() => handleDelete(index)}
                            />
                          </span>
                        )}
                        {/* </div> */}
                      </div>
                      <hr style={{ margin: "8px 0px" }} />
                      </>
                    }
                
                    <div>
                    <div className="d-flex mt-1">
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
                  <Select
                    style={{ height: "45px" }}
                    // value={utDatas.package_type}
                    // onChange={handleChange}
                    value={item.package_type}
                    onChange={(e) => handleChange(index, e)}
                    name="package_type"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {packages?.map((item, index) => {
                      return <MenuItem value="BOX">{item?.label}</MenuItem>;
                    })}
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
                  No.of Units
                </Typography>
                <div
                  className="btn-group"
                  role="group"
                  style={{
                    border: "1px solid rgb(207, 214, 223)",
                    height: "45px",
                    // borderColor: uterrors.units ? "red" : null,
                  }}
                >
                  <input
                    type="number"
                    autoComplete="off"
                    className="placeholder_style form-control"
                    placeholder="Units"
                    onKeyDown={(e) => {
                      if (
                        !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                          e.key
                        )
                      ) {
                        e.preventDefault();
                      }
                    }}
                    // onBlur={() =>
                    //   utDatas?.units < 0 || utDatas?.units > 999
                    //     ? setuterrors((prev) => {
                    //         return { ...prev, units: true };
                    //       })
                    //     : setuterrors((prev) => {
                    //         return { ...prev, units: false };
                    //       })
                    // }
                    onWheel={(e) => e.target.blur()}
                    // value={noofunits ? noofunits : ""}
                    // value={utDatas?.units}
                    value={item.units}
                    onChange={(e) => handleChange(index, e)}
                    name="units"
                    // onChange={(e)=>setNoofunits(parseInt(e.target.value))}
                    // onChange={handleUnitsChange}
                    style={{
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                      padding: "13px",
                      border: "none",
                    }}
                  />
                  <button
                    onClick={()=>handleMinus(index)}
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
                    onClick={()=>handlePlus(index)}
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
                {/* <FormHelperText style={{ color: "red", fontStyle: "italic" }}>
                  {uterrors.units && utDatas.units > 999
                    ? "Maximum 999 allowed"
                    : utDatas.units < 0
                    ? "Min 1"
                    : null}
                </FormHelperText> */}
              </div>
            </div>
            <div className="d-flex">
              <div className="w-100 mb-3">
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "13px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(103, 120, 142, 1)",
                  }}
                >
                  Dimentions
                </Typography>

                <div
                  className="btn-group"
                  role="group"
                  aria-label="Button group with nested dropdown"
                  style={{
                    // border: "1px solid rgb(207, 214, 223)",
                    height: "42px",
                  }}
                >
                  <input
                    className="placeholder_style w-100"
                    type="number"
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
                    // onBlur={() =>
                    //   utDatas?.lengths < 10 || utDatas?.lengths > 310
                    //     ? setuterrors((prev) => {
                    //         return { ...prev, lengths: true };
                    //       })
                    //     : setuterrors((prev) => {
                    //         return { ...prev, lengths: false };
                    //       })
                    // }
                    onWheel={(e) => e.target.blur()}
                    value={item.lengths}
                    onChange={(e) => handleChange(index, e)}
                    style={{
                      // border: "0px",
                      border: "1px solid rgb(207, 214, 223)",
                      borderTopLeftRadius: "5px",
                      borderBottomLeftRadius: "5px",
                      fontSize: "1rem",
                      padding: "12px",
                      // borderColor: uterrors.lengths ? "red" : null,
                    }}
                    placeholder="L"
                    // value={utDatas.lengths}
                    // onChange={handleChange}
                    name="lengths"
                  />
                  <input
                    className="placeholder_style w-100"
                    type="number"
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
                    // onBlur={() =>
                    //   utDatas?.width < 10 || utDatas?.width > 310
                    //     ? setuterrors((prev) => {
                    //         return { ...prev, width: true };
                    //       })
                    //     : setuterrors((prev) => {
                    //         return { ...prev, width: false };
                    //       })
                    // }
                    value={item.width}
                    onChange={(e) => handleChange(index, e)}
                    onWheel={(e) => e.target.blur()}
                    style={{
                      border: "1px solid rgb(207, 214, 223)",
                      borderRight: "1px solid rgb(207, 214, 223)",
                      borderLeft: "1px solid rgb(207, 214, 223)",
                      fontSize: "1rem",
                      padding: "12px",
                      // borderColor: uterrors.width ? "red" : null,
                    }}
                    placeholder="W"
                    // value={utDatas.width}
                    // onChange={handleChange}
                    name="width"
                  />
                  <input
                    className="placeholder_style w-100"
                    type="number"
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
                    // onBlur={() =>
                    //   utDatas?.height < 10 || utDatas?.height > 310
                    //     ? setuterrors((prev) => {
                    //         return { ...prev, height: true };
                    //       })
                    //     : setuterrors((prev) => {
                    //         return { ...prev, height: false };
                    //       })
                    // }
                    onWheel={(e) => e.target.blur()}
                    value={item.height}
                    onChange={(e) => handleChange(index, e)}
                    style={{
                      border: "1px solid rgb(207, 214, 223)",
                      borderRight: "1px solid rgb(207, 214, 223)",
                      borderLeft: "1px solid rgb(207, 214, 223)",
                      fontSize: "1rem",
                      padding: "12px",
                      // borderColor: uterrors.height ? "red" : null,
                    }}
                    placeholder="H"
                    // value={utDatas.height}
                    // onChange={handleChange}
                    name="height"
                  />
                  <FormControl variant="standard">
                    {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                    <Select
                      sx={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "rgba(243, 245, 247, 1)",
                        borderTopRightRadius: "8px",
                        borderBottomRightRadius: "8px",
                        border: "1px solid rgba(207, 214, 223, 1)",
                        borderLeft: "0px",
                      }}
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      defaultValue="KG"
                      value={item.dimensionUnit}
                      onChange={(e) => handleChangeDimensionDropDown(index, e)}
                      // value={age}
                      // onChange={handleChange}
                      // input={<BootstrapInput />}
                      // value={utDatas?.dimensionUnit}
                      // onChange={handleVolumeDropChange}
                      name="dimensionUnit"
                    >
                      <MenuItem value="CM">CM</MenuItem>
                      <MenuItem value="IN">IN</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <div className="btn-group" role="group">
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
            </div> */}
                </div>
                <div className="d-flex">
                  {/* <FormHelperText
                    style={{
                      color: "red",
                      fontStyle: "italic",
                      width: "132px",
                    }}
                  >
                    {uterrors.lengths &&
                      (utDatas.lengths > 310
                        ? "Max 310CM"
                        : utDatas.lengths < 10
                        ? "Min 10CM"
                        : null)}
                  </FormHelperText> */}
                  {/* <FormHelperText
                    style={{
                      color: "red",
                      fontStyle: "italic",
                      width: "132px",
                    }}
                  >
                    {uterrors.width &&
                      (utDatas.width > 310
                        ? "Max 310CM"
                        : utDatas.width < 10
                        ? "Min 10CM"
                        : null)}
                  </FormHelperText>
                  <FormHelperText
                    style={{
                      color: "red",
                      fontStyle: "italic",
                      width: "132px",
                    }}
                  >
                    {uterrors.height &&
                      (utDatas.height > 310
                        ? "Max 310CM"
                        : utDatas.height < 10
                        ? "Min 10CM"
                        : null)}
                  </FormHelperText> */}
                </div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="w-100">
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "13px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(103, 120, 142, 1)",
                  }}
                >
                  Total Weight
                </Typography>
                <div
                  className="btn-group w-100"
                  role="group"
                  aria-label="Button group with nested dropdown"
                  style={{ height: "42px" }}
                >
                  <input
                    type="number"
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
                    // onBlur={() =>
                    //   utDatas?.weight <= 0 || utDatas?.weight > 3000
                    //     ? setuterrors((prev) => {
                    //         return { ...prev, weight: true };
                    //       })
                    //     : setuterrors((prev) => {
                    //         return { ...prev, weight: false };
                    //       })
                    // }
                    value={item.weight}
                    onChange={(e) => handleChange(index, e)}
                    onWheel={(e) => e.target.blur()}
                    className="placeholder_style w-100"
                    style={{
                      border: "1px solid rgb(207, 214, 223)",
                      borderTopLeftRadius: "5px",
                      borderBottomLeftRadius: "5px",
                      fontSize: "1rem",
                      padding: "12px",
                      // borderColor: uterrors.weight ? "red" : null,
                    }}
                    placeholder="Weight"
                    // value={utDatas.weight}
                    // onChange={handleChange}
                    name="weight"
                  />
                  <FormControl variant="standard">
                    {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                    <Select
                      sx={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "rgba(243, 245, 247, 1)",
                        borderTopRightRadius: "8px",
                        borderBottomRightRadius: "8px",
                        border: "1px solid rgba(207, 214, 223, 1)",
                        borderLeft: "0px",
                        // borderColor: uterrors.weight ? "red" : null,
                      }}
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      defaultValue="KG"
                      // value={utDatas?.weightUnit}
                      // onChange={handleWeightDropChange}
                      name="weightUnit"
                      value={item.weightUnit}
                    onChange={(e) => handleChangeWeightDropDown(index, e)}
                    >
                      <MenuItem value="KG">KG</MenuItem>
                      <MenuItem value="LB">LB</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <div className="btn-group" role="group" >
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
            </div> */}
                </div>
                {/* <FormHelperText
                  style={{ color: "red", fontStyle: "italic", width: "132px" }}
                >
                  {uterrors.weight
                    ? utDatas.weight > 310
                      ? "Max 3000KG"
                      : utDatas.weight <= 0
                      ? "Min 1 KG"
                      : null
                    : ""}
                </FormHelperText> */}
              </div>
            </div>
                    </div>
                    <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "unset",
                  // opacity: !canSave ? ".5" : "1",
                }}
                onClick={()=>handleSave(index)}
                // disabled={!canSave || IsError}
              >
                save
              </Button>
            </div>
              </>
            ):
          (
            <div
                className="d-flex justify-content-between"
                style={{
                  borderRadius: "8px",
                  backgroundColor: "rgba(243, 245, 247, 1)",
                  padding: "12px 24px",
                  margin: "16px 0px 8px 0px",
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
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "25px",
                      letterSpacing: ".01em",
                      color: "rgba(41, 51, 61, 1)",
                    }}
                  >
                    {/* : {item.units} Units X {item.lengths}X{item.width}X{item.height} {item.dimensionUnit} | {item.weight}{item.weightUnit} */}
                    {item.units} Units {item.lengths} x  {item.width} x  {item.height} {item.dimensionUnit} | {Number.parseFloat((parseInt(item.units) * item.weight).toFixed(3))}  {item.weightUnit} | {Number.parseFloat((parseInt(item.units) * CMandIN(item.dimensionUnit, item.lengths, item.width, item.height)).toFixed(3))} CBM   
                  </span>
                </div>
                <div>
                  <img
                    src={editicon}
                    role="button"
                    alt="edit"
                    className="me-1"
                    onClick={() => handleEdit(index)}
                  />
                  {utDatas.length > 1 && (
                    <img
                      src={deletedicon}
                      role="button"
                      alt="delete"
                      onClick={() => handleDelete(index)}
                    />
                  )}
                </div>
              </div>
          )
          }
          {/* <div className={`${saveddatas.length > 0 && "backgroundStyle"}`}> */}
            {/* {saveddatas.length > 0 && ( */}
              {/* <>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(24, 30, 37, 1)",
                  }}
                > */}
                  {/* Load {saveddatas.length + 1} */}
                {/* </span>
                <span style={{ float: "inline-end" }}>
                  <img
                    src={deletedicon}
                    alt="delete"
                    role="button"
                    // onClick={handleCloseLoad}
                  />
                </span>
                <hr style={{ margin: "8px 0px" }} /> */}
              {/* </> */}
            {/* )} */}
           
            {/* {saveddatas.length > 0 && ( */}
              
            {/* )} */}
          {/* </div> */}
        </React.Fragment>
      ))}
      <Tooltip
        placement="top"
        title={"Please add proper details for previous loads"}
        // trigger={IsError || (!canAdd && "hover")}
      >
        <Button
          style={{
            border: "none",
            background: "none",
            // opacity: !CanField ? "1" : canAdd && !IsError ? "1" : ".5",
            boxShadow: "unset",
          }}
          // onClick={handleAddLoad}
          // disabled={!CanField ? false : !canAdd || IsError}
          onClick={handleAddLoad}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "rgba(73, 90, 110, 1)",
            }}
          >
            + Add Another Load
          </Typography>
        </Button>
      </Tooltip>
      <div className="mb-3 d-flex justify-content-between">
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
            value={utexim}
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
                  onChange={(e) => setutexim(e.target.value)}
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
                  onChange={(e) => setutexim(e.target.value)}
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
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="confirm" >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default UnitType;
