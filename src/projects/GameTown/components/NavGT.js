import React, {useState} from 'react';
// Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';
// Redux and Routes
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    dispatch(fetchSearch(textInput));
    e.preventDefault();
    setTextInput('');
  };
  const clearSearched = () => {
    dispatch({type: 'CLEAR_SEARCHED'});
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
      </Logo>
      <form className="searchGT">
        <input
          className="inputGT"
          value={textInput}
          onChange={inputHandler}
          type="text"
        />
        <button className="buttonGT" onClick={submitSearch} type="submit">
          Search a Game
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  .searchGT {
    margin-right: 3rem;
    width: 40%;
  }
  .inputGT {
    width: 60%;
    font-size: 1rem;
    padding: 0.4rem;
    border: none;
    border-radius: 5px 0px 0px 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  .buttonGT {
    font-size: 1rem;
    border: none;
    border-radius: 0px 5px 5px 0px;
    padding: 0.4rem 2rem;
    cursor: pointer;
    background: var(--primary-color);
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
`;
const Logo = styled(motion.div)`
  cursor: pointer;
  img {
    width: 18rem;
    margin-left: 6rem;
    opacity: 0.8;
  }
`;

export default Nav;
