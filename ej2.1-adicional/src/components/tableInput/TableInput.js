import React from 'react'

const TableInput = ({setTableHandler}) => {

    const onChangeSetTableHandler = (event) => {
        setTableHandler(event.target.value);
    }

    return (
        <div>
            <label for="number">
                <input type="number" id="number" name="number" placeholder='Ingrese el número de patas que va a tener la mesa' onChange={onChangeSetTableHandler}/>
            </label>
        </div>
    )
}

export default TableInput