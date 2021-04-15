import React from 'react';
// Images
import logo from '../img/logo.svg';
import about from '../img/about.svg';
import about_hover from '../img/about_hover.svg';
import contact from '../img/contact.svg';
import contact_hover from '../img/contact_hover.svg';
import all_work from '../img/all_work.svg';
import react from '../img/react.svg';
import java_script from '../img/java_script.svg';
import ux from '../img/ux.svg';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      {/* Menu Fields */}
      {/* About */}
      <Icon>
        <div className="item">
          <img className="off" src={about} alt="" />
          <img className="on" src={about_hover} alt="" />
          <p>ABOUT</p>
        </div>
      </Icon>
      {/* Contact */}
      <Icon>
        <div className="item">
          <img className="off" src={contact} alt="" />
          <img className="on" src={contact_hover} alt="" />
          <p>CONTACT</p>
        </div>
      </Icon>
      {/* All Work */}
      <Icon>
        <div className="item">
          <img src={all_work} alt="" />
          <p>All WORK</p>
        </div>
      </Icon>
      {/* React */}
      <IconReact>
        <div className="item">
          <img src={react} className="react" alt="" />
          <p>REACT</p>
        </div>
      </IconReact>
      {/* JavaScript */}
      <Icon>
        <div className="item">
          <img src={java_script} alt="" />
          <p>JAVASCRIPT</p>
        </div>
      </Icon>
      {/* UX/UI */}
      <Icon>
        <div className="item">
          <img src={ux} alt="" />
          <p>UX/UI</p>
        </div>
      </Icon>
    </StyledNav>
  );
};

// Styles
// Nav
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

// Logo
const Logo = styled(motion.div)`
  filter: drop-shadow(5px 0px 4px rgba(0, 0, 0, 0.5));
  cursor: pointer;
`;

// Menu Fields
const Icon = styled(motion.div)`
  /* background: #ffffff; */
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  p {
    font-size: 10px;
    font-weight: 600;
    padding-top: 4px;
    color: #e2d7b5;
  }

  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.3;
    transition: opacity 0.3s;
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

const IconReact = styled(Icon)`
  p {
    padding-top: 0px;
  }
`;

export default Nav;
