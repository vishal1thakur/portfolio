import React, {useState} from 'react';
// Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';
// Redux and Routes
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';
import {fadeIn} from '../animations';

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
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
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
  .search {
    margin-right: 3rem;
    width: 40%;
  }
  input {
    width: 60%;
    font-size: 1.2rem;
    padding: 0.5rem;
    border: none;
    border-radius: 5px 0px 0px 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.2rem;
    border: none;
    border-radius: 0px 5px 5px 0px;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: var(--primary-color);
    color: white;
  }
`;
const Logo = styled(motion.div)`
  cursor: pointer;
  img {
    width: 15rem;
    margin-left: 6rem;
  }
`;

export default Nav;
