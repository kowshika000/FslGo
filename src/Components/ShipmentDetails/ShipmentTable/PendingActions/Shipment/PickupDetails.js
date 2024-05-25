import React, { useState } from 'react'
import './ShipperDetails.css'
import {  Form, Input } from 'antd'
import { HiArrowRightCircle,  HiOutlineGlobeAsiaAustralia } from 'react-icons/hi2'
import { MdOutlineMail } from 'react-icons/md'
import { FiFlag } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { GlobalOutlined } from '@ant-design/icons'
import user from '../../../../../assets/Name.svg'
import office from '../../../../../assets/Company Name.svg'
import zipcode from '../../../../../assets/Zip Code.svg'
import taxid from '../../../../../assets/Tax ID.svg'
import address from '../../../../../assets/Address.svg'
import email from '../../../../../assets/Email.svg'
import phone from '../../../../../assets/PhoneGlobe.svg'
import city from '../../../../../assets/City.svg'
import country from '../../../../../assets/Country.svg'
import Edit from '../../../../../assets/Edit.svg'
import Tick from '../../../../../assets/Component 27.svg'
import CustomCheckBox from '../../Track/CustomCheckBox'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'

const PickupDetails = () => {

    const [open,setOpen] = useState(false)

  return (
    <div className='pickup_section' >
        <div className="row pickup_details_row mx-1" >
            <div className="col-12 p-0 d-flex justify-content-between align-items-center mb-2">
                <div className="left_details d-flex align-items-start">
                    <span className='me-2'>3</span>
                    <div className="Shipper_title">
                        <p className='m-0 mb-2'>Pickup Details</p>
                        <p className='m-0'>Enter pickup address details</p>
                    </div>
                </div>
                <div className="right_details me-4">
                    <img className='me-2' src={Tick} alt="complete" />
                    {/* <img src={Edit} alt="edit" onClick={()=>setOpen((prev)=>!prev)} style={{cursor:"pointer"}} /> */}
                    {
                            !open ? <BiSolidDownArrow onClick={()=>setOpen((prev)=>!prev)} style={{cursor:"pointer"}} />:
                            <BiSolidUpArrow onClick={()=>setOpen((prev)=>!prev)} style={{cursor:"pointer"}} />
                        }
                </div>
            </div>
            {
                open && 
                <>           
                    <div className="row" style={{padding:"0px 18px"}}>
                        {/* <div className="row w-100 mb-3">
                            <div className="col-6 my-2">
                                <CustomCheckBox children={"Same as Shipper"} styleofChild={{fontWeight:"400",color:"#181E25",fontSize:"14px",LineHeight:"24px",letterSpacing:".01em"}} />
                            </div>
                            <div className="col-6">
                                <p className="m-0 add_saved_address">+ Add From Saved Addresses</p>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-6">
                            <Form layout="vertical" autoComplete="off">
                                <Form.Item
                                    hasFeedback
                                    label="Name"
                                    name="Name"
                                    validateTrigger="onBlur"
                                    rules={[{
                                        required: true,
                                        },]}
                                    >
                                    <Input size="large" placeholder="Type here" prefix={<img src={user}></img>} />
                                </Form.Item>
                            </Form>
                            </div>
                            <div className="col-6">
                            <Form layout="vertical" autoComplete="off">
                                <Form.Item
                                    hasFeedback
                                    label="Company Name"
                                    name="Company Name"
                                    validateTrigger="onBlur"
                                    rules={[{
                                        required: true,
                                        },]}
                                    >
                                    <Input size="large" placeholder="Type here" prefix={<img src={office}></img>} />
                                </Form.Item>
                            </Form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                            <Form layout="vertical" autoComplete="off">
                                <Form.Item
                                    hasFeedback
                                    label="Email"
                                    name="Email"
                                    validateTrigger="onBlur"
                                    rules={[{
                                        required: true,
                                        },]}
                                    >
                                    <Input size="large" placeholder="Johndee@gmail.com" prefix={<img src={email}></img>} />
                                </Form.Item>
                                </Form>
                            </div>
                            <div className="col-6">
                                <Form layout="vertical" autoComplete="off">
                                    <Form.Item
                                        hasFeedback
                                        label="Phone Number"
                                        name="Phone Number"
                                        validateTrigger="onBlur"
                                        rules={[{
                                        required: true,
                                        },]}
                                        >
                                        <Input size="large" placeholder="Mobile Number" prefix={<img src={phone}></img>} />
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Form layout="vertical" autoComplete="off">
                                    <Form.Item
                                        hasFeedback
                                        label="Address"
                                        name="Address"
                                        validateTrigger="onBlur"
                                        rules={[{
                                        required: true,
                                        },]}
                                        >
                                        <Input size="large" placeholder="Lorem Ipsum" prefix={<img src={address}></img>} />
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="col-6">
                            <Form layout="vertical" autoComplete="off">
                                <Form.Item
                                    hasFeedback
                                    label="City"
                                    name="City"
                                    validateTrigger="onBlur"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >
                                    <Input size="large" placeholder="Type here" prefix={<img src={city}></img>} />
                                </Form.Item>
                            </Form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Form layout="vertical" autoComplete="off">
                                    <Form.Item
                                        hasFeedback
                                        label="Zipcode"
                                        name="Zipcode"
                                        validateTrigger="onBlur"
                                        rules={[{
                                        required: true,
                                        },]}
                                        >
                                        <Input size="large" placeholder="Type here" prefix={<img src={zipcode}></img>} />
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="col-6">
                            <Form layout="vertical" autoComplete="off">
                                <Form.Item
                                    hasFeedback
                                    label="Tax ID"
                                    name="Tax ID"
                                    validateTrigger="onBlur"
                                    rules={[{
                                        required: true,
                                        },]}
                                    >
                                    <Input size="large" placeholder="Type here" prefix={<img src={taxid}></img>} />
                                </Form.Item>
                            </Form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                            <Form layout="vertical" autoComplete="off">
                                <Form.Item
                                    hasFeedback
                                    label="Country"
                                    name="Country"
                                    validateTrigger="onBlur"
                                    rules={[{
                                        required: true,
                                        },]}
                                    >
                                    <Input size="large" placeholder="Type here" prefix={<img src={country}></img>} />
                                </Form.Item>
                            </Form>
                            </div>
                            <div className="col-6">
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{padding:"0px 41px"}}>
                        <div className="btn_save_group d-flex align-items-center">
                            <Link className='btn_save ms-auto'>Next<span className='ms-2'><HiArrowRightCircle size={22} color='white' /></span></Link>
                        </div>
                    </div>
                </>
            }
        </div>
    </div>
  )
}

export default PickupDetails