import React, { useEffect, useRef, useState } from 'react'
import './Stepper.css'

const Stepper = () => {

  const steps = [
    {
        step:'Booking Created',
        body:'(01/05/2023)',
        completed:true,
        processing:false
    },
    {
        step:'Cargo Picked up',
        body:'--',
        completed:false,
        processing:true
    },
    {
        step:'Cargo Received',
        body:'(01/05/2023)',
        completed:false,
        processing:false
    },
    {
        step:'Shipment Departed',
        body:'--',
        completed:false,
        processing:false
    },
    {
        step:'Shipment Arrived',
        body:'--',
        completed:false,
        processing:false
    },
    {
        step:'DO Issued',
        body:'--',
        completed:false,
        processing:false
    },
    {
        step:'Cargo Delivered',
        body:'--',
        completed:false,
        processing:false
    },
    
]



  return (
    <div className='stepper d-flex justify-content-between' style={{minWidth:"1585px",width:"100%",overflowX:"hidden",scrollBehavior:"smooth"}} >
        {
            steps?.map((step,i)=>{
                return(
                            <div key={i+1} className={`step-item step-item-${i+1} ${step.processing && "Inprogress"} ${step.completed && 'Complete'}`}>
                                <p className='m-0 step mb-1'>
                                    <div style={{backgroundColor:"#ACB8C4",borderRadius:"50%",width:"10px",height:"10px"}}></div>
                                </p>
                                <p className='m-0 ' style={{color:"#181E25"}}>{step.step}</p>
                                <p className='m-0' >{step.body}</p>
                            </div>
                )
            }         
        )
        }
    </div>
  )
}

export default Stepper