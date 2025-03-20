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
        setBooks({ ...books, newBook });
        setNewBook({
            title: '',
            author: '',
        });
    };

    return (

        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* Form will go here */}
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>

    );

};

export default Bookshelf;