import { Link } from 'react-router-dom';
import { useRef } from 'react';
import api from '../../../services/api';
import InputField from '../../GlobalComponents/InputField/InputField';
import './styleRegisterCorretor.css'

function RegisterCorretor() {
    // const navigate = useNavigate();

    // // function goToHome() {
    // //     const query = new URLSearchParams()
    // //     navigate(`/home?${query.toString()}`)
    // // }

    const iName = useRef();
    const iCpf = useRef();
    const iEmail = useRef()
    const iPassword = useRef()

    async function createCorretor(event) {
        event.preventDefault()
        try {
            await api.post('/register', {
                name: iName.current.value,
                email: iEmail.current.value,
                cpf: iCpf.current.value,
                password: iPassword.current.value
            })
        } catch (error) {
            console.error(error)
        }
    }
    const inputFields = [
        { placeholder: 'Nome completo', type: 'text', name: 'name', ref: iName },
        { placeholder: 'Cpf', type: 'number', name: 'cpf', ref: iCpf },
        { placeholder: 'Email', type: 'email', name: 'email', ref: iEmail },
        { placeholder: 'Senha', type: 'password', name: 'senha', ref: iPassword }
    ]

    return (
        <div className='container-register'>
            <h1>Registre-se</h1>
            <form onSubmit={createCorretor}>
                <div className='form-content'>
                    <InputField inputFields={inputFields} />
                    <button type='submit' className='enter' >
                        Entrar
                    </button>
                </div>
                <div className='rodape'>
                    <p>Já possui cadastro?</p>
                    <Link to='/' className='login'>
                        Entrar
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterCorretor
