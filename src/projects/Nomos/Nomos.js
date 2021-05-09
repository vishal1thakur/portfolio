import React from 'react';
//Styling and Animation
import styled from 'styled-components';
// Styles
import GlobalStylesNomos from './components/GlobalStylesNomos';
import HeaderNomos from './components/HeaderNomos';
import ProjectBackground from './components/ProjectBackground';
import ProjectDetails from './components/ProjectDetails';
import ProblemStatement from './components/ProblemStatement';
import Process from './components/Process';
import Discover from './components/Discover';
import Define from './components/Define';
import Design from './components/Design';

const Nomos = () => {
  return (
    <OBSApp className="SLApp">
      <GlobalStylesNomos />
      <HeaderNomos />
      <ProjectBackground />
      <ProjectDetails />
      <ProblemStatement />
      <Process />
      <Discover />
      <Define />
      <Design />
    </OBSApp>
  );
};

const OBSApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0rem 0rem 0rem 6.5rem;
  overflow-x: none;
  @media only screen and (max-width: 600px) {
    margin-left: 0rem;
  }
`;

export default Nomos;
