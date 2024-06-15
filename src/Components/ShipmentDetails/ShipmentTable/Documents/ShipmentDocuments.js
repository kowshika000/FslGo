import React, { useEffect, useState } from "react";
import "./ShipmentDocuments.css";
import { HiArrowDownTray } from "react-icons/hi2";
import CustomCheckBox from "../Track/CustomCheckBox";
import { useSelector } from "react-redux";
import { Button } from "antd";

const ShipmentDocuments = () => {
  const bookingData = useSelector((state) => state.ViewBooking);
  console.log("bookingData", bookingData);
  const Documents = bookingData?.viewBookingData?.documents;
  console.log("document", Documents);

  //This is for Checkbox logic
  const [allcheck, setAllcheck] = useState(false);
  const [checkinputs, setCheckInputs] = useState([]);
  console.log(allcheck);
  console.log(checkinputs);

  //This is for handleParticular Checkboxes
  const handleCheckInputs = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckInputs((prev) => [...prev, value]);
    } else {
      setCheckInputs((prev) => {
        return [...prev.filter((curr) => curr !== value)];
      });
    }
  };

  //This sideeffect trigger a changeAllCheck function when CheckInput values changes
  useEffect(() => {
    ChangeAllCheck();
  }, [checkinputs]);

  //This Function is to handle SelectAllcheckbox
  const handleAllCheckBoxes = (e) => {
    setAllcheck(e.target.checked);
    if (e.target.checked) {
      const document_names = Documents?.map((item) => item?.file_name);
      setCheckInputs(document_names);
    } else {
      setCheckInputs([]);
    }
  };

  //This function is for checkbox check and uncheck logic
  const ChangeAllCheck = () => {
    if (Documents?.length !== checkinputs.length) {
      setAllcheck(false);
    } else {
      setAllcheck(true);
    }
  };

  return (
    <>
      <div className="shipment_documents container-fluid">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <div className="checkbox d-inline">
                    <CustomCheckBox
                      value={allcheck}
                      checked={allcheck}
                      onChange={handleAllCheckBoxes}
                    />
                  </div>
                  <span style={{ marginLeft: "29px" }}>Document/Type</span>
                </th>
                <th>ID/Reference Number</th>
                <th>Last Update</th>
                <th>
                  Action{" "}
                  <span
                    className="ms-4"
                    style={{
                      visibility: checkinputs.length > 0 ? "visible" : "hidden",
                      background: "rgba(243, 245, 247, 1)",
                      borderRadius: "4px",
                      padding: "8px"
                    }}
                  >
                    <HiArrowDownTray size={16} />
                  </span>
                </th>
                {/* {
                  checkinputs.length>1 ?  <th><span className="px-1 py-1">
                    <HiArrowDownTray size={16} />
                </span>
                </th>:null
                 } */}
              </tr>
            </thead>
            <tbody>
              {Documents?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex justify-content-start align-items-center">
                        <div
                          className="checkbox"
                          style={{ marginRight: "5px"}}
                        >
                          <CustomCheckBox
                            checked={checkinputs.includes(item.file_name)}
                            value={item.file_name}
                            onChange={handleCheckInputs}
                          />
                        </div>
                        <div>
                          <span>{item.document_name}</span>
                          <p className=" m-0" style={{ opacity: "0.5" }}>
                            {item.file_name}
                          </p>{" "}
                        </div>
                      </div>
                    </td>
                    <td>{item.id}</td>
                    <td>{item.document_date}</td>
                    <td>
                      <button  style={{opacity:allcheck ? ".5":"1",border:"none"}} disabled={allcheck}>
                      <span className="px-1 py-1" >
                        <HiArrowDownTray size={16} />
                      </span>
                      </button>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
                <td>
                    <div className="d-flex justify-content-start align-items-center">
                    <div  className="me-2 checkbox">
                        <CustomCheckBox />
                    </div>
                    <div>
                    <span >Invoice</span> 
                     <p className="m-0 "style={{opacity:"0.5"}}>filename.pdf</p>{" "}
                    </div>
                    </div>
                 </td>
                <td>2075730</td>
                <td>May 12, 2024, 03:44:23PM</td>
                <td>
                  <span className="px-1 py-1">
                    <HiArrowDownTray size={16} />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="me-2 checkbox">
                        <CustomCheckBox />
                  </div>
                    <div>
                    <span>Bill Of Loading</span>
                    <p className="m-0 " style={{opacity:"0.5"}}>filename.pdf</p>
                    </div>
                    </div> 
                   </td>
                <td>2075730</td>
                <td>May 12, 2024, 03:44:23PM</td>
                <td>
                  <span className="px-1 py-1">
                    <HiArrowDownTray size={16} />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                    <div className="d-flex justify-content-start align-items-center">
                    <div className="me-2 checkbox">
                        <CustomCheckBox />
                    </div>
                    <div>
                      <span >Cargo Insurance</span>
                      <p className="m-0 " style={{opacity:"0.5"}}>filename.pdf</p>
                    </div>
                 </div>
                </td>
                <td>2075730</td>
                <td>May 12, 2024, 03:44:23PM</td>
                <td>
                  <span>
                    <HiArrowDownTray size={16} />
                  </span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShipmentDocuments;
