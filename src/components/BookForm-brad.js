import React, { useContext, useState } from 'react';
import BookContext from '../contexts/brad/bookContext';

const BookForm = () => {
  const bookContext = useContext(BookContext);

  const { addBook } = bookContext;

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='book title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='book author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type='submit' value='add book' />
    </form>
  );
};

export default BookForm;
