import React from 'react'
import './CreatePasswordModal.css'
import { Button, Flex, Form, Input, Space } from 'antd'
import { GoLock } from "react-icons/go";
import { VscClose } from 'react-icons/vsc';

const CreatePasswordModal = ({setOpen}) => {
  return (
    <div className='create_password_modal p-5' style={{position:"relative"}}>
      <p className='m-0'>Create a Password</p>
      <p className='m-0'>You need to create a password before you unlink your FSL Account from your social login</p>
      <Form layout="vertical" autoComplete="off" style={{marginBottom:"20px"}}>
          <Form.Item
              hasFeedback
              label="New Password"
              name="NewPassword"
              validateTrigger="onBlur"
              >
              <Input size="large" placeholder="Enter Password" prefix={<GoLock />} name="newpass"  />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
          </Form.Item>
          <Form.Item
              hasFeedback
              label="Confirm Password"
              name="ConfirmPassword"
              validateTrigger="onBlur"
              >
              <Input size="large" placeholder="Enter Password" prefix={<GoLock />} name="confirmpass"  />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
          </Form.Item>
          <Flex justify='end'>
              <Button size="large" className='me-4'>Cancel</Button>
              <Button size="large" style={{color:"white",backgroundColor:"#D40E0E"}}>Save</Button>
          </Flex>
      </Form>
      <VscClose size={22} color='#fff' role='button' style={{position:"absolute",right:"-25px",top:"1px"}} onClick={()=>setOpen(false)} />
    </div>
  )
}

export default CreatePasswordModal