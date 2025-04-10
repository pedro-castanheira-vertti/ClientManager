import { useEffect, useState } from 'react'
import '../Login/style.css'
import api from '../../services/api';
import './style.css'
import trashIcon from '../../assets/trash.svg'
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Home() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

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
        <div className='container'>
            <form>
                <h1>Usuário cadastrados</h1>
            </form>

            <div className='createButton'>
                <button type='button' onClick={goRegisterUser} >
                    Criar usuário
                </button>
            </div>

            <div className='userstable'>
                {users.map((user) => (
                    <div key={user.id} className="card">
                        <div>
                            <span><span> ID: </span> {user.id} <br /></span>
                            <span><span>Nome: </span> {user.name} | </span>
                            <span><span>Cpf: </span> {user.cpf} | </span>
                            <span><span>Idade: </span> {user.age} | </span>
                            <span><span>Email: </span>{user.email}<br /><br /></span>
                            {user.apolices && user.apolices.length > 0 && (
                                <div>
                                    {user.apolices.map((apolice) => (
                                        <div key={apolice.id}>
                                            <span><span>N° Apólice: </span>{apolice.numApolice} | </span>
                                            <span><span>Seguradora: </span>{apolice.nomeSeguradora} | </span>
                                            <span><span>Tipo de Seguro: </span>{apolice.tipoSeguro}</span>
                                            <br /><br />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <span><span>Telefone: </span>{user.phone} </span>
                        </div>
                        <button onClick={() => deleteUsers(user.id)}>
                            <img src={trashIcon} alt="" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home