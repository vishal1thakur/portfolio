import React, {useState} from 'react';
// Components
import Project from '../components/Project';
import ScrollToTop from '../components/ScrollToTop';

// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';
import {pageAnimation, cardAnim} from '../Animation';
// Project Data
import data from '../data';

const AllWork = () => {
  const [projects] = useState(data());

  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <ScrollToTop />

      <Header>
        <h2>ALL WORK</h2>
        <div className="line"></div>
      </Header>
      <Projects variants={cardAnim}>
        {projects.map((project) => {
          return <Project key={project.id} project={project}></Project>;
        })}
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
  z-index: 2;
  @media only screen and (min-width: 600px) {
  }
`;

const Header = styled(motion.div)`
  margin-left: 100px;
  height: 100px;
  width: 65%;
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
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 0px;
  }
`;

const Projects = styled(motion.div)`
  margin-top: 0.5rem;
  margin-left: 100px;
  width: 80%;
  height: 120vh;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5rem;
  /* display: grid;
  row-gap: 1rem;
  column-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); */
  @media only screen and (max-width: 600px) {
    margin-left: 0px;

    margin-bottom: 110rem;
  }
`;

export default AllWork;
