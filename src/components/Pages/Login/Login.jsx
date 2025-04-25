import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import InputField from '../../Global/InputField/InputField';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:8080/login', {
                email,
                password,
            })

            const token = response.data.token
            localStorage.setItem('token', token)
            navigate('/home')
        } catch (error) {
            console.error('Erro ao fazer login:', error)
        }
    }

    const inputFields = [
        { placeholder: 'Email', type: 'email', name: 'email', value: email, onChange: (e) => setEmail(e.target.value) },
        { placeholder: 'Senha', type: 'password', name: 'senha', value: password, onChange: (e) => setPassword(e.target.value) }
    ]

    return (
        <div className='container-login'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className='form-content'>
                    <InputField inputFields={inputFields} />
                    <button type='submit' className='enter'>
                        Entrar
                    </button>
                </div>
            </form>
            <div className='rodape'>
                <p>Ainda não tem registro?</p>
                <Link to='/registerCorretor' className='register'>
                    Registre-se aqui
                </Link>
            </div>
        </div>
    )
}

export default Login
