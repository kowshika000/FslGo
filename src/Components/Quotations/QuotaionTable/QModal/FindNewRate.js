import React from "react";
import Navbar from "../../../Layout/Navbar";
import { Card, Checkbox  } from "antd";
import "./FindNewRate.css";
import Location from "../../../../assets/location.svg";

function FindNewRate() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div
        style={{ maxWidth: "1255px", position: "relative" }}
        className="py-5 mx-auto"
      >
        <div className="pb-3">
          <Navbar />
        </div>
        <div className="location-card">
          <Card
            style={{
              width: "100%",
            }}
            className="shadow"
          >
            <div className="row location-bar">
              <div className="col d-flex">
                <div className="align-self-center mx-2">
                  <img src={Location} alt="loc" />
                </div>
                <div>
                  <p className="p-label">Origin</p>
                  {/* <img src="" alt="map" /> */}
                  <p className="p-value">Nhava Sheva(INNSA)</p>
                </div>
              </div>
              <div className="col d-flex">
                <div className="align-self-center mx-2">
                  <img src={Location} alt="loc" />
                </div>
                <div>
                  <p className="p-label">Destination</p>
                  {/* <img src="" alt="map" /> */}
                  <p className="p-value">Jebel Ali(AEJEA)</p>
                </div>
              </div>
              <div className="col d-flex">
                <div className="align-self-center mx-2">
                  <img src={Location} alt="loc" />
                </div>
                <div>
                  <p className="p-label">Cargo</p>
                  {/* <img src="" alt="map" /> */}
                  <p className="p-value">LCL, 2 Unit | Total : 100KG, 5CBM</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="row mt-5">
          <div className="col-3 Service-Included">
            <Card title="Service Included">
              <div className="Service-card">
                <p className="service-title">Origin</p>
                <p><Checkbox onChange={onChange}>Origin Charges</Checkbox></p>
                <p><Checkbox onChange={onChange}>Export Clearance</Checkbox></p>
                <p><Checkbox onChange={onChange}>Cargo Pickup</Checkbox></p>
                <p><Checkbox onChange={onChange}>International Freight</Checkbox></p>
              </div>
              <hr style={{backgroundColor:"#f0f0f0",borderTop:"none"}}/>
              <div className="Service-card">
                <p className="service-title">Destination</p>
                <p><Checkbox onChange={onChange}>Destination Charges</Checkbox></p>
                <p><Checkbox onChange={onChange}>Import Clearance</Checkbox></p>
                <p><Checkbox onChange={onChange}>Cargo Delivery</Checkbox></p>
              </div>
              <hr style={{backgroundColor:"#f0f0f0",borderTop:"none"}}/>
              <div className="Service-card">
                <p className="service-title">Value Added</p>
                <p><Checkbox onChange={onChange}>Cargo Insurance</Checkbox></p>
              </div>
              <hr style={{backgroundColor:"#f0f0f0",borderTop:"none"}}/>
              <div className="Service-card">
                <p className="service-title">Cargo Type</p>
                <p><Checkbox onChange={onChange}>Stackable Cargo</Checkbox></p>
                <p><Checkbox onChange={onChange}>Non Harzardous Cargo</Checkbox></p>
              </div>
            </Card>
          </div>
          <div className="col-9"></div>
        </div>
      </div>
    </>
  );
}

export default FindNewRate;
