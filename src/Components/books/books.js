import React from "react";

function Books({books}) {
    return (
        <tr>
            <td>{books.id}</td>
            <td>{books.title}</td>
            <td>{books.genre}</td>
            <td>{books.description}</td>
        </tr>
    )
}

export default Books;