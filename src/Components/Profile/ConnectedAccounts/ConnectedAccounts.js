import React from 'react'
import './ConnectedAccounts.css'
import AccountBox from './AccountBox'

const ConnectedAccounts = () => {
  return (
    <>
        <div className="manage_accounts_description">
            <p className='m-0'>Manage Your Accounts</p>
            <p className='m-0'>All your social media accounts used to login can be managed from this page</p>
        </div>
        <AccountBox />
    </>
  )
}

export default ConnectedAccounts