import { Select } from "antd";
import React from "react";

function CargoInsurance({ setSelectedValue, setPopoverOpen }) {
  const handleSelectChange = (value) => {
    if (value) {
      setSelectedValue(value);
      setPopoverOpen(false);
    }
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <div className="div-colaligned popover-checkbox1 popover-open w-200">
      <Select
        showSearch
        placeholder="Select City or Zipcode"
        optionFilterProp="label"
        onChange={handleSelectChange}
        onSearch={onSearch}
        options={[
          {
            value: "jack1133",
            label: "Jack1133",
          },
          {
            value: "lucy2233",
            label: "Lucy2233",
          },
          {
            value: "tom3333",
            label: "Tom3333",
          },
        ]}
      />
    </div>
  );
}

export default CargoInsurance;
