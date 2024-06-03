import { Dialog } from "@mui/material";
import React, { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const UploadSuccess = ({ open, close }) => {
  const [animate, setAnimate] = useState(false);
const navigate = useNavigate()

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Dialog open={open} onClose={close}>
      <div
      >
        <div
          className="card m-auto"
          style={{ height: "510px", width: "525px" }}
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
            <div>Thank you for uploading your documents</div>
            
          </div>
          <p style={{ textAlign: "center" }} className="mt-1">
           Our service team will connect you shortly for booking confirmation!
          </p>
          <div className="d-flex justify-content-center mt-4">
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
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default UploadSuccess;
