// src/components/Bookshelf/Bookshelf.jsx

import { useState } from 'react';

const Bookshelf = () => {

    // state variables
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    // first event handler:
    const handleInputChange = (event) => {
        // triggered every time the user types in an input field
        // use setter to update the state of (a copy of the object) newBook: update the value event.target.name to event.target.value
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
    };

    // second event handler:
    const handleSubmit = (event) => {
        // preventDefault behavior so page doesn't refresh every time a form is submitted
        event.preventDefault();
        // console.log('book added');
        setBooks([ ...books, newBook ]);
        setNewBook({
            title: '',
            author: '',
        });
    };

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>

                    {/* Form will go here */}
                    <form onSubmit={handleSubmit}>

                        {/* add field for title */}
                        <div>
                            <label htmlFor="title">Title: </label>
                            <input type="text"
                                id="title"
                                name="title"
                                value={newBook.title}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* add field for author */}
                        <div>
                            <label htmlFor="author">Author: </label>
                            <input
                                id="author"
                                name="author"
                                value={newBook.author}
                                onChange={handleInputChange}
                            />
                        </div>
                        {/* submit button */}
                        <button type='submit'>Submit</button>
                    </form>
                </div>

                {/* use map() to iterate over the books array */}
                {/* each book should be contained in a 'book card' (wrap the title and author in a div) */}
                {/* for each book, include title and author */}

                <div className="bookCardsDiv">{/* Book cards will display here */}
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
        </>
    );

};

export default Bookshelf;