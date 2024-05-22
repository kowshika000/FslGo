import React, {useState, useEffect} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import CloseIcon from "@mui/icons-material/Close";
import sort from '../../../assets/sort.png'
import { ReactComponent as India} from '../../../assets/in.svg'
import { ReactComponent as AE} from '../../../assets/ae.svg';
import Pagination from "../../Core-Components/Pagination";
import { useDispatch, useSelector} from 'react-redux'
import { bookingRequest } from "../../../Redux/Actions/BookingAction";
import { Tooltip } from "antd";
import CountryFlag from "../../Core-Components/CountryFlag";
import Steppertrack from "../Track/StepperTrack";

const AllBookings = ({ filterData}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const [selectedButton, setSelectedButton] = useState(null);
  const dispatch = useDispatch();
  const ShipmentData = useSelector(state => state.Booking);
  console.log(ShipmentData)

  const bookingData = ShipmentData?.booking;
  const data = bookingData?.data
  console.log(data)

  const payload={
    filter_month: "",
        booking_type: "",
        status: "",
        spagesize: currentPage,
        sperpage: "5",
        booking_number: "",
        origin: "",
        destination: "",
        mode: "",
        etd: "",
        eta: "",
       filter_days:"",
  }

  useEffect(()=>{
    dispatch(bookingRequest({payload}))
  },[currentPage])


  const filteredData = filterData(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRowData, setModalRowData] = useState(null);
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
    if (rowData.action === "Track") {
      buttonLabel = "Track";
      btnClass = "cargo-picked-up";
    } else if (rowData.action === "Booking In Progress") {
      buttonLabel = "-";
    } else if (rowData.action === "Cargo Picked Up") {
      buttonLabel = "Track";
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
          width: "160px",
          height: "30px",
          padding: "",
          gap: "8px",
        }}
        label={buttonLabel}
        onClick={()=>showModal(rowData)}

      />
    );
  };

  const rowClassName = () => {
    return "custom-row";
  };
  const shipmentTemplate = (rowData) => {
    return (
      <div>
        <span className="bold px-4">{rowData?.id}</span>
        <div style={{ color: "rgba(103, 120, 142, 1)", fontSize: "13px" }} className="px-4 mt-1">
          LCL
        </div>
      </div>
    );
  };
  const originBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell" >
         <CountryFlag
          countryCode={rowData?.origin_countrycode}
          
        />
        <span style={{ padding: "8px", fontWeight: "400",width:'50px' , textWrap:'wrap'  }}>
        {rowData?.origin.length <= 20 ? (
            rowData?.origin
          ) : (
            <Tooltip placement="topLeft" title={rowData?.origin}>
              <span role="button">
                {rowData?.origin.slice(0, 20).trim().split(' ').join('') + ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const destinationBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell" >
         <CountryFlag
          countryCode={rowData?.destination_countrycode}
          
        />
        <span style={{ padding: "8px", fontWeight: "400", textWrap:'wrap' }}>
        {rowData?.destination.length <= 20? (
            rowData?.destination
          ) : (
            <Tooltip placement="topLeft" title={rowData?.destination}>
              <span role="button">
                {rowData?.destination.slice(0, 20).trim().split('').join('') + ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const onSort = (field, order) => {
    console.log("sorting field", field);
    let sortedData = [...filteredData];
  
    sortedData.sort((a, b) => {
      return order === 1
        ? a[field] > b[field]
          ? 1
          : -1
        : a[field] < b[field]
        ? 1
        : -1;
    });
  
   filterData(sortedData); 
  };
  
 
  // Function to parse dates in the "dd/mm/yyyy" format
  const parseDate = (dateString) => {
    const parts = dateString.split("/");
    // month is 0-based, so subtract 1 from the month
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };
  

 

  return (
    <div  style={{ width: "100%", borderRadius: "8px" }}>
           
      <div className="shadow">
        <DataTable
          value={filteredData}
          dataKey="shipmentId"
          paginator={false}
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          currentPageReportTemplate="{first} to {last} out of {totalRecords} "
          // paginatorTemplate=" PrevPageLink PageLinks NextPageLink  CurrentPageReport "
          removableSort
          rowClassName={rowClassName}
          
        >
          <Column
            field="id"
            header={
              <span
                onClick={() => onSort("id", sortOrder === 1 ? -1 : 1)}
                style={{ fontFamily: "Roboto", cursor:'pointer' }}
                className="px-4"
              >
                Shipment ID
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
             body={shipmentTemplate}
          ></Column>

          <Column
            field="origin"
            header={
              <span onClick={() => onSort("origin", sortOrder === 1 ? -1 : 1)}
              style={{ fontFamily: "Roboto", cursor:'pointer' }}>
                Origin
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            body={originBodyTemplate}
            headerClassName="custom-header p-3"
            className="p-3" style={{width:'200px'}}
          ></Column>
          <Column
            field="destination"
            header={
              <span className="p-3" onClick={() => onSort("destination", sortOrder === 1 ? -1 : 1)}
              style={{ fontFamily: "Roboto", cursor:'pointer' }}>
                Destination
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            body={destinationBodyTemplate}
            className="p-3" style={{width:'200px'}}
          ></Column>
          <Column
            field="booked_on"
            header={
              <span className="p-3">
                Booked on
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            bodyClassName="custom-cell"
            className="p-3"
          ></Column>
          <Column
            field="etd/atd"
            header={
              <span className="p-3">
                ETD/ATD
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            bodyClassName="custom-cell"
            className="p-3"
          ></Column>
          <Column
            field="eta/ata"
            header={
              <span className="p-3">
                ETA/ATA
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            bodyClassName="custom-cell"
            className="p-3"
          ></Column>
          <Column
            field="status"
            header={<span className="p-3">Status</span>}
            bodyClassName={(rowData) =>
              rowData.status === "Booking In Progress"
                ? "booking-progress-cell"
                : "booked-cell "
            }
            className=" m-3 px-2"
          ></Column>
          <Column
          field="action"
             body={actionBodyTemplate}
            header={<span className="p-3">Action</span>}
            className="p-3"
          ></Column>
        </DataTable>

        <Pagination
          currentPage={currentPage}
           setCurrentPage={setCurrentPage}
          totalItems={bookingData?.lastPage} 
          itemsPerPage={bookingData?.perPage} 
        />
      </div>
         <Steppertrack isModalOpen={isModalOpen} handleCancel={handleCancel} rowData={modalRowData}/>
   </div>
  );
};
  
export default AllBookings;
