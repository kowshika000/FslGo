import React from "react";
import { Card, Checkbox } from "antd";
import { Tooltip } from "antd";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import info from "../../assets/Info.svg";
import img from "../../assets/Framethumbs.png";

const Qfilters = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div>
      <Card title="Filters">
        <div className="Service-card1">
          <p className="service-title">
            Shipper (27)
            <span
              className="me-1"
              style={{
                float: "right",
                width: "16px",
                color: "#495a6e",
              }}
            >
              <ExpandLessIcon />
            </span>
          </p>
          <p>
            <Checkbox onChange={onChange} >BIG CAR INTERIOR DESIGN</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
          <p>
            <Checkbox onChange={onChange}>
              BIG CORPORATION
              <span>
                <img src={img} alt="icon" className="ms-2 mb-1" />
              </span>
            </Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
          <p>
            <Checkbox onChange={onChange}>GLOBAL CO. LTD.</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
          <p>
            <Checkbox onChange={onChange}>KING INTERIOR CO.LTD</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
          <p>
            <Checkbox onChange={onChange}>DIGITAL TECH CO. LTD.</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
        </div>
        <div className="Service-card1">
          <p className="service-title">
            Consignee (1)
            <span
              className="me-1"
              style={{
                float: "right",
                width: "16px",
                color: "#495a6e",
              }}
            >
              <ExpandLessIcon />
            </span>
          </p>
          <p>
            <Checkbox onChange={onChange}>AL AHLEIA SWITCHGEAR CO.</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
        </div>
        <div className="Service-card1 mt-2">
          <p className="service-title">
            Port of Loading (10)
            <span className="me-1" style={{ float: "right", width: "16px" }}>
              <ExpandLessIcon />
            </span>
          </p>
          <p>
            <Checkbox onChange={onChange}>
              Nhava Sheva
              <span>
                <img src={img} alt="icon" className="ms-2 mb-1" />
              </span>
            </Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
          <p>
            <Checkbox onChange={onChange}>
              Chennai
              <span>
                <img src={img} alt="icon" className="ms-2 mb-1" />
              </span>
            </Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
          <p>
            <Checkbox onChange={onChange}>
              Bangalore
              <span>
                <img src={img} alt="icon" className="ms-2 mb-1" />
              </span>
            </Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
        </div>
        <div className="Service-card1 mt-2">
          <p className="service-title">
            Port Of Discharge (1)
            <span
              className="me-1"
              style={{
                float: "right",
                width: "16px",
                color: "#495a6e",
              }}
            >
              <ExpandLessIcon />
            </span>
          </p>
          <p>
            <Checkbox onChange={onChange}>Shuwaik</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
        </div>
        <div className="Service-card1 mt-2">
          <p className="service-title">
            Product (3)
            <span
              className="me-1"
              style={{
                float: "right",
                width: "16px",
                color: "#495a6e",
              }}
            >
              <ExpandLessIcon />
            </span>
          </p>
          <p>
            <Checkbox onChange={onChange}>LCL</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
          <p>
            <Checkbox onChange={onChange}>AIR</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
          <p>
            <Checkbox onChange={onChange}>FCL</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
        </div>
        <div className="Service-card1 mt-2">
          <p className="service-title">
            Incoterms (2)
            <span
              className="me-1"
              style={{
                float: "right",
                width: "16px",
                color: "#495a6e",
              }}
            >
              <ExpandLessIcon />
            </span>
          </p>
          <p>
            <Checkbox onChange={onChange}>FOB</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
          <p>
            <Checkbox onChange={onChange}>EXW</Checkbox>
            <Tooltip
              placement="topLeft"
              title="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
            >
              <span style={{ float: "right" }} role="button">
                <img src={info} alt="more" />
              </span>
            </Tooltip>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Qfilters;
