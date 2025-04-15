import { Link } from 'react-router-dom';
import '../Login/style.css'
import { useRef } from 'react';
import api from '../../services/api';

function RegisterLogin() {
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

    return (
        <div className='container'>
            <form onSubmit={createCorretor}>
                <h1>Registrar corretor</h1>
                <input placeholder='Nome completo' type="text" name='name' ref={iName} />
                <input placeholder='Cpf' type="number" name='cpf' ref={iCpf} />
                <input placeholder='Email' type="email" name='email' ref={iEmail} />
                <input placeholder='Senha' type="password" name='senha' ref={iPassword} />
                <button type='submit' className='enter' >
                    Entrar
                </button>
                <div className='rodape'>
                    <p>Já está registrado?</p>
                    <Link to='/' className='login'>
                        Entrar
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterLogin
