import { Input, Button } from "antd";
import React, { useEffect, useState } from "react";

function CargoInsurance({
  insuranceValue,
  setInsuranceValue,
  setInsurance,
  editiconClickedIns,
}) {
  const [inputValue, setInputValue] = useState("");
  const handleCalculateClick = () => {
    setInsuranceValue(inputValue);
    setInsurance(false);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    if (editiconClickedIns) {
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
