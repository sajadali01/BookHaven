import { useContext } from 'react';
import { BooksContext } from '../contexts/BooksProvider';

const useBooks = () => {
  return useContext(BooksContext);
};

export default useBooks;
