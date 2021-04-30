import React from 'react';

import './styles.css';

import SearchIcon from '../../assets/img/search-icon.svg';
import HandIcon from '../../assets/img/hand.svg';

// import HomeIcon from '../../assets/img/home.svg';
// import AddIcon from '../../assets/img/add-icon.svg';
// import UserIcon from '../../assets/img/user.svg';

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
          <div className="book">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51fs1YC1VNL.jpg"
              alt="The book cover"
              className="cover"
            />
            <h1 className="title">The One Thing</h1>
            <h2 className="author">by Gary Keller</h2>
          </div>
          <div className="book">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg"
              alt="The book cover"
              className="cover"
            />
            <h1 className="title">HOOKED</h1>
            <h2 className="author">by Nir Eyal</h2>
          </div>
          <div className="book">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81cOrVseOYL.jpg"
              alt="The book cover"
              className="cover"
            />
            <h1 className="title">Good to Great</h1>
            <h2 className="author">by Jim Collins</h2>
          </div>
          <div className="book">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51fs1YC1VNL.jpg"
              alt="The book cover"
              className="cover"
            />
            <h1 className="title">The One Thing</h1>
            <h2 className="author">by Gary Keller</h2>
          </div>
          <div className="book">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg"
              alt="The book cover"
              className="cover"
            />
            <h1 className="title">HOOKED</h1>
            <h2 className="author">by Nir Eyal</h2>
          </div>
          <div className="book">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81cOrVseOYL.jpg"
              alt="The book cover"
              className="cover"
            />
            <h1 className="title">Good to Great</h1>
            <h2 className="author">by Jim Collins</h2>
          </div>
          <div className="book">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51fs1YC1VNL.jpg"
              alt="The book cover"
              className="cover"
            />
            <h1 className="title">The One Thing</h1>
            <h2 className="author">by Gary Keller</h2>
          </div>
          <div className="book">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg"
              alt="The book cover"
              className="cover"
            />
            <h1 className="title">HOOKED</h1>
            <h2 className="author">by Nir Eyal</h2>
          </div>
        </div>
        {/* <div className="menu">
          <div className="button">
            <img src={HomeIcon} alt="" className="button-icon" />
            <span>Home</span>
          </div>
          <div className="button disabled">
            <img src={AddIcon} alt="" className="button-icon" />
            <span>Add Book</span>
          </div>
          <div className="button disabled">
            <img src={UserIcon} alt="" className="button-icon" />
            <span>Profile</span>
          </div>
        </div> */}
      </div>
    </article>
  );
};

export default Home;
