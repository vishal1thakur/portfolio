import React from 'react';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';
import {pageAnimation, cardAnim} from '../Animation';
// Project Data
import data from '../data';

const ReactSection = () => {
  return (
    <StyledReact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Header>
        <h2>REACT</h2>
        <div className="line"></div>
      </Header>
    </StyledReact>
  );
};

const StyledReact = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Header = styled(motion.div)`
  margin-left: 100px;
  height: 100px;
  width: 60rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  h2 {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 0.3em;
    color: rgba(255, 205, 46, 1);
  }
  .line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: absolute;
    margin-top: 4rem;
    border-top: 2px dashed rgba(106, 106, 106, 1);
    border-left: 0px;
    border-bottom: 0px;
    border-right: 0px;
    width: 100%;
    opacity: 0.4;
  }
`;

export default ReactSection;
