import React from 'react'
import "./products.css"


const Products = ({products}) => {
    return (
        <div className='card-container'>
            {products.map((product) => <Product name={product}/>)}
        </div>
    )
}

const Product = ({name}) => {
    return(
        <div className='card'>
            <h2>Producto</h2>
            <p>Nombre: {name}</p>
        </div>
    )
}

export default Products;