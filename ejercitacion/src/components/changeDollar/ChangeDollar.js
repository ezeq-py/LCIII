import React from 'react'

import "./changeDollar.css"
//pasamos la función por props y la ponemos en una función contenedora que va a ir en el evento onChange
const ChangeDollar = ({ setNewDollarHandler, setShowDollarHandler, showDollar }) => {
    let toggleClass = showDollar ? "" : "hide"

    const onChangeSetNewDollar = (event) => { //event es un objeto que adentro contiene el valor del evento
        setNewDollarHandler(event.target.value)
    }
    const onClickSetShowDollar = () => {
        setShowDollarHandler(!showDollar)
    }
    return (
        <div className='dolar-container'>
            <h1>Ejercicio 2.2</h1>
            <button className="button" onClick={onClickSetShowDollar}>{showDollar ? "Ocultar" : "Mostrar"} componente</button>
            <div className={`${toggleClass}`}>
                <fieldset className="dolar">
                    <legend>Ejercicio 2.1</legend>
                    <label htmlFor="change-dolar">
                        Ingrese el valor del dolar:
                        <input id="change-dolar" type='number' onChange={onChangeSetNewDollar} />
                    </label>
                </fieldset>
            </div>

        </div>
    )
}

export default ChangeDollar