import React from 'react';
//Styling and Animation
import styled from 'styled-components';
// Styles
import GlobalStylesOBS from './components/GlobalStylesOBS';
import ProjectBackground from './components/ProjectBackground';
import HeaderUX from './components/HeaderUX';
import ProjectDetails from './components/ProjectDetails';
import ProblemStatement from './components/ProblemStatement';
import Process from './components/Process';
import Think1 from './components/Think1';
import Make1 from './components/Make1';
import Check1 from './components/Check1';
import Make2 from './components/Make2';
import Check2 from './components/Check2';
import Make3 from './components/Make3';

const OBS = () => {
  return (
    <OBSApp className="SLApp">
      <GlobalStylesOBS />
      <HeaderUX />
      <ProjectBackground />
      <ProjectDetails />
      <ProblemStatement />
      <Process />
      <Think1 />
      <Make1 />
      <Check1 />
      <Make2 />
      <Check2 />
      <Make3 />
    </OBSApp>
  );
};

const OBSApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0rem 0rem 0rem 6.5rem;
  overflow-x: none;
`;

export default OBS;
