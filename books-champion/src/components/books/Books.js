import React, { useState } from 'react'
import BookItem from '../bookItem/BookItem'
import BooksFilter from '../booksFilter/BooksFilter';

const Books = ({ books }) => {
    const [booksFiltered, setBooksFiltered] = useState("");

    const setBooksFilteredHandler = (value) => {
        setBooksFiltered(value);
    }

    // const bookList = books.filter(book => book.dateRead.getFullYear().toString() === booksFiltered).map((book) => (<BookItem
    //     title={book.title}
    //     author={book.author}
    //     dateRead={book.dateRead}
    //     pageCount={book.pageCount} />))

    const bookList = books.filter(book => book.dateRead.getFullYear())


    return (
        <div className="row row-cols-3">
            {booksFiltered === "" ? books.map((book) => (<BookItem
                title={book.title}
                author={book.author}
                dateRead={book.dateRead}
                pageCount={book.pageCount} />)) : ""}
            <BooksFilter
                setBooksFilteredHandler={setBooksFilteredHandler}
                value={booksFiltered} />
            {booksFiltered === "" ? "" : bookList.length === 0 ? (<p>no leiste nada en {booksFiltered}</p>) : bookList}
        </div>
    )
}

export default Books