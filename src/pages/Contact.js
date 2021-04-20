import React from 'react';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';

const Contact = () => {
  return (
    <StyledContact>
      <Header>
        <h2>CONTACT</h2>
        <div className="line"></div>
      </Header>
      <Content>
        <div className="text">
          <h3>You can find me through the following channels. Lets talk!</h3>
        </div>
        <div className="button">
          <button>+91-9967252326</button>
        </div>
      </Content>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
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

const Content = styled(motion.div)`
  margin-left: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  .text {
    margin-top: 20px;
    h3 {
      font-size: 16px;
      padding-bottom: 20px;
      color: rgba(99, 101, 102, 0.7);
      font-weight: 500;
    }
  }
`;

export default Contact;
