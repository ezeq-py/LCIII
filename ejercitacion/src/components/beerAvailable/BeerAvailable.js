import React from 'react'

const BeerAvailable = ({ beers }) => {
    return (
        <div className='beerAvailable'>
            <h1>Ejercicio 2</h1>
            <div className='card-container'>
                {beers.filter((beer) => beer.available).map((beer) => {
                    return <div className='card'>
                        <h2>{beer.beerName} {beer.beerStyle}</h2>
                        <div className='card-info'>
                            <p><b>Disponible:</b> {beer.available ? "disponible" : "no disponible"}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default BeerAvailable