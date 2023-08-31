import React from 'react'
import "./beerlist.css"

const BeersList = ({ beers, dolar }) => {
    return (
        <div className='beerList'>
            <h1>Ejercicio 1</h1>
            <div className='card-container'>
                {beers.map((beer) => {
                    return <div className='card'>
                        <h2>{beer.beerName} {beer.beerStyle}</h2>
                        <div className='card-info'>
                            <p><b>Precio:</b> ${beer.price * dolar}</p>
                            <p><b>Disponible:</b> {beer.available ? "disponible" : "no disponible"}</p>
                        </div>
                    </div>
                })}</div>
        </div>
    )
}

export default BeersList