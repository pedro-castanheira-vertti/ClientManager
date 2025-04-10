import { useRef } from 'react'
import '../Login/style.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'

function RegisterUser() {
    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()
    const inputCpf = useRef()
    const inputPhone = useRef()
    const inputApolice = useRef()
    const inputSeguradora = useRef()
    const inputTipoSeguro = useRef()

    async function createUsers() {
        try {
            await api.post('/users', {
                name: inputName.current.value,
                age: inputAge.current.value,
                email: inputEmail.current.value,
                cpf: inputCpf.current.value,
                phone: inputPhone.current.value,
                apolices: [{
                    numApolice: inputApolice.current.value,
                    seguradora: inputSeguradora.current.value,
                    tipoSeguro: inputTipoSeguro.current.value
                }]
            });
            alert('Usuário Criado com sucesso!')
        } catch (error) {
            console.error("Erro ao criar usuário: ", error.response ? error.response.data : error);
        }
    }

    return ( //Criar componente de input
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
                    <option value="automovel">Automóvel</option>
                    <option value="residencial">Residencial</option>
                    <option value="empresarial">Empresarial</option>
                    <option value="resCivil">Responsabilidade Civil</option>
                </select>

                <button type="submit">Criar usuário</button>
            </form>
        </div>
    )
}

export default RegisterUser
