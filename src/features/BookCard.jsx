import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import useAuth from '../hooks/useAuth';

const BookCard = ({ book }) => {
  const { favorites, toggleFavorite } = useBooks();
  const { user } = useAuth();
  const isFavorite = favorites.includes(book.id);

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      
      {user && (  // Show only if logged in
        <button onClick={() => toggleFavorite(book.id)} style={{ background: isFavorite ? 'gold' : '#ff5722' }}>
          {isFavorite ? '★ Favorite' : '☆ Add to Favorites'}
        </button>
      )}

      <Link to={`/book/${book.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default BookCard;
