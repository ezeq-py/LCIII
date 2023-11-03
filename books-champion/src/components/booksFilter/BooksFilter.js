import "./booksFilter.css"

import React from 'react'

const BooksFilter = ({setBooksFilteredHandler, value}) => {
    
    const onChangeBooksFiltered = (event) => {
        setBooksFilteredHandler(event.target.value);
    }


    return (
        <div className="Books-filter">
            <div className="Books-filter__control">
                <label>Filter by year</label>
                <select 
                    onChange={onChangeBooksFiltered}
                    value={value}>
                    <option value="">todo lo año</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default BooksFilter