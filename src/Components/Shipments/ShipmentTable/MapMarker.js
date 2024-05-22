import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import sort from "../../../assets/sort.png";
import { Modal } from "antd";

export default function MapMarker({ showModal, onClose }) {
  const [modal1, setModal1] = useState(false);

  const [data, setData] = useState([
    {
      bookingId: 120893000768,
      mode: "Ocean-LCL",
      route: "USNYC-AEJEA",
      status: "Booked",
    },
    {
      bookingId: 120893000768,
      mode: "Ocean-LCL",
      route: "USNYC-AEJEA",
      status: "Booked",
    },
    {
      bookingId: 120893000768,
      mode: "Ocean-LCL",
      route: "USNYC-AEJEA",
      status: "Booked",
    },
  ]);
  // const handleHover = () => {
  //   setModal1(true);
  // };

  // const handleLeave = () => {
  //   setModal1(false);
  // };
  console.log("mdsal");

  return (
    <Modal
      open={showModal}
      onCancel={onClose}
      style={{
        position: "absolute",
        width: "200px",
        height: "140px",
        // marginLeft: "580px",
        // zIndex: 1, // Ensure the table appears on top
      }}
    >
      <div>
        <div className="shadow">
          <DataTable
            value={data}
            dataKey="shipmentId"
            paginator={false}
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            currentPageReportTemplate="{first} to {last} out of {totalRecords} "
            removableSort
            //   rowClassName={rowClassName}
            className="p-3"
          >
            <Column
              field="bookingId"
              header={
                <span
                  // onClick={() => onSort("shipmentId")}
                  style={{ fontSize: "13px", width: "176px" }}
                >
                  Booking ID
                  <img src={sort} alt="Sort" className="p-1" />
                </span>
              }
              headerClassName="custom-header1 p-1"
              className="p-1"
            ></Column>
            <Column
              field="mode"
              header={
                <span
                  // onClick={() => onSort("origin")}
                  style={{ fontSize: "13px", width: "170px" }}
                >
                  Mode
                  <img src={sort} alt="Sort" className="ps-1" />
                </span>
              }
              headerClassName="custom-header1 p-1 "
              className=""
            ></Column>
            <Column
              field="route"
              header={
                <span
                  className="p-1"
                  style={{ fontSize: "13px", width: "170px" }}
                >
                  Route
                  <img src={sort} alt="Sort" className="ps-1" />
                </span>
              }
              headerClassName="custom-header1 p-1 "
              className=""
            ></Column>
            <Column
              field="status"
              header={
                <span style={{ fontSize: "13px" }}>
                  Status
                  <img src={sort} alt="Sort" className="ps-1" />
                </span>
              }
              bodyClassName="custom-cell"
              className=" p-1"
              headerClassName="custom-header1 p-1"
            ></Column>
          </DataTable>
        </div>
      </div>
    </Modal>
  );
}
