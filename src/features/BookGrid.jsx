import React from "react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";

const BookGrid = () => {
  const { books } = useBooks();

  if (!books) return <p>Loading...</p>;

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;
