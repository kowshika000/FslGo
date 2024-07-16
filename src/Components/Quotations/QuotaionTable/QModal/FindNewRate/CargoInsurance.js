import { Input ,Button} from "antd";
import React from "react";

function CargoInsurance({ insuranceValue, setInsuranceValue,setInsurance }) {
  const handleCalculateClick = () => {
    setInsurance(false)
  };
  const handleInputChange = (e) => {
    setInsuranceValue(e.target.value);
  };
  return (
    <div className="div-colaligned popover-checkbox1 popover-open w-200">
      <Input
            className="cargo-insurance-input"
            placeholder="Goods Value in USD"
            type="text"
            value={insuranceValue}
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
