import React from "react";
import Navbar from "../../../Layout/Navbar";
import { Card } from "antd";
import "./FindNewRate.css";
import Location from "../../../../assets/location.svg";

function FindNewRate() {
  return (
    <>
      <div
        style={{ maxWidth: "1255px", position: "relative" }}
        className="py-5 mx-auto"
      >
        {/* <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            height: "50px",
          }}
        ></div> */}
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
        <div style={{ backgroundColor: "gray" }}>
        <div className="row">
          <div className="col-4">
            <div className="card service-card">
              
            </div>
          </div>
          <div className="col-8"></div>
        </div>
        </div>
      </div>
    </>
  );
}

export default FindNewRate;
