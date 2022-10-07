import React from "react";

function SearchBooks({SearchBook, setSearchBook}) {

    function handleChange(e) {
        setSearchBook(e.target.value)
    }
    return(
        <div className="Search-bar">
            <input 
            type="text"
            placeholder="Search by genre"
            onChange={handleChange}
            value={SearchBook}
            />
            <i className="glyphicon glyphicon-search"></i>
        </div>
    )
}

export default SearchBooks;