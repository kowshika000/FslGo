import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./DailyReportTable.css";
import Pagination from "../../Core-Components/Pagination";
import group from '../../../assets/Group 20851.svg'
import { Menu } from "primereact/menu";
import { badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";

function DailyReportTable() {

  const [sidebaropen, setSidebaropen] = useState(false)
  const [dsrFilter, setDsrFilter] = useState({
    shipmentfilterData: [],
    order_no: [],
    modeD: [],
    originD: [],
    DestD: [],
    etdD: [],
    etaD: [],
    statusD: [],
  });

  const itemRenderer = (item) => (
    <div className='p-menuitem-content'>
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    </div>
);

  let items = [
    {
        label:"PivotMode"
    },
    {
        separator: true
    },
    {
      label:<div className="d-flex align-items-start">
              <img src={group} alt="" className="me-2" />
              <div>
                <p style={{fontSize:"14px",letterSpacing:".01em",marginBottom:"7px"}}>Row Groups</p>
                <p className="m-0" style={{fontSize:"11px",letterSpacing:".01em"}}>Drag here to set row groups</p>
              </div>
            </div>
    },
    {
        separator: true
    },
    {
      label:<div className="d-flex align-items-start">
              <img src={group} alt="" className="me-2" />
              <div>
                <p style={{fontSize:"14px",letterSpacing:".01em",marginBottom:"7px"}}>Values</p>
                <p className="m-0" style={{fontSize:"11px",letterSpacing:".01em"}}>Drag here to aggregate</p>
              </div>
            </div>
    },
    
];

  const data = [
    {
      service: "LCL",
      order_no: "3PD000421",
      status: "Active",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "13/05/2024",
    },
    {
      service: "LCL",
      order_no: "3PD000421",
      status: "Active",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "13/05/2024",
    },
    {
      service: "LCL",
      order_no: "3PD000421",
      status: "Active",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "13/05/2024",
    },
    {
      service: "LCL",
      order_no: "3PD000421",
      status: "Active",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "13/05/2024",
    },
    {
      service: "LCL",
      order_no: "3PD000421",
      status: "Active",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "13/05/2024",
    },
    {
      service: "LCL",
      order_no: "3PD000421",
      status: "Active",
      booking_no: "342134555333",
      booking_date: "12/05/2024",
      origin: "Jebel Ali",
      POL1: "XXXX",
      POL2: "XXXX",
      final_destination: "New York",
      cargo_received: "XXXXX",
      pickup_date: "13/05/2024",
      cargo_received2: "XXXXX",
      etd_origin: "13/05/2024",
    },
  ];

  const noData = () => {
    return <div className="no-options ">No Data Found</div>;
  };
  return (
    <>
      <div className="dsr_section mb-2">
        
        <DataTable
          value={data}
          dataKey="shipmentId"
          paginator={false}
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          currentPageReportTemplate="{first} to {last} out of {totalRecords} "
          // paginatorTemplate=" PrevPageLink PageLinks NextPageLink  CurrentPageReport "
          removableSort
          style={{ height: "360px", width: "1400px" }}
          emptyMessage={noData()}
        >
          <Column
            field="service"
            header="Service"
            style={{
              padding: "15px",
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="order_no"
            header="Order No."
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="status"
            header="Status"
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="booking_no"
            header="Booking No."
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="booking_date"
            header="Booking Date"
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="origin"
            header="Origin"
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="POL1"
            header="POL"
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="POL2"
            header="POL"
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="final_destination"
            header="Final Destination"
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="cargo_received"
            header="Cargo Received"
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="pickup_date"
            header="Pickup Date"
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="cargo_received2"
            header="Cargo Received "
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
          <Column
            field="etd_origin"
            header="ETD Origin"
            className="p-3"
            style={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#181E25",
            }}
          />
        </DataTable>
        <div style={{position:"absolute",top:"75px",right:"-55px",transform:"rotate(90deg)",borderBottom:"2px solid black"}} onClick={()=>setSidebaropen((prev)=>!prev)} role="button">
          <p className="m-0 px-4" style={{letterSpacing:".01em"}}><img className="me-2" src={group}></img>Columns</p>
        </div>  
        {
          sidebaropen && <Menu model={items} className="w-full md:w-15rem" style={{position:"absolute",top:"20px",right:"20px"}} /> 
        }
      </div>
      <Pagination
      // currentPage={currentPage}
      // setCurrentPage={setCurrentPage}
      // totalItems={filteredData?.length}
      // onPageChange={() => setCurrentPage(1)}
      />
    </>
  );
}

export default DailyReportTable;
