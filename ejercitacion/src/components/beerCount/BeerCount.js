import React from 'react'
import "./beerCount.css"

const BeerCount = ({beers , dolar}) => {
    const IPA = []  //Declaro arreglos donde voy a guardar las cervezas con los estilos correspondientes
    const Red = []

    beers.filter((beer) => {  //filtramos el arreglo de beers y los guardamos en los arrays correspondientes en base a los estilos
        if(beer.beerStyle === "IPA"){
            IPA.push(beer)
        }else if(beer.beerStyle === "Red"){
            Red.push(beer)
        }
    })

    const mergeBeers = [...IPA, ...Red]; //merge los arrays para luego hacer una tarjeta para cada cerveza haciendo un solo map

    return (
        <div className='beerCount'>
            <h1>Ejercicio 3</h1>
            <div className='count-container'>
                <h3><b>Cantidad de IPAS:</b> {IPA.length}</h3>
                <h3><b>Cantidad de Reds:</b> {Red.length}</h3>
            </div>
            <div className='card-container'>
                {mergeBeers.map((beer) => {
                    return <div className='card'>
                        <h2>{beer.beerName}</h2>
                        <h3><b>{beer.beerStyle}</b></h3>
                        <p><b>Precio:</b> ${beer.price * dolar}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default BeerCount