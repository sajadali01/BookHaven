import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Auth from './pages/Auth';
import AddBook from './pages/AddBook';
import Favourites from './pages/Favourites';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { AuthProvider } from './contexts/AuthProvider';
import { BooksProvider } from './contexts/BooksProvider';

function App() {
  return (
    <AuthProvider>
      <BooksProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <Footer />
      </BooksProvider>
    </AuthProvider>
  );
}

export default App;
