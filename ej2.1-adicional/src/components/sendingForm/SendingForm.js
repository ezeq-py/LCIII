import React, { useEffect, useState } from 'react'
import SendingRadio from '../sendingRadio/SendingRadio'

const SendingForm = () => {
    const [delivery, setDelivery] = useState("");

    const setDeliveryHandler = (value) => {
        setDelivery(value)
    }

    return (
        <div>
            <h2>Seleccione el tipo de envio</h2>
            <SendingRadio setDeliveryHandler={setDeliveryHandler}/>
            <p>{delivery === "" ? "" : delivery === "local" ? "No hay recargo" : "Tendrá recargo"}</p>
        </div>
    )
}

export default SendingForm