import { Select } from "antd";
import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeliveryRequest } from "../../../../../Redux/Actions/DeliveryAction";

function CargoDeliveryPopOver({ setSelectedValue, setPopoverOpen }) {
  const dispatch = useDispatch();
  const devlivery = useSelector((state) => state.Delivery.deliverypointlist);
  const [options, setOptions] = useState([]);
  const handleSelectChange = (value) => {
    if (value) {
      setSelectedValue(value);
      setPopoverOpen(false);
    }
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    if (value.length >= 3) {
      dispatch(DeliveryRequest({ country: "IN", delivery_place: value}));
    }
  };
  useEffect(() => {
    if (devlivery) {
      setOptions(
        devlivery?.map((item) => ({
          value: item.code,
          label: item.code,
        }))
      );
    }
  }, [devlivery]);
  return (
    <div className="div-colaligned popover-checkbox1 popover-open w-200">
      <Select
        showSearch
        placeholder="Select City or Zipcode"
        optionFilterProp="label"
        onChange={handleSelectChange}
        onSearch={onSearch}
        options={options}
      />
    </div>
  );
}

export default CargoDeliveryPopOver;
