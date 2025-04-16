import React from 'react'
import TableRow from './TableRow'

function Table({ columns, data, onDelete, openModal }) {

    return (
        <table className={openModal ? 'hidde' : ''}>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.field}>
                            <div>{column.label}</div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((user) => (
                    <TableRow key={user.id} user={user} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    )
}
export default Table