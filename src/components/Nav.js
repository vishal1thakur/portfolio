// ------------ 1) Imports ------------------

import React from 'react';
// Images
import logo from '../img/logo.svg';
import about from '../img/about.svg';
import all_work from '../img/all_work.svg';
import react from '../img/react.svg';
import java_script from '../img/java_script.svg';
import ux from '../img/ux.svg';
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
        <StyledLink to="/">
          <img src={logo} alt="" />
        </StyledLink>
      </Logo>
      <Menu>
        {/* Menu Fields */}
        {/* About */}
        <Icon>
          <div className="item">
            <StyledLink to="/about">
              <div className="image">
                <img src={about} alt="" />
              </div>
              <div className="tab">
                <p className="tab-text">ABOUT</p>
              </div>
            </StyledLink>
          </div>
        </Icon>
        {/* Contact */}
        {/* <Icon>
        <div className="item">
          <StyledLink to="/contact">
            <img src={contact} alt="" />
            <p>CONTACT</p>
          </StyledLink>
        </div>
      </Icon> */}
        {/* All Work */}
        <Icon>
          <div className="item">
            <StyledLink to="/work">
              <div className="image">
                <img src={all_work} alt="" />
              </div>
              <div className="tab">
                <p className="tab-text">ALL WORK</p>
              </div>
            </StyledLink>
          </div>
        </Icon>
        {/* React */}
        <IconReact>
          <div className="item">
            <StyledLink to="/work/react">
              <div className="image">
                <img src={react} alt="" />
              </div>
              <div className="tab">
                <p className="tab-text">REACT</p>
              </div>
            </StyledLink>
          </div>
        </IconReact>
        {/* JavaScript */}
        <Icon>
          <div className="item">
            <StyledLink to="/work/js">
              <div className="image">
                <img src={java_script} alt="" />
              </div>
              <div className="tab">
                <p className="tab-text">JAVASCRIPT</p>
              </div>
            </StyledLink>
          </div>
        </Icon>
        {/* UX/UI */}
        <Icon>
          <div className="item">
            <StyledLink to="/work/ux">
              <div className="image">
                <img src={ux} alt="" />
              </div>
              <div className="tab">
                <p className="tab-text">UX/UI</p>
              </div>
            </StyledLink>
          </div>
        </Icon>
      </Menu>
    </StyledNav>
  );
};

// ------------ 3) Styles ------------------

const StyledNav = styled(motion.div)`
  width: 100px;
  height: 100vh;
  background-color: #2a2e35;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  box-shadow: 6px 0px 6px 2px rgba(0, 0, 0, 0.25);
`;

const Menu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 0px;
`;

// Logo
const Logo = styled(motion.div)`
  /* filter: drop-shadow(5px 0px 4px rgba(0, 0, 0, 0.5)); */
  cursor: pointer;
  margin: 0;
`;

// Menu Fields
const Icon = styled(motion.div)`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;

  .item {
    cursor: pointer;
    opacity: 0.3;
    transition: opacity 0.3s;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    .image {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .tab-text {
      font-size: 10px;
      font-weight: 600;
      padding-top: 4px;
      color: #e2d7b5;
    }

    .off {
      display: block;
    }
    .on {
      display: none;
    }
  }

  .item:hover {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    opacity: 1;

    .off {
      display: block;
    }
    .on {
      display: none;
    }
  }

  .item:focus {
    opacity: 1;
    .off {
      display: none;
    }
    .on {
      display: block;
      opacity: 1;
    }
  }
`;

// Exclusion for react icon
const IconReact = styled(Icon)`
  p {
    padding-top: -10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default Nav;
