import React from 'react'

const Family = ({persons}) => {

    return (
        <div className='card-container'>
            {persons.map((person) => <FamilyMember personName={person.name} age={person.age}/>)}
        </div>
    )
}

const FamilyMember = ({personName, age}) => {
    return (
        <div className='card'>
            <h3>Nombre: {personName}</h3>
            <p>Edad: {age}</p>
        </div>
    )
}

export default Family