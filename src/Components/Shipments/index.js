import React from 'react'
import Map from './Map/Map';
import BookingTabs from './ShipmentTable/BookingTabs';
import { Typography } from '@mui/material';
import Navbar from '../Layout/Navbar';
import './ShipBookingTabs.css'
import MapboxMap from './Map/MapBox';


const ShipmentsHome = () => {
  const currentPath = "/shipments";

  return (
    <div style={{width:"100%", background: "linear-gradient(to bottom, white 55%,  rgb(248, 250, 252) 50%)",}}>
    <div style={{maxWidth:'1255px'}} className='shipmentIndex py-5 mx-auto' >
      <Typography style={{fontSize:'28px', fontWeight:'700'}} className='shipments-head'>Shipments</Typography>
      <div >
      <Navbar />
      </div>
    <Map/>
    {/* <MapboxMap/> */}
    <br/>
    <BookingTabs/>
    </div></div>
  )
}

export default ShipmentsHome