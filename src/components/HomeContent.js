import React from 'react';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';

const HomeContent = () => {
  return <StyledHomeContent></StyledHomeContent>;
};

const StyledHomeContent = styled(motion.div)`
  margin-left: 100px;
  height: 100vh;
  background-color: #12181b;
  overflow: hidden;
`;

export default HomeContent;
