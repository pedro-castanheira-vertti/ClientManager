import React from 'react'
import './styleModal.css'


export default function ModalCreateUser({ isOpen, setModalOpen }) {
    if (isOpen) {
        return (
            <div className='containerModal'>
                <div className='modal'>
                    <button className='closeModal' onClick={() => setModalOpen(false)}>Fechar</button>
                </div>
            </div>
        )
    }

    return null
}
