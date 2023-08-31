import React from 'react'

const BeerStyles = ({beerStyles}) => { //paso por parametros los estilos de cervezas de todas las cervezas
    const styles = []  //Declaro un array vacio donde voy a guardar los estilos de cerveza sin repetir

    beerStyles.map((beer) => {  //utilizo una función map que descarta los estilos repetidos
        if(!styles.includes(beer)){
            styles.push(beer)
        }
    })

    return (
        <div>
            <h1>Ejercicio 4</h1>
            <div>
                <h3>Estilos de cerveza: {styles.join(", ")}</h3>
            </div>
        </div>
    )
}

export default BeerStyles