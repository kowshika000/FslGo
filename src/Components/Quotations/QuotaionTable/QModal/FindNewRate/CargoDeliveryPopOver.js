import { Select } from "antd";
import React from "react";

function CargoDeliveryPopOver({ setSelectedValue, setPopoverOpen }) {
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
            value: "jack11",
            label: "Jack11",
          },
          {
            value: "lucy22",
            label: "Lucy22",
          },
          {
            value: "tom33",
            label: "Tom33",
          },
        ]}
      />
    </div>
  );
}

export default CargoDeliveryPopOver;
