import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Dropdown } from 'antd';
import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoMdChatboxes } from 'react-icons/io';
import { IoMail } from 'react-icons/io5';
import './ProfileBase.css'
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileTable from './ProfileTable';
import ConnectedAccounts from './ConnectedAccounts/ConnectedAccounts';
import Transactions from './Transactions/Transactions';
import Password from './Password/Password';
import ReferEarn from './ReferEarn/ReferEarn';
import Addresses from './SavedAddresses/Addresses';

const ProfileBase = () => {

    const tabListNoTitle = [
        {
          key: 'ConnectedAccounts',
          label: 'Connected Accounts',
        },
        {
          key: 'SavedAddresses',
          label: 'Saved Addresses',
        },
        {
          key: 'Transactions',
          label: 'Transactions',
        },
        {
          key: 'Password',
          label: 'Password',
        },
        {
          key: 'ReferEarn',
          label: 'Refer & Earn',
        },
    
      ];

      const steps = [
        {
            step:'Booking Created',
            body:'Booking done on 11/05/2023 at 02:20 PM'
        },
        {
            step:'Cargo Picked up',
            body:'Cargo will be Picked up  on 13/05/2023.'
        },
        {
            step:'Cargo Received',
            body:'Cargo will be ready for shipping on 15/05/2023'
        },
        {
            step:'Cargo Picked up',
            body:'Cargo will be Picked up  on 13/05/2023.'
        },
        {
            step:'Cargo Received',
            body:'Cargo will be ready for shipping on 15/05/2023'
        },
        {
            step:'Cargo Received',
            body:'Cargo will be ready for shipping on 15/05/2023'
        },
        
        
    ]
    
      const contentListNoTitle = {
        ConnectedAccounts: <ConnectedAccounts />,
        SavedAddresses: <Addresses />,
        Transactions: <Transactions />,
        Password: <Password />,
        ReferEarn: <ReferEarn  />,
      };

      const items = [
        {
          key: '1',
          label: <Button type='link' style={{color:"black",textDecoration:"none"}} icon={<IoMdChatboxes size={20} />} ><span className='ms-2'>Start Chat</span></Button>,
        },
        {
          key: '2',
          label: <Button type='link' style={{color:"black",textDecoration:"none"}} icon={<FaPhoneVolume size={17} />} ><span className="ms-2">Request Callback</span></Button>,
        },
        {
          key: '3',
          label: <Button type='link' style={{color:"black",textDecoration:"none"}} icon={<IoMail size={20} />} ><span className="ms-2">Email Us</span></Button>,
        },
      ];

  return (
    <div className="profile_section container-fluid p-0" style={{marginTop:"4.7rem",backgroundColor: "#F3F5F7"}} >
              <div className="black_box container-fluid"></div>
              <div className="profile_container">
                  <div className="row profile_title_row" style={{marginTop:"20px",marginBottom:"20px"}}>
                      <div className="profile_title" style={{marginBottom:"4px"}}>
                          <p className='m-0 text-white'>Profile</p>
                      </div>
                      <div className="breadCrumb d-flex justify-content-between align-items-center">
                        <Breadcrumb
                            separator={<RightOutlined style={{ fontSize: '11px', color: '#ACB8C4' }} />}
                            items={[
                                {
                                    title: <Link 
                                             style={{
                                                color:"#ACB8C4",
                                                fontWeight:"400",
                                                fontSize:'14px',
                                                letterSpacing:'.01em',
                                                textDecoration:"none"
                                                }} 
                                    to='/'>Home</Link>,
                            },{
                                title:'Profile'
                            }
                            ]}
                            className='text-white'
                        />
                        <Dropdown
                            menu={{
                              items,
                            }}
                            placement="bottomRight"
                            arrow
                          >
                            <p className="m-0">Need Help?</p>
                        </Dropdown>

                      </div>
                  </div>
                  <div className="row profile_header">
                            <ProfileHeader />
                            <ProfileTable contentListNoTitle={contentListNoTitle} tabListNoTitle={tabListNoTitle} />
                  </div>
              </div>
          </div>
  )
}

export default ProfileBase