import React, { useEffect, useRef, useState } from 'react'
import uaeFlag from '../../../assets/ae.svg'
import indFlag from '../../../assets/in.svg'
import ship from '../../../assets/Ship.svg'
import menuIcon from '../../../assets/menuDots.png'
import rightArrow from '../../../assets/rigtharrow.png'
import OrImg from '../../../assets/orSymbol.png'
import co2 from '../../../assets/Co2 Icons-05 1.png'
import lcl from '../../../assets/LCL.svg'
import { Link } from 'react-router-dom'
import Stepper  from './Track/Stepper'
import { Card, Dropdown, Space, message } from 'antd'
import './ShipmentHeader.css'
import Modal from './Modal/Modal'
import TransactionModal from './Modal/TransactionModal'
import CancelBookingModal from './Modal/CancelBookingModal'
import CancelRequestModal from './Modal/CancelRequestModal'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { ViewBookingAction } from '../../../Redux/Actions/ViewBookingAction'

const ShipmentHeader = () => {

  //get ApiData
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(ViewBookingAction())
  },[])
  const bookingData = useSelector((state)=>state.ViewBooking)
  console.log("bookingData",bookingData);
  const ViewBooking = bookingData?.viewBookingData?.customercode
  console.log("view", ViewBooking);

  // for Cancel Booking Dropdown
  const onClick = ({ key }) => {
    handleCancelOpen()
  };
  const items = [
    {
      label: 'Cancel Booking',
      key: '1',
    }
  ];

  //transaction_modal
  
  const [openTransmodal,setOpenTransModal] = useState(false)
  const handleOpen =()=>{
    setOpenTransModal(true)
  }
  const handleClose =()=>{
    setOpenTransModal(false)
  }
  //cancel_booking_modal
  const [openCancelmodal,setOpenCancelModal] = useState(false)
  const handleCancelOpen =()=>{
    setOpenCancelModal(true)
  }
  const handleCancelClose =()=>{
    setOpenCancelModal(false)
  }
   //cancel_request_modal
   const [openReqmodal,setOpenReqmodal] = useState(false)
   const handleReqOpen =()=>{
       setOpenReqmodal(true)
   }
   const handleReqClose =()=>{
       setOpenReqmodal(false)
   }

   const getlastStatus = document.getElementsByClassName('Inprogress')
   const getlastCompleteStatus = document.getElementsByClassName('Complete')

  //  for_ongoing-status_of_focus_milestones

   const stepbox = useRef(null)

   useEffect(()=>{
    if(getlastStatus){
      stepbox.current.scrollLeft = getlastStatus[0]?.offsetLeft
    }else if(getlastCompleteStatus){
      stepbox.current.scrollLeft = getlastCompleteStatus[0]?.offsetLeft
    }
   },[])

   //drag and drop

   const [showLeftArrow,setShowLeftArrow] = useState(true)
   const [showRightArrow,setShowRightArrow] = useState(true)

  //  const scrollLeftValue = getDoc.scrollLeft
  //  console.log(scrollLeftValue)

   


   const manageIcons = () =>{
      let ScrollValue = Math.round(stepbox.current.scrollLeft)
      let maxscrollwidth = stepbox.current.scrollWidth - stepbox.current.clientWidth
      if(ScrollValue>0){
        setShowLeftArrow(true)
      }
      else{
        setShowLeftArrow(false)
      }
     
      if(maxscrollwidth > ScrollValue){
        setShowRightArrow(true)
      }
      else{
        setShowRightArrow(false)
      }
   }


   const [isDragging,setIsDragging] = useState(false)

   const dragging =(e)=>{
      // if(!isDragging) return;
      stepbox.current.scrollLeft -= e.movementX
      manageIcons()
   }
   const dragStop = () =>{
      setIsDragging(false)
   }


   const handleScrollLeft =()=>{
    stepbox.current.scrollLeft -= 125
    manageIcons()
   }
   const handleScrollRight =()=>{
    stepbox.current.scrollLeft += 125
    manageIcons()
   }

  return (
    <>
        <Card
          style={{
            width: "100%",
          }}
          className='container mx-auto p-0 mob_response ship_section'
          id='mobile_margin'
        >
            <div className="row reference_row">
                  <div className="col-3">
                    <h6 className='me-2 m-0'>HBL Number:</h6>
                    <h6 className='m-0'>121014000112</h6>
                  </div>
                  <div className="col-4">
                    <h6 className='m-0 me-2'>Customer Reference (PO#):</h6>
                    <h6 className='m-0'>ADK-23-1198</h6>
                  </div>
            </div>
            <div className="row destination_row">
                <div className="col-10 left_column">
                    <div className="from_box">
                        <img src={uaeFlag} alt="" className="flag_img me-2" />
                        <p className='m-0'>Jebel Ali (AEJEA)</p>
                        <img src={rightArrow} alt="" className='mx-3' />
                    </div>
                    <div className="to_box">
                        <img src={indFlag} alt="" className='flag_img me-2' />
                        <p className='m-0'>Nhava Sheva (INNSA)</p>
                        <img src={OrImg} alt="" className='mx-3' />
                    </div>
                    <div className="estimate_box">
                        <img src={ship} alt="" className='me-2' />
                        <p className='m-0'>Est. T/T</p>
                        <p className='mx-2 m-0'>9 Days (5 Days Port to Port)</p>
                    </div>
                </div>
                <div className="col-2 right_column">
                    <div className="bookedButton me-3">
                       <Link>Booked</Link>
                    </div>
                    <div className="menu_icon">
                    <Dropdown
                      menu={{
                        items,
                        onClick,
                      }}
                    >
                    <a onClick={(e) => e.target.value}>
                      <Space>
                        {/* Hover me, Click menu item
                        <DownOutlined /> */}
                        <img src={menuIcon} alt="" />
                      </Space>
                    </a>
                    </Dropdown>
                    </div>
                </div>
            </div>
            <div className="booking_row" >
                <div className="booking_content">
                  <p className='m-0 mb-1'>Booking Date</p>
                  <p className='m-0'>10 May, 2023</p>
                </div>
                <div className="booking_content">
                  <p className='m-0 mb-1'>Estimated time of Departure</p>
                  <p className='m-0'>12 May, 2023</p>
                </div>
                <div className="booking_content">
                  <p className='m-0 mb-1'>Estimated time of Arrival</p>
                  <p className='m-0'>20 May, 2023</p>
                </div>
                <div className="booking_content">
                  <p className='m-0 mb-1'>Mode</p>
                  <p className='m-0'><img className='me-1' src={lcl} />LCL</p>
                </div>
                <div className="booking_content">
                  <p className='m-0 mb-1'>Incoterm</p>
                  <p className='m-0 text-center'>FOB</p>
                </div>
                <div className="booking_content">
                  <p className='m-0 mb-1'>Rate is Valid Till</p>
                  <p className='m-0'>31 May, 2023</p>
                </div>
            </div>
            <div className="booking_status_row" style={{position:"relative"}}>
                <div className="table-responsive dragging" 
                  ref={stepbox} 
                  id="tab" 
                  onMouseDown={()=>setIsDragging(true)} 
                  onMouseUp={()=>dragStop()}
                  onMouseMove={(e)=>dragging(e)}
                >            
                    <div className='arrow_icon'>
                        {
                          showLeftArrow && <IoIosArrowBack size={17} color='rgb(109 114 120)' onClick={()=>handleScrollLeft()} />
                        }
                        
                    </div>
                    <Stepper />
                    <div className='arrow_icon'>
                        {
                          showRightArrow && <IoIosArrowForward size={17} color='rgb(109 114 120)' onClick={()=>handleScrollRight()}  />

                        }                     
                    </div>
                </div>
            </div>
            <div className="estimated_row">
              <div className="estimated_header">
                <img src={co2} alt="" />
                <p className='m-0'>Emissions</p>
                <p className='m-0'>Estimated:<span className='ms-2'>22 tons</span></p>
              </div>
              <div className="estimated_body">
                <p className='m-0'>Actual calculations will be available once the shipment is complete.</p>
              </div>
            </div>
        </Card>
        <Modal isOpen={openTransmodal} width={"527px"} height={"585px"}> 
              <>
                    <TransactionModal handleClose={handleClose} />
              </>
        </Modal>
        <Modal isOpen={openCancelmodal} width={"563px"} height={"341.6px"}> 
              <>
                    <CancelBookingModal handleCancelClose={handleCancelClose} handleReqOpen={handleReqOpen} />
              </>
        </Modal>
        <Modal isOpen={openReqmodal} width={"563px"} > 
              <>
                  <CancelRequestModal handleReqClose={handleReqClose} />
              </>
        </Modal>
        

    </>
  )
}

export default ShipmentHeader