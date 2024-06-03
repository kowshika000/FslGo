import React, { useState } from 'react'
import './Password.css'
import { Checkbox, Flex, Form, Input } from 'antd'
import lockIcon from '../../../assets/Loack.svg'
import tikIcon from '../../../assets/tikIcon.svg'
const Password = () => {

  const [passwordInput, setPasswordInput] = useState('')
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleChange =(e)=>{
    setPasswordInput((prev)=>{
        return {
            ...prev,[e.target.name]:e.target.value
        }
    })
}

  return (
    <>
      <div className="password_description">
            <p className='m-0'>Manage Your Login Options & Password </p>
            <p className='m-0'>You can Manage Your Login Options or change your account password from this page. </p>
      </div>
      <Flex className='mb-3'>
        <Checkbox onChange={onChange}
            style={{
              fontWeight:"500",
              fontSize:"13px",
              lineHeight:"19px",
              letterSpacing:".01em",
              color:"#29333D",
              marginRight:"30px"
            }}
        >Use Google account to login</Checkbox>
        <Checkbox onChange={onChange}
            style={{
              fontWeight:"500",
              fontSize:"13px",
              lineHeight:"19px",
              letterSpacing:".01em",
              color:"#384656",
            }}
        >Use Email/Phone & password</Checkbox>
      </Flex>
      
     <div className="row">
      <div className="col-5 form_content p-0">
        <Form layout="vertical" autoComplete="off">
            <Form.Item
              hasFeedback
              label="Old password"
              name="Name"
              validateTrigger="onBlur"
            >
              <Input size="large" placeholder="Enter password" prefix={<img src={lockIcon}></img>} name="name" onChange={handleChange} />
            </Form.Item>
          </Form>
        <Form layout="vertical" autoComplete="off">
            <Form.Item
              hasFeedback
              label="New password"
              name="Name"
              validateTrigger="onBlur"
            >
              <Input size="large" placeholder="Enter password" prefix={<img src={lockIcon}></img>} name="name" onChange={handleChange} />
            </Form.Item>
          </Form>
        <Form layout="vertical" autoComplete="off">
            <Form.Item
              hasFeedback
              label="Confirm password"
              name="Name"
              validateTrigger="onBlur"
            >
              <Input size="large" placeholder="Enter password" prefix={<img src={lockIcon}></img>} name="name" onChange={handleChange} />
            </Form.Item>
          </Form>
          <div className="save_btn">
            <button className='save_button'>Save</button>
          </div>
      </div>
      <div className="col-5 password_contain" style={{paddingLeft:"70px"}}>
            <h6>Password Must Contain</h6>
            <div className='mt-3'>
              <img src={tikIcon} alt=""  className='me-2'/>
              <span>At least 8 characters</span>
            </div>
            <div className='mt-2'>
              <img src={tikIcon} alt=""  className='me-2'/>
              <span>Lowercase letter (a-z)</span>
            </div>
            <div className='mt-2'>
              <img src={tikIcon} alt=""  className='me-2'/>
              <span>Uppercase letter (A-Z)</span>
            </div>
            <div className='mt-2 number_contain'>
              <img src={tikIcon} alt="" className='me-2'/>
              <span>Number (0-9)</span>
            </div>
            <div className='mt-2 number_contain'>
              <img src={tikIcon} alt="" className='me-2'/>
              <span>Special characters (!"# %&'()*+,-./:;?@[\]^_`{}~)</span>
            </div>
      </div>
     </div>
    </>

  )
}

export default Password