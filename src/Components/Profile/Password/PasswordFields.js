import React from 'react'
import lockIcon from '../../../assets/Loack.svg'
import { Form, Input } from 'antd'

const PasswordFields = ({handleChange}) => {
  return (
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
  )
}

export default PasswordFields