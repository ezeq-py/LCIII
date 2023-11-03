import React, { useState } from 'react'
import "./newBook.css"
import BookForm from '../bookForm/BookForm'

const NewBook = ({addedBookHandler}) => {
    const [showForm, setShowForm] = useState(false);

    const saveBookDataHandler = (enteredBookData) => {
        const bookData = {
            ...enteredBookData,
            id: Math.random().toString(),
        };
        addedBookHandler(bookData);
    }

    const setShowFormHandler = (value) => { 
        setShowForm(value);
    }

    return (
        <div className='new-book'>
            {showForm ? <BookForm onBookDataSaved={saveBookDataHandler} setShowFormHandler={setShowFormHandler}/> : <button value={true} onClick={setShowFormHandler}>Agregar nueva lectura</button>}
        </div>
    )
}

export default NewBook