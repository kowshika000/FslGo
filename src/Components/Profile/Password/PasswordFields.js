import React from 'react'
import lockIcon from '../../../assets/Loack.svg'
import { Button, Form, Input } from 'antd'

const PasswordFields = ({handleChange,passwordInput,handleSubmit,onFinish,onFinishFailed}) => {
  return (
    <div className="col-5 form_content p-0">
        <Form layout="vertical" autoComplete="off" onFinish={onFinish}
    onFinishFailed={onFinishFailed} >
            <Form.Item
              hasFeedback
              label="Old password"
              name="Old passwordName"
              validateTrigger="onBlur"
              rules={[{
                required:true,
                message: 'Please enter old password!',
                },]}
            
            >
              <Input.Password size="large" placeholder="Enter password" prefix={<img src={lockIcon}></img>} name="old_password" value={passwordInput.old_password} onChange={handleChange} />
            </Form.Item>
          {/* </Form>
        <Form layout="vertical" autoComplete="off"> */}
            <Form.Item
              hasFeedback
              label="New password"
              name="New password"
              validateTrigger="onBlur"
              rules={[{
                required:true,
                message: 'Please enter new password!',
                },]}
            >
              <Input.Password size="large" placeholder="Enter password" prefix={<img src={lockIcon}></img>} name="new_password" value={passwordInput.new_password} onChange={handleChange} />
            </Form.Item>
          {/* </Form>
        <Form layout="vertical" autoComplete="off"> */}
            <Form.Item
              hasFeedback
              label="Confirm password"
              name="Confirm password"
              validateTrigger="onBlur"
              rules={[{
                required:true,
                message: 'Please enter confirm password!',
                },]}
            >
              <Input.Password size="large" placeholder="Enter password" prefix={<img src={lockIcon}></img>} name="confirm_password" value={passwordInput.confirm_password} onChange={handleChange} />
            </Form.Item>
            {/* <div className="save_btn">
                <Button htmlType="submit" >Save</Button>
            </div> */}
          </Form>
          <div className="save_btn">
            <button className='save_button' onClick={(e)=>handleSubmit(e)}>Update</button>
          </div>
      </div>
  )
}

export default PasswordFields