import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} />
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
