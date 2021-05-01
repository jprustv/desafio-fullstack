import React from 'react';
import { useLocation } from 'react-router-dom';
import Book, { BookProps } from '../../components/Book';
import SearchBar from '../../components/SearchBar';

import books from '../../services/books.json';

import './styles.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search: React.FC = () => {
  const query = useQuery();

  return (
    <article className="search">
      <div className="container">
        <div className="header">
          <SearchBar initialText={query.get('text') || ''} />
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

export default Search;
