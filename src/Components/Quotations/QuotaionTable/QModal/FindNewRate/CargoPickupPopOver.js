import { Select } from "antd";
import React from "react";

function CargoPickupPopOver() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <div className="div-colaligned popover-checkbox popover-open w-200">
      <Select
        showSearch
        placeholder="Select City or Zipcode"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={[
          {
            value: "jack",
            label: "Jack",
          },
          {
            value: "lucy",
            label: "Lucy",
          },
          {
            value: "tom",
            label: "Tom",
          },
        ]}
      />
    </div>
  );
}

export default CargoPickupPopOver;