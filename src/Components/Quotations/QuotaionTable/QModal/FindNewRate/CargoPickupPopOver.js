import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PickupRequest } from "../../../../../Redux/Actions/PickupAction";

function CargoPickupPopOver({ setSelectedValue, setPopoverOpen ,setSelectedCode,}) {
  const dispatch = useDispatch();
  const pickupdata = useSelector((state) => state?.Pickup?.pickuppointlist?.pickuppointlist);
  const [options, setOptions] = useState([]);

  const handleSelectChange = (value) => {
    const selectedOption = options.find((option) => option.value === value);
    const code = selectedOption ? selectedOption.code : null;
    if (value) {
      setSelectedValue(value);
      setSelectedCode(code);
      setPopoverOpen(false);
    }
  };

  const onSearch = (value) => {
    if (value.length >= 3) {
      dispatch(PickupRequest({ country: "IT", pickup_place: value }));
    }else{
      setOptions([]);
    }
  };
  useEffect(() => {
    if (pickupdata && Array.isArray(pickupdata)) {
    const updatedOptions = pickupdata?.map((item, index) => ({
      value: item.list_value,
      label: item.list_value,
      code: item.code,
      key: index,
    }));
    setOptions(updatedOptions);
    }
  }, [pickupdata]); 

  return (
    <div className="div-colaligned popover-checkbox popover-open w-200">
      <Select
        showSearch
        placeholder="Select City or Zipcode"
        optionFilterProp="label"
        onChange={handleSelectChange}
        onSearch={onSearch}
        options={options}
        filterOption={(input, option) =>
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        // options={[
        //   { value: 'New York', label: 'New York' },
        //   { value: 'Los Angeles', label: 'Los Angeles' }
        // ]}
      />
    </div>
  );
}

export default CargoPickupPopOver;
