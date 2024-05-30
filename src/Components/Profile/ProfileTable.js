import React, { useState } from 'react'
import './ProfileTable.css'
import { Card } from 'antd'
import { Link } from 'react-router-dom';

const ProfileTable = ({tabListNoTitle,contentListNoTitle}) => {

    const [activeTabKey, setActiveTabKey] = useState('ConnectedAccounts');
        const onTab2Change = (key) => {
                setActiveTabKey(key);
    };

  return (
    <Card
          style={{
            width:"100%",
            boxShadow: "0px 6px 18px 0px #0000001A",
          }}
          className='container mx-auto p-0 mb-4 profile_table_section'
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          onTabChange={onTab2Change}
          tabProps={{
          size: 'middle',
          }}
        >
            <div style={{overflow:"auto",maxHeight:"500px"}}>
              {contentListNoTitle[activeTabKey]}
            </div>
            <Link 
                style={{
                    padding:"14.5px 19.5px",
                    backgroundColor:"#D40E0E",
                    fontWeight:"700",
                    fontSize:"12px",
                    lineHeight:"14.4px",
                    letterSpacing:"-0.02em",
                    borderRadius:"10px",
                    textDecoration:"none",
                    color:"#FFFFFF",
                    position:"absolute",
                    top:"6px",
                    right:"22px"
                }}
            >
                Notification Management
            </Link>
    </Card>
  )
}

export default ProfileTable