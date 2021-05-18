import React, {useState} from 'react';
// Components
import ScrollToTop from '../components/ScrollToTop';

import SeparateProject from '../components/SeparateProject';
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
        <h2>JAVASCRIPT</h2>
        <div className="line"></div>
      </Header>
      <Projects variants={cardAnim}>
        {projects.map((project) => {
          if (project.type === 'JAVASCRIPT') {
            return (
              <SeparateProject
                key={project.id}
                project={project}
              ></SeparateProject>
            );
          }
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
    margin-left: 0px;
    width: 90%;
  }
`;

const Projects = styled(motion.div)`
  margin-top: 2rem;
  margin-bottom: 4rem;
  margin-left: 100px;
  width: 55%;
  height: 160vh;
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  row-gap: 4rem;
  column-gap: 4rem;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0px;
    margin-bottom: 7rem;
    row-gap: 1rem;
    column-gap: 1rem;
    height: 275vh;
    row-gap: 7rem;
  }
`;

export default AllWork;
