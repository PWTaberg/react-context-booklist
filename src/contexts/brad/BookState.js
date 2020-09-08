import React, { useReducer, useEffect } from 'react';
import BookContext from './bookContext';
import bookReducer from './bookReducer';
import uuid from 'react-uuid';

const BookState = (props) => {
  const initialState = {
    books: [],
  };

  const [state, dispatch] = useReducer(bookReducer, initialState, () => {
    let storedBooks = localStorage.getItem('books');

    if (storedBooks) {
      storedBooks = JSON.parse(storedBooks);
    } else {
      storedBooks = [];
    }

    return { books: storedBooks };
  });

  const { books } = state;

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (title, author) => {
    dispatch({
      type: 'ADD_BOOK',
      payload: {
        title,
        author,
        id: uuid(),
      },
    });
  };

  const removeBook = (id) => {
    dispatch({ type: 'REMOVE_BOOK', payload: id });
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        addBook,
        removeBook,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
