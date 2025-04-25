import { useState } from 'react';
import api from '../../services/api.js'
import InputField from '../GlobalComponents/InputField/InputField.jsx'
import './ModalCreateUser.css'

const CreateUser = ({ closeModal, onUserCreated }) => {
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        email: '',
        cpf: '',
        telefone: '',
        apolice: '',
        seguradora: '',
        tipoSeguro: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await api.post('/users', {
                name: formData.nome,
                age: formData.idade,
                email: formData.email,
                cpf: formData.cpf,
                phone: formData.telefone,
                apolices: [
                    {
                        numApolice: formData.apolice,
                        nomeSeguradora: formData.seguradora,
                        tipoSeguro: formData.tipoSeguro
                    }
                ]
            });
            alert('Usuário Criado com sucesso!')
            onUserCreated();
        } catch (error) {
            alert('Erro ao criar usuário!');
            console.error(error.response?.data || error);
        }
    }

    const inputFields = [
        { placeholder: 'Nome', type: 'text', name: 'nome' },
        { placeholder: 'Idade', type: 'number', name: 'idade' },
        { placeholder: 'Email', type: 'email', name: 'email' },
        { placeholder: 'CPF', type: 'text', name: 'cpf' },
        { placeholder: 'Telefone', type: 'tel', name: 'telefone' },
        { placeholder: 'Apólice', type: 'text', name: 'apolice' },
        { placeholder: 'Seguradora', type: 'text', name: 'seguradora' }
    ]

    return (
        <form onSubmit={handleSubmit}>
            <h1>Cadastro de usuários</h1>
            <InputField inputFields={inputFields} formData={formData} handleChange={handleChange} />


            <select className='input-field' name="tipoSeguro" value={formData.tipoSeguro} onChange={handleChange} required>
                <option value="" disabled>Tipo do seguro</option>
                <option value="Automovel">Automóvel</option>
                <option value="Residencial">Residencial</option>
                <option value="Empresarial">Empresarial</option>
                <option value="Responsabilidade Civil">Responsabilidade Civil</option>
            </select>

            <button type="submit">Cadastrar</button>
            <button type="button" onClick={closeModal}>Fechar</button>
        </form>
    );
}

export default CreateUser
