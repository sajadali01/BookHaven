import React from 'react';
import { useParams } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import ReviewForm from '../features/ReviewForm';

const BookDetails = () => {
  const { id } = useParams();
  const { books } = useBooks();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h2>Book not found!</h2>;

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <p>{book.description}</p>
      <ReviewForm bookId={book.id} />
    </div>
  );
};

export default BookDetails;
