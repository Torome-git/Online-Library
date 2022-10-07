import React, { useState } from "react";

function AddBookIdea(postBook) {
    const [bookData, setBookData] = useState({
        title:"",
        genre:"",
        description:""
    });

    function handleChange(evt) {
        setBookData(bookData => ({...bookData,[evt.target.name]:evt.target.value}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        postBook(bookData)
    };
    /*const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [description, setDescription] = useState('')

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleGenreChange(e) {
        setGenre(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleChange (e) {
        e.preventDefault()
    }*/
    return (
        <div onSubmit={handleSubmit}>
            <form>
                <div className="row">
                    <div className="col">
                        <input 
                        type="text"
                        placeholder="Book title"
                        name="title"
                        value={bookData.title}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="col">
                        <input 
                        type="text"
                        placeholder="Genre of the book"
                        name="genre"
                        value={bookData.genre}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="col">
                        <input 
                        type="text"
                        placeholder="Brief description"
                        name="description"
                        value={bookData.description}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-dark">
                    Add book
                </button>
            </form>
        </div>
    );
}

export default AddBookIdea;