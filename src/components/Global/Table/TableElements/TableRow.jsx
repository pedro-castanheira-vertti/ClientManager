import trashIcon from '../../../../assets/trash.svg'
import TableColumn from './TableColumn'
import showIcon from '../../../../assets/showIcon.svg'
import { useNavigate } from 'react-router-dom'

function TableRow({ user, onDelete }) {
    const Navigate = useNavigate()

    const userProps = [
        { key: "id" },
        { key: "name" },
        { key: "cpf" },
        { key: "age" },
        { key: "email" }
    ]

    function goUserDetails() {
        Navigate(`/userDetails`)
    }

    return (
        <tr>
            <TableColumn user={user} userProps={userProps}></TableColumn>
            <div className="buttons">
                <button onClick={() => onDelete(user.id)}>
                    <img src={trashIcon} alt="Deletar Usuário" />
                </button>
                {/* <button onClick={() => onDelete(user.id)}>
                    <img src={editIcon} alt="Editar Usuário" />
                </button> */}
                <button onClick={goUserDetails}>
                    <img src={showIcon} alt="Mostrar Usuário" />
                </button>
            </div>
        </tr>
    )
}
export default TableRow