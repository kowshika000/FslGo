import { Modal } from 'antd'
import React from 'react'

const Requested = ({requstedModal,handleCancel}) => {
  return (
    <Modal open={requstedModal} onCancel={handleCancel} >
    <div>Requested</div>
    </Modal>
  )
}

export default Requested