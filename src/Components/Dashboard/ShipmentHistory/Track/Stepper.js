import React, { useEffect, useState } from "react";
import "../../../Shipments/Track/stepper.css";
import { Tooltip } from "antd";

const Stepper = ({ data }) => {
  console.log("stepper", data);
  const mileStone = data?.milestones;
  console.log(mileStone);
  const steps = mileStone.map((data) => ({
    step: data.milestone,
    body: data.date,
    milestonestatus: data?.milestonestatus,
  }));

  return (
    <div className="stepper-container" style={{ overflowX: "auto" }}>
    <div className="stepper d-flex justify-content-between" style={{minWidth:"1585px",width:"100%"}} >
      {steps?.map((step, i) => (
        <div
          key={i}
          className={`step-item ${
            step?.milestonestatus === "INPROGRESS" ? "active_yellow" : ""
          } ${step?.milestonestatus === "REACHED" ? "active" : ""}`}
        >
          <p className="m-0 step mb-2">
            <div
              style={{
                backgroundColor: "#ACB8C4",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
              }}
            ></div>
          </p>
          <p className="m-0" style={{ color: "#181E25" }}>
            {step.step.length <= 14 ? (
              step.step
            ) : (
              <Tooltip placement="topLeft" title={step.step}>
                <span role="button">
                  {step.step.slice(0, 14).trim().split("").join("") + "..."}
                </span>
              </Tooltip>
            )}
          </p>
          <p className="m-0">{step.body}</p>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Stepper;
