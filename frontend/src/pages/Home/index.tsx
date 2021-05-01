import React, { useState } from 'react';

import './styles.css';

import SearchIcon from '../../assets/img/search-icon.svg';
import HandIcon from '../../assets/img/hand.svg';
import Book from '../../components/Book';

const Home: React.FC = () => {
  return (
    <article className="home">
      <div className="container">
        <div className="header">
          <div className="search-bar">
            <img
              src={SearchIcon}
              alt="The name of the book to search for"
              className="search-icon"
            />
            <input
              type="text"
              className="search-input"
              placeholder="Search Book"
            />
          </div>
          <div className="welcome-bar">
            <div className="welcome-text">
              <span className="hi">Hi, </span>
              <span className="user-name">Mehmed Al Fatih</span>
            </div>
            <img src={HandIcon} alt="" className="hand-icon" />
          </div>
        </div>
        <div className="content">
          <Book
            title="The One Thing"
            author="Gary Keller"
            coverURL="https://images-na.ssl-images-amazon.com/images/I/51fs1YC1VNL.jpg"
          />
          <Book
            title="HOOKED"
            author="Nir Eyal"
            coverURL="https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg"
          />
          <Book
            title="Good to Great"
            author="Jim Collins"
            coverURL="https://images-na.ssl-images-amazon.com/images/I/81cOrVseOYL.jpg"
          />
        </div>
      </div>
    </article>
  );
};

export default Home;
