import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../../services/api';
import InputField from '../../Global/InputField/InputField';

function RegisterCorretor() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cpf: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    async function createCorretor(event) {
        event.preventDefault()
        try {
            await api.post('/corretor/create', {
                name: formData.name,
                email: formData.email,
                cpf: formData.cpf,
                password: formData.password
            })
            alert('Corretor cadastrado com sucesso!')
            navigate('/');

        } catch (error) {
            console.error(error)
        }
    }
    const inputFields = [
        { placeholder: 'Nome completo', type: 'text', name: 'name', value: formData.name, onChange: handleChange },
        { placeholder: 'Cpf', type: 'number', name: 'cpf', value: formData.cpf, onChange: handleChange },
        { placeholder: 'Email', type: 'email', name: 'email', value: formData.email, onChange: handleChange },
        { placeholder: 'Senha', type: 'password', name: 'password', value: formData.password, onChange: handleChange }
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
