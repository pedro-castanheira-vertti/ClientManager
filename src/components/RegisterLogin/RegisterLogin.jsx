import { Link, useNavigate } from 'react-router-dom';
import '../Login/style.css'

function RegisterLogin() {
    const navigate = useNavigate();

    function goToHome() {
        const query = new URLSearchParams()
        navigate(`/home?${query.toString()}`)
    }


    return (
        <div className='container'>
            <form>
                <h1>Registrar corretor</h1>
                <input placeholder='Nome completo' type="text" name='name' />
                <input placeholder='Cpf' type="number" name='cpf' />
                <input placeholder='Email' type="email" name='email' />
                <input placeholder='Senha' type="password" name='senha' />
                <button type='button' onClick={goToHome} className='enter'>
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
