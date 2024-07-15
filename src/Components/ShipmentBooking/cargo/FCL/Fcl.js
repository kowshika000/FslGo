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
  seterrmsg,
  fclexim,
  setfclexim,
  // fclinputFields,
  // setfclInputFields,
  // fclsaveddatas,
  // setfclsaveddatas,
  // fclediteddata,
  // setfclediteddata,
  // fcleditedId,
  // setfcleditedId,
  fclDatas,
  setfclDatas,
  clickedId,
  setclickedId,
  // fclediterrors,
  // setfclediterrors,
  setshowcargo,
  container_types,
  setlastsaved,
}) => {
  console.log(container_types);
  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState({});
  const [hasErrors, setHasErrors] = useState(false);
  console.log(disabled);
  // Define a mapping for container type abbreviations
  const containerTypeMap = {
    '20 GENERAL PURPOSE': '20 GP',
    '40 GENERAL PURPOSE': '40 GP',
    '40 HIGH CUBE': '40 HC',
    // Add more mappings as needed
  };

  const handleChange = (id, e) => {
    console.log(id);
    const { name, value } = e.target;
    setfclDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? { ...item, [name]: name === "quantity" ? parseInt(value) : value }
          : item
      )
    );
    // handleSaveDisabled(id)
  };

  const handleAddLoad = () => {
    setfclDatas((prevData) => {
      return [...prevData, { containerType: "", quantity: "" }];
    });
    setclickedId((prevData) => {
      console.log(prevData);
      return [
        ...prevData.filter((i) => i != fclDatas.length - 1),
        fclDatas.length,
      ];
    });
  };

  const handleDelete = (id) => {
    const deletedItems = [...fclDatas];
    deletedItems.splice(id, 1);
    setfclDatas(deletedItems);
  };
  const handleEdit = (id) => {
    // const EditedItems = fclDatas.map((item,index)=>index === id? id:index)
    setclickedId((prev) => {
      return [...prev, id];
    });
  };

  const handleSave = (id) => {
    console.log("saved", id);
    const savedItems = clickedId.filter((item, index) => item !== id);
    setclickedId(savedItems);
  };
  const handleMinus = (id) => {
    setfclDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? {
              ...item,
              quantity:
                parseInt(item.quantity) > 1 ? parseInt(item.quantity) - 1 : 1,
            }
          : item
      )
    );
  };
  const handlePlus = (id) => {
    setfclDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? {
              ...item,
              quantity:
                parseInt(item.quantity) < 99
                  ? parseInt(item.quantity) + 1
                  : parseInt(item.quantity) >= 99
                  ? 99
                  : 1,
            }
          : item
      )
    );
  };

    // const handleSaveDisabled = (id) => {
    //   let clickeditem = fclDatas[id];
    //   console.log("clicked", clickeditem);
    //   return (
    //     !clickedId.containerType ||
    //     clickeditem.quantity < 1 ||
    //     clickedId.quantity > 99 ||
    //     clickedId.quantity === null ||
    //     clickedId.quantity === NaN
    //   );
    // };

  const validateContainerType = (value) => {
    if (value.trim() === '') {
      return 'Container type is required';
    }
    if (!Object.keys(containerTypeMap).includes(value)) {
      return 'Invalid container type';
    }
    return null;
  };

  const validateQuantity = (value) => {
    const numberValue = Number(value);
    if (numberValue > 99) {
      return "Maximum 99 allowed";
    } else if (numberValue > 99) {
      return "Minimum 1 allowed";
    } else if (isNaN(numberValue)) {
      return "Enter Valid Number";
    }
    return null;
  };

  const handleWholeValue = () => {
    if (fclDatas.length > 0) {
      let e,
        total = 0;
      fclDatas.forEach((ele) => {
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
  }, [fclDatas]);

  // Validate input on blur
  const handleBlur = (index, field) => {
    const newErrors = { ...errors };
    if (field === "containerType") {
      newErrors[index] = {
        ...newErrors[index],
        containerType: validateContainerType(fclDatas[index][field]),
      };
    } else if (field === "quantity") {
      newErrors[index] = {
        ...newErrors[index],
        quantity: validateQuantity(fclDatas[index][field]),
      };
    }
    setErrors(newErrors);
    // Check if there are any errors
    const hasError = Object.values(newErrors).some(
      (error) => error.containerType || error.quantity
    );
    setHasErrors(hasError);
  };

  // Check if the last item has validation errors
  // useEffect(() => {
  //   const lastItem = fclDatas[fclDatas.length - 1];
  //   const lastItemErrors = {
  //   containerType: validateContainerType(lastItem.containerType),
  //   quantity: validateQuantity(lastItem.quantity),
  // };
  // }, [fclDatas])
  

  //aggregatedData

  

  const aggregateData = () => {
    // Create a map to aggregate quantities by containerType
    const aggregateMap = fclDatas.reduce((acc, { containerType, quantity }) => {
      if (!containerType || isNaN(quantity)) return acc;

      const abbreviatedType = containerTypeMap[containerType] || containerType;
      const existingQuantity = acc[abbreviatedType] || 0;
      acc[abbreviatedType] = existingQuantity + Number(quantity);
      return acc;
    }, {});

    // Convert the map to a formatted string
    return Object.entries(aggregateMap)
      .map(([type, qty]) => `${type} X ${qty} `)
      .join(', ');
  };


  const handleFclSubmit =(e)=>{
    e.preventDefault()
      if(!hasErrors){
        console.log("success")
        setCargo(()=>aggregateData())
        setshowcargo(true)
        setCargoOptionsVisible(false)

      }
  }

  useEffect(() => {
    setCargo(()=>aggregateData())
        setshowcargo(true)
  }, [aggregateData])
  

  console.log(fclDatas);
  console.log(clickedId);

  return (
    <>
      {fclDatas?.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {clickedId.includes(index) ? (
              <>
                <div
                  className={`outer_div my-2 ${
                    fclDatas.length > 1 && "backgroundStyle"
                  }`}
                >
                  {fclDatas.length > 1 && (
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
                        {fclDatas.length > 1 && (
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
                  )}
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
                        Container Type
                      </Typography>
                      <FormControl fullWidth>
                        {/* <InputLabel id="demo-simple-select-label">select Type</InputLabel> */}
                        <Select
                          // labelId="demo-simple-select-label"
                          // id="demo-simple-select"
                          // label="Age"
                          className="placeholder_style"
                          // style={{ height: "45px" }}
                          style={{
                            borderColor: errors[index]?.containerType
                              ? "red"
                              : "initial",
                            height: "45px",
                          }}
                          value={item.containerType}
                          onChange={(e) => handleChange(index, e)}
                          onBlur={() => handleBlur(index, "containerType")}
                          name="containerType"
                          displayEmpty
                          placeholder="Select Type"
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          {container_types?.map((item, i) => {
                            return (
                              <MenuItem value={item?.value}>
                                {item?.label}
                              </MenuItem>
                            );
                          })}
                          {/* <MenuItem value="20 GENERAL PURPOSE">
                20 GENERAL PURPOSE
              </MenuItem>
              <MenuItem value="40 GENERAL PURPOSE">
                40 GENERAL PURPOSE
              </MenuItem>
              <MenuItem value="40 HICH CUBE">40 HICH CUBE</MenuItem> */}
                        </Select>
                      </FormControl>{" "}
                      {errors[index]?.containerType && (
                        <span style={{ color: "red",fontStyle:"italic",fontSize:"12px" }}>
                          {errors[index].containerType}
                        </span>
                      )}
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
                          borderColor: errors[index]?.quantity
                            ? "red"
                            : "initial",
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
                          // onBlur={() =>
                          //   fclDatas[index]?.quantity < 0 || fclDatas[index]?.quantity > 99
                          //     ? setfclerrors((prev) => {
                          //       console.log("hii")
                          //         return { ...prev, quantity: true };
                          //       })
                          //     : setfclerrors((prev) => {
                          //         return { ...prev, quantity: false };
                          //       })
                          // }
                          onBlur={() => handleBlur(index, "quantity")}
                          onWheel={(e) => e.target.blur()}
                          // value={noofunits ? noofunits : ""}
                          value={item.quantity}
                          name="quantity"
                          // onChange={(e)=>setNoofunits(parseInt(e.target.value))}
                          onChange={(e) => handleChange(index, e)}
                          minLength={12}
                          style={{
                            borderTopRightRadius: "0",
                            borderBottomRightRadius: "0",
                            padding: "13px",
                            border: "none",
                          }}
                        />
                        <button
                          // onClick={handleQuantityDecrement}
                          type="button"
                          style={{
                            border: "none",
                            paddingRight: "6px",
                            paddingLeft: "6px",
                            background: "none",
                            borderRight: "1px solid #f0f0f0",
                          }}
                        >
                          <img
                            src={minus}
                            alt="minus"
                            onClick={() => handleMinus(index)}
                          />
                        </button>
                        <button
                          // onClick={handleUnitIncrement}
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
                          <img
                            src={plus}
                            alt="add"
                            onClick={() => handlePlus(index)}
                          />
                        </button>
                      </div>
                      {errors[index]?.quantity && (
                        <span style={{ color: "red",fontStyle:"italic",fontSize:"12px" }}>
                          {errors[index].quantity}
                        </span>
                      )}
                    </div>
                  </div>
                  {fclDatas.length > 1 && (
                    <Button
                      style={{
                        backgroundColor: "transparent",
                        boxShadow: "unset",
                        border: "none",
                        opacity: "1",
                      }}
                      onClick={() => handleSave(index)}
                      disabled={!(fclDatas[fclDatas.length - 1].containerType && fclDatas[fclDatas.length - 1].quantity || index !==fclDatas.length - 1 ) || (hasErrors && !!errors[index]?.containerType || !!errors[index]?.quantity)}
                    >
                      save
                    </Button>
                  )}
                </div>
              </>
            ) : (
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
                    : {item.units} X {item.containerType}
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
                  {fclDatas.length > 1 && (
                    <img
                      src={deletedicon}
                      role="button"
                      alt="delete"
                      onClick={() => handleDelete(index)}
                    />
                  )}
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}


      {
        fclDatas.length<10 ? 
      <div className="d-flex">
        <Tooltip
          placement="top"
          title={`${!(fclDatas[fclDatas.length - 1].containerType && fclDatas[fclDatas.length - 1].quantity) ? "Please add proper details for previous loads" : disabled?"Your total containers exceeds 99": "Add Another Load"} `}
          // trigger={ && "hover"}
        >
          <Button
            style={{
              border: "none",
              background: "none",
              opacity: !(fclDatas[fclDatas.length - 1].containerType && fclDatas[fclDatas.length - 1].quantity) || disabled || hasErrors ?".5":"1" ,
              boxShadow: "unset",
            }}
            onClick={handleAddLoad}
            disabled={!(fclDatas[fclDatas.length - 1].containerType && fclDatas[fclDatas.length - 1].quantity) || disabled || hasErrors}
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
      </div>:
      null
            }

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
                  size="small"
                  onChange={(e) => setfclexim(e.target.value)}
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
                  size="small"
                  onChange={(e) => setfclexim(e.target.value)}
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
          <button className="confirm" onClick={(e)=>handleFclSubmit(e)} >Confirm</button>
        </div>
      </div>
    </>
  );
};

export default Fcl;
