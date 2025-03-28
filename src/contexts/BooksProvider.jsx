import React, { createContext, useState, useEffect } from 'react';

export const BooksContext = createContext();

const initialBooks = [
  { id: 1, title: 'Shadows of Eternity', author: 'Lena Rivers', description: 'A thrilling journey through time.' },
  { id: 2, title: 'The Silent Echo', author: 'Jonathan Blackwood', description: 'A psychological drama.' },
  { id: 3, title: 'Whispers in the Wind', author: 'Mira Thornton', description: 'A heartwarming tale of love.' },
  { id: 4, title: 'The Last Guardian', author: 'Elliot Hawthorne', description: 'An epic fantasy adventure.' },
  { id: 5, title: 'Beneath the Starlit Sky', author: 'Sophia Adler', description: 'A romantic adventure.' }
];

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(initialBooks);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage when the component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (bookId) => {
    if (favorites.includes(bookId)) {
      setFavorites(favorites.filter((id) => id !== bookId)); // Remove from favorites
    } else {
      setFavorites([...favorites, bookId]); // Add to favorites
    }
  };

  return (
    <BooksContext.Provider value={{ books, favorites, toggleFavorite }}>
      {children}
    </BooksContext.Provider>
  );
};
