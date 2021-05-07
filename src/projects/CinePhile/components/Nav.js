import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.PNG';
import info from '../img/info.png';
import Search from '../components/Search';

const Nav = () => {
  return (
    <StyledNav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="tv">
          <h4>Trending Shows</h4>
        </div>
        <div className="movie">
          <h4>Trending Movies</h4>
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="info">
          <img src={info} alt="" />
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  top: 0;
  height: 6.5rem;
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    .logo {
      img {
        width: 13rem;
      }
    }
    .search {
      width: 25%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info {
      img {
        width: 2rem;
      }
    }
  }
`;
export default Nav;
