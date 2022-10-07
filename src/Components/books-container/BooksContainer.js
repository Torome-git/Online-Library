import React, { useEffect, useState } from "react";
import BookIdeaList from "../book-idea-list/BookIdeaList";
import SearchBooks from "../search-book/SearchBook";
import AddBookIdea from "../add-book-idea/AddBookIdea";


function BooksContainer({handleAddBook}) {
    const [book, setBook] = useState([]);
    const [SearchBook, setSearchBook] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then((res) => res.json())
        .then((data) => {
            setBook(data)
        }, [])
    });

    const displaySearchedBooks = book.filter((books) => 
    books.genre.toLowerCase().includes(SearchBook.toLowerCase())
    )
    return (
        <div className="container">
            <SearchBooks SearchBook={SearchBook} setSearchBook={setSearchBook}/>
            <AddBookIdea handleAddBook={handleAddBook}/>
            <BookIdeaList allTransactions={displaySearchedBooks} />
        </div>
    )
}

export default BooksContainer;