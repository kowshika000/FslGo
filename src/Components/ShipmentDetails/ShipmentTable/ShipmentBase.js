import React, { useState } from 'react'
import ShipmentHeader from './ShipmentHeader';
import StepperColumn from './Track/StepperColumn';
import { Breadcrumb, Button, Card, Dropdown } from 'antd';
import './ShipmentBase.css'
import PendingActionsBase from './PendingActions/PendingActionsBase';
import ShipmentDocuments from './Documents/ShipmentDocuments';
import BookingSummary from './BookingSummary/BookingSummary';
import QuoteDetails from './QuoteDetails/QuoteDetails';
import VerticalTab from './Track/TabBase';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ShipmentTable from './ShipmentTable';
import { RightOutlined } from '@ant-design/icons';
import TabBase from './Track/TabBase';
import { hover } from '@testing-library/user-event/dist/hover';
import { IoMdChatboxes } from 'react-icons/io';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShipmentBase = () => {

  const bookingData = useSelector((state)=>state.ViewBooking)
  console.log("bookingData",bookingData);
  const ViewBooking = bookingData?.viewBookingData?.customercode
  const OriginMilestones = bookingData?.viewBookingData?.milestone_origin
  const TransitMilestones = bookingData?.viewBookingData?.milestone_transit
  const DestinationMilestones = bookingData?.viewBookingData?.milestone_destination
  console.log("OriginMilestones", OriginMilestones);

    const tabListNoTitle = [
        {
          key: 'PendingActions',
          label: 'Pending Actions',
        },
        {
          key: 'BookingSummary',
          label: 'Booking Summary',
        },
        {
          key: 'QuoteDetails',
          label: 'Quote Details',
        },
        {
          key: 'Documents',
          label: 'Documents',
        },
        {
          key: 'Track',
          label: 'Track',
        },
    
      ];

      const steps = [
        {
            step:'Booking Created',
            body:'Booking done on 11/05/2023 at 02:20 PM'
        },
        {
            step:'Cargo Picked up',
            body:'Cargo will be Picked up  on 13/05/2023.'
        },
        {
            step:'Cargo Received',
            body:'Cargo will be ready for shipping on 15/05/2023'
        },
        {
            step:'Cargo Picked up',
            body:'Cargo will be Picked up  on 13/05/2023.'
        },
        {
            step:'Cargo Received',
            body:'Cargo will be ready for shipping on 15/05/2023'
        },
        {
            step:'Cargo Received',
            body:'Cargo will be ready for shipping on 15/05/2023'
        },
        
        
    ]

    
    
      const contentListNoTitle = {
        // PendingActions: <PendingActionsBase />,
        PendingActions: <TabBase />,
        BookingSummary: <BookingSummary />,
        QuoteDetails: <QuoteDetails />,
        Documents: <ShipmentDocuments />,
        Track: <>
          <p 
              style={{
                fontWeight:"600",
                fontSize:"17px",
                lineHeight:"19px",
                letterSpacing:".01em",
                margin:"15px 0px",
              }}
          >Origin Milestones</p>
          <StepperColumn step={OriginMilestones}  />
          <p 
              style={{
                fontWeight:"600",
                fontSize:"17px",
                lineHeight:"19px",
                letterSpacing:".01em",
                margin:"15px 0px",
              }}
          >Transit Milestones</p>
          <StepperColumn step={TransitMilestones}  />
          <p 
              style={{
                fontWeight:"600",
                fontSize:"17px",
                lineHeight:"19px",
                letterSpacing:".01em",
                margin:"15px 0px",
              }}
          >Destination Milestones</p>
          <StepperColumn step={DestinationMilestones}  />
        </>,
      };

      const items = [
        {
          key: '1',
          label: <Button type='link' style={{color:"black",textDecoration:"none"}} icon={<IoMdChatboxes size={20} />} ><span className='ms-2'>Start Chat</span></Button>,
        },
        {
          key: '2',
          label: <Button type='link' style={{color:"black",textDecoration:"none"}} icon={<FaPhoneVolume size={17} />} ><span className="ms-2">Request Callback</span></Button>,
        },
        {
          key: '3',
          label: <Button type='link' style={{color:"black",textDecoration:"none"}} icon={<IoMail size={20} />} ><span className="ms-2">Email Us</span></Button>,
        },
      ];
    
      

  return (

          <div className="shipment_details_section container-fluid p-0" style={{marginTop:"4.7rem",backgroundColor: "#F3F5F7"}} >
              <div className="black_box container-fluid"></div>
              <div className="shipment_container">
                  <div className="row shipment_ID_row" style={{marginTop:"20px",marginBottom:"20px"}}>
                      <div className="shipment_ID" style={{marginBottom:"4px"}}>
                          <p className='m-0 text-white'>Shipment ID :&nbsp; 
                          {
                            ViewBooking?.map((item)=>{
                              return <span>{item.booking_id}</span>
                            }
                            )
                          }
                          </p>
                      </div>
                      <div className="breadCrumb d-flex justify-content-between align-items-center">
                        <Breadcrumb
                            separator={<RightOutlined style={{ fontSize: '11px', color: '#ACB8C4' }} />}
                            items={[
                              {
                                title: <Link 
                                style={{
                                  color:"#ACB8C4",
                                  fontWeight:"400",
                                  fontSize:'14px',
                                  letterSpacing:'.01em',
                                  textDecoration:"none"
                                }} 
                                to='/'>Home</Link>,
                              },
                              {
                                title: 'Shipments',
                              },
                              {
                                title: 'Shipments Details',
                              }
                            ]}
                            className='text-white'
                        />
                        <Dropdown
                            menu={{
                              items,
                            }}
                            placement="bottomRight"
                            arrow
                          >
                            <p className="m-0">Need Help?</p>
                        </Dropdown>

                      </div>
                  </div>
                  <div className="row shipment_header">
                        <ShipmentHeader />
                        <ShipmentTable contentListNoTitle={contentListNoTitle} tabListNoTitle={tabListNoTitle}  />
                  </div>
              </div>
          </div>
  )
}

export default ShipmentBase