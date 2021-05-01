import React from 'react';

import './styles.css';

import HandIcon from '../../assets/img/hand.svg';
import Book, { BookProps } from '../../components/Book';

import books from '../../services/books.json';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
  return (
    <article className="home">
      <div className="container">
        <div className="header">
          <SearchBar />
          <div className="welcome-bar">
            <div className="welcome-text">
              <span className="hi">Hi, </span>
              <span className="user-name">Mehmed Al Fatih</span>
            </div>
            <img src={HandIcon} alt="" className="hand-icon" />
          </div>
        </div>
        <div className="content">
          {books.map((book: BookProps) => {
            return (
              <Book
                key={book._id}
                _id={book._id}
                title={book.title}
                author={book.author}
                coverURL={book.coverURL}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Home;
