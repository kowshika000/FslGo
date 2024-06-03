import React, { useState } from 'react'
import './Password.css'
import { Checkbox, Flex } from 'antd'
import PasswordFields from './PasswordFields'
import PasswordRules from './PasswordRules'
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
      
     <div className="row m-0 profile_password_row">
            <PasswordFields handleChange={handleChange} />
            <PasswordRules />
     </div>
    </>

  )
}

export default Password