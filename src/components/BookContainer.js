import React, { PureComponent } from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

class BooksContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          id: 1,
          title: 'Book 1',
          author: 'Author 1',
        },
        {
          id: 2,
          title: 'Book 2',
          author: 'Author 2',
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <main>
        <BookList books={books} />
        <AddBook />
      </main>
    );
  }
}

export default BooksContainer;
