import React from 'react';
// Images
import logo from '../img/logo.svg';
import about from '../img/about.svg';
import contact from '../img/contact.svg';
import all_work from '../img/all_work.svg';
import react from '../img/react.svg';
import java_script from '../img/about.svg';
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
      <Icon>
        <img src={about} alt="" />
        <p>ABOUT</p>
      </Icon>
      <Icon>
        <img src={contact} alt="" />
        <p>CONTACT</p>
      </Icon>
      <Icon>
        <img src={all_work} alt="" />
        <p>All WORK</p>
      </Icon>
      <Icon>
        <img src={react} alt="" />
        <p>REACT</p>
      </Icon>
      <Icon>
        <img src={java_script} alt="" />
        <p>JAVASCRIPT</p>
      </Icon>
      <Icon>
        <img src={ux} alt="" />
        <p>UX/UI</p>
      </Icon>
    </StyledNav>
  );
};

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

const Logo = styled(motion.div)`
  filter: drop-shadow(5px 0px 4px rgba(0, 0, 0, 0.5));
`;

const Icon = styled(motion.div)`
  /* background: #ffffff; */
  width: 100%;
  height: 100px;
  margin-top: -4px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  p {
    font-size: 11px;
    font-weight: 700;
    padding-top: 5px;
    color: #727272;
  }
`;

export default Nav;
