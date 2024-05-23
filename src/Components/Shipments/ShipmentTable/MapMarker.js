import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import sort from "../../../assets/sort.png";
import { Modal } from "antd";
import { mapRequest } from "../../../Redux/Actions/MapAction";
import { useDispatch, useSelector } from "react-redux";

export default function MapMarker({ showModal, onClose }) {
  const [modal1, setModal1] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(mapRequest());
  }, [dispatch]);

  const mapData = useSelector((state) => state.Map);
  const mapMarkerData = mapData?.MapData?.countries;

  return (
    <Modal
      open={showModal}
      onCancel={onClose}
      style={{
        position: "absolute",
        width: "500px",
        height: "300px",
      }}
    >
      <div>
        <div className="shadow">
          <DataTable
            value={mapMarkerData}
            dataKey="Map_id"
            paginator={false}
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            currentPageReportTemplate="{first} to {last} out of {totalRecords}"
            removableSort
            className="p-0"
          >
            {/ Columns /}
            <Column
              field="hbl_no"
              header={
                <span style={{ fontSize: "13px", width: "176px" }}>
                  Booking ID
                  <img src={sort} alt="Sort" className="p-1" />
                </span>
              }
              headerClassName="custom-header1 p-1"
              className="p-1"
            />
            <Column
              field="mode"
              header={
                <span style={{ fontSize: "13px", width: "170px" }}>
                  Mode
                  <img src={sort} alt="Sort" className="ps-1" />
                </span>
              }
              headerClassName="custom-header1 p-1 "
              className=""
            />
            <Column
              field="route"
              header={
                <span style={{ fontSize: "13px", width: "170px" }}>
                  Route
                  <img src={sort} alt="Sort" className="ps-1" />
                </span>
              }
              headerClassName="custom-header1 p-1 "
              className=""
            />
            <Column
              field="status"
              header={
                <span style={{ fontSize: "13px" }}>
                  Status
                  <img src={sort} alt="Sort" className="ps-1" />
                </span>
              }
              bodyClassName="custom-cell"
              className="p-1"
              headerClassName="custom-header1 p-1"
            />
          </DataTable>
        </div>
      </div>
    </Modal>
  );
}

