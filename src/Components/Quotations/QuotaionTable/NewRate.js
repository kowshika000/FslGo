import React from "react";
import Navbar from "../../Layout/Navbar";
import { Card } from "antd";
import "./NewRate.css";
import Location from "../../../assets/location.svg";

function NewRate() {
  return (
    <div style={{ maxWidth: "1255px" }} className="py-5 mx-auto">
      <div style={{ backgroundColor: "white" }}>
        <div className="pb-3">
          <Navbar />
        </div>
        <div className="location-card">
          <Card
            style={{
              width: "100%",
            }}
          >
            <div className="row location-bar">
              <div className="col d-flex">
                <div className="align-self-center mx-2">
                  <img src={Location} alt="loc" />
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "13px",
                      color: "#495A6E",
                    }}
                  >
                    Origin
                  </p>
                  {/* <img src="" alt="map" /> */}
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "26px",
                      letterSpacing: "1%",
                      color: "#181E25",
                    }}
                  >
                    Nhava Sheva(INNSA)
                  </p>
                </div>
              </div>
              <div className="col d-flex">
                <div className="align-self-center mx-2">
                  <img src={Location} alt="loc" />
                </div>
                <div>
                  <p>Origin</p>
                  {/* <img src="" alt="map" /> */}
                  <p>Nhava Sheva(INNSA)</p>
                </div>
              </div>
              <div className="col d-flex">
                <div className="align-self-center mx-2">
                  <img src={Location} alt="loc" />
                </div>
                <div>
                  <p>Origin</p>
                  {/* <img src="" alt="map" /> */}
                  <p>Nhava Sheva(INNSA)</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div style={{ backgroundColor: "gray" }}></div>
    </div>
  );
}

export default NewRate;
