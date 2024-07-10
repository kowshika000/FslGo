import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import { Typography } from '@mui/material';
import QuotationTabs from './QuotaionTable/QuotationTabs';
import "./Quotation.css";
import ShipmentCard from '../ShipmentBooking/ShipmentCard';
import FindNewRate from './QuotaionTable/QModal/FindNewRate/FindNewRate';

const Quotation = () => {
  const [showReselt, setShowReselt] = useState(false)
  return (
    <div style={{width:"100%", background: "linear-gradient(to bottom, white 20%,  rgb(248, 250, 252) 15%)",}}>
      <div style={{maxWidth:'1255px'}} className='shipmentIndex py-5 mx-auto' >
      <Typography style={{fontSize:'28px', fontWeight:'700'}} className='shipments-head'>Quotations</Typography>
     <div>
     <Navbar/> 
     </div>
     <ShipmentCard showReselt={showReselt} setShowReselt={setShowReselt} />
     {showReselt ? <FindNewRate/> : <QuotationTabs/>}
     {/* <QuotationTabs/> */}
     </div>
    </div>
  )
}

export default Quotation