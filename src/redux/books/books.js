import { v4 as uuidv4 } from 'uuid';

const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'Book 1',
    author: 'Author 1',
  },
  {
    id: uuidv4(),
    title: 'Book 2',
    author: 'Author 2',
  },
  {
    id: uuidv4(),
    title: 'Book 3',
    author: 'Author 3',
  },
];

// Action Creators
export const addBook = (title, author) => ({
  type: ADDED_BOOK,
  payload: { title, author, id: uuidv4() },
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
