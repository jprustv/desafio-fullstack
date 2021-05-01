import React, { useEffect, useState } from 'react';

import './styles.css';

import SearchIcon from '../../assets/img/search-icon.svg';
import { useHistory } from 'react-router-dom';

export interface SearchBarProps {
  initialText?: string;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const [searchText, setSearchText] = useState('');

  const history = useHistory();

  function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();
    history.push(`/search?text=${searchText}`);
  }

  useEffect(() => {
    if (props.initialText) {
      setSearchText(props.initialText);
    }
  }, [props.initialText]);

  return (
    <div className="search-bar">
      <img
        src={SearchIcon}
        alt="The name of the book to search for"
        className="search-icon"
      />
      <form onSubmit={handleOnSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search Book"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
      </form>
    </div>
  );
};

export default SearchBar;
