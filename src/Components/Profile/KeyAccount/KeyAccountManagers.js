import React, { useState } from 'react'
import './KeyAccountManagers.css'
import AccountBox from './AccountBox'
import Modal from '../../ShipmentDetails/ShipmentTable/Modal/Modal'
import CreatePasswordModal from '../Modals/CreatePasswordModal'
import copyIcon from '../../../assets/profile_copy_icon.svg'
import { useCopyToClipboard } from 'usehooks-ts'

const KeyAccountManagers = () => {

  const [open, setOpen] = useState(false) 
  const [value,copy] = useCopyToClipboard()

  return (
    // <>
    //     <div className="manage_accounts_description">
    //         <p className='m-0'>Manage Your Accounts</p>
    //         <p className='m-0'>All your social media accounts used to login can be managed from this page</p>
    //     </div>
    //     <AccountBox setOpen={setOpen} />
    //     <Modal isOpen={open} width="560px">
    //         <CreatePasswordModal setOpen={setOpen} />
    //     </Modal>
    // </>
    <div className='Key_account_content'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Phone #</th>
              <th>Email Id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Waseem</td>
              <td>Sales</td>
              <td>123456789015756767
                <img src={copyIcon} style={{cursor:"pointer"}} onClick={()=>copy("123456789015756767")} className='mx-1'/>
              </td>
              <td>waseem.freightsystems.com <img src={copyIcon} onClick={()=>copy("waseem.freightsystems.com ")} style={{cursor:"pointer"}} className='mx-1'/></td>
            </tr>
            <tr>
              <td>Akram</td>
              <td>Customer Service</td>
              <td>12345678901
                <img src={copyIcon} onClick={()=>copy("12345678901")} style={{cursor:"pointer"}} alt="" className='mx-1'/>
              </td>
              <td>Akram.freightsystems.com<img src={copyIcon} onClick={()=>copy("Akram.freightsystems.com<img")} style={{cursor:"pointer"}} className='mx-1'/></td>
            </tr>
          </tbody>
      </div>
  )
}

export default KeyAccountManagers