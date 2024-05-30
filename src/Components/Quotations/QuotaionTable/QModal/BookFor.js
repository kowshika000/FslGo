import React from 'react'
import { Modal } from 'antd'

const BookFor = ({bookForModal, handleCancel}) => {
  return (
    <Modal open={bookForModal} onCancel={handleCancel}>
        <div>Book For</div>
    </Modal>
  )
}

export default BookFor