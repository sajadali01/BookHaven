import React from 'react';
import { Navigate } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import useAuth from '../hooks/useAuth';
import BookCard from '../features/BookCard';

const Favourites = () => {
  const { books, favorites } = useBooks();
  const { user } = useAuth();

  if (!user) return <Navigate to="/auth" />; // Redirect to login if not logged in

  const favoriteBooks = books.filter((book) => favorites.includes(book.id));

  return (
    <div>
      <h1>Favorite Books</h1>
      {favoriteBooks.length > 0 ? (
        <div className="book-grid">
          {favoriteBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p>No favorite books yet.</p>
      )}
    </div>
  );
};

export default Favourites;
