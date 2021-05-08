import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../img/logo.PNG';
import info from '../img/info.png';
import Search from '../components/Search';
import {POPULAR_ALL_API, TV_API, MOVIE_API} from '../api';

const Nav = ({contents, setContents, setLoading}) => {
  const [isActive, setActive] = useState('');

  const logoClick = () => {
    setLoading(true);

    fetch(POPULAR_ALL_API)
      .then((res) => res.json())
      .then((data) => {
        setContents(data.results);
        setLoading(false);
      });
    setActive(0);
  };

  const tvClick = () => {
    setLoading(true);

    fetch(TV_API)
      .then((res) => res.json())
      .then((data) => {
        setContents(data.results);
        setLoading(false);
      });
    setActive(1);
  };

  const movieClick = () => {
    setLoading(true);

    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        setContents(data.results);
        setLoading(false);
      });
    setActive(2);
  };

  return (
    <StyledNav>
      <div className="container">
        <div className="logo" onClick={logoClick}>
          <img src={logo} alt="" />
        </div>
        <div className="tab-container">
          <div className="tabs tv" onClick={tvClick}>
            <button className={isActive === 1 ? 'active' : ''}>
              Trending Shows
            </button>
          </div>
          <div className="tabs movie" onClick={movieClick}>
            <button className={isActive === 2 ? 'active' : ''}>
              Trending Movies
            </button>
          </div>
        </div>
        <div className="search">
          <Search
            contents={contents}
            setContents={setContents}
            setActive={setActive}
            setLoading={setLoading}
          />
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
      &:hover {
        cursor: pointer;
      }
    }
    .tabs {
      cursor: pointer;
      font-size: 1rem;

      button {
        background: none;
        border: none;
        color: #f3f3f3;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        &:hover {
          color: #ffcd2e;
        }
        &:focus {
          color: #ffcd2e;
        }
      }
      .active {
        color: #ffcd2e;
      }
    }
  }
  .tab-container {
    display: flex;
    flex: column;
    justify-content: space-between;
    width: 25%;
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

  @media only screen and (max-width: 600px) {
    .container {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      width: 100%;

      height: 9rem;
      margin-top: 1rem;
      .tab-container {
        display: flex;
        flex: column;
        justify-content: space-between;
        width: 50%;
        margin-top: 1rem;
      }
    }
    .search {
      width: 100%;
      margin-top: 1rem;
    }
    .info {
      display: none;
    }
  }
`;
export default Nav;
