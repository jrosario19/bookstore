import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Book extends PureComponent {
  render() {
    const { book } = this.props;

    return (
      <li className="book-container">
        <div>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
        <button type="button">Remove</button>
      </li>
    );
  }
}

Book.defaultProps = {
  book: [],
};

Book.propTypes = {
  book: PropTypes.shape(
    {
      title: PropTypes.string,
      author: PropTypes.string,
    },
  ),
};

export default Book;
