import React, { useState } from 'react'
import './Password.css'
import { Checkbox, Flex } from 'antd'
import PasswordFields from './PasswordFields'
import PasswordRules from './PasswordRules'
const Password = () => {

  const [passwordInput, setPasswordInput] = useState(
    {
      old_password:"",
      new_password:"",
      confirm_password:"",
  }
)

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  // const [checkboxvalues,setCheckboxValues] = useState(
  //   {
  //     googlelogin:false,
  //     manuallogin:false
  //   }
  // )
  // console.log(checkboxvalues)

  // const onChange = (e) => {
  //   setCheckboxValues((prev)=>{
  //     return {
  //       ...prev,[e.target.name]:e.target.checked
  //     }
  //   });
  // };

  const handleChange =(e)=>{
    setPasswordInput((prev)=>{
        return {
            ...prev,[e.target.name]:e.target.value
        }
    })
}

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(passwordInput)
  }

  return (
    <>
      <div className="password_description">
            <p className='m-0'>Manage Your Login Options & Password </p>
            <p className='m-0'>You can Manage Your Login Options or change your account password from this page. </p>
      </div>
      {/* <Flex className='mb-3'>
        <Checkbox name="googlelogin" onChange={onChange}
            style={{
              fontWeight:"500",
              fontSize:"13px",
              lineHeight:"19px",
              letterSpacing:".01em",
              color:"#29333D",
              marginRight:"30px"
            }}
        >Use Google account to login</Checkbox>
        <Checkbox name="manuallogin" onChange={onChange}
            style={{
              fontWeight:"500",
              fontSize:"13px",
              lineHeight:"19px",
              letterSpacing:".01em",
              color:"#384656",
            }}
        >Use Email/Phone & password</Checkbox>
      </Flex> */}
      
     {/* {
      checkboxvalues.manuallogin && <div className="row m-0 profile_password_row">
                                        <PasswordFields handleChange={handleChange} />
                                        <PasswordRules />
                                    </div>
     } */}
      <div className="row m-0 profile_password_row">
                                        <PasswordFields handleChange={handleChange} passwordInput={passwordInput} handleSubmit={handleSubmit} onFinish={onFinish} onFinishFailed={onFinishFailed} />
                                        <PasswordRules />
                                    </div>
    </>

  )
}

export default Password