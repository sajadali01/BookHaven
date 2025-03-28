import React, { useState } from 'react';
import useBooks from '../hooks/useBooks';
import SearchBar from '../features/SearchBar';
import BookCard from '../features/BookCard';

const Home = () => {
  const { books } = useBooks();
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (query) => {
    setFilteredBooks(books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div>
      <h1>Welcome to BookHaven</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="book-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
