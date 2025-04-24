import api from '../../services/api.js'
import InputField from '../GlobalComponents/InputField/InputField.jsx'
import './ModalCreateUser.css'

const RegisterUser = ({ inputFields, setModalOpen }) => {
    const getValue = (fieldName) => {
        return inputFields.find(f => f.name === fieldName)?.ref.current.value
    }

    const tipoSeguroRef = inputFields.find(f => f.name === 'tipoSeguro')?.ref;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await api.post('/users', {
                name: getValue('nome'),
                age: getValue('idade'),
                email: getValue('email'),
                cpf: getValue('cpf'),
                phone: getValue('telefone'),
                apolices: [
                    {
                        numero: getValue('apolice'),
                        seguradora: getValue('seguradora'),
                        tipo: getValue('tipoSeguro')
                    }
                ]
            });
            alert('Usuário Criado com sucesso!')
        } catch (error) {
            console.error("Erro ao criar usuário: ", error.response ? error.response.data : error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Cadastro de usuários</h1>
            <InputField inputFields={inputFields} />


            <select className='input-field' name="tipoSeguro" ref={tipoSeguroRef}>
                <option value="" disabled select>Tipo do seguro</option>
                <option value="Automovel">Automóvel</option>
                <option value="Residencial">Residencial</option>
                <option value="Empresarial">Empresarial</option>
                <option value="Responsabilidade Civil">Responsabilidade Civil</option>
            </select>

            <button type="submit">Cadastrar</button>
            <button type="button" onClick={() => setModalOpen(false)}>Fechar</button>
        </form>
    );
}

export default RegisterUser
