import React from "react";

function SearchBooks({SearchBook, onSearchBookChange}) {
    return(
        <div>
            <input 
            type="text"
            placeholder="Search by genre"
            onChange={onSearchBookChange}
            value={SearchBook}
            />
        </div>
    )
}

export default SearchBooks;