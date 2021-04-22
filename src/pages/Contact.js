import React from 'react';
// Images
import phone from '../img/Contact/phone.svg';
import email from '../img/Contact/email.svg';
import github from '../img/Contact/github.svg';
import linkedin from '../img/Contact/linkedin.svg';
import instagram from '../img/Contact/instagram.svg';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animation';

const Contact = () => {
  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Header>
        <h2>CONTACT</h2>
        <div className="line"></div>
      </Header>
      <Content>
        {/* <div className="text">
          <h3>You can reach me through the following channels. Lets talk!</h3>
        </div> */}
        <div className="contact-container">
          <div className="email contact">
            <img src={email} alt="" />
            <h4>interaction.vishal@gmail.com</h4>
          </div>
          <div className="phone contact">
            <img src={phone} alt="" />
            <h4>+91-9967252326</h4>
          </div>
          <div className="plain-line"></div>
          <div className="social">
            <img src={github} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <Footer className="footer">
          <hr></hr>
          <p className="copyright">
            &#169; 2021 Vishal Thakur : website crafted in React, deployed on
            Netlify
          </p>
        </Footer>
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
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;

  .text {
    h3 {
      font-size: 16px;
      padding-bottom: 20px;
      color: rgba(99, 101, 102, 0.9);
      font-weight: 500;
    }
  }
  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    .contact {
      display: flex;
      flex-direction: row;
      justify-content: left;
      text-align: center;
      align-items: center;
      margin-top: 2rem;

      h4 {
        padding-left: 20px;
        color: rgba(255, 205, 46, 1);
        font-weight: 400;
      }
    }
    .plain-line {
      border-top: 1px solid rgba(106, 106, 106, 0.5);
      border-left: 0px;
      border-bottom: 0px;
      border-right: 0px;
      margin-top: 1rem;
      width: 70%;
      opacity: 0.4;
    }
    .social {
      margin-top: 1.5rem;
      display: flex;
      width: 80%;
      flex-direction: row;
      justify-content: space-around;
      text-align: center;
      align-items: center;
      img {
        width: 2.1rem;
      }
    }
  }
`;

const Footer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  hr {
    border-top: 1px dashed #4a4a4a;
    border-left: 0px;
    border-bottom: 0px;
    border-right: 0px;
    opacity: 0.4;
  }

  .copyright {
    padding-top: 0.5rem;
    text-align: center;
    font-size: 12px;
    opacity: 0.6;
    color: #636566;
  }
`;

export default Contact;
