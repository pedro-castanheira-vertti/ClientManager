import { useEffect, useState } from 'react'
import api from '../../../services/api';
import Table from './Table/Table'
import BackButton from '../../GlobalComponents/BackButton/BackButton';
import ModalCreateUser from '../../RegisterUser/ModalCreateUser';
// import { useNavigate } from 'react-router-dom';


//Fazer linha e coluna assim como velog. Usar map
function Home() {
    const [users, setUsers] = useState([])

    const [columns] = useState([
        { label: "ID", field: "id" },
        { label: "Nome", field: "name" },
        { label: "Cpf", field: "cpf" },
        { label: "Idade", field: "age" },
        { label: "Email", field: "email" },
        { label: "N°Apólice", field: "apolices[0].numApolice" },
        { label: "Seguradora", field: "apolices[0].nomeSeguradora" },
        { label: "Tipo", field: "apolices[0].tipoSeguro" },
        { label: "Ação", field: "action" }
    ]);

    async function getUsers() {
        const usersFromDB = await api.get('/users')
        setUsers(usersFromDB.data);
    }

    async function deleteUsers(id) {
        await api.delete(`/users/${id}`)
        getUsers()
    }

    useEffect(() => {
        getUsers()
    }, [])


    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <BackButton />
            <div className='container'>
                <form>
                    <h1>{openModal ? "Cadastrar usuário" : "Usuários cadastrados"}</h1>
                </form>

                <div className={openModal ? 'hidde' : 'createButton'}>
                    <button type='button' onClick={() => setOpenModal(true)}>
                        Criar usuário
                    </button>
                </div>

                <ModalCreateUser isOpen={openModal} setModalOpen={(isOpen) => setOpenModal(isOpen)} />

                <Table columns={columns} data={users} onDelete={deleteUsers} openModal={openModal} />
            </div>
        </>
    )
}
export default Home