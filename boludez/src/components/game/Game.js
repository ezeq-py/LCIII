import React, { useState } from 'react'
import "./Game.css"

const Game = ({muchachaArray, setNewArrayHandler}) => {
    const [input, setInput] = useState("");

    const setInputHandler = (value) => {
        setInput(value)

        // const caca = muchachaArray.includes(input) ? muchachaArray.delete(input) : "ohhh"

        if(muchachaArray.includes(input)){
            muchachaArray.delete(input)
            setNewArrayHandler(muchachaArray)
        }

    }

    return (
        <div className='container'>
            <label forhtml="text"><input type='text' name='text' id='text' onChange={(e) => setInputHandler(e.target.value)}/></label>
            <div className='capsule-container'>
                {muchachaArray.map((word) => <Capsule text={word}/>)}
            </div>
            <p>{input}</p>
        </div>
    )
}

const Capsule = ({ text }) => {
    return (
        <div className='capsule'>
            <p >{text}</p>
        </div>
    )
}

export default Game