import React from 'react'
import './ModalCreateUser.css'
import RegisterUser from './PostUser.jsx'

export default function ModalCreateUser({ isOpen, closeModal, onUserCreated }) {
    if (!isOpen) return null;

    return (
        <div className='containerModal' onClick={closeModal}>
            <div className='modal' onClick={e => e.stopPropagation()}>
                <RegisterUser
                    closeModal={closeModal}
                    onUserCreated={onUserCreated}
                />
            </div>
        </div>
    )
}
