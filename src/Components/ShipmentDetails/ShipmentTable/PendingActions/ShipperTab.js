import React from 'react'
import ShipperDetails from './Shipment/ShipperDetails'
import ConsigneeDetails from './Shipment/ConsigneeDetails'
import PickupDetails from './Shipment/PickupDetails'
import DeliveryDetails from './Shipment/DeliveryDetails'

const ShipperTab = () => {
  return (
    <div className='shipper_section'>
              <ShipperDetails />
              <ConsigneeDetails />
              <PickupDetails />
              <DeliveryDetails />
    </div>
  )
}

export default ShipperTab