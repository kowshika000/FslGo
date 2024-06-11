import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Pagination from "../../Core-Components/Pagination";
import { useDispatch } from "react-redux";
import { bookingRequest } from "../../../Redux/Actions/BookingAction";
import { Tooltip, Checkbox } from "antd";
import CountryFlag from "../../Core-Components/CountryFlag";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Booking.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { Dropdown } from "primereact/dropdown";
import ShipmentBase from "../../ShipmentDetails/ShipmentTable/ShipmentBase";
import { MultiSelect } from "primereact/multiselect";
import { useSelector } from "react-redux";

const AllBookings = ({ filterData, selectedStatus, filterValue }) => {
  console.log("filterValue", filterValue);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const dispatch = useDispatch();

  const payload = {
    filter_month: "",
    booking_type: "",
    status: "",
    spagesize: "",
    sperpage: "",
    booking_number: "",
    origin: "",
    destination: "",
    mode: "",
    etd: "",
    eta: "",
    filter_days: filterValue,
  };

  useEffect(() => {
    dispatch(bookingRequest({ payload }));
  }, [filterValue]);

  const [filteredData, setFilteredData] = useState([]);
  const [tblFilter, setTblFilter] = useState({
    order_no: [],
    shipmentidD: [],
    modeD: [],
    originD: [],
    DestD: [],
    etdD: [],
    etaD: [],
    statusD: [],
  });
  const idd = useSelector((state) => state.Booking?.booking?.data);
    const getUniqueOptions = (array, key) => {
    return Array.from(new Set(array?.map((data) => data[key])))?.map((value) => ({
      label: value,
      value,
    }));
  };

  const orderId_ = getUniqueOptions(idd, "order_no");
  const ShipId = getUniqueOptions(idd, "id");
  const Mode_ = getUniqueOptions(idd, "mode");
  const Org_ = getUniqueOptions(idd, "origin");
  const dest_ = getUniqueOptions(idd, "destination");
  const eta_ = getUniqueOptions(idd, "eta_ata");
  const etd_ = getUniqueOptions(idd, "etd_atd");
  const status_ = getUniqueOptions(idd, "status");

  const handleChangeFilter = (field, value) => {
    setTblFilter({
      ...tblFilter,
      [field]: value,
    });
    console.log("selectId", value);
  };
  const FilterOrderRow = () => {
    return (
      <MultiSelect
        className="custom-multi-select"
        value={tblFilter.order_no}
        options={orderId_}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
          // maxWidth:"100px"
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter("order_no", e.value)}
        display="chip"
        placeholder="Select "
        itemTemplate={(option) => {
          return (
            <Tooltip placement="topLeft" title={option.label}>
              <span>{option.label}</span>
            </Tooltip>
          );
        }}
      />
    );
  };
  const FilterIdRow = () => {
    return (
      <MultiSelect
        className="custom-multi-select"
        value={tblFilter.shipmentidD}
        options={ShipId}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter("shipmentidD", e.value)}
        display="chip"
        placeholder="Select"
        // itemTemplate={(option) => {
        //   return (
        //     <Tooltip placement="topLeft" title={option.label}>
        //       <span>{option.label}</span>
        //     </Tooltip>
        //   );
        // }}
      />
    );
  };
  const FilterModeRow = () => {
    return (
      <MultiSelect
        className="custom-multi-select"
        value={tblFilter.modeD}
        options={Mode_}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
          // maxWidth:"100px"
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter("modeD", e.value)}
        display="chip"
        placeholder="Select"
        // itemTemplate={(option) => {
        //   return (
        //     <Tooltip placement="topLeft" title={option.label}>
        //       <span>{option.label}</span>
        //     </Tooltip>
        //   );
        // }}
      />
    );
  };
  const FilterOrgRow = () => {
    return (
      <MultiSelect
        className="custom-multi-select"
        value={tblFilter.originD}
        options={Org_}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
          // maxWidth:"100px"
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter("originD", e.value)}
        display="chip"
        placeholder="Select"
        itemTemplate={(option) => {
          return (
            <Tooltip placement="topLeft" title={option.label}>
              <span>{option.label}</span>
            </Tooltip>
          );
        }}
      />
    );
  };
  const FilterDestRow = () => {
    return (
      <MultiSelect
        className="custom-multi-select"
        value={tblFilter.DestD}
        options={dest_}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
          // maxWidth:"100px"
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter("DestD", e.value)}
        display="chip"
        placeholder="Select"
        itemTemplate={(option) => {
          return (
            <Tooltip placement="topLeft" title={option.label}>
              <span>{option.label}</span>
            </Tooltip>
          );
        }}
      />
    );
  };
  const FilterETDRow = () => {
    return (
      <MultiSelect
        className="custom-multi-select"
        value={tblFilter.etdD}
        options={etd_}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
          // maxWidth:"100px"
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter("etdD", e.value)}
        display="chip"
        placeholder="Select"
        // itemTemplate={(option) => {
        //   return (
        //     <Tooltip placement="topLeft" title={option.label}>
        //       <span>{option.label}</span>
        //     </Tooltip>
        //   );
        // }}
      />
    );
  };
  const FilterETARow = () => {
    return (
      <MultiSelect
        className="custom-multi-select"
        value={tblFilter.etaD}
        options={eta_}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
          // maxWidth:"100px"
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter("etaD", e.value)}
        display="chip"
        placeholder="Select"
        // itemTemplate={(option) => {
        //   return (
        //     <Tooltip placement="topLeft" title={option.label}>
        //       <span>{option.label}</span>
        //     </Tooltip>
        //   );
        // }}
      />
    );
  };
  const FilterStatusRow = () => {
    return (
      <MultiSelect
        className="custom-multi-select"
        value={tblFilter.statusD}
        options={status_}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
          // maxWidth:"100px"
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter("statusD", e.value)}
        display="chip"
        placeholder="Select"
        // itemTemplate={(option) => {
        //   return (
        //     <Tooltip placement="topLeft" title={option.label}>
        //       <span>{option.label}</span>
        //     </Tooltip>
        //   );
        // }}
      />
    );
  };
 

  useEffect(() => {
    const filteredDataa = filterData.filter((item) => {
      return (
        (tblFilter.order_no.length === 0 || tblFilter.order_no.includes(item.order_no)) &&
        (tblFilter.shipmentidD.length === 0 || tblFilter.shipmentidD.includes(item.id)) &&
        (tblFilter.modeD.length === 0 || tblFilter.modeD.includes(item.mode)) &&
        (tblFilter.originD.length === 0 || tblFilter.originD.includes(item.origin)) &&
        (tblFilter.DestD.length === 0 || tblFilter.DestD.includes(item.destination)) &&
        (tblFilter.etaD.length === 0 || tblFilter.etaD.includes(item.eta_ata)) &&
        (tblFilter.etdD.length === 0 || tblFilter.etdD.includes(item.etd_atd)) &&
        (tblFilter.statusD.length === 0 || tblFilter.statusD.includes(item.status)) 

      );
    });
    setFilteredData(filteredDataa); 
  }, [tblFilter, filterData]);
  // console.log("booking", filteredData);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData?.length);

  // Extract the data for the current page
  // const currentPageData = filteredData?.slice(startIndex, endIndex) ;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRowData, setModalRowData] = useState(null);
  const showModal = (rowData) => {
    setModalRowData(rowData);
    setIsModalOpen(true);
  };

  const actionBodyTemplate = (rowData) => {
    let buttonLabel;
    let btnClass;
    if (rowData.action === "Track") {
      buttonLabel = "More";
      btnClass = "cargo-picked-up";
    } else if (rowData.action === "Booking In Progress") {
      buttonLabel = "-";
    } else if (rowData.action === "Cargo Picked Up") {
      buttonLabel = "More";
      btnClass = "cargo-picked-up";
    }
    return (
      <Button
        outlined
        className={btnClass}
        style={{
          background: "rgba(240, 30, 30, 1)",
          color: "white",
          borderRadius: "8px",
          width: "80px",
          height: "30px",
          padding: "",
          gap: "8px",
        }}
        label={buttonLabel}
        onClick={() => showModal(rowData)}
      />
    );
  };

  const rowClassName = () => {
    return "custom-row";
  };
  const shipmentTemplateId = (rowData) => {
    return (
      <div style={{ textAlign: "start" }}>
        {/* <span className=" px-2">{rowData?.order_no}</span> */}
        <span className="">
          {rowData?.order_no.length <= 20 ? (
            rowData?.order_no
          ) : (
            <Tooltip placement="topLeft" title={rowData?.order_no}>
              <span role="button">
                {rowData?.order_no.slice(0, 20).trim().split(" ").join("") +
                  ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
const shipmentTemplateIdd=(rowData)=>{
  return (
    <div style={{ textAlign: "start" }}>
      {/* <span className=" px-2">{rowData?.order_no}</span> */}
      <span className="">
        {rowData?.id.length <= 20 ? (
          rowData?.id
        ) : (
          <Tooltip placement="topLeft" title={rowData?.id}>
            <span role="button">
              {rowData?.id.slice(0, 20).trim().split(" ").join("") +
                ".."}
            </span>
          </Tooltip>
        )}
      </span>
    </div>
  );
}
  const originBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell" style={{ textAlign: "start" }}>
        <CountryFlag countryCode={rowData?.origin_countrycode} />
        <span
          style={{
            paddingLeft: "8px",
            fontWeight: "400",
            // width: "50px",
            textAlign: "start",
          }}
        >
          {rowData?.origin.length <= 20 ? (
            rowData?.origin
          ) : (
            <Tooltip placement="topLeft" title={rowData?.origin}>
              <span role="button">
                {rowData?.origin.slice(0, 20).trim().split(" ").join("") + ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const destinationBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell" style={{ textAlign: "start" }}>
        <CountryFlag countryCode={rowData?.destination_countrycode} />
        <span style={{ paddingLeft: "8px", fontWeight: "400", textWrap: "wrap" }}>
          {rowData?.destination.length <= 20 ? (
            rowData?.destination
          ) : (
            <Tooltip placement="topLeft" title={rowData?.destination}>
              <span role="button">
                {rowData?.destination.slice(0, 20).trim().split("").join("") +
                  ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const bodyTemplate = (rowData) => {
    const milestone = rowData?.milestones;
    console.log("bodyTemplaterowData", rowData?.id);
    console.log("bodyTemplateetdrowData", milestone);
    const hasUpdated = milestone.some((data) => data?.is_updated !== "");

    const TooltipMessage = milestone.filter((data) =>
      data?.is_updated !== "" ? data?.updated_message : ""
    );
    console.log("TooltipMessage", TooltipMessage);
    return (
      <div className="message">
        <span className={hasUpdated ? "text-red" : ""}>
          {hasUpdated ? (
            <Tooltip
              placement="topLeft"
              title="Old 26-May-2024 New 27-May-2024"
            >
              <span role="button">{rowData?.etd_atd}</span>
            </Tooltip>
          ) : (
            rowData?.etd_atd
          )}
        </span>
      </div>
    );
  };

  const bodyTemplateEtd = (rowData) => {
    const milestone = rowData?.milestones;
    console.log("bodyTemplaterowData", rowData?.id);
    console.log("bodyTemplateetdrowData", milestone);
    const hasUpdated = milestone.some((data) => data?.is_updated !== "");

    const TooltipMessage = milestone.filter((data) =>
      data?.is_updated !== "" ? data?.updated_message : ""
    );
    console.log("TooltipMessage", TooltipMessage?.updated_message);
    return (
      <div className="message">
        <span className={hasUpdated ? "text-red" : ""}>
          {hasUpdated ? (
            <Tooltip
              placement="topLeft"
              title="Old 26-May-2024 New 27-May-2024"
            >
              <span role="button">{rowData?.eta_ata}</span>
            </Tooltip>
          ) : (
            rowData?.eta_ata
          )}
        </span>
      </div>
    );
  };
  const handleSort = (col) => {
    console.log("Ascending");
    const sorted = [...filteredData].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];
      if (!isNaN(valA) && !isNaN(valB)) {
        return valA - valB;
      }
      if (col === "etd/atd" || col === "eta/ata") {
        const dateA = parseDate1(valA);
        const dateB = parseDate1(valB);
        return dateA - dateB;
      }
      return valA > valB ? 1 : -1;
    });
    setFilteredData(sorted);
  };
  const parseDate1 = (dateString) => {
    const parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };
  const parseDate2 = (dateString) => {
    const parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };

  const handleSortDown = (col) => {
    console.log("Descending");
    const sorted = [...filteredData].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];

      // Check if the values are numbers
      if (!isNaN(valA) && !isNaN(valB)) {
        return valB - valA;
      }

      // Handle date strings
      if (col === "etd/atd" || col === "eta/ata") {
        const dateA = parseDate2(valA);
        const dateB = parseDate2(valB);
        return dateB - dateA;
      }

      // Default string comparison
      return valA < valB ? 1 : -1;
    });
    setFilteredData(sorted);
  };

  // Function to parse dates in the "dd/mm/yyyy" format
  const parseDate = (dateString) => {
    const parts = dateString.split("/");
    // month is 0-based, so subtract 1 from the month
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };

  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const noData=()=>{
    return <div className="no-options ">No Data Found</div>;
  }
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <DataTable
        value={paginatedData}
        dataKey="shipmentId"
        paginator={false}
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        currentPageReportTemplate="{first} to {last} out of {totalRecords} "
        // paginatorTemplate=" PrevPageLink PageLinks NextPageLink  CurrentPageReport "
        removableSort
        rowClassName={rowClassName}
        className={`${filteredData.length === 0 ? 'text-center' : ''}`}
        style={{height:"353px"}}
        emptyMessage={noData()}
        
      >
        <Column
          field="order_no"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer"}}
              className="py-3 d-flex "
            >
              Order ID
              {FilterOrderRow()}
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("order_no");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("order_no");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          body={shipmentTemplateId}
          style={{paddingLeft:"20px",width:"180px"}}
          headerClassName="custom-header"
        ></Column>
        <Column
          field="id"
          headerStyle={{width:"150px"}}
          header={           
              <span
                style={{ fontFamily: "Roboto", cursor: "pointer" }}
                className=" d-flex"
              >
                Shipment ID
                {FilterIdRow()}
                <div
                  className="d-flex sorticon"
                  style={{ flexDirection: "column" }}
                >
                  <IconButton
                    onClick={() => {
                      handleSort("id");
                    }}
                    className="p-0"
                  >
                    <ExpandLessIcon className="sortup" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleSortDown("id");
                    }}
                    className="p-0"
                  >
                    <ExpandMoreIcon className="sortdown" />
                  </IconButton>
                </div>
              </span>
           
          }
          body={shipmentTemplateIdd}
          // className="p-3"
          style={{paddingLeft:"30px"}}
        ></Column>
        <Column
          field="mode"
          // headerStyle={{width:"50px"}}
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className=" d-flex"
            >
              Mode
              {FilterModeRow()}
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("mode");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("mode");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          // body={shipmentTemplate}
          style={{paddingLeft:"20px"}}
        ></Column>

        <Column
          field="origin"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="d-flex"
            >
              Origin
              {FilterOrgRow()}
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("origin");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("origin");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          body={originBodyTemplate}
          headerClassName="custom-header"
          // className="p-3"
          style={{width:"165px",paddingLeft:"20px"}}
        ></Column>
        <Column
          field="destination"
          header={
            <span
              className=" d-flex"
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
            >
              Destination
              {FilterDestRow()}
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("destination");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("destination");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          body={destinationBodyTemplate}
          // className="p-3"
          style={{width:"120px",paddingLeft:"30px"}}

        ></Column>

        <Column
          field="etd/atd"
          // headerStyle={{width:"80px"}}
          header={
            <span className=" d-flex" style={{ position: "relative" }}>
              ETD/ATD
              {FilterETDRow()}
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("etd/atd");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("etd/atd");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          body={bodyTemplate}
          bodyClassName="custom-cell"
          // className="p-3"
          style={{paddingLeft:"20px"}}
        ></Column>
        <Column
          field="eta/ata"
          // headerStyle={{width:"80px"}}
          header={
            <span className=" d-flex">
              ETA/ATA
              {FilterETARow()}
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("eta/ata");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("eta/ata");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          body={bodyTemplateEtd}
          bodyClassName="custom-cell"
          // className="p-3"
          style={{paddingLeft:"20px"}}
        ></Column>
        <Column
          field="status"
          header={         
          <span className=" d-flex" >
              Status
              {FilterStatusRow()}
              <div
                className="d-flex sorticon"
                style={{ flexDirection: "column" }}
              >
                <IconButton
                  onClick={() => {
                    handleSort("status");
                  }}
                  className="p-0"
                >
                  <ExpandLessIcon className="sortup" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleSortDown("status");
                  }}
                  className="p-0"
                >
                  <ExpandMoreIcon className="sortdown" />
                </IconButton>
              </div>
            </span>
          }
          headerStyle={{width:"130px",paddingLeft:"20px"}}
          bodyClassName={(rowData) =>
            rowData.status === "Booking In Progress"
              ? "booking-progress-cell"
              : "booked-cell "
          }
          className="text-start my-3"
          style={{marginLeft:"20px"}}
        ></Column>
        <Column
          field="action"
          body={actionBodyTemplate}
          header={<span>Action</span>}
          className=" text-start"
        ></Column>
      </DataTable>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filteredData?.length}
        onPageChange={() => setCurrentPage(1)}
      />
      {/* <Steppertrack
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        rowData={modalRowData}
      /> */}
      <ShipmentBase
        open={isModalOpen}
        close={setIsModalOpen}
        rowData={modalRowData}
      />
    </div>
  );
};

export default AllBookings;
