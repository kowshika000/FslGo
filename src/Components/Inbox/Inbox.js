import React, { useState } from "react";
import { Dropdown, Menu, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Union from "../../assets/Union.svg";
import Shape from "../../assets/Shape.svg";
import './Inbox.css'
import { Link } from "react-router-dom";

function Inbox() {
  const [notification, setNotification] = useState(true);
  const [messages, setMessages] = useState(false);
  const [allmsg, setAllmsg] = useState(true);
  const [unread, setUnread] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item key="1">Last 7 days</Menu.Item>
      <Menu.Item key="2">Last 30 days</Menu.Item>
      <Menu.Item key="3">Last year</Menu.Item>
    </Menu>
  );
  return (
    <div className="row me-0" style={{marginTop:"4rem"}}>
      <div className="col-2 sidebar">
        <div className="pt-5">
          <div
            className={`d-flex Notifiction mt-5 ${
              notification ? "active" : ""
            }`}
            onClick={() => {
              setMessages(false);
              setNotification(true);
            }}
          >
            <img
              src={Union}
              alt=""
              className="bellicon"
              style={{ padding: 0 }}
            />
            <div className="Notificationstyle">
              <p>Notification</p>
            </div>
            <div className="Notifictionp">5</div>
          </div>
        </div>
        <div
          className={`d-flex Notifiction mt-2 ${messages ? "active" : ""}`}
          onClick={() => {
            setMessages(true);
            setNotification(false);
          }}
        >
          <img src={Shape} alt="" className="bellicon" />
          <div className="Notificationstyle">
            <p>Messages</p>
          </div>
          <div className="Notifictionp">10</div>
        </div>
      </div>
      <div className="col-8  ">
        {notification && (
          <div className="div-position" style={{marginTop:"4.1rem"}}>
            <div className="d-flex ms-3 mt-5 pt-3 ">
              <div className="Notification2 me-1">Notification</div>
              <Dropdown overlay={menu} className=" custom-dropdown mt-1">
                <Button>
                  <Space>
                    Last 30 Days
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>

            <div className="ms-3">
              <div className="Cardsize">
                <div className="card-body">
                  <p
                    className="bookingcreated m-0"
                    style={{
                      padding: "10px 10px 10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    Booking Created
                  </p>
                  <p className="bookingcreated1 m-0">
                    Your LCL Booking #
                    <Link className="text-decoration-none"><span style={{ color: "#0812F79C" }}> 120893000710 </span></Link>{" "}
                    for Nhava Sheva to Jebel Ali has been created
                  </p>
                  <div
                    className="d-flex justify-content-between"
                  >
                    <p className="bookingcreated2 m-0 pt-2">
                      <span className="green-dot"></span>2 m ago
                    </p>
                    <Button className="bookingcreated3 display me-2">
                      View Pending Action
                    </Button>
                  </div>
                </div>
              </div>

              <div className="Cardsize mt-3">
                <div className="card-body ">
                  <p
                    className="bookingcreated m-0"
                    style={{
                      padding: "10px 10px 10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    ETD Updated
                  </p>
                  <p className="bookingcreated1 m-0">
                    Your LCL Booking #
                    <Link className="text-decoration-none"><span style={{ color: "#0812F79C" }}> 120893000710 </span></Link>{" "}
                    for Nhava Sheva to Jebel Ali has been created
                  </p>
                  <div
                    className="d-flex justify-content-between"
                  >
                    <p className="bookingcreated2 m-0 pt-2">
                      <span className="green-dot"></span>2 m ago
                    </p>
                    <Button className="bookingcreated3 display me-2">
                      View Pending Action
                    </Button>
                  </div>
                </div>
              </div>

              <div className="Cardsize mt-3">
                <div className="card-body ">
                  <p
                    className="bookingcreated m-0"
                    style={{
                      padding: "10px 10px 10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    Cargo Received
                  </p>
                  <p className="bookingcreated1 m-0">
                    Your LCL Booking #
                    <Link className="text-decoration-none"><span style={{ color: "#0812F79C" }}> 120893000710 </span></Link>{" "}
                    for Nhava Sheva to Jebel Ali has been created
                  </p>
                  <div
                    className="d-flex justify-content-between"
                  >
                    <p className="bookingcreated2 m-0 pt-2">
                      <span className="green-dot"></span>2 m ago
                    </p>
                    <Button className="bookingcreated3 display me-2">
                      View Pending Action
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className="Cardsize mt-3"
                // style={{ width: "991px", height: "147px" }}
              >
                <div className="card-body ">
                  <p
                    className="bookingcreated m-0"
                    style={{
                      padding: "10px 10px 10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    Draft BL Approved
                  </p>
                  <p className="bookingcreated1 m-0">
                    Your LCL Booking #
                    <Link className="text-decoration-none"><span style={{ color: "#0812F79C" }}> 120893000710 </span></Link>{" "}
                    for Nhava Sheva to Jebel Ali has been created
                  </p>
                  <div
                    className="d-flex justify-content-between"
                  >
                    <p className="bookingcreated2 m-0 pt-2">
                      <span className="green-dot"></span>2 m ago
                    </p>
                    <Button className="bookingcreated3 display me-2">
                      View Pending Action
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className="Cardsize mt-3"
                // style={{ width: "991px", height: "147px" }}
              >
                <div className="card-body ">
                  <p
                    className="bookingcreated m-0"
                    style={{
                      padding: "10px 10px 10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    Draft BL Approved
                  </p>
                  <p className="bookingcreated1 m-0">
                    Your LCL Booking #
                    <Link className="text-decoration-none"><span style={{ color: "#0812F79C" }}> 120893000710 </span></Link>{" "}
                    for Nhava Sheva to Jebel Ali has been created
                  </p>
                  <div
                    className="d-flex justify-content-between"
                  >
                    <p className="bookingcreated2 m-0 pt-2">
                      <span className="green-dot"></span>2 m ago
                    </p>
                    <Button className="bookingcreated3 display me-2">
                      View Pending Action
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {messages && (
          <div className="div-position" style={{marginTop:"4.2rem"}}>
            <div className="d-flex ms-3 mt-3 pt-5">
              <div className="Notification2 me-1">Messages</div>
              <Dropdown overlay={menu} className="custom-dropdown mt-1">
                <Button>
                  <Space>
                    Last 30 Days
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
            <div
              className="card shadow ms-3"
              style={{ width: "1054px", height: allmsg ? "1014px" : "855px" }}
            >
              <div
                className=" d-flex w-100 justify-content-center "
                style={{ height: "50px" }}
              >
                <div
                  className="w-50 card-header-container"
                  style={{ borderRadius: "5px 5px 0 0" }}
                >
                  <div
                    className={`card-header ${allmsg ? "active" : ""}`}
                    onClick={() => {
                      setAllmsg(true);
                      setUnread(false);
                    }}
                  >
                    <div
                      className={`text-center read ${allmsg ? "active" : ""}`}
                    >
                      All (10)
                    </div>
                  </div>
                </div>
                <div
                  className="w-50 card-header-container"
                  style={{ borderRadius: "5px 5px 0 0" }}
                >
                  <div
                    className={`card-header ${unread ? "active" : ""}`}
                    onClick={() => {
                      setAllmsg(false);
                      setUnread(true);
                    }}
                  >
                    <div
                      className={`text-center read ${unread ? "active" : ""}`}
                    >
                      Unread (5)
                    </div>
                  </div>
                </div>
              </div>
              {allmsg && (
                <div className="mt-2">
                  <div className="mx-auto notify-box">
                    <div className="card shadow mt-3">
                      <div
                        className="card-body"
                        style={{ height: "137px", borderColor: "transparent" }}
                      >
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Booking Confirmation{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>09 May 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Clearance{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>08 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Pick Up{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>07 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Cargo Received -{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>06 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Booking Confirmation{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>05 May 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Booking Confirmation{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>05 May 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {unread && (
                <div className="mt-2">
                  <div className="mx-auto notify-box">
                    <div className="card shadow mt-3">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Booking Confirmation{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>09 May 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Clearance{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>08 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Pick Up{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>07 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Cargo Received -{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>06 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3 ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Booking Confirmation{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>05 May 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Inbox;