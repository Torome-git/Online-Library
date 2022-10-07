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
        </div>
    )
}

export default SearchBooks;