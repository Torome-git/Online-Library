import React, { useEffect, useState } from "react";
import BookIdeaList from "../book-idea-list/BookIdeaList";
import SearchBooks from "../search-book/SearchBook";
import AddBookIdea from "../add-book-idea/AddBookIdea";


function BooksContainer() {
    const [book, setBook] = useState([]);
    const [SearchBook, setSearchBook] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then((res) => res.json())
        .then((data) => {
            setBook(data)
        }, [])
    })

    function postBook(books) {
        //setBook(book => [...book, newBook]);
        fetch ('http://localhost:3000/books',{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(books),
        })
        .then(res => res.json())
        .then(newBook => setBook((book) => [...book, newBook]))
    };

    const searchFilteredBooks = (evt) => {
        setSearchBook(evt.target.value)
    }

    const displaySearchedBooks = book.filter((books) => 
    books.genre.toLowerCase().includes(SearchBook.toLowerCase())
    )
    return (
        <div>
            <SearchBooks SearchBook={SearchBook} setSearchBook={setSearchBook}/>
            <AddBookIdea 
            postBook={postBook}
            />
            <BookIdeaList allTransactions={displaySearchedBooks} />
        </div>
    )
}

export default BooksContainer;