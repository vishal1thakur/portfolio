// ------------ 1) Imports ------------------

import React from 'react';
// Images
import logo from '../img/logo.svg';
import about from '../img/nav/idle/about.svg';
import all_work from '../img/nav/idle/all_work.svg';
import react from '../img/nav/idle/react.svg';
import java_script from '../img/nav/idle/java_script.svg';
import ux from '../img/nav/idle/ux.svg';

// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

// ------------ 2) JSX ------------------

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>
      <Menu className="menu">
        <ul className="navbar">
          <StyledLink to="/about">
            <li className="nav-item">
              <img className="image image-about" src={about} alt="" />
              <span class="link-text">ABOUT</span>
            </li>
          </StyledLink>
          <StyledLink to="/work">
            <li className="nav-item">
              <img className="image image-work" src={all_work} alt="" />
              <span class="link-text">ALL WORK</span>
            </li>
          </StyledLink>
          <StyledLink to="/work/react">
            <li className="nav-item">
              <img className="image" src={react} alt="" />
              <span class="link-text">REACT</span>
            </li>
          </StyledLink>
          <StyledLink to="/work/js">
            <li className="nav-item">
              <img className="image image-js" src={java_script} alt="" />
              <span class="link-text">JAVASCRIPT</span>
            </li>
          </StyledLink>
          <StyledLink to="/work/ux">
            <li className="nav-item">
              <img className="image image-ux" src={ux} alt="" />
              <span class="link-text">UX / UI</span>
            </li>
          </StyledLink>
        </ul>
      </Menu>
    </StyledNav>
  );
};

// ------------ 3) Styles ------------------

const StyledNav = styled(motion.div)`
  background-color: #2a2e35;

  z-index: 10;
  left: 0;
  position: fixed;
  overflow: hidden;
  box-shadow: 6px 0px 15px 2px rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }
  @media only screen and (min-width: 600px) {
    width: 6.5rem;
    height: 100vh;
    top: 0;
  }
`;

// Logo
const Logo = styled(motion.div)`
  @media only screen and (min-width: 600px) {
    filter: drop-shadow(5px 0px 4px rgba(0, 0, 0, 0.5));
    cursor: pointer;
    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    img {
      display: none;
    }
  }
`;

const Menu = styled(motion.div)`
  z-index: 3;

  @media only screen and (min-width: 600px) {
    .navbar {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      .nav-item {
        width: 6.5rem;
        height: 7rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        background: none;
        transition: background 0.5s;

        .link-text {
          color: #6c7983;
          font-size: 0.6rem;
          padding-top: 8px;
          font-weight: 700;
          transition: color 0.5s;
        }
        &:hover {
          background: #24282e;
          .image {
            filter: grayscale(0%) opacity(1);
          }
          .link-text {
            color: #ffcd2e;
          }
        }
        .image {
          width: 1.8rem;

          filter: grayscale(100%) opacity(0.6);
          transition: filter 0.5s;
        }

        .image-about {
          width: 1.6rem;
        }

        .image-work {
          width: 2rem;
        }
        .image-js {
          width: 1.5rem;
        }
        .image-ux {
          width: 1.8rem;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .menu {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .navbar {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 5rem;
      text-decoration: none;

      .nav-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        width: 6rem;
        height: 5rem;
        align-items: center;
        &:active {
          background: #24282e;
          .image {
            filter: grayscale(0%) opacity(1);
          }
          .link-text {
            color: #ffcd2e;
          }
        }
        .image {
          filter: grayscale(100%) opacity(1);
        }
        .image-about {
          width: 1.6rem;
        }

        .image-work {
          width: 2.5rem;
        }
        .image-js {
          width: 1.5rem;
        }
        .image-ux {
          width: 2rem;
        }
        .link-text {
          font-size: 0.6rem;
          margin-top: 0.5rem;
          color: #6c7983;
          text-decoration: none;
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default Nav;
