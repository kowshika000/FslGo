import { Select } from "antd";
import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { PickupRequest } from "../../../../../Redux/Actions/PickupAction";

function CargoPickupPopOver({ setSelectedValue, setPopoverOpen }) {
  const dispatch = useDispatch();
  const pickupdata = useSelector((state) => state.Pickup.pickuppointlist);
  const [options, setOptions] = useState([]);

  const handleSelectChange = (value) => {
    if (value) {
      setSelectedValue(value);
      setPopoverOpen(false);
    }
  };

  const onSearch = (value) => {
    if (value.length >= 3) {
      dispatch(PickupRequest({ country: "IN", pickup_place: value}));
    }
  };
  useEffect(() => {
    if (pickupdata) {
      setOptions(
        pickupdata.map((item) => ({
          value: item.code,
          label: item.code,
        }))
      );
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
        filterOption={false}
      />
    </div>
  );
}

export default CargoPickupPopOver;
