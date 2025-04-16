import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRef } from 'react';
import InputField from '../../GlobalComponents/InputField/InputField';

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()


  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })

      const token = response.data.token

      localStorage.setItem('token', token)
      navigate('/home')
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  const inputFields = [
    { placeholder: 'Email', type: 'email', name: 'email', ref: emailRef },
    { placeholder: 'Senha', type: 'password', name: 'senha', ref: passwordRef }
  ]

  return (
    <div className='container'>
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
        <Link to='/registerLogin' className='register'>
          Registre-se aqui
        </Link>
      </div>

    </div>
  )
}

export default Login
