import React, { PureComponent } from 'react';

class AddBook extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="form-headline">Add new book</h2>
        <form className="form">
          <input type="text" placeholder="Book title" className="input-title" />
          <input type="text" placeholder="Author" className="input-author" />
          <button type="submit">Add book</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
