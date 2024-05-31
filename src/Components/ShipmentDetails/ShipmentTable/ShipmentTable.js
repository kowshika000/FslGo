import { Card } from 'antd'
import React, { useState } from 'react'
import './ShipmentTable.css'

const ShipmentTable = ({tabListNoTitle,contentListNoTitle}) => {

    const [activeTabKey, setActiveTabKey] = useState('Track');
        const onTab2Change = (key) => {
                setActiveTabKey(key);
    };

  return (
    <Card
          style={{
            width:"100%",
            boxShadow: "0px 6px 18px 0px #0000001A"
          }}
          className='container mx-auto p-0 mb-4 shipment_table_section'
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
    </Card>
  )
}

export default ShipmentTable