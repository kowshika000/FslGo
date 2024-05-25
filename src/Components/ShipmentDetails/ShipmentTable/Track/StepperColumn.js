import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'

const StepperColumn = ({step}) => {

    const [activeYellow,setActiveYellow] = useState(2)
    const [activeGreen,setActiveGreen] = useState(1)

  return (
    <div className='stepper_column d-flex flex-column justify-content-between' style={{maxWidth:"1400px"}}>
        {
            step?.map((step,i)=>(
                <div className='d-flex flex-row step-item' >
                     <div key={i} className={`me-5 ${activeYellow===i+1 && "ongoing"} ${activeGreen===i+1 && 'complete'}`} style={{zIndex:"1"}}>
                        <p className='m-0 step'>
                            {
                                activeGreen==i+1?<TiTick size={20} color='white' />:
                            
                            <div style={{backgroundColor:"#ACB8C4",borderRadius:"50%",width:"10px",height:"10px"}}>
                                
                            </div>
                            }
                        </p>
                    </div>
                    <div className="step_body">
                        <p className='m-0' style={{color:"#181E25"}}>{step.step}</p>
                        <p className='m-0' >{step.body}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default StepperColumn