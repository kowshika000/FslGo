import { Dialog } from "@mui/material";
import React, { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import UploadDocument from "./UploadDocument";

const NewBooking = ({ open, close }) => {
  const [animate, setAnimate] = useState(false);
  const [uploadDoc, setUploadDoc] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Dialog open={open} onClose={close} fullScreen>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          alignContent: "center",
        }}
      >
        <div
          className="card m-auto"
          style={{ height: "580px", width: "525px" }}
        >
          <div
            className={`check-icon align-self-center ${
              animate ? "animate" : ""
            }`}
            style={{ marginTop: "70px", marginBottom: "70px" }}
          >
            <CheckCircleIcon style={{ fontSize: "130px", color: "#4caf50" }} />
          </div>
          <div
            style={{ fontWeight: "500", fontSize: "25px", textAlign: "center" }}
          >
            <div>Thanks for your booking request</div>
            <div>Our service team will connect you <br/> shortly!</div>
          </div>
          <p style={{ textAlign: "center" ,fontSize:"16px", fontWeight:400}} className="mt-2 mb-3">
           Please select your "Upload Documents" to submit your <br/>
           shipment documents for booking processing
          </p>
          <div className="d-flex justify-content-center mt-4" style={{gap:"40px"}}>
            <Button
              type="primary"
              style={{
                backgroundColor: "#ca1605",
                height: "40px",
                borderRadius: "8px",
              }}
              onClick={()=>navigate("/")}
            >
              Continue to Dashboard
              <ArrowCircleRightIcon className="ms-2" />
            </Button>
            <Button
              type="primary"
              style={{
                backgroundColor: "#ca1605",
                height: "40px",
                borderRadius: "8px",
              }}
              onClick={()=>setUploadDoc(true)}
            >
              Upload Documents
              <ArrowCircleRightIcon className="ms-2" />
            </Button>
          </div>
        </div>
      </div>
      <UploadDocument open={uploadDoc} close={()=>setUploadDoc(false)}/>
    </Dialog>
  );
};

export default NewBooking;
