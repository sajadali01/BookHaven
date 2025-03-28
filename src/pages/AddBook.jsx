import React, { useState } from 'react';
import useBooks from '../hooks/useBooks';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const { addBook } = useBooks();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ ...book, id: Date.now() });
    navigate('/');
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
