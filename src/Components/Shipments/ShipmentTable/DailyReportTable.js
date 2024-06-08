import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function DailyReportTable() {
  return (
    <div>
      <DataTable
        dataKey="shipmentId"
        paginator={false}
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        currentPageReportTemplate="{first} to {last} out of {totalRecords} "
        // paginatorTemplate=" PrevPageLink PageLinks NextPageLink  CurrentPageReport "
        removableSort
      >
        <Column field="" header="Service" style={{ padding: "15px" }}></Column>
        <Column field="" header="Order No." className="p-3"></Column>
        <Column field="" header="Status" className="p-3"></Column>
        <Column field="" header="Booking No." className="p-3"></Column>
        <Column field="" header="Booking Date" className="p-3"></Column>
        <Column field="" header="Origin" className="p-3"></Column>
        <Column field="" header="POL" className="p-3"></Column>
        <Column field="" header="POD" className="p-3"></Column>
        <Column field="" header="Final Destination" className="p-3"></Column>
        <Column field="" header="Cargo Received" className="p-3"></Column>
        <Column field="" header="Pickup Date" className="p-3"></Column>
        <Column field="" header="Cargo Received " className="p-3"></Column>
        <Column field="" header="ETD Origin" className="p-3"></Column>
      </DataTable>
    </div>
  );
}

export default DailyReportTable;
