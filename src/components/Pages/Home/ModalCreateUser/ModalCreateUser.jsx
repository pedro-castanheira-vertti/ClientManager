import React from 'react'
import CreateUser from './CreateUser/CreateUser'

export default function ModalCreateUser({ isOpen, closeModal, onUserCreated }) {
    if (!isOpen) return null;

    return (
        <div className='containerModal' onClick={closeModal}>
            <div className='modal' onClick={e => e.stopPropagation()}>
                <CreateUser
                    closeModal={closeModal}
                    onUserCreated={onUserCreated}
                />
            </div>
        </div>
    )
}
