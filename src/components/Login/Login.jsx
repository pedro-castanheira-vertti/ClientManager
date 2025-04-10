import { Link, useNavigate } from 'react-router-dom';
import './style.css'

function Login() {
  const navigate = useNavigate();

  function goToHome() {
    const query = new URLSearchParams()
    navigate(`/home?${query.toString()}`)
  }


  return (
    <div className='container'>
      <form>
        <h1>Login</h1>
        <input placeholder='Email' type="email" name='email' />
        <input placeholder='Senha' type="password" name='senha' />
        <button type='button' onClick={goToHome} className='enter'>
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
