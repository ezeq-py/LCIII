import React from 'react'

const Persons = ({names}) => {
    const filteredNames = names.filter((name) => name[0] === "P");

    return (
        <div className='card-container'>
            {filteredNames.map((name) => <Person name={name}/>)}
        </div>
    )
}

const Person = ({name}) => {
    return (
        <div className='card'>
            <h2>Persona</h2>
            <p>Nombre: {name}</p>
        </div>
    )
}

export default Persons