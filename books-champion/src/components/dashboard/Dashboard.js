import React, { useEffect, useState } from 'react'
import NewBook from "../newBooks/NewBook"
import Books from "../books/Books"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"


//Poner la constante fuera del componente la convierte por así decirlo en una constante global
const DUMMY_BOOKS = [
    {
        title: "100 años de soledad",
        author: "Gabriel García Marquez",
        dateRead: new Date(2021, 8, 12),
        pageCount: 410,
        id: 1
    },
    {
        title: "Todos los fuegos el fuego",
        author: "Julio Cortazar",
        dateRead: new Date(2020, 6, 11),
        pageCount: 197,
        id: 2
    },
    {
        title: "Asesinato en el Orient Express",
        author: "Agatha Christie",
        dateRead: new Date(2021, 5, 9),
        pageCount: 256,
        id: 3
    },
    {
        title: "Las dos torres",
        author: "J.R.R Tolkien",
        dateRead: new Date(2020, 3, 22),
        pageCount: 352,
        id: 4
    },
];

const Dashboard = ({ onLogOut }) => {
    const [books, setBooks] = useState(DUMMY_BOOKS)

    const addedBookHandler = (bookData) => {
        const newBooksArray = [bookData, ...books];
        setBooks(newBooksArray);
        localStorage.setItem("books", JSON.stringify(newBooksArray)); //lcs para el useEffect
    }

    useEffect(() => {
        const booksStoraged = JSON.parse(localStorage.getItem("books"));
        if (booksStoraged) setBooks(booksStoraged);
    }, []) //toma como parametro una callback y las dependencias que va a visualizar, si hay un cambio en una de ellas se reevalua el componente
    //el array vacio indica que el useEffect se ejecutara solo una vez después del evaluado/renderizado del componente

    const onClickLogOut = () => {
        onLogOut(false);
    }

    return (
        <div>
            <Row>
                <Col md={3} className='d-flex justify-content-end'>
                    <Button className='m-3' onClick={onClickLogOut}>Cerrar sesión</Button>
                </Col>
            </Row>
            <h2>Book Champion</h2>
            <p>¡Quiero leer libros!</p>
            <NewBook addedBookHandler={addedBookHandler} />
            <Books books={books} />
        </div>
    )
}

export default Dashboard