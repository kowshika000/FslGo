import { Button, Modal } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Requested = ({requstedModal,handleCancel}) => {
  return (
    <Modal open={requstedModal} onCancel={handleCancel} style={{marginTop:"-70px"}}>
    <div className='px-5 py-4 text-center'>
      
      <div className='h4 '>Our team has received your request</div>
      <div className=''>We shall contact you soon regarding your request</div>

      <div className='pt-4 pb-1'>Uploaded Document</div>
      <div className='' style={{fontWeight:"500",fontSize:"15px"}}><Link style={{color:"black"}}>MSDS Document</Link></div>
      <div className='d-flex justify-content-center pt-4'>
      <Button type='primary' style={{
          background: "rgba(240, 30, 30, 1)",
          color: "white",
          borderRadius: "8px",
          height: "40px",

        }} >Okay</Button>
      </div>

    </div>
    </Modal>
  )
}

export default Requested