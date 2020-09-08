import React from 'react';
import './App.css';
import BookState from './contexts/brad/BookState';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className='App'>
      <BookState>
        <Navbar />
        <BookList />
        <BookForm />
      </BookState>
    </div>
  );
}

export default App;
