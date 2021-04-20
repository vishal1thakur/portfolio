import React from 'react';
// Components
import Project from '../components/Project';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';

const AllWork = ({projects}) => {
  return (
    <Work>
      <Header>
        <h2>ALL WORK</h2>
        <div className="line"></div>
      </Header>
      <Projects projects={projects}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </Projects>
    </Work>
  );
};

const Work = styled(motion.div)`
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

const Projects = styled(motion.div)`
  margin-top: 0.5rem;
  margin-left: 100px;
  width: 58rem;
  height: 120vh;
  display: grid;
  row-gap: 2rem;
  column-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

export default AllWork;
