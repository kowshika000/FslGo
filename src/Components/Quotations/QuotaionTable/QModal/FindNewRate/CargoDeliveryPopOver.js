import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeliveryRequest } from "../../../../../Redux/Actions/DeliveryAction";

function CargoDeliveryPopOver({
  setSelectedValue,
  setPopoverOpen,
  destPort,
  setSelectedCode1,
}) {
  const dispatch = useDispatch();
  const delivery = useSelector(
    (state) => state?.Delivery?.Delivery?.deliverypointlist
  );
  console.log(delivery, "delivery data");
  const [options, setOptions] = useState([]);

  const handleSelectChange = (value) => {
    const selectedOption = options.find((option) => option.value === value);
    const code = selectedOption ? selectedOption.code : null;
    if (value) {
      setSelectedValue(value);
      setSelectedCode1(code);
      setPopoverOpen(false);
    }
  };
  const onSearch = (value) => {
    if (value.length >= 3) {
      dispatch(
        DeliveryRequest({
          country: destPort?.port_country,
          delivery_place: value,
        })
      );
    }
  };
  useEffect(() => {
    if (delivery && Array.isArray(delivery)) {
      const updatedOptions = delivery?.map((item, index) => ({
        value: item.list_value,
        label: item.list_value,
        key: index,
        code: item.list_code,
      }));
      setOptions(updatedOptions);
    }
  }, [delivery]);
  return (
    <div className="div-colaligned popover-checkbox1 popover-open w-200">
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
      />
    </div>
  );
}

export default CargoDeliveryPopOver;
