// src/components/Bookshelf/Bookshelf.jsx

import { useState } from 'react';

const Bookshelf = () => {

    // state variables
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    // event handlers
    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({
            title: '',
            author: '',
        });
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text"
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="author">Author: </label>
                        <input
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>

            <div className="bookCardsDiv">
                <ul >
                    {books.map((book, index) => (
                        <li className='bookCard' key={index}>
                            <h4>{book.title}</h4>
                            {book.author}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );

};

export default Bookshelf;