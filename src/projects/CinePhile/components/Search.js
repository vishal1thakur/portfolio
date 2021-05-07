import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {SEARCH_API} from '../api';

const Search = () => {
  const [SearchTerm, setSearchTerm] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    e.preventDefault();
  };
  return (
    <StyledSearch>
      <form onSubmit={handleOnSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={SearchTerm}
          onChange={handleOnChange}
        />
      </form>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  width: 100%;
  input {
    outline: none;
    text-decoration: none;
    ::placeholder {
      color: rgba(255, 188, 85, 0.3);
    }
  }
  .search-bar {
    padding: 0.7rem 9rem 0.7rem 1rem;
    background: none;
    border: 0.01em solid rgba(255, 188, 85, 0.4);
    border-radius: 100px;
    color: white;
  }
`;

export default Search;
