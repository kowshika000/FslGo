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

const UnitType = ({
  onClose,
  eximchange,
  setCargo,
  setCargoOptionsVisible,
  settserrmsg,
  utexim,
  setutexim,
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
  setshowcargo
}) => {
  console.log(eximchange);
  const hasPageBeenRendered = useRef(false)
  console.log(inputFields)
  console.log(editeddata)
  // const [utexim, setutexim] = useState("E");

  // const [inputFields, setInputFields] = useState(
  //   JSON.parse(localStorage.getItem("utinpfields")) || [{}]
  // );
  // const [saveddatas, setsaveddatas] = useState(
  //   JSON.parse(localStorage.getItem("utDatas")) || []
  // );
  // console.log(saveddatas);
  // const [editeddata, setediteddata] = useState({});
  // const [editedId, seteditedId] = useState("");

  // const [uterrors, setuterrors] = useState(
  //   JSON.parse(localStorage.getItem("utDataserr")) || {
  //     units: false,
  //     lengths: false,
  //     width: false,
  //     height: false,
  //     weight: false,
  //   }
  // );
  console.log(uterrors);
  // const [utediterrors, setutediterrors] = useState({
  //   units: false,
  //   lengths: false,
  //   width: false,
  //   height: false,
  //   weight: false,
  // });
  // console.log(uterrors);

  const initialData = {
    package_type: "BOX",
    units: "",
    height: "",
    lengths: "",
    width: "",
    dimensionUnit: "CM",
    weight: "",
    weightUnit: "KG",
  };
  // const [utDatas, setutDatas] = useState(
  //   JSON.parse(localStorage.getItem("utDataslocal")) || {
  //     package_type: "BOX",
  //     units: "",
  //     height: "",
  //     lengths: "",
  //     width: "",
  //     dimensionUnit: "CM",
  //     weight: "",
  //     weightUnit: "KG",
  //   }
  // );

  // useEffect(() => {
  //   localStorage.setItem("utDataslocal", JSON.stringify(utDatas));
  //   localStorage.setItem("utDataserr", JSON.stringify(uterrors));
  // }, [utDatas, uterrors]);

  console.log(utDatas);
  // const [tseditedDatas, settseditedDatas] = useState(editeddata[0]);
  // console.log(tseditedDatas)
  console.log(editeddata);
  console.log(saveddatas);
  console.log(inputFields.length);
  const IsError = [
    uterrors.units,
    uterrors.lengths,
    uterrors.width,
    uterrors.height,
    uterrors.weight,
  ].some(Boolean);
  const IsEditError = [
    utediterrors.units,
    utediterrors.lengths,
    utediterrors.width,
    utediterrors.height,
    utediterrors.weight,
  ].some(Boolean);
  const canAdd = [
    utDatas.package_type,
    utDatas.units,
    utDatas.height,
    utDatas.lengths,
    utDatas.width,
    utDatas.dimensionUnit,
    utDatas.weight,
    utDatas.weightUnit,
  ].every(Boolean);
  const CanField = Boolean(inputFields.length);
  console.log(CanField);
  console.log(canAdd);
  const canSave = [
    utDatas.package_type,
    utDatas.units,
    utDatas.height,
    utDatas.lengths,
    utDatas.width,
    utDatas.dimensionUnit,
    utDatas.weight,
    utDatas.weightUnit,
  ].every(Boolean);
  console.log(canSave);
  const canEditSave = [
    editeddata.package_type,
    editeddata.units,
    editeddata.height,
    editeddata.lengths,
    editeddata.width,
    editeddata.dimensionUnit,
    editeddata.weight,
    editeddata.weightUnit,
  ].every(Boolean);
  console.log(canEditSave);

  // useEffect(() => {
  //   localStorage.setItem("utDatas", JSON.stringify(saveddatas));
  //   localStorage.setItem("utinpfields", JSON.stringify(inputFields));
  // }, [saveddatas, inputFields]);
  // useEffect(() => {
  //   localStorage.setItem("utDatas",JSON.stringify(saveddatas))
  // }, [input])

  //This is for create new form data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setutDatas((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUnitsChange = (e) => {
    const { name, value } = e.target;
    console.log(value, typeof value);
    setutDatas((prev) => {
      return {
        ...prev,
        [name]: !value ? "" : value <= 0 ? 1 : parseInt(value),
      };
    });
  };
  const handleUnitIncrement = () => {
    setutDatas((prev) => {
      return {
        ...prev,
        units:
          prev.units === ""
            ? 1
            : parseInt(prev.units) < 999
            ? parseInt(prev.units) + 1
            : parseInt(prev.units),
      };
    });
  };
  const handleUnitDecrement = () => {
    setutDatas((prev) => {
      return {
        ...prev,
        units:
          prev.units === ""
            ? 1
            : parseInt(prev.units) > 1
            ? parseInt(prev.units) - 1
            : parseInt(prev.units),
      };
    });
  };
  console.log(utDatas);

  const handleWeightDropChange = (e) => {
    const { name, value } = e.target;
    setutDatas((prev) => {
      return {
        ...prev,
        [name]: value,
        dimensionUnit: value === "KG" ? "CM" : "IN",
      };
    });
  };
  const handleVolumeDropChange = (e) => {
    const { name, value } = e.target;
    setutDatas((prev) => {
      return {
        ...prev,
        [name]: value,
        weightUnit: value === "CM" ? "KG" : "LB",
      };
    });
  };

  const handleAddLoad = () => {
    if (inputFields.length > 0) {
      setsaveddatas([
        ...saveddatas,
        {
          ...utDatas,
          id:
            saveddatas.length < 1
              ? 1
              : saveddatas[saveddatas.length - 1].id + 1,
        },
      ]);
      setutDatas(initialData);
    }
    setInputFields([{}]);
  };
  console.log(inputFields);
  const handleCloseLoad = (index) => {
    // if (inputFields.length === 1) {
    //   return;
    // }
    // setInputFields(inputFields.filter((_, i) => i !== index));
    setInputFields([]);
    setutDatas(initialData);
  };

  const handleDelete = (e, id) => {
    // e.preventDefault();
    console.log(id);
    const filteredData = saveddatas.filter((i) => i.id !== id);
    console.log(filteredData);
    setsaveddatas(filteredData);
    // setediteddata({});
    if (saveddatas.length === 1) {
      setInputFields([{}]);
    }
    // setsaveddatas(saveddatas.filter((_,i) => i !== index));
  };
  const handleEdit = (e, id) => {
    // e.preventDefault();
    console.log("edited");
    console.log(id);
    const filteredData = saveddatas.filter((i) => i.id === id);
    console.log(filteredData);
    seteditedId(id);
    setediteddata(filteredData[0]);
    // if(saveddatas.length===1){
    //   setInputFields([{}]);
    // }
    // setsaveddatas(saveddatas.filter((_,i) => i !== index));
  };

  const handleSave = () => {
    setsaveddatas([
      ...saveddatas,
      {
        ...utDatas,
        id:
          saveddatas.length < 1 ? 1 : saveddatas[saveddatas.length - 1].id + 1,
      },
    ]);
    setutDatas(initialData);
    setInputFields([]);
  };

  //This is for edit Data
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setediteddata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEditUnits = (e) => {
    const { name, value } = e.target;
    console.log(value, typeof value);
    setediteddata((prev) => {
      return { ...prev, [name]: !value ? "" : parseInt(value) };
    });
  };
  const handleEditUnitIncrement = () => {
    setediteddata((prev) => {
      return {
        ...prev,
        units:
          prev.units === ""
            ? 1
            : parseInt(prev.units) < 999
            ? parseInt(prev.units) + 1
            : parseInt(prev.units),
      };
    });
  };
  const handleEditUnitDecrement = () => {
    setediteddata((prev) => {
      return {
        ...prev,
        units:
          prev.units === ""
            ? 1
            : parseInt(prev.units) > 1
            ? parseInt(prev.units) - 1
            : parseInt(prev.units),
      };
    });
  };

  const handleEditWeightDropChange = (e) => {
    const { name, value } = e.target;
    setediteddata((prev) => {
      return {
        ...prev,
        [name]: value,
        dimensionUnit: value === "KG" ? "CM" : "IN",
      };
    });
  };
  const handleEditVolumeDropChange = (e) => {
    const { name, value } = e.target;
    setediteddata((prev) => {
      return {
        ...prev,
        [name]: value,
        weightUnit: value === "CM" ? "KG" : "LB",
      };
    });
  };

  const handleUpdate = () => {
    // const { name, value } = e.target;
    const filteredEdit = saveddatas.map((item) =>
      item.id === editedId ? editeddata : item
    );
    console.log(filteredEdit);
    // const filteredItems = filteredEdit.push(editeddata)
    // console.log(filteredEdit)
    // setsaveddatas((prev) => {
    //   return [...prev,editeddata];
    // });
    setsaveddatas(filteredEdit);
    setediteddata({});
    seteditedId("");
  };

  //This is for one load
  const values = `LCL | ${utDatas?.units} Units, ${(
    (utDatas?.lengths * utDatas?.height * utDatas?.width * utDatas?.units) /
    1000000
  ).toFixed(3)} ${utDatas.dimensionUnit}, ${utDatas.weight *  utDatas?.units} ${
    utDatas.weightUnit
  }`;

useEffect(() => {
  if(hasPageBeenRendered.current){
    console.log(values)
      console.log("changed")
      setCargo(values)
  }
  hasPageBeenRendered.current = true;
}, [utDatas])


//This for graeater than one

let units = 0;
      let weight = 0;
      let volume = 0;
      for (let i = 0; i <= saveddatas.length - 1; i++) {
        units += parseInt(saveddatas[i].units)
        units += parseInt(utDatas?.units)
        weight += parseInt(saveddatas[i].weight) * parseInt(saveddatas[i].units) ;
        weight += parseInt(utDatas?.weight) * parseInt(utDatas?.units)
        let res =
          (parseInt(saveddatas[i].lengths) *
            parseInt(saveddatas[i].width) *
            parseInt(saveddatas[i].height) *
            parseInt(saveddatas[i].units)) /
          1000000;
        let saveres =
          (parseInt(utDatas.lengths) *
            parseInt(utDatas.width) *
            parseInt(utDatas.height) *
            parseInt(utDatas.units)) /
          1000000;
        volume += res;
        volume += saveres
      }
      console.log(weight * units)
    const greatervalues = `LCL | ${units} Units, ${volume.toFixed(3)} CBM, ${weight} ${utDatas.weightUnit}`;

    useEffect(() => {
      if(hasPageBeenRendered.current){
        console.log(greatervalues)
          console.log("changed")
          setCargo(greatervalues)
      }
      hasPageBeenRendered.current = true;
    }, [utDatas,saveddatas,editeddata])

    //This for graeater than one

let unitss = 0;
let weights = 0;
let volumes = 0;
for (let i = 0; i <= saveddatas.length - 1; i++) {
  unitss += parseInt(saveddatas[i].units)
  weights += parseInt(saveddatas[i].weight) * parseInt(saveddatas[i].units) ;
  let resp =
    (parseInt(saveddatas[i].lengths) *
      parseInt(saveddatas[i].width) *
      parseInt(saveddatas[i].height) *
      parseInt(saveddatas[i].units)) /
    1000000;
    volumes += resp;
}
console.log(weights * unitss)
const valueswithoutfields = `LCL | ${unitss} Units, ${volumes.toFixed(3)} CBM, ${weights} ${utDatas.weightUnit}`;
console.log(valueswithoutfields)

useEffect(() => {
if(hasPageBeenRendered.current){
  console.log(greatervalues)
    console.log("changed")
    setCargo(greatervalues)
}
hasPageBeenRendered.current = true;
}, [utDatas,saveddatas,editeddata])

  //trigger LCL submit

  const handleLclUnitSubmit = () => {
    console.log(canAdd, !IsError);
    if (!IsError && canAdd) {
      console.log("first");
      setshowcargo(true)
      setCargo(values);
      setCargoOptionsVisible(false);
      settserrmsg("");
      // }
    } 
    else if (saveddatas.length >= 1 && inputFields.length>=1) {
      console.log("second");
      // let units = 0;
      // let weight = 0;
      // let volume = 0;
      // for (let i = 0; i <= saveddatas.length - 1; i++) {
      //   units += saveddatas[i].units;
      //   weight += parseInt(saveddatas[i].weight);
      //   let res =
      //     (parseInt(saveddatas[i].lengths) *
      //       parseInt(saveddatas[i].width) *
      //       parseInt(saveddatas[i].height) *
      //       parseInt(saveddatas[i].units)) /
      //     1000000;
      //   volume += res;
      // }
      console.log(units, weight, volume);
      // const unitscopy = [...saveddatas]
      // let units = unitscopy.reduce((previousValue, currentValue) => previousValue.units += currentValue.units);
      // let weight = unitscopy.reduce((previousValue, currentValue) => previousValue.weight += currentValue.weight);
      // console.log(weight)
      // const greatervalues = `LCL | ${units} Units, ${volume.toFixed(3)} CBM, ${weight} ${utDatas.weightUnit}`;
      setCargo(greatervalues);
      setshowcargo(true)
      setCargoOptionsVisible(false);
      settserrmsg("");
    }
    else if(saveddatas?.length>=1 && inputFields.length === 0){
        console.log("in")
        setshowcargo(true)
        setCargo(valueswithoutfields)
    }
    else if(saveddatas?.length>=1 && Object.keys(editeddata).length > 0 ){
        console.log("edit")
        // setshowcargo(true)
        // setCargo(valueswithoutfields)
    }
     else {
      setCargo("");
      if (!canAdd) {
        settserrmsg("Please add proper values for load");
      } else if (uterrors.units) {
        settserrmsg("Please add proper units for load");
      } else if (uterrors.lengths) {
        settserrmsg("Please add proper length for load");
      } else if (uterrors.width) {
        settserrmsg("Please add proper width for load");
      } else if (uterrors.height) {
        settserrmsg("Please add proper height for load");
      } else if (uterrors.weight) {
        settserrmsg("Please add proper weight for load");
      } else {
        settserrmsg("");
      }
    }
  };

  return (
    <>
      {saveddatas?.map((item, index) => {
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
              marginBottom: "8px",
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
                {editedId !== item.id && (
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
                    : {item.units} Units
                  </span>
                )}
              </div>

              {editedId !== item.id && (
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
                    {item.dimensionUnit} | {item.weight * item.units} {item.weightUnit} |{" "}
                    {(
                      (item.lengths * item.height * item.width) /
                      1000000
                    ).toFixed(3)}{" "}
                    CBM
                  </span>
                </div>
              )}
              <div>
                {editedId !== item.id && (
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
              editeddata?.map((item,i)=>{
                console.log(item,i)
                console.log(item.id,editedId) */}
            {editedId === item.id && (
              <>
                {
                  editeddata && (
                    <div key={editeddata?.id}>
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
                              value={editeddata?.package_type}
                              onChange={handleEditChange}
                              name="package_type"
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="BOX">PACKAGES(s)</MenuItem>
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
                            className="btn-group w-100"
                            role="group"
                            style={{
                              border: "1px solid rgba(207, 214, 223, 1)",
                              height: "45px",
                              borderColor: utediterrors.units ? "red" : null,
                            }}
                          >
                            <input
                              type="number"
                              className="form-control placeholder_style"
                              placeholder="Units"
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
                                editeddata?.units < 0 || editeddata?.units > 999
                                  ? setutediterrors((prev) => {
                                      return { ...prev, units: true };
                                    })
                                  : setutediterrors((prev) => {
                                      return { ...prev, units: false };
                                    })
                              }
                              onWheel={(e) => e.target.blur()}
                              // value={noofunits ? noofunits : ""}
                              value={editeddata?.units}
                              name="units"
                              // onChange={(e)=>setNoofunits(parseInt(e.target.value))}
                              onChange={handleEditUnits}
                              style={{
                                borderTopRightRadius: "0",
                                borderBottomRightRadius: "0",
                                padding: "13px",
                                border: "none",
                              }}
                            />
                            <button
                              // onClick={()=>setNoofunits((prev)=>prev>1?prev-1:1)}
                              onClick={handleEditUnitDecrement}
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
                              onClick={handleEditUnitIncrement}
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
                            {utediterrors.units && editeddata.units > 999
                              ? "Maximum 999 allowed"
                              : editeddata.units < 0
                              ? "Min 1"
                              : null}
                          </FormHelperText>
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
                            Dimensions
                          </Typography>
                          {/* <Space direction="vertical">
                              <Input size="large" addonAfter={selectAfter} defaultValue="CM" />
                          </Space> */}
                          <div
                            style={{ height: "42px" }}
                            className="btn-group "
                            role="group"
                            aria-label="Button group with nested dropdown"
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
                              onBlur={() =>
                                editeddata?.lengths < 10 ||
                                editeddata?.lengths > 310
                                  ? setutediterrors((prev) => {
                                      return { ...prev, lengths: true };
                                    })
                                  : setutediterrors((prev) => {
                                      return { ...prev, lengths: false };
                                    })
                              }
                              onWheel={(e) => e.target.blur()}
                              className="placeholder_style"
                              style={{
                                border: "1px solid rgba(207, 214, 223, 1)",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "60%",
                                borderColor: utediterrors.lengths
                                  ? "red"
                                  : null,
                              }}
                              // className="w-100"
                              value={editeddata?.lengths}
                              onChange={handleEditChange}
                              name="lengths"
                              placeholder="L"
                            />
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
                              onBlur={() =>
                                editeddata?.width < 10 ||
                                editeddata?.width > 310
                                  ? setutediterrors((prev) => {
                                      return { ...prev, width: true };
                                    })
                                  : setutediterrors((prev) => {
                                      return { ...prev, width: false };
                                    })
                              }
                              onWheel={(e) => e.target.blur()}
                              className="placeholder_style"
                              style={{
                                border: "1px solid rgb(207, 214, 223)",
                                borderRight: "1px solid rgb(207, 214, 223)",
                                borderLeft: "0px",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "60%",
                                borderColor: utediterrors.width ? "red" : null,
                              }}
                              // className="w-100"
                              value={editeddata?.width}
                              onChange={handleEditChange}
                              name="width"
                              placeholder="W"
                            />
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
                              onBlur={() =>
                                editeddata?.height < 10 ||
                                editeddata?.height > 310
                                  ? setutediterrors((prev) => {
                                      return { ...prev, height: true };
                                    })
                                  : setutediterrors((prev) => {
                                      return { ...prev, height: false };
                                    })
                              }
                              onWheel={(e) => e.target.blur()}
                              className="placeholder_style"
                              style={{
                                border: "1px solid rgb(207, 214, 223)",
                                borderRight: "1px solid rgb(207, 214, 223)",
                                borderLeft: "0px",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "60%",
                                borderColor: utediterrors.height ? "red" : null,
                              }}
                              // className="w-100"
                              value={editeddata?.height}
                              onChange={handleEditChange}
                              name="height"
                              placeholder="H"
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
                                // defaultValue="CFT"
                                value={editeddata?.dimensionUnit}
                                onChange={handleEditVolumeDropChange}
                                name="dimensionUnit"
                                // value={age}
                                // onChange={handleEditChange}
                                // input={<BootstrapInput />}
                              >
                                <MenuItem value="CM">CM</MenuItem>
                                <MenuItem value="IN">IN</MenuItem>
                              </Select>
                            </FormControl>
                            {/* <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn dropdown-toggle "
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{
                                  background: "rgba(243, 245, 247, 1)",
                                  border: "1px solid rgba(207, 214, 223, 1)",
                                }}
                              >
                                CM
                              </button>
                              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-editeddata" href="#">
                                  CBM
                                </a>
                                <a className="dropdown-editeddata" href="#">
                                  CFT
                                </a>
                              </div>
                            </div> */}
                          </div>
                          <div className="d-flex">
                            <FormHelperText
                              style={{
                                color: "red",
                                fontStyle: "italic",
                                width: "132px",
                              }}
                            >
                              {utediterrors.lengths &&
                                (editeddata.lengths > 310
                                  ? "Max 310CM"
                                  : editeddata.lengths < 10
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
                              {utediterrors.width &&
                                (editeddata.width > 310
                                  ? "Max 310CM"
                                  : editeddata.width < 10
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
                              {utediterrors.height &&
                                (editeddata.height > 310
                                  ? "Max 310CM"
                                  : editeddata.height < 10
                                  ? "Min 10CM"
                                  : null)}
                            </FormHelperText>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
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
                            style={{ height: "42px" }}
                            className="btn-group w-100"
                            role="group"
                            aria-label="Button group with nested dropdown"
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
                              onBlur={() =>
                                editeddata?.weight <= 0 ||
                                editeddata?.weight > 3000
                                  ? setutediterrors((prev) => {
                                      return { ...prev, weight: true };
                                    })
                                  : setutediterrors((prev) => {
                                      return { ...prev, weight: false };
                                    })
                              }
                              onWheel={(e) => e.target.blur()}
                              style={{
                                border: "1px solid rgba(207, 214, 223, 1)",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                fontSize: "1rem",
                                padding: "10px",
                                width: "100%",
                                borderColor: utediterrors.weight ? "red" : null,
                              }}
                              placeholder="Weight"
                              className="placeholder_style"
                              value={editeddata?.weight}
                              onChange={handleEditChange}
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
                                }}
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                                value={editeddata?.weightUnit}
                                onChange={handleEditWeightDropChange}
                                name="weightUnit"
                                // value={age}
                                // onChange={handleChange}
                                // input={<BootstrapInput />}
                              >
                                <MenuItem value="KG">KG</MenuItem>
                                <MenuItem value="LB">LB</MenuItem>
                              </Select>
                            </FormControl>
                            {/* <button className="btn" onClick={handleSave}>save</button> */}

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
                                  border: "1px solid rgba(207, 214, 223, 1)",
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
                          <FormHelperText
                            style={{
                              color: "red",
                              fontStyle: "italic",
                              width: "132px",
                            }}
                          >
                            {utediterrors.weight
                              ? editeddata.weight > 310
                                ? "Max 3000KG"
                                : utDatas.weight <= 0
                                ? "Min 1 KG"
                                : null
                              : ""}
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
      {inputFields.map((load, index) => (
        <React.Fragment key={index}>
          <div className={`${saveddatas.length > 0 && "backgroundStyle"}`}>
            {saveddatas.length > 0 && (
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
                  Load {saveddatas.length + 1}
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
                  <Select
                    style={{ height: "45px" }}
                    value={utDatas.package_type}
                    onChange={handleChange}
                    name="package_type"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="BOX">PACKAGES(s)</MenuItem>
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
                    borderColor: uterrors.units ? "red" : null,
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
                    onBlur={() =>
                      utDatas?.units < 0 || utDatas?.units > 999
                        ? setuterrors((prev) => {
                            return { ...prev, units: true };
                          })
                        : setuterrors((prev) => {
                            return { ...prev, units: false };
                          })
                    }
                    onWheel={(e) => e.target.blur()}
                    // value={noofunits ? noofunits : ""}
                    value={utDatas?.units}
                    name="units"
                    // onChange={(e)=>setNoofunits(parseInt(e.target.value))}
                    onChange={handleUnitsChange}
                    style={{
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                      padding: "13px",
                      border: "none",
                    }}
                  />
                  <button
                    onClick={handleUnitDecrement}
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
                  {uterrors.units && utDatas.units > 999
                    ? "Maximum 999 allowed"
                    : utDatas.units < 0
                    ? "Min 1"
                    : null}
                </FormHelperText>
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
                    onBlur={() =>
                      utDatas?.lengths < 10 || utDatas?.lengths > 310
                        ? setuterrors((prev) => {
                            return { ...prev, lengths: true };
                          })
                        : setuterrors((prev) => {
                            return { ...prev, lengths: false };
                          })
                    }
                    onWheel={(e) => e.target.blur()}
                    style={{
                      // border: "0px",
                      border: "1px solid rgb(207, 214, 223)",
                      borderTopLeftRadius: "5px",
                      borderBottomLeftRadius: "5px",
                      fontSize: "1rem",
                      padding: "12px",
                      borderColor: uterrors.lengths ? "red" : null,
                    }}
                    placeholder="L"
                    value={utDatas.lengths}
                    onChange={handleChange}
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
                    onBlur={() =>
                      utDatas?.width < 10 || utDatas?.width > 310
                        ? setuterrors((prev) => {
                            return { ...prev, width: true };
                          })
                        : setuterrors((prev) => {
                            return { ...prev, width: false };
                          })
                    }
                    onWheel={(e) => e.target.blur()}
                    style={{
                      border: "1px solid rgb(207, 214, 223)",
                      borderRight: "1px solid rgb(207, 214, 223)",
                      borderLeft: "1px solid rgb(207, 214, 223)",
                      fontSize: "1rem",
                      padding: "12px",
                      borderColor: uterrors.width ? "red" : null,
                    }}
                    placeholder="W"
                    value={utDatas.width}
                    onChange={handleChange}
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
                    onBlur={() =>
                      utDatas?.height < 10 || utDatas?.height > 310
                        ? setuterrors((prev) => {
                            return { ...prev, height: true };
                          })
                        : setuterrors((prev) => {
                            return { ...prev, height: false };
                          })
                    }
                    onWheel={(e) => e.target.blur()}
                    style={{
                      border: "1px solid rgb(207, 214, 223)",
                      borderRight: "1px solid rgb(207, 214, 223)",
                      borderLeft: "1px solid rgb(207, 214, 223)",
                      fontSize: "1rem",
                      padding: "12px",
                      borderColor: uterrors.height ? "red" : null,
                    }}
                    placeholder="H"
                    value={utDatas.height}
                    onChange={handleChange}
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
                      // value={age}
                      // onChange={handleChange}
                      // input={<BootstrapInput />}
                      value={utDatas?.dimensionUnit}
                      onChange={handleVolumeDropChange}
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
                  <FormHelperText
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
                  </FormHelperText>
                  <FormHelperText
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
                  </FormHelperText>
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
                    onBlur={() =>
                      utDatas?.weight <= 0 || utDatas?.weight > 3000
                        ? setuterrors((prev) => {
                            return { ...prev, weight: true };
                          })
                        : setuterrors((prev) => {
                            return { ...prev, weight: false };
                          })
                    }
                    onWheel={(e) => e.target.blur()}
                    className="placeholder_style w-100"
                    style={{
                      border: "1px solid rgb(207, 214, 223)",
                      borderTopLeftRadius: "5px",
                      borderBottomLeftRadius: "5px",
                      fontSize: "1rem",
                      padding: "12px",
                      borderColor: uterrors.weight ? "red" : null,
                    }}
                    placeholder="Weight"
                    value={utDatas.weight}
                    onChange={handleChange}
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
                        borderColor: uterrors.weight ? "red" : null,
                      }}
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      defaultValue="KG"
                      value={utDatas?.weightUnit}
                      onChange={handleWeightDropChange}
                      name="weightUnit"
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
                <FormHelperText
                  style={{ color: "red", fontStyle: "italic", width: "132px" }}
                >
                  {uterrors.weight
                    ? utDatas.weight > 310
                      ? "Max 3000KG"
                      : utDatas.weight <= 0
                      ? "Min 1 KG"
                      : null
                    : ""}
                </FormHelperText>
              </div>
            </div>
            {saveddatas.length > 0 && (
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
          <button className="confirm" onClick={handleLclUnitSubmit}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default UnitType;
