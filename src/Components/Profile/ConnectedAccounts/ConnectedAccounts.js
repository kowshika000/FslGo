import React, { useState } from 'react'
import './ConnectedAccounts.css'
import AccountBox from './AccountBox'
import Modal from '../../ShipmentDetails/ShipmentTable/Modal/Modal'
import CreatePasswordModal from '../Modals/CreatePasswordModal'

const ConnectedAccounts = () => {

  const [open, setOpen] = useState(false) 

  return (
    <>
        <div className="manage_accounts_description">
            <p className='m-0'>Manage Your Accounts</p>
            <p className='m-0'>All your social media accounts used to login can be managed from this page</p>
        </div>
        <AccountBox setOpen={setOpen} />
        <Modal isOpen={open} width="560px">
            <CreatePasswordModal setOpen={setOpen} />
        </Modal>
    </>
  )
}

export default ConnectedAccounts