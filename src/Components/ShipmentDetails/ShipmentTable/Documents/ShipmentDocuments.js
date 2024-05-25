import React from "react";
import "./ShipmentDocuments.css";
import { HiArrowDownTray } from "react-icons/hi2";
import CustomCheckBox from "../Track/CustomCheckBox";

const ShipmentDocuments = () => {
  return (
    <>
      <div className="shipment_documents container-fluid">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>
                      <div className="checkbox d-inline" >
                          <CustomCheckBox />
                      </div>
                      <span style={{marginLeft:"29px"}}>Document/Type</span>
                </th>
                <th>ID/Reference Number</th>
                <th>Last Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="me-2 checkbox" >
                          <CustomCheckBox />
                      </div>
                    <div>
                    <span >Invoice</span> 
                     <p className=" m-0"style={{opacity:"0.5"}}>filename.pdf</p>{" "}
                    </div>
                    </div>
                 </td>
                <td>2075730</td>
                <td>May 12, 2023, 03:44:23PM</td>
                <td>
                  <span className="px-1 py-1">
                    <HiArrowDownTray size={16} />
                  </span>
                </td>
              </tr>
              <tr>
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
                <td>May 12, 2023, 03:44:23PM</td>
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
                <td>May 12, 2023, 03:44:23PM</td>
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
                <td>May 12, 2023, 03:44:23PM</td>
                <td>
                  <span>
                    <HiArrowDownTray size={16} />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShipmentDocuments;