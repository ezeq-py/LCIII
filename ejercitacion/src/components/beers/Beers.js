import React from 'react'
import BeersList from '../beerList/BeersList';
import BeerAvailable from '../beerAvailable/BeerAvailable';
import BeerCount from '../beerCount/BeerCount';
import BeerStyles from '../beerStyles/BeerStyles';

const Beers = () => {
    const beers = [
        {
        id: 1,
        beerName: "American",
        beerStyle: "IPA",
        price: 3,
        available: true,
        },
        {
        id: 2,
        beerName: "Argenta",
        beerStyle: "IPA",
        price: 4,
        available: false,
        },
        {
        id: 3,
        beerName: "Irish",
        beerStyle: "Red",
        price: 4,
        available: true,
        },
        {
        id: 4,
        beerName: "Scotish",
        beerStyle: "Red",
        price: 3,
        available: true,
        },
        {
        id: 5,
        beerName: "DeEssoCiTratta",
        beerStyle: "APA",
        price: 3,
        available: true,
        },
        {
        id: 6,
        beerName: "Santa APA",
        beerStyle: "APA",
        price: 3,
        available: true,
        },
        {
        id: 7,
        beerName: "German",
        beerStyle: "Pilsen",
        price: 1,
        available: true,
        },
        {
        id: 8,
        beerName: "London Porter",
        beerStyle: "Porter",
        price: 2,
        available: false,
        },
        {
        id: 9,
        beerName: "Scotish ALE",
        beerStyle: "Red",
        price: 5,
        available: false,
        },
        ];
    const dolar = 731;  //Hago una variable dolar cuando necesito mostrar el precio de los productos en algún componente especifico

    const beerStyles = beers.map((beer) => beer.beerStyle) //Guardo los estilos de cervezas repetidos en un array aparte que voy a pasar por parametros al componente "BeerStyles"

    return (
        <div className='beers'>
            <BeersList beers={beers} dolar={dolar}/>
            <BeerAvailable beers={beers}/>
            <BeerCount beers={beers} dolar={dolar}/>
            <BeerStyles beerStyles={beerStyles}/>
        </div>
    )
}

export default Beers