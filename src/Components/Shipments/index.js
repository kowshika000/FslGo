import React from 'react'
import Map from './Map';
import BookingTabs from './ShipmentTable/BookingTabs';
import { Typography } from '@mui/material';
import Navbar from '../Layout/Navbar';
import './ShipBookingTabs.css'
import MapboxMap from './MapBox';


const ShipmentsHome = () => {
  const currentPath = "/shipments";

  return (
    <div style={{maxWidth:'1255px'}} className='shipmentIndex py-5 mx-auto' >
      <Typography style={{fontSize:'28px', fontWeight:'700'}} className='shipments-head'>Shipments</Typography>
      <div >
      <Navbar />
      </div>
    <Map/>
    {/* <MapboxMap/> */}
    <br/>
    <BookingTabs/>
    </div>
  )
}

export default ShipmentsHome