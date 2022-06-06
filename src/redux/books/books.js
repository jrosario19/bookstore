const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

const initialState = [];

// Action Creators
export const addBook = (title, author) => ({
  type: ADDED_BOOK,
  payload: { title, author },
});

export const removeBook = (id) => ({
  type: REMOVED_BOOK,
  payload: id,
});

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVED_BOOK:
      return [
        ...state.filter((book) => (book.id !== action.payload)),
      ];
    default:
      return state;
  }
};

export default booksReducer;
