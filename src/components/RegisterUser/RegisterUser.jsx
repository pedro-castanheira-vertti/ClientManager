import { useRef } from 'react'
import '../Login/style.css'
import api from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'
import BackButton from '../GlobalComponents/BackButton/BackButton'

function RegisterUser() {
    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()
    const inputCpf = useRef()
    const inputPhone = useRef()
    const inputApolice = useRef()
    const inputSeguradora = useRef()
    const inputTipoSeguro = useRef()
    const Navigate = useNavigate()

    function backHome() {
        Navigate(`/home`)
    }

    async function createUsers(e) {
        e.preventDefault()
        try {
            await api.post('/users', {
                name: inputName.current.value,
                age: inputAge.current.value,
                email: inputEmail.current.value,
                cpf: inputCpf.current.value,
                phone: inputPhone.current.value,
                apolices: [{
                    numApolice: inputApolice.current.value,
                    nomeSeguradora: inputSeguradora.current.value,
                    tipoSeguro: inputTipoSeguro.current.value
                }]
            });
            alert('Usuário Criado com sucesso!')
            backHome()
        } catch (error) {
            console.error("Erro ao criar usuário: ", error.response ? error.response.data : error);
        }
    }

    return ( //Criar componente de input
        <>
            <BackButton/>
            <div className='container'>
                <form onSubmit={createUsers}>
                    <h1>Cadastro de usuários</h1>
                    <input placeholder='Nome' type="text" name='nome' ref={inputName} />
                    <input placeholder='Idade' type="number" name='idade' ref={inputAge} />
                    <input placeholder='Email' type="email" name='email' ref={inputEmail} />
                    <input placeholder='CPF' type="text" name='cpf' ref={inputCpf} />
                    <input placeholder='Telefone' type="tel" name='telefone' ref={inputPhone} />
                    <input placeholder='Apólice' type="text" name='apolice' ref={inputApolice} />
                    <input placeholder='Seguradora' type="text" name='seguradora' ref={inputSeguradora} />
                    <select id="tipoSeguro" name="tipoSeguro" ref={inputTipoSeguro} defaultValue="">
                        <option value="" disabled>Tipo do seguro</option>
                        <option value="Automovel">Automóvel</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Empresarial">Empresarial</option>
                        <option value="Responsabilidade Civil">Responsabilidade Civil</option>
                    </select>

                    <button type="submit">Criar usuário</button>
                </form>
            </div>
        </>
    )
}

export default RegisterUser
