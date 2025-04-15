import trashIcon from '../../../assets/trash.svg'

function TableRow({ user, onDelete }) {
    return (
        <tr>
            //Criar componente para cada coluna td
            
            <td><div>{user.id}</div></td>
            <td><div>{user.name}</div></td>
            <td><div>{user.cpf}</div></td>
            <td><div>{user.age}</div></td>
            <td><div>{user.email}</div></td>
            <td><div>{user.apolices[0]?.numApolice}</div></td>
            <td><div>{user.apolices[0]?.nomeSeguradora}</div></td>
            <td><div>{user.apolices[0]?.tipoSeguro}</div></td>
            <td>
                <div className="deleteButton">
                    <button onClick={() => onDelete(user.id)}>
                        <img src={trashIcon} alt="Deletar Usuário" />
                    </button>
                </div>
            </td>
        </tr>
    )
}
export default TableRow