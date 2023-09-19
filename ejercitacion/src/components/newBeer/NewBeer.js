import React, { useState } from 'react'

import "./newBeers.css"

const NewBeer = ({setBeerUpdatedHandler, beerUpdated}) => {
    const [beerName, setBeerName] = useState("");
    const [beerStyle, setBeerStyle] = useState("");
    const [beerPrice, setBeerPrice] = useState("");
    const [beerAvailable, setBeerAvailable] = useState("");

    const onChangeBeerAvailable = (e) =>{
        setBeerAvailable(e.target.value)
    }

    const onSubmitSetBeerUpdatedHandler = (e) =>{
        e.preventDefault()/*Esta función evita que recarge la pagina al hacer submit */
        const newBeer = {id : beerUpdated[beerUpdated.length - 1].id + 1, beerName, beerStyle, beerPrice, beerAvailable} /*creamos nuevo objeto con los valores del state que obtuvimos del form*/
        setBeerUpdatedHandler(prevBeerUpdated => [...prevBeerUpdated, newBeer])  //Esto hace que se actualice el componente que carga las cervezas, no sé por qué pero me acuerdo que tambien gabi lo dijo en clase
        /*You must create a new array to trigger an update. Add an item like this: setItems(prevItems => [...prevItems, val]). This will create a new array, copy the existing items, and add the new value at the end.*/
    }


    return (
        <div>   {/*Hago un formulario donde voy a llenar la información de la nueva cerveza*/}
            <h3>Por favor, llene este formulario con la siguiente información</h3>
            <form onSubmit={onSubmitSetBeerUpdatedHandler}> {/*El submit handler lo que hace es evitar recargar la pagina cuando apretamos el boton de submit, tambien guarda los valores actuales al momento de hacer submit y crea un nuevo objeto que adelante vamos a hacer push al arreglo original :o */}
                <fieldset>
                    <legend>Agregar nueva cerveza:</legend>  
                    <label htmlFor="beer-name">{/*guardo la nueva informacion en tiempo real con un useState para cada input*/}
                        Ingrese el nombre de la cerveza:
                        <input id="beer-name" name="beer-name" type="text" required onChange={(e) => setBeerName(e.target.value)}/>  
                    </label>
                    <label htmlFor="beer-style">
                        Ingrese el estilo de la cerveza:
                        <input id="beer-style" name="beer-style" type="text" required onChange={(e) => setBeerStyle(e.target.value)}/>
                    </label>
                </fieldset>
                <fieldset>
                    <label htmlFor="beer-price" >
                        Ingrese el precio de la cerveza:
                        <input id="beer-price" name="beer-price" type="number" required onChange={(e) => setBeerPrice(e.target.value)}/>
                    </label>
                    <label htmlFor="beer-available">
                        Disponible{/*para los input de radio tuve que hacer algo especial que fue crear una funcion que contenga la funcion del state y que esta capture el valor de cada radio :p */}
                        <input id="beer-available" type="radio" name="available" value={true} onChange={onChangeBeerAvailable}/> 
                    </label>
                    <label htmlFor="beer-no-available">
                        No disponible
                        <input id="beer-no-available" type="radio" name="available" value={false} onChange={onChangeBeerAvailable}/>
                    </label>
                </fieldset>
                <fieldset>
                    <label htmlFor="terms-and-conditions" >
                        <input id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" />Acepto los <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>terminos y condiciones</a>
                    </label>
                </fieldset>
                <button className='button'>Enviar</button>
            </form>
            <p>{}</p>
        </div>
    )
}

export default NewBeer