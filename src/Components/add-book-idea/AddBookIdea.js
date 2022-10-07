import React, { useState } from "react";

function AddBookIdea({handleAddBook}) {
    const [bookData, setBookData] = useState({
        title:"",
        genre:"",
        description:""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: bookData.title,
                    genre: bookData.genre,
                    description: bookData.description, 
                }),
            });
            const jsonRes = await res.json();
            handleAddBook(jsonRes);
            setBookData({
                title:"",
                genre:"",
                description:""
            });
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(evt) {
        setBookData(bookData => ({...bookData,[evt.target.name]:evt.target.value}))
    }

    /*function handleSubmit(e) {
        e.preventDefault();
        postBook(bookData)
    };*/

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
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="row ">
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
                <button type="submit" className="btn btn-dark">
                    Add book
                </button>
            </form>
        </div>
    );
}

export default AddBookIdea;