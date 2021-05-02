import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Book, { BookProps } from '../../components/Book';
import SearchBar from '../../components/SearchBar';
import api from '../../services/api';

import './styles.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search: React.FC = () => {
  const query = useQuery();

  const [books, setBooks] = useState<BookProps[]>([]);

  useEffect(() => {
    api
      .get(`books/search?text=${query.get('text')}`)
      .then((result) => {
        console.log(result);
        setBooks(
          result.data.books.map((book: any) => {
            return {
              ...book,
              coverURL: book.cover_url,
            };
          })
        );
      })
      .catch((err) => {});
  }, [query.get('text')]);

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
