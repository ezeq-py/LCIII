import React from 'react'

const Cart = ({productos, setProductosHandler}) => {

    const productosMapeado = productos.map(producto => <h3 onClick={() => setProductosHandler(productos.filter(p => p.name !== producto.name))} key={producto.name}>{producto.name}</h3>)

    return (
        <div>
            {productosMapeado}
        </div>
    )
}

export default Cart