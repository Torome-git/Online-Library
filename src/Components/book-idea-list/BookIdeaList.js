import React from "react";
import Books from "../books/books";

function BookIdeaList({allTransactions}) {
    return (
    <table className="table table-bordered">
        <tbody>
            <tr>
                <th scope="row">
                    <h3>Title</h3>
                </th>
                <th scope="row">
                     <h3>Genre</h3>
                </th>
                <th scope="row">
                    <h3>Description</h3> 
                </th>
            </tr>
            {allTransactions.map((books) => (
                <Books
                key={books.id}
                books={books} 
                />
            ))}
  </tbody>
</table>
    )
}

export default BookIdeaList;