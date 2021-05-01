import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
export interface BookProps {
  _id: number;
  title: string;
  author: string;
  coverURL: string;
}

const Book: React.FC<BookProps> = (props: BookProps) => {
  return (
    <Link to={`/detail?id=${props._id}`}>
      <article className="book">
        <img src={props.coverURL} alt={props.title} className="cover" />
        <h1 className="title">{props.title}</h1>
        <h2 className="author">by {props.author}</h2>
      </article>
    </Link>
  );
};

export default Book;
