import React from 'react'
import "./sendingRadio.css"

const SendingRadio = ({setDeliveryHandler}) => {

    const onClickSetDeliveryHandler = (event) => {
        setDeliveryHandler(event.target.value)
    }

    return (
        <div className='radio-form'>
            <label>Retiro en el local
            <input type='radio' id="local" name='radio' value="local" onChange={onClickSetDeliveryHandler}/>
            </label>

            <label>Envio express
            <input type='radio' id="express" name='radio' value="envio" onChange={onClickSetDeliveryHandler}/>
            </label>

            <label>Envío común
            <input type='radio' id="comun" name='radio' value="envio" onChange={onClickSetDeliveryHandler}/>
            </label>
        </div>
    )
}

export default SendingRadio