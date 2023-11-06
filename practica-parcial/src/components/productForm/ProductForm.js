import React, { useState } from 'react'
// Crear tres componentes: ContainerProducts, ProductForm y Cart

// ContainerProducts simplemente contiene a los otros componentes y debe manejar la lógica de toda la aplicación.

// ProductForm return un formulario para agregar un nuevo producto a la lista. Contiene una label que muestra "Ingresar nuevo producto a la lista", un input de tipo texto para escribir el producto y un botón para agregarlo a la lista.

// Cart devuelve una lista de los productos envueltos en una etiqueta h3. Ejemplo:
//  <h3>Televisor<h3/>
// <h3>Computadora<h3/>
// <h3>Mesa<h3/>
// Además, se pide que el usuario pueda clickear en cualquier producto de la lista para eliminarlo de ella.

// Considerar:
// -no se pide estilizado
// -todo el ejercicio se logra sólo con useState
// Teoría:
// 1) explicar el segundo argumento (array) de useEffect, para qué sirve (su objetivo) y qué significan cada uno de sus valores

// 2) Explicar un caso de useContext

const ProductForm = ({setProductosHandler, productos}) => {
    const [name, setName] = useState("");

    const onChangeSetName = (event) => {
        setName(event.target.value)
    }

    const onClickSetProductotos = (event) => {
        event.preventDefault();
        setProductosHandler([
            ...productos,
            {name: name}
        ])
    }

    return (
        <div>
            <form>
                <label>Ingresar nuevo producto a la lista</label>
                <input onChange={onChangeSetName} type='text' placeholder='agregue acá jeje'/>
                <p>{name}</p>
                <button onClick={onClickSetProductotos}>agregar producto</button>
            </form>
        </div>
    )
}

export default ProductForm