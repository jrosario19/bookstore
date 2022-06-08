import { retrieveBookFromApi, deleteBookFromAPI, addBookToAPI } from '../../api/api';

const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';
const FETCHED_BOOKS = 'bookstore/books/FETCHED_BOOKS';

const initialState = [];

const orderedBooks = (books) => books.sort((a, b) => ((a.title > b.title) ? 1 : -1));

// Action Creators

export const getBooks = () => async (dispatch) => {
  const allBooks = await retrieveBookFromApi();

  const books = Object.keys(allBooks).map((key) => {
    const { title, author, category } = allBooks[key][0];
    return {
      item_id: key,
      title,
      author,
      category,
    };
  });

  dispatch({
    type: FETCHED_BOOKS,
    payload: orderedBooks(books),
  });
};

export const addBook = (book) => async (dispatch) => {
  addBookToAPI(book);
  dispatch({
    type: ADDED_BOOK,
    payload: book,
  });
};

export const removeBook = (id) => async (dispatch) => {
  deleteBookFromAPI(id);
  dispatch({
    type: REMOVED_BOOK,
    payload: id,
  });
};

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_BOOKS:
      return action.payload;
    case ADDED_BOOK:
      return orderedBooks([...state,
        action.payload]);
    case REMOVED_BOOK:
      return [
        ...state.filter((book) => (book.item_id !== action.payload)),
      ];
    default:
      return state;
  }
};

export default booksReducer;
