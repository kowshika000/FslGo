import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const PendingActions = () => {
  const [globalFilter, setGlobalFilter] = useState(null);
  const dt = useRef(null);

  const header = (
    <div className="d-flex ">
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </IconField>
    </div>
  );
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button outlined className="mr-2" />
      </>
    );
  };
  return (
    <>
      <DataTable
        ref={dt}
        dataKey="id"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        globalFilter={globalFilter}
        header={header}
      >
        <Column field="code" header="Id" sortable></Column>
        <Column field="name" header="Origin" sortable></Column>
        <Column field="h_num" header="Destination" sortable></Column>
        <Column field="due_date" header="Booked on" sortable></Column>
        <Column field="days" header="ETD/ATD" sortable></Column>
        <Column field="amount" header="ETA/ATA" sortable></Column>
        <Column field="balance" header="Status" sortable></Column>
        <Column body={actionBodyTemplate} header="Action"></Column>
      </DataTable>
    </>
  );
};

export default PendingActions;
