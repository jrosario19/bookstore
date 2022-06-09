import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getBooks } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <ul className="book-list container">
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </ul>
  );
};

BookList.defaultProps = {
  books: [],
};
/* eslint-disable */
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
      },
    ),
  ),
};

export default BookList;
