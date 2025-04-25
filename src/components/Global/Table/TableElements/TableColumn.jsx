function TableColumn({ user, userProps }) {
    return (
        <>
            {userProps.map((userProp) => (
                <td key={userProp.key}>
                    <div>{user[userProp.key]}</div>
                </td>

            ))}
            <td><div>{user.apolices[0].numApolice}</div></td>
            <td><div>{user.apolices[0].nomeSeguradora}</div></td>
            <td><div>{user.apolices[0].tipoSeguro}</div></td>
        </>
    )
}
export default TableColumn