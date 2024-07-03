import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Pagination1 from "../../Core-Components/Pagination1";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "antd";
import CountryFlag from "../../Core-Components/CountryFlag";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Row, Col, Input, Image } from "antd";
import { SearchOutlined, CaretDownOutlined } from "@ant-design/icons";
import FilterDrawer from "./Fillter";
import filter from "../../../assets/Filter 2.png";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { Dropdown } from "primereact/dropdown";
import Vector from "../../../assets/Vector1.png";
import Verified from "../../../assets/Verified.png";
import BookFor from "./QModal/BookFor";
import Requested from "./QModal/Requested";
import { useNavigate } from "react-router-dom";
import { QuotationRequest } from "../../../Redux/Actions/QuotationAction";
import cal from "../../../assets/calVector.svg";
import { CircularProgress, Box } from "@mui/material";
import { MultiSelect } from "primereact/multiselect";

const QuotationTable = ({
  filterData,
  selectedStatus,
  currentPage,
  setCurrentPage,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [bookForModal, setbookForModal] = useState(false);
  const [requstedModal, setrequstedModal] = useState(false);
  const [filterValue, setFilterValue] = useState(30);
  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState("Past 30 Days");
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRowData, setModalRowData] = useState(null);
  const [visible, setVisible] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const items = [
    "Past 30 Days",
    "Past 3 Months",
    "Past 6 Months",
    "Past 1 Year",
  ];
  const itemsPerPage = 10;
  const quotationData = useSelector(
    (state) => state?.QuotationList?.Quotation?.data
  );
  const { loading } = useSelector((state) => state?.QuotationList);
  const [tblFilter, setTblFilter] = useState({
    ref_id: [],
    origin: [],
    destination: [],
    load: [],
    eta: [],
    etd: [],
    rate_validity: [],
    status: [],
  });
  useEffect(() => {
    const filterDataTable = quotationData?.filter((item) =>
      Object.keys(tblFilter).every(
        (key) =>
          tblFilter[key]?.length === 0 || tblFilter[key]?.includes(item[key])
      )
    );
    setFilteredData(filterDataTable);
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
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(filteredData);
  useEffect(() => {
    if (clicked) {
      setData(filteredData);
    }
  }, [clicked]);
  const refId_ = getUniqueOptions(data, "ref_id");
  const Org_ = getUniqueOptions(data, "origin");
  const dest_ = getUniqueOptions(data, "destination");
  const load_ = getUniqueOptions(data, "load");
  const eta_ = getUniqueOptions(data, "eta");
  const etd_ = getUniqueOptions(data, "etd");
  const rate_ = getUniqueOptions(data, "rate_validity");
  const status_ = getUniqueOptions(data, "status");
  const handleChangeFilter = (field, filterValues) => {
    if (field === "all") {
      setTblFilter({
        ref_id: [],
        origin: [],
        destination: [],
        load: [],
        eta: [],
        etd: [],
        rate_validity: [],
        status: [],
      });
    } else {
      setTblFilter((prevFilters) => ({
        ...prevFilters,
        [field]: filterValues,
      }));
    }
  };

  useEffect(() => {
    if (selectedStatus !== null) {
      setTblFilter({
        ref_id: [],
        origin: [],
        destination: [],
        load: [],
        eta: [],
        etd: [],
        rate_validity: [],
        status: [],
      });
    }
  }, [selectedStatus]);

  function MultiSelectFilter(filterKey, options, value, additionalStyles) {
    const renderOption = (option) => {
      if (option.label.length <= 14) {
        return <span>{option.label}</span>;
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + "..";
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
        value={value}
        options={options}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
          ...additionalStyles,
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter(filterKey, e.value)}
        onFocus={() => setClicked(true)} // Track when the MultiSelect gains focus
        onBlur={() => setClicked(false)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
      />
    );
  }

  const payload = {
    filter_month: filterValue,
    quotation_type: "",
    spagesize: "",
    sperpage: "",
    quotation_no: "",
    origin: "",
    destination: "",
    mode: "",
    etd: "",
    eta: "",
  };
  useEffect(() => {
    dispatch(QuotationRequest({ payload }));
  }, [dispatch, filterValue]);

  useEffect(() => {
    setFilteredData(filterData.length ? filterData : quotationData);
  }, [selectedStatus]);

  useEffect(() => {
    const lowercasedFilter = globalFilter.toLowerCase();
    const filteredData = quotationData?.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(lowercasedFilter)
      )
    );
    setFilteredData(filteredData);
    setCurrentPage(1)
  }, [globalFilter, quotationData]);

  useEffect(() => {
    const filterDaysMap = {
      "Past 30 Days": 30,
      "Past 3 Months": 91,
      "Past 6 Months": 182,
      "Past 1 Year": 365,
    };
    setFilterValue(filterDaysMap[selectedDropdownItem]);
  }, [selectedDropdownItem]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Extract the data for the current page
  const currentPageData = filteredData?.slice(startIndex, endIndex);

  const showModal = (rowData) => {
    setModalRowData(rowData);
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const actionBodyTemplate = (rowData) => {
    let buttonLabel;
    let btnClass;
    btnClass = "cargo-picked-up";
    if (rowData.status === "Requested") {
      buttonLabel = (
        <>
          Requested{" "}
          <img src={Vector} style={{ marginTop: "-2px", marginLeft: "4px" }} />
        </>
      );
      btnClass = "waringBtn";
    } else if (rowData.status === "Book For $300") {
      buttonLabel = "Book For $300";
      btnClass = "dangerBtn";
    } else if (rowData.status === "Active") {
      buttonLabel = "Book For $300";
      btnClass = "dangerBtn";
    } else if (rowData.status === "Find New Rates" || "Expired") {
      buttonLabel = (
        <>
          Find New Rates{" "}
          <img src={Vector} style={{ marginTop: "-2px", marginLeft: "4px" }} />
        </>
      );
      btnClass = "waringBtn";
    } else if (rowData.status === "Booked") {
      buttonLabel = (
        <>
          <img
            src={Verified}
            style={{ marginTop: "-2px", marginRight: "4px" }}
          />{" "}
          Booked
        </>
      );
      btnClass = "booked";
    }
    const hadleModalOpen = () => {
      if (rowData.status === "Requested") {
        setrequstedModal(true);

        setbookForModal(false);
      } else if (rowData.status === "Active") {
        setbookForModal(true);
        setrequstedModal(false);
      } else if (rowData.status === "Expired") {
        navigate("/findnewrate");
      }
    };
    return (
      <Button
        outlined
        className={btnClass}
        style={{
          background: "rgba(240, 30, 30, 1)",
          color: "white",
          borderRadius: "8px",
          width: "160px",
          height: "30px",
          padding: "",
          gap: "8px",
        }}
        label={buttonLabel}
        onClick={hadleModalOpen}
      />
    );
  };
  const shipmentTemplate = (rowData) => {
    return (
      <div style={{ textAlign: "start" }}>
        <div className="bold px-4">{rowData?.ref_id}</div>
      </div>
    );
  };
  const originBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell" style={{ textAlign: "start" }}>
        <CountryFlag countryCode={rowData?.origin_countrycode} />
        <span
          style={{
            padding: "8px",
            fontWeight: "400",
            width: "50px",
            textWrap: "wrap",
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
        <span style={{ padding: "8px", fontWeight: "400", textWrap: "wrap" }}>
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

  const valueTemplate = () => {
    return (
      <div>
        <Image
          src={cal}
          alt="cal"
          style={{
            width: "12px",
            height: "12px",
            marginTop: "-2px",
            marginRight: "7px",
          }}
        />
        <span
          style={{
            color: "#495A6E",
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "19px",
            letterSpacing: "1%",
            textAlign: "center",
          }}
        >
          {selectedDropdownItem}
        </span>
        <CaretDownOutlined className="ms-1" style={{ color: "#67788E" }} />
      </div>
    );
  };
  const dropdownbutton = document.querySelector(".p-dropdown-trigger");
  if (dropdownbutton) {
    dropdownbutton.remove();
  }

  const renderHeader = () => {
    return (
      <Row
        justify="space-between"
        className="w-full mb-3"
        style={{ backgroundColor: "white" }}
      >
        <Col>
          <Input
            placeholder="Search Ref id , origin, destination... "
            prefix={<SearchOutlined style={{ color: "#94A2B2" }} />}
            style={{
              width: "368.13px",
              padding: "4px 11px",
              borderRadius: "4px",
            }}
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Col>
        <Col className="d-flex ">
          <div
            className="dropdownfield mx-2"
            style={{ alignContent: "center" }}
          >
            <Dropdown
              value={selectedDropdownItem}
              onChange={(e) => {
                setSelectedDropdownItem(e.value);
              }}
              options={items}
              valueTemplate={valueTemplate}
              className="w-full md:w-14rem datehover"
              style={{ border: "none" }}
            />
          </div>

          <div className="filter d-flex">
            <div
              className="ant-image cursor-pointer"
              // onClick={()=>setVisible(true)}
            >
              <img
                src={filter}
                className="ant-image-img me-1 my-1"
                style={{
                  marginTop: "2px",
                  cursor: "pointer",
                }}
              />
              <span
                style={{
                  cursor: "pointer",
                  color: "#495A6E",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "13px",
                  letterSpacing: "1%",
                }}
              >
                Filters
              </span>
            </div>
          </div>

          <FilterDrawer visible={visible} onClose={() => setVisible(false)} />
        </Col>
      </Row>
    );
  };
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
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "353px",
        }}
      >
        <CircularProgress style={{ color: "red" }} />
      </Box>
    );
  }
  const sort = (col) => {
    const handleSort = (col) => {
      console.log("Ascending");
      const sorted = [...filteredData].sort((a, b) => {
        const valA = a[col];
        const valB = b[col];
        if (!isNaN(valA) && !isNaN(valB)) {
          return valA - valB;
        }
        return valA > valB ? 1 : -1;
      });
      setFilteredData(sorted);
    };

    const handleSortDown = (col) => {
      console.log("Descending");
      const sorted = [...filteredData].sort((a, b) => {
        const valA = a[col];
        const valB = b[col];
        if (!isNaN(valA) && !isNaN(valB)) {
          return valB - valA;
        }
        return valA < valB ? 1 : -1;
      });
      setFilteredData(sorted);
    };

    return (
      <div>
        <div className="d-flex sorticon" style={{ flexDirection: "column" }}>
          <IconButton
            onClick={() => {
              handleSort(col, "asc");
            }}
            className="p-0"
          >
            <ExpandLessIcon className="sortup" />
          </IconButton>
          <IconButton
            onClick={() => {
              handleSortDown(col, "desc");
            }}
            className="p-0"
          >
            <ExpandMoreIcon className="sortdown" />
          </IconButton>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <DataTable
        value={currentPageData}
        style={{ height: "400px" }}
        header={renderHeader}
        emptyMessage={noData}
      >
        <Column
          field="ref_id"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="px-4 d-flex"
            >
              Ref. ID
              {MultiSelectFilter("ref_id", refId_, tblFilter.ref_id)}
              {sort("ref_id")}
            </span>
          }
          body={shipmentTemplate}
        ></Column>

        <Column
          field="origin"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="d-flex"
            >
              Origin
              {MultiSelectFilter("origin", Org_, tblFilter.origin)}
              {sort("origin")}
            </span>
          }
          body={originBodyTemplate}
          headerClassName="custom-header p-3"
          className="p-3"
        ></Column>
        <Column
          field="destination"
          header={
            <span
              className="p-3 d-flex"
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
            >
              Destination
              {MultiSelectFilter("destination", dest_, tblFilter.destination)}
              {sort("destination")}
            </span>
          }
          body={destinationBodyTemplate}
          className="p-3"
        ></Column>
        <Column
          field="load"
          header={
            <span className="p-3 d-flex">
              Load
              {MultiSelectFilter("load", load_, tblFilter.load)}
              {sort("load")}
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3"
        ></Column>
        <Column
          field="etd"
          header={
            <span className="p-3 d-flex">
              ETD
              {MultiSelectFilter("etd", etd_, tblFilter.etd)}
              {sort("etd")}
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3 text-start"
        ></Column>
        <Column
          field="eta"
          header={
            <span className="p-3 d-flex">
              ETA
              {MultiSelectFilter("eta", eta_, tblFilter.eta)}
              {sort("eta")}
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3 text-start"
        ></Column>
        <Column
          field="rate_validity"
          header={
            <span className="p-3 d-flex">
              Rate Validity
              {MultiSelectFilter(
                "rate_validity",
                rate_,
                tblFilter.rate_validity
              )}
              {sort("rate_validity")}
            </span>
          }
          className="text-start p-3"
        ></Column>
        <Column
          field="status"
          body={actionBodyTemplate}
          header={
            <span className="p-3 d-flex">
              Action
              {MultiSelectFilter("status", status_, tblFilter.status)}
              {sort("status")}
            </span>
          }
          className="p-3 text-start"
        ></Column>
      </DataTable>
      <Pagination1
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filteredData?.length}
      />
      <BookFor
        bookForModal={bookForModal}
        handleCancel={() => setbookForModal(false)}
      />
      <Requested
        requstedModal={requstedModal}
        handleCancel={() => setrequstedModal(false)}
      />
    </div>
  );
};

export default QuotationTable;
