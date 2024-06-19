import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Pagination from "../../Core-Components/Pagination";
import { useDispatch } from "react-redux";
import { bookingRequest } from "../../../Redux/Actions/BookingAction";
import { Tooltip } from "antd";
import CountryFlag from "../../Core-Components/CountryFlag";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Booking.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import ShipmentBase from "../../ShipmentDetails/ShipmentTable/ShipmentBase";
import { MultiSelect } from "primereact/multiselect";
import { useSelector } from "react-redux";
import { Tag } from "primereact/tag";
import { CloseOutlined } from "@ant-design/icons";
import { FilterOutlined } from "@ant-design/icons";

const AllBookings = ({
  filterData,
  filterValue,
  currentPage,
  setCurrentPage,
  filterMonthValue,
}) => {
  console.log("filterValue", filterValue);
  console.log("fill", filterData);

  const itemsPerPage = 5; // Number of items per page
  const dispatch = useDispatch();

  const payload = {
    filter_month: filterMonthValue ? filterMonthValue : "",
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
    filter_days: filterValue ? filterValue : "",
  };

  useEffect(() => {
    dispatch(bookingRequest({ payload }));
  }, [filterValue, filterMonthValue]);

  const [filteredData, setFilteredData] = useState([]);
  const [tblFilter, setTblFilter] = useState({
    shipmentfilterData: [],
    order_no: [],
    modeD: [],
    originD: [],
    DestD: [],
    etdD: [],
    etaD: [],
    statusD: [],
  });
  // const filterdata = useSelector((state) => state.Booking?.booking?.data);
  const filterDatas =filterData.filter((item) => {
      return (
        (tblFilter.shipmentfilterData?.length === 0 ||
          tblFilter.shipmentfilterData?.includes(item.id)) &&
        (tblFilter.order_no?.length === 0 ||
          tblFilter.order_no?.includes(item.order_no)) &&
        (tblFilter.modeD?.length === 0 ||
          tblFilter.modeD?.includes(item.mode)) &&
        (tblFilter.originD?.length === 0 ||
          tblFilter.originD?.includes(item.origin)) &&
        (tblFilter.DestD?.length === 0 ||
          tblFilter.DestD?.includes(item.destination)) &&
        (tblFilter.etaD?.length === 0 ||
          tblFilter.etaD?.includes(item.eta_ata)) &&
        (tblFilter.etdD?.length === 0 ||
          tblFilter.etdD?.includes(item.etd_atd)) &&
        (tblFilter.statusD?.length === 0 ||
          tblFilter.statusD?.includes(item.status))
      );
    });
  // console.log("filter", filteredDataa);

  useEffect(() => {
    setFilteredData(filterDatas);
    // setIds(filterData);
    setCurrentPage(1);
  }, [tblFilter, filterData]);

  const getUniqueOptions = (array, key) => {
    if (!Array.isArray(array) || !array?.length) {
      return [];
    }
    return Array.from(new Set(array.map((data) => data[key]))).map((value) => ({
      label: value,
      value,
    }));
  };

  // const [idS, setIds] = useState(filterData);

  // const filterTable = () => {
  //   const filterResult = filterDatas(filterData);
  //   setFilteredData(filterResult);
  //   setIds(filterResult);
  //   console.log("tableData", filterResult);
  // };
  const idS=filterData

  const ShipId = getUniqueOptions(idS, "id");
  const orderId_ = getUniqueOptions(idS, "order_no");
  const Mode_ = getUniqueOptions(idS, "mode");
  const Org_ = getUniqueOptions(idS, "origin");
  const dest_ = getUniqueOptions(idS, "destination");
  const eta_ = getUniqueOptions(idS, "eta_ata");
  const etd_ = getUniqueOptions(idS, "etd_atd");
  const status_ = getUniqueOptions(idS, "status");

  const handleChangeFilter = (field, filterValues) => {
    if (field === "all") {
      setTblFilter({
        shipmentfilterData: [],
        order_no: [],
        modeD: [],
        originD: [],
        DestD: [],
        etdD: [],
        etaD: [],
        statusD: [],
      });
    } else {
      setTblFilter((prevFilters) => ({
        ...prevFilters,
        [field]: filterValues,
      }));
    }
    // if (filterValues.length === 0) {
    //   setFilteredData(filterData);
    //   setIds(filterData);
    // }
  };

  const FilterIdRow = () => {
    const renderOption = (option) => {
      if (option.label.length <= 14) {
        return <span>{option.label}</span>; // Render full label if it's 14 characters or less
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + ".."; // Truncate label and add ".." at the end

        return (
          <Tooltip placement="topLeft" title={option.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };
    return (
      <MultiSelect
        className="custom-multi-select"
        value={tblFilter.shipmentfilterData}
        options={ShipId}
        name="ShipId"
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
        }}
        showSelectAll={false}
        // filterIcon={<FilterOutlined onClick={filterTable} />}
        onChange={(e) => handleChangeFilter("shipmentfilterData", e.value)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
        // panelFooterTemplate={(props, onPanelShow) =>
        //   actionOkTemplate(onPanelShow)
        // }
      />
    );
  };
  const FilterOrderRow = () => {
    const renderOption = (option) => {
      if (option.label.length <= 12) {
        return <span>{option.label}</span>; // Render full label if it's 12 characters or less
      } else {
        const truncatedText = option.label?.slice(0, 12).trim() + ".."; // Truncate label and add ".." at the end

        return (
          <Tooltip placement="topLeft" title={option.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };

    return (
      <div className="custom-multi-select-container">
        <MultiSelect
          className="custom-multi-select"
          value={tblFilter.order_no}
          options={orderId_}
          filter
          style={{
            position: "absolute",
            opacity: "0",
            width: "50px",
            fontSize: "10px",
            // maxWidth:"100px"
            left: "180px",
          }}
          showSelectAll={false}
          // filterIcon={<FilterOutlined onClick={filterTable} />}
          onChange={(e) => handleChangeFilter("order_no", e.value)}
          display="chip"
          placeholder="Select "
          itemTemplate={renderOption}
          filterPlaceholder="Search"
          // panelFooterTemplate={(props, onPanelShow) =>
          //   actionOkTemplate(onPanelShow)
          // }
        ></MultiSelect>
      </div>
    );
  };
  const FilterModeRow = () => {
    const renderOption = (option) => {
      if (option.label.length <= 14) {
        return <span>{option.label}</span>; // Render full label if it's 14 characters or less
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + ".."; // Truncate label and add ".." at the end

        return (
          <Tooltip placement="topLeft" title={option.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };
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
        // filterIcon={<FilterOutlined onClick={filterTable} />}
        onChange={(e) => {
          // filterTable();
          handleChangeFilter("modeD", e.value);
          console.log("changed");
        }}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
        // panelFooterTemplate={(props, onPanelShow) =>
        //   actionOkTemplate(onPanelShow)
        // }
      />
    );
  };
  const FilterOrgRow = () => {
    const renderOption = (option) => {
      if (option.label.length <= 14) {
        return <span>{option.label}</span>; // Render full label if it's 14 characters or less
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + ".."; // Truncate label and add ".." at the end

        return (
          <Tooltip placement="topLeft" title={option.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };
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
        // filterIcon={<FilterOutlined onClick={filterTable} />}
        onChange={(e) => handleChangeFilter("originD", e.value)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
        // panelFooterTemplate={(props, onPanelShow) =>
        //   actionOkTemplate(onPanelShow)
        // }
      />
    );
  };
  const FilterDestRow = () => {
    const renderOption = (option) => {
      if (option.label.length <= 14) {
        return <span>{option.label}</span>; // Render full label if it's 14 characters or less
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + ".."; // Truncate label and add ".." at the end

        return (
          <Tooltip placement="topLeft" title={option.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };
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
        // filterIcon={<FilterOutlined onClick={filterTable} />}
        onChange={(e) => handleChangeFilter("DestD", e.value)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
        // panelFooterTemplate={(props, onPanelShow) =>
        //   actionOkTemplate(onPanelShow)
        // }
      />
    );
  };
  const FilterETDRow = () => {
    const renderOption = (option) => {
      if (option.label.length <= 14) {
        return <span>{option.label}</span>; // Render full label if it's 14 characters or less
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + ".."; // Truncate label and add ".." at the end

        return (
          <Tooltip placement="topLeft" title={option.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };
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
        // filterIcon={<FilterOutlined onClick={filterTable} />}
        onChange={(e) => handleChangeFilter("etdD", e.value)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
        // panelFooterTemplate={(props, onPanelShow) =>
        //   actionOkTemplate(onPanelShow)
        // }
      />
    );
  };
  const FilterETARow = () => {
    const renderOption = (option) => {
      if (option.label.length <= 14) {
        return <span>{option.label}</span>; // Render full label if it's 14 characters or less
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + ".."; // Truncate label and add ".." at the end

        return (
          <Tooltip placement="topLeft" title={option.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };
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
        // filterIcon={<FilterOutlined onClick={filterTable} />}
        onChange={(e) => handleChangeFilter("etaD", e.value)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
        // panelFooterTemplate={(props, onPanelShow) =>
        //   actionOkTemplate(onPanelShow)
        // }
      />
    );
  };
  const FilterStatusRow = () => {
    const renderOption = (option) => {
      if (option.label.length <= 14) {
        return <span>{option.label}</span>; // Render full label if it's 14 characters or less
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + ".."; // Truncate label and add ".." at the end

        return (
          <Tooltip placement="topLeft" title={option.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };
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
        // filterIcon={<FilterOutlined onClick={filterTable} />}
        onChange={(e) => handleChangeFilter("statusD", e.value)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
        // panelFooterTemplate={(props, onPanelShow) =>
        //   actionOkTemplate(onPanelShow)
        // }
      />
    );
  };

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
          // marginLeft:"10px",
          // marginRight:"10px"
        }}
        label={buttonLabel}
        onClick={() => showModal(rowData)}
      />
    );
  };

  // const actionOkTemplate = (onPanelShow) => {
  //   console.log(onPanelShow);

  //   const { setFocusedOptionIndex, setOverlayVisibleState, setClicked } =
  //     onPanelShow;

  //   const handle = () => {
  //     filterTable();
  //     return onPanelShow();
  //     // setFocusedOptionIndex(-1);
  //     // setOverlayVisibleState(false);
  //     // setClicked(false);
  //   };

  //   return (
  //     <Button
  //       outlined
  //       // className={btnClass}
  //       style={{
  //         background: "rgba(240, 30, 30, 1)",
  //         color: "white",
  //         borderRadius: "8px",
  //         width: "80px",
  //         height: "30px",
  //         padding: "",
  //         gap: "8px",
  //         float: "end",
  //         // marginLeft:"10px",
  //         // marginRight:"10px"
  //       }}
  //       label={"Ok"}
  //       onClick={
  //         handle
  //         // filterTable();
  //         // setFocusedOptionIndex(-1);
  //         // setOverlayVisibleState(false);
  //         // setClicked(false);
  //         // onPanelShow
  //       }
  //       // filterTable()
  //     />
  //   );
  // };

  const rowClassName = () => {
    return "custom-row";
  };
  const shipmentTemplateId = (rowData) => {
    return (
      <div style={{ textAlign: "start" }}>
        {/* <span className=" px-2">{rowData?.order_no}</span> */}
        <span className="">
          {rowData?.order_no?.length <= 20 ? (
            rowData?.order_no
          ) : (
            <Tooltip placement="topLeft" title={rowData?.order_no}>
              <span role="button">
                {rowData?.order_no?.slice(0, 20)?.trim()?.split(" ")?.join("") +
                  ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const shipmentTemplateFilterData = (rowData) => {
    return (
      <div style={{ textAlign: "start" }}>
        {/* <span className=" px-2">{rowData?.order_no}</span> */}
        <span className="">
          {rowData?.id?.length <= 20 ? (
            rowData?.id
          ) : (
            <Tooltip placement="topLeft" title={rowData?.id}>
              <span role="button">
                {rowData?.id?.slice(0, 20)?.trim()?.split(" ")?.join("") + ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
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
          {rowData?.origin?.length <= 20 ? (
            rowData?.origin
          ) : (
            <Tooltip placement="topLeft" title={rowData?.origin}>
              <span role="button">
                {rowData?.origin?.slice(0, 20)?.trim()?.split(" ")?.join("") +
                  ".."}
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
        <span
          style={{ paddingLeft: "8px", fontWeight: "400", textWrap: "wrap" }}
        >
          {rowData?.destination?.length <= 20 ? (
            rowData?.destination
          ) : (
            <Tooltip placement="topLeft" title={rowData?.destination}>
              <span role="button">
                {rowData?.destination
                  ?.slice(0, 20)
                  ?.trim()
                  ?.split("")
                  ?.join("") + ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const bodyTemplate = (rowData) => {
    console.log("bodyTemplaterowData", rowData);
    const hasUpdated =
      rowData?.is_updated === "Y" ? rowData?.updated_message : "";

    return (
      <div className="message">
        <span className={hasUpdated ? "text-red" : ""}>
          {hasUpdated ? (
            <Tooltip
              placement="topLeft"
              title={
                <span>
                  <div style={{ fontSize: "13px" }}>ETD Changed</div>
                  <div style={{ fontSize: "10px" }}>
                    {/* {rowData?.updated_message} */}
                    Previous ETD : 10/05/2024 <br />
                    New ETD : 12/05/2024
                  </div>
                </span>
              }
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

  const bodyTemplateEta = (rowData) => {
    const hasUpdated =
      rowData?.is_updated === "Y" ? rowData?.updated_message : "";
    return (
      <div className="message">
        <span className={hasUpdated ? "text-red" : ""}>
          {hasUpdated ? (
            <Tooltip
              placement="topLeft"
              title={
                <span>
                  <div style={{ fontSize: "13px" }}>ETA Changed</div>
                  <div style={{ fontSize: "10px" }}>
                    {/* {rowData?.updated_message} */}
                    Previous ETA : 10/05/2024 <br />
                    New ETA : 12/05/2024
                  </div>
                </span>
              }
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

  const paginatedData = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const noData = () => {
    return (
      <div
        className="no-options "
        style={{ alignSelf: "center", height: "353px" }}
      >
        No Data Found
      </div>
    );
  };
  const FilterTag = ({ field, filterValues, handleChangeFilter }) => {
    if (!Array.isArray(filterValues)) {
      return null;
    }
    const renderedColumns = new Set();
    const anyFilterValuesPresent = filterValues.some(
      (values) => values?.length > 0
    );

    return (
      <>
        {filterValues.map((option) => {
          if (!renderedColumns.has(field)) {
            renderedColumns.add(field);
            return (
              <Tag
                key={field}
                style={{
                  backgroundColor: "#F01E1E",
                  marginRight: "10px",
                  position: "relative",
                  fontSize: "10px",
                }}
                className="px-2 py-1"
                rounded
              >
                <div>
                  {field === "order_no" ? "Order No" : ""}
                  {field === "shipmentfilterData" ? "Shipment Id" : ""}
                  {field === "modeD" ? "Mode" : ""}
                  {field === "etdD" ? "ETD/ATD" : ""}
                  {field === "etaD" ? "ETA/ATA" : ""}
                  {field === "statusD" ? "Status" : ""}
                  {field === "originD" ? "Origin" : ""}
                  {field === "DestD" ? "Destination" : ""}
                  <span className="ms-2">
                    <CloseOutlined
                      onClick={() => {
                        handleChangeFilter(field, []);
                      }}
                    />
                  </span>
                </div>
              </Tag>
            );
          }
          return null;
        })}
      </>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      {Object.keys(tblFilter)?.some((key) => tblFilter[key]?.length > 0) && (
        <div
          className="d-flex ps-2"
          style={{
            backgroundColor: "#F8FAFC",
            marginBottom: "9px",
            padding: "5px 0px",
            marginTop: "-11px",
          }}
        >
          {Object.entries(tblFilter).map(([field, filterValues]) => (
            <FilterTag
              key={field}
              field={field}
              filterValues={filterValues}
              handleChangeFilter={handleChangeFilter}
            />
          ))}
          {Object.keys(tblFilter)?.some(
            (key) => tblFilter[key]?.length > 0
          ) && (
            <Tag
              style={{
                backgroundColor: "#F01E1E",
                marginRight: "10px",
                position: "relative",
                fontSize: "10px",
                marginLeft: "auto",
              }}
              className="px-2 py-1"
              rounded
            >
              <div>
                Clear All
                <span className="ms-2">
                  <CloseOutlined
                    onClick={() => handleChangeFilter("all", [])}
                  />
                </span>
              </div>
            </Tag>
          )}
        </div>
      )}
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
        className={`${filteredData?.length === 0 ? "text-center" : ""}`}
        style={{ height: "353px" }}
        emptyMessage={noData()}
      >
        <Column
          field="id"
          // headerStyle={{ width: "150px" }}
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
          body={shipmentTemplateFilterData}
          // className="p-3"
          style={{ paddingRight: "10px", width: "170px" }}
        ></Column>
        <Column
          field="order_no"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="py-3 d-flex "
            >
              Order No
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
          style={{ paddingLeft: "10px", paddingRight: "10px", width: "185px" }}
          headerClassName="custom-header"
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
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
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
          style={{ width: "185px", paddingLeft: "10px", paddingRight: "10px" }}
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
          style={{ width: "185px", paddingLeft: "10px", paddingRight: "10px" }}
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
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
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
          body={bodyTemplateEta}
          bodyClassName="custom-cell"
          // className="p-3"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        ></Column>
        <Column
          field="status"
          header={
            <span className=" d-flex">
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
          headerStyle={{
            width: "130px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          bodyClassName={(rowData) =>
            rowData.status === "Booking In Progress"
              ? "booking-progress-cell"
              : "booked-cell "
          }
          className="text-start my-3"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        ></Column>
        <Column
          field="action"
          body={actionBodyTemplate}
          header={<span>Action</span>}
          className=" text-start"
          headerStyle={{ paddingLeft: "10px" }}
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
