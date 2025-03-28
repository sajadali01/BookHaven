import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/add-book">Add Book</Link>
          <Link to="/favourites">Favourites</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/auth">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
