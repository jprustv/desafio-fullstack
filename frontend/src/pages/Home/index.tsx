import React, { useEffect, useState } from 'react';

import './styles.css';

import HandIcon from '../../assets/img/hand.svg';
import Book, { BookProps } from '../../components/Book';

import SearchBar from '../../components/SearchBar';

import api from '../../services/api';

const Home: React.FC = () => {
  const [books, setBooks] = useState<BookProps[]>([]);

  useEffect(() => {
    api
      .get('books/recent')
      .then((result) => {
        setBooks(
          result.data.books.map((book: any) => {
            return {
              ...book,
              title: book.name,
              coverURL: book.cover_url,
            };
          })
        );
      })
      .catch((err) => {});
  }, []);

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
