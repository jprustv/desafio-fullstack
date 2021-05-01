import React from 'react';

import './styles.css';

interface BookProps {
  title: string;
  author: string;
  coverURL: string;
}

const Book: React.FC<BookProps> = (props: BookProps) => {
  return (
    <article className="book">
      <img src={props.coverURL} alt={props.title} className="cover" />
      <h1 className="title">{props.title}</h1>
      <h2 className="author">by {props.author}</h2>
    </article>
  );
};

export default Book;
