import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./DailyReportTable.css";
import Pagination from "../../../Core-Components/Pagination";
import group from "../../../../assets/Group 20851.svg";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Columns from "./Columns";
import { Tooltip } from "antd";
import { MultiSelect } from "primereact/multiselect";
import { Tag } from "primereact/tag";
import { CloseOutlined } from "@ant-design/icons";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DsrReportRequest } from "../../../../Redux/Actions/DsrReportAction";

function DailyReportTable() {
  const Profileusertoken = useSelector(
    (state) => state.ProfileData?.profileData?.usertoken
  );
  const payload = {
    sl_no: Profileusertoken,
    sorigin: "",
    sdest: "",
    sstatus: "",
    sshipper: "",
    sconsignee: "",
    sfrmdate: "",
    stodate: "",
    sshipmentby: "",
    simport_export: "",
    setafrmdate: "",
    setatodate: "",
  };
  // This is get dsr api call
  const dispatch = useDispatch();
  useEffect(() => {
    if (Profileusertoken) {
      dispatch(DsrReportRequest({ payload }));
    }
  }, [Profileusertoken, dispatch]);

  //Hooks
  const DsrReportData = useSelector((state) => state.DsrReport.dsrData);
  const DsrColumns = DsrReportData?.columns;
  const DsrDatas = DsrReportData?.data;
  const clonednewArray = DsrDatas?.map((a) => ({ ...a })) || [];

  //This function is used to change the
  function changeKey(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      var obj = arr[i];
      const altObj = Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
          key.split(" ").join("_"),
          value,
        ])
      );
      newArr.push(altObj);
    }
    return newArr;
  }

  const datasArray = changeKey(clonednewArray);
  console.log(datasArray);

  const ColumnObject = DsrColumns?.reduce(
    (o, key) => ({ ...o, [key]: true }),
    {}
  );

  const dsrfilter = DsrColumns?.reduce((o, key) => ({ ...o, [key]: [] }), {});
  console.log(dsrfilter);
  const report = datasArray;
  console.log(report);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebaropen, setSidebaropen] = useState(false);
  const [filtercolumn, setfiltercolumn] = useState();
  const [dsrFilter, setDsrFilter] = useState();
  const [filterReport, setFilterReport] = useState();
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();
  const itemsPerPage = 6;

  useEffect(() => {
    setfiltercolumn(ColumnObject);
  }, [DsrColumns]);
  useEffect(() => {
    setFilterReport(report);
  }, [DsrDatas]);

  console.log(filtercolumn);

  const arrayOfObj = Object.entries(filtercolumn || {})?.map((e) => ({
    [e[0]]: e[1],
    modifyheader: e[0]?.split(" ")?.join("_"),
    header: e[0],
  }));

  useEffect(() => {
    const filterReportTbl = report?.filter((items) =>
      Object.keys(dsrFilter || {})?.every(
        (key) =>
          dsrFilter[key]?.length === 0 || dsrFilter[key]?.includes(items[key])
      )
    );
    setFilterReport(filterReportTbl);
    setCurrentPage(1);
  }, [dsrFilter]);

  const getUniqueOptions = (array, key) => {
    if (!Array?.isArray(array) || !array?.length) {
      return [];
    }
    // if (!array[0][key]) {
    //   return [];
    // }
    return Array?.from(new Set(array?.map((data) => data[key])))?.map(
      (value) => ({
        label: value,
        value,
      })
    );
  };
  useEffect(() => {
    if (clicked) {
      setData(filterReport);
    }
  }, [clicked]);

  const handleChangeFilter = (field, filterValues) => {
    if (field === "all") {
      setDsrFilter(dsrfilter);
    } else {
      setDsrFilter((prevFilters) => ({
        ...prevFilters,
        [field]: filterValues,
      }));
    }
  };
  function MultiSelectFilter(filterKey, options, value, additionalStyles) {
    console.log(options);
    const renderOption = (option) => {
      if (option?.label?.length <= 14) {
        return <span>{option?.label}</span>;
      } else {
        const truncatedText = option?.label?.slice(0, 14)?.trim() + "..";
        return (
          <Tooltip placement="topLeft" title={option?.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };

    return (
      <MultiSelect
        className="custom-multi-select"
        value={value?.[filterKey]}
        options={options}
        name="ShipId"
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
  const FilterTag = ({ field, filterValues, handleChangeFilter }) => {
    if (!Array?.isArray(filterValues)) {
      return "";
    }
    const renderedColumns = new Set();
    console.log(renderedColumns);
    return (
      <>
        {filterValues?.map((option) => {
          if (!renderedColumns?.has(field)) {
            renderedColumns?.add(field);
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
                  {field ? field.split("_").join(" ") : ""}
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
          return "";
        })}
      </>
    );
  };
  //This is for sort ascending order
  const handleSort = (col) => {
    const sorted = [...report]?.sort((a, b) => {
      const valA = a[col];
      const valB = b[col];
      if (!isNaN(valA) && !isNaN(valB)) {
        return valA - valB;
      }
      // if (
      //   col === "BOOKING_DATE" ||
      //   col === "PICKUP_DATE" ||
      //   col === "ETD_ORIGIN"
      // ) {
      //   const dateA = parseDate1(valA);
      //   const dateB = parseDate1(valB);
      //   return dateA - dateB;
      // }
      return valA > valB ? 1 : -1;
    });
    setFilterReport(sorted);
  };
  const parseDate1 = (dateString) => {
    const parts = dateString?.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };
  parseDate1("12/05/2020");
  const parseDate2 = (dateString) => {
    const parts = dateString?.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };

  const handleSortDown = (col) => {
    const sorted = [...report].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];

      if (!isNaN(valA) && !isNaN(valB)) {
        return valB - valA;
      }

      // if (
      //   col === "booking_date" ||
      //   col === "pickup_date" ||
      //   col === "etd_origin"
      // ) {
      //   const dateA = parseDate2(valA);
      //   const dateB = parseDate2(valB);
      //   return dateB - dateA;
      // }
      return valA < valB ? 1 : -1;
    });
    setFilterReport(sorted);
  };

  //This is for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedData = filterReport?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const noData = () => {
    return <div className="no-options ">No Data Found</div>;
  };
  const columnValueData = (fieldName) => (rowData) => {
    const fieldValue = rowData[fieldName];
    return (
      <div style={{ width: "120px" }} className="px-1">
        {fieldValue?.length <= 14 ? (
          fieldValue
        ) : (
          <Tooltip placement="topLeft" title={fieldValue}>
            <span role="button">
              {fieldValue?.slice(0, 14)?.trim()?.split(" ")?.join("") + ".."}
            </span>
          </Tooltip>
        )}
      </div>
    );
  };
  return (
    <>
      <div className="dsr_section mb-2">
        {Object?.keys(dsrFilter || {})?.some(
          (key) => dsrFilter[key]?.length > 0
        ) && (
          <div
            className="d-flex ps-2"
            style={{
              backgroundColor: "#F8FAFC",
              marginBottom: "20px",
              padding: "5px 0px",
              position: "sticky",
              top: "0px",
              left: "0px",
            }}
          >
            {Object.entries(dsrFilter)?.map(([field, filterValues]) => (
              <FilterTag
                key={field}
                field={field}
                filterValues={filterValues}
                handleChangeFilter={handleChangeFilter}
              />
            ))}
            {Object.keys(dsrFilter)?.some(
              (key) => dsrFilter[key]?.length > 0
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
          style={{ height: "380px", width: "fit-content" }}
          emptyMessage={noData()}
        >
          {arrayOfObj?.map((item, index) => {
           
            if (filtercolumn[item?.header]) {
              return (
                <Column
                  key={index}
                  field={item?.modifyheader}
                  body={columnValueData(item?.modifyheader)}
                  header={
                    <span className=" d-flex">
                      {item?.header}
                      {MultiSelectFilter(
                        item?.modifyheader,
                        getUniqueOptions(data, item?.modifyheader),
                        dsrFilter
                      )}
                      <div
                        className="d-flex sorticon"
                        style={{ flexDirection: "column" }}
                      >
                        <IconButton
                          onClick={() => {
                            handleSort(item?.modifyheader);
                          }}
                          className="p-0"
                        >
                          <ExpandLessIcon className="sortup" />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            handleSortDown(item?.modifyheader);
                          }}
                          className="p-0"
                        >
                          <ExpandMoreIcon className="sortdown" />
                        </IconButton>
                      </div>
                    </span>
                  }
                  style={{
                    paddingTop: "15px",
                    paddingBottom:"15px",
                    paddingLeft:"5px",
                    paddingRight:"5px",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "#181E25",
                    whiteSpace: "nowrap",
                   
                  }}
                />
              );
            }
          })}
        </DataTable>
        <div
          style={{
            position: "absolute",
            top: "75px",
            right: "-50px",
            transform: "rotate(90deg)",
            borderBottom: "2px solid black",
          }}
          onClick={() => setSidebaropen((prev) => !prev)}
          role="button"
        >
          <p
            className="m-0 px-4"
            style={{
              letterSpacing: ".01em",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            <img className="me-2" src={group}></img>Columns
          </p>
        </div>
        {sidebaropen && (
          <Columns
            setfiltercolumn={setfiltercolumn}
            ColumnObject={ColumnObject}
            DsrColumns={DsrColumns}
          />
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filterReport?.length}
        onPageChange={() => setCurrentPage(1)}
      />
    </>
  );
}

export default DailyReportTable;
