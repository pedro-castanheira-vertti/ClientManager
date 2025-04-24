import { useEffect, useState } from 'react'
import api from '../../../services/api';
import Table from './Table/Table'
import BackButton from '../../GlobalComponents/BackButton/BackButton';
import ModalCreateUser from '../../RegisterUser/ModalCreateUser';
import './styleHome.css'

function Home() {
    const [users, setUsers] = useState([])
    const [openModal, setOpenModal] = useState(false);

    const columns = [
        { label: "ID", field: "id" },
        { label: "Nome", field: "name" },
        { label: "Cpf", field: "cpf" },
        { label: "Idade", field: "age" },
        { label: "Email", field: "email" },
        { label: "N°Apólice", field: "apolices[0].numApolice" },
        { label: "Seguradora", field: "apolices[0].nomeSeguradora" },
        { label: "Tipo", field: "apolices[0].tipoSeguro" },
        { label: "Ação", field: "action" }
    ];

    async function getUsers() {
        const response = await api.get('/users')
        setUsers(response.data);
    }

    async function deleteUsers(id) {
        await api.delete(`/users/${id}`)
        getUsers()
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <div className='container-home'>
                <div className='header-home'>
                    <h1>Cadastrar usuário</h1>
                </div>
                <div className='form-content'>
                    {!openModal && <BackButton />}
                    {!openModal && (
                        <button className='createButton' onClick={() => setOpenModal(true)}>
                            Criar usuário
                        </button>
                    )}
                    <div className='line'></div>
                    <ModalCreateUser
                        isOpen={openModal}
                        closeModal={() => setOpenModal(false)}
                        onUserCreated={getUsers}
                    />
                    <Table columns={columns} data={users} onDelete={deleteUsers} />
                </div>
            </div>
        </>
    )
}
export default Home