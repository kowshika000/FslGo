import React from 'react'
import Navbar from '../Layout/Navbar'
import { Typography } from '@mui/material';
import QuotationTabs from './QuotaionTable/QuotationTabs';
import "./Quotation.css";

const Quotation = () => {
  return (
    <div >
        <div style={{maxWidth:'1255px'}} className='shipmentIndex py-5 mx-auto' >
      <Typography style={{fontSize:'28px', fontWeight:'700'}} className='shipments-head'>Quotations</Typography>
     <div>
     <Navbar/>
     </div>
     <QuotationTabs/>
     </div>
    </div>
  )
}

export default Quotation