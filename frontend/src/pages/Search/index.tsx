import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Book, { BookProps } from '../../components/Book';
import SearchBar from '../../components/SearchBar';
import api from '../../services/api';

import './styles.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

interface IPagination {
  total: number;
  per_page: number;
  offset: number;
  to: number;
  last_page: number;
  current_page: number;
  from: number;
  has_more: boolean;
}

const Search: React.FC = () => {
  const query = useQuery();

  const [books, setBooks] = useState<BookProps[]>([]);
  const [prevBooks, setPrevBooks] = useState<BookProps[]>([]);

  const initialPaginationState: IPagination = {
    total: 0,
    per_page: 10,
    offset: 0,
    to: 0,
    last_page: 0,
    current_page: 0,
    from: 0,
    has_more: false,
  };

  const [pagination, setPagination] = useState<IPagination>(
    initialPaginationState
  );

  function fetchAPI(resetPagination: boolean) {
    const nextPage = resetPagination
      ? 1
      : Number(pagination.current_page) + Number(1);
    api
      .get(
        `books/search?text=${query.get('text')}&per_page=${
          pagination.per_page
        }&current_page=${nextPage}`
      )
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
        setPagination(result.data.pagination);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    setPrevBooks([]);
    fetchAPI(true);
  }, [query.get('text')]);

  function loadMore() {
    setPrevBooks([...prevBooks, ...books]);
    fetchAPI(false);
  }

  return (
    <article className="search">
      <div className="container">
        <div className="header">
          <SearchBar initialText={query.get('text') || ''} />
        </div>
        <div className="content">
          {prevBooks.map((book: BookProps) => {
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
        {pagination.has_more && (
          <div className="load-more-container">
            <input
              type="button"
              className="load-more-button"
              value="Load more.."
              onClick={loadMore}
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default Search;
