import React, { useState } from 'react'
import "./bookForm.css"

const BookForm = ({onBookDataSaved, setShowFormHandler}) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    const [enteredPageCount, setEnteredPageCount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const changeAuthorHandler = (event) => {
        setEnteredAuthor(event.target.value);
    }

    const changePageCountHandler = (event) => {
        setEnteredPageCount(event.target.value);
    }

    const changeDateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitBookHandler = (event) => {
        event.preventDefault();
        const bookData = {
            title: enteredTitle,
            author: enteredAuthor,
            pageCount: enteredPageCount,
            dateRead: new Date(enteredDate) //new
        };
        onBookDataSaved(bookData);
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredPageCount("");
        setEnteredDate("");
    }

    const onClickShowHandler = (event) => {
        setShowFormHandler(event.target.checked); //esto evita que el bool se convierta en string
    }

    return (
        <form onSubmit={submitBookHandler}>
            <div className='new-book-controls'>
                <div className='new-book-controls'>
                    <label>Titulo</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={changeTitleHandler}/>
                </div>
            </div>
            <div className='new-book-controls'>
                <div className='new-book-controls'>
                    <label>Autor</label>
                    <input 
                        type="text"
                        value={enteredAuthor}
                        onChange={changeAuthorHandler}/>
                </div>
            </div>
            <div className='new-book-controls'>
                <div className='new-book-controls'>
                    <label>páginas</label>
                    <input 
                        type="number"
                        min="1"
                        step="1"
                        value={enteredPageCount}
                        onChange={changePageCountHandler}/>
                </div>
            </div>
            <div className='new-book-controls'>
                <div className='new-book-controls'>
                    <label>¿Cuándo terminaste de leerlo?</label>
                    <input 
                        type="date"
                        min="2019-01-01"
                        value={enteredDate}
                        onChange={changeDateHandler}/>
                </div>
            </div>
            <div className='new-book-actions'>
                <div className='new-book-controls'>
                    <button type="submit">Agregar lectura</button>
                </div>
                <div className='new-book-controls'>
                    <button value={false} onClick={onClickShowHandler}>Cancelar</button>  {/*acá tuve que hacer algo raro porque me convertia el bool en string, en vez de poner, event.target.value, puse event.target.checked y se soluciono*/}
                </div>
            </div>
        </form>
    )
}

export default BookForm