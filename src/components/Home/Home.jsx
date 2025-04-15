import { useEffect, useState } from 'react'
import '../Login/style.css'
import api from '../../services/api';
import './style.css'
import Table from './Table/Table'
import { useNavigate } from 'react-router-dom';
import BackButton from '../GlobalComponents/BackButton/BackButton';
// import { useNavigate } from 'react-router-dom';


//Fazer linha e coluna assim como velog. Usar map
function Home() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

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

    function goRegisterUser() {
        const query = new URLSearchParams()
        navigate(`/registerUser?${query.toString()}`)
    }

    return (
        <>
            <BackButton />
            <div className='container'>
                <form>
                    <h1>Usuário cadastrados</h1>
                </form>

                <div className='createButton'>
                    <button type='button' onClick={goRegisterUser} >
                        Criar usuário
                    </button>
                </div>

                <Table columns={columns} data={users} onDelete={deleteUsers}></Table>
            </div>
        </>
    )
}
export default Home