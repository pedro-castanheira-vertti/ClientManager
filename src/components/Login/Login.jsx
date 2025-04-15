import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import axios from 'axios';
import { useRef } from 'react';

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

  return (
    <div className='container'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input placeholder='Email' type="email" name='email' ref={emailRef} />
        <input placeholder='Senha' type="password" name='senha' ref={passwordRef} />
        <button type='submit' className='enter'>
          Entrar
        </button>
        <div className='rodape'>
          <p>Ainda não tem registro?</p>
          <Link to='/registerLogin' className='register'>
            Registre-se aqui
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
