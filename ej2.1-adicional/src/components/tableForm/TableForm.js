import React, { useState } from 'react'
import TableInput from '../tableInput/TableInput'

const TableForm = () => {
    const [table, setTable] = useState("");

    const setTableHandler = (value) =>{
        setTable(value)
    }

    return (
        <div>
            <h2>Ingrese la cantidad de patas que tendrá la mesa</h2>
            <TableInput setTableHandler={setTableHandler}/>
            {table != "" ? table == 4 ? "La mesa tiene 4 patas y esta equilibrada" : "Mesa inestable" : ""}
        </div>
    )
}

export default TableForm