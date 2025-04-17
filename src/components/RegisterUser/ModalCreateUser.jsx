import React, { useRef } from 'react'
import './ModalCreateUser.css'
import RegisterUser from './PostUser.jsx'

export default function ModalCreateUser({ isOpen, setModalOpen }) {
    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()
    const inputCpf = useRef()
    const inputPhone = useRef()
    const inputApolice = useRef()
    const inputSeguradora = useRef()

    const inputFields = [
        { placeholder: 'Nome', type: 'text', name: 'nome', ref: inputName },
        { placeholder: 'Idade', type: 'number', name: 'idade', ref: inputAge },
        { placeholder: 'Email', type: 'email', name: 'email', ref: inputEmail },
        { placeholder: 'CPF', type: 'text', name: 'cpf', ref: inputCpf },
        { placeholder: 'Telefone', type: 'tel', name: 'telefone', ref: inputPhone },
        { placeholder: 'Apólice', type: 'text', name: 'apolice', ref: inputApolice },
        { placeholder: 'Seguradora', type: 'text', name: 'seguradora', ref: inputSeguradora }
    ]

    if (isOpen) {
        return (
            <div className='containerModal'>
                <div className='modal'>
                    <RegisterUser
                        inputFields={inputFields}
                        setModalOpen={setModalOpen}
                    />
                </div>
            </div>
        )
    }
    return null
}
