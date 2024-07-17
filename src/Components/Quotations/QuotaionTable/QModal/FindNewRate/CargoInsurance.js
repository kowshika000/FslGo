import { Input, Button } from "antd";
import React, { useEffect, useState } from "react";

function CargoInsurance({ insuranceValue, setInsuranceValue, setInsurance }) {
  const [inputValue, setInputValue] = useState("");
  const handleCalculateClick = () => {
    setInsuranceValue(inputValue);
    setInsurance(false);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    if (insuranceValue) {
      setInputValue(insuranceValue);
    }
  }, [insuranceValue]);

  return (
    <div className="div-colaligned popover-checkbox1 popover-open w-200">
      <Input
        className="cargo-insurance-input"
        placeholder="Goods Value in USD"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        suffix={
          <Button
            type="ant-btn-primary"
            className="calculate-btn"
            size="small"
            onClick={handleCalculateClick}
          >
            Calculate
          </Button>
        }
      />
    </div>
  );
}

export default CargoInsurance;

// import { Select } from "antd";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DeliveryRequest } from "../../../../../Redux/Actions/DeliveryAction";

// function CargoInsurance({
//   setSelectedValue,
//   setPopoverOpen,
//   destPort,
//   setSelectedCode1,
// }) {
//   const dispatch = useDispatch();
//   const delivery = useSelector(
//     (state) => state?.Delivery?.Delivery?.deliverypointlist
//   );
//   console.log(delivery, "delivery data");
//   const [options, setOptions] = useState([]);

//   const handleSelectChange = (value) => {
//     const selectedOption = options.find((option) => option.value === value);
//     const code = selectedOption ? selectedOption.code : null;
//     if (value) {
//       console.log("vvv", value);
//       setSelectedValue(value);
//       setSelectedCode1(code);
//       setPopoverOpen(false);
//     }
//   };
//   const onSearch = (value) => {
//     if (value.length >= 3) {
//       dispatch(
//         DeliveryRequest({
//           country: destPort?.port_country,
//           delivery_place: value,
//         })
//       );
//     }
//   };
//   useEffect(() => {
//     if (delivery && Array.isArray(delivery)) {
//       const updatedOptions = delivery?.map((item, index) => ({
//         value: item.list_value,
//         label: item.list_value,
//         key: index,
//         code: item.list_code,
//       }));
//       setOptions(updatedOptions);
//     }
//   }, [delivery]);
//   return (
//     <div className="div-colaligned popover-checkbox1 popover-open w-200">
//       <Input />
//     </div>
//   );
// }

// export default CargoInsurance;
