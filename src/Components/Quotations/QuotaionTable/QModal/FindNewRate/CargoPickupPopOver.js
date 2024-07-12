import { Select } from "antd";
import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { PickupRequest } from "../../../../../Redux/Actions/PickupAction";

function CargoPickupPopOver({ setSelectedValue, setPopoverOpen }) {
  const dispatch = useDispatch();
  const pickupdata = useSelector((state) => state?.Pickup?.pickuppointlist);
  console.log(pickupdata,"ccccccc");
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
      if (pickupdata && Array.isArray(pickupdata)) {
        const updatedOptions = pickupdata.map((item, index) => ({
          value: item.list_value,
          label: item.list_value,
          key: index,
        }));
        setOptions(updatedOptions);
        console.log(updatedOptions, "Optionsccc");
    }
  }, [pickupdata]);
  useEffect(() => {
    if (pickupdata === undefined) {
      // Handle error or show a message
      console.log("Error fetching pickup data");
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
      />
    </div>
  );
}

export default CargoPickupPopOver;
