import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';
import {motion} from 'framer-motion';
import {pageAnimationHome, titleAnim, fade} from '../Animation';

// Images
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import resume from '../img/resume.svg';

const Home = () => {
  return (
    <StyledHHome
      exit="exit"
      variants={pageAnimationHome}
      initial="hidden"
      animate="show"
    >
      <div className="meta-container">
        <Banner className="container1">
          <Name variants={titleAnim} className="name">
            VISHAL THAKUR
          </Name>
          <Skill variants={titleAnim} className="skill">
            <h3>DESIGNER + DEVELOPER</h3>
          </Skill>
          <Para variants={fade} className="para">
            I am a Front End Developer & Designer based in Mumbai - India;
            passionate about making products that people find meaningful.
          </Para>
          <Button variants={fade} className="button">
            <Link to="/work" className="button">
              <h4>View My Work</h4>
            </Link>
          </Button>
          <Footer variants={fade} className="footer">
            <hr />
            <p>
              &#169; 2021 Vishal Thakur : website crafted in React, deployed on
              Firebase
            </p>
          </Footer>
        </Banner>

        <Social variants={titleAnim} className="container2">
          {' '}
          {/* Empty grid items */}
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          {/* Github link */}
          <SocialCard>
            <a
              href="https://github.com/vishal1thakur"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social github">
                <img className="social-image" src={github} alt="" />
                <div className="github-name">GITHUB</div>
              </div>
            </a>
          </SocialCard>
          {/* LinkedIn link */}
          <SocialCard>
            <a
              href="https://www.linkedin.com/in/vishal1thakur/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social linkedin">
                <img className="social-image" src={linkedin} alt="" />
                <div className="linkedin-name">LINKEDIN</div>
              </div>
            </a>
          </SocialCard>
          {/* Resume link */}
          <SocialCard>
            <a
              href="https://drive.google.com/file/d/1V8qa5IdW6EZFLeRB0Fq-CNgBEUsEfsiU/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social resume">
                <img className="social-image" src={resume} alt="" />
                <div className="resume-name">RESUME</div>
              </div>
            </a>
          </SocialCard>
        </Social>
      </div>
    </StyledHHome>
  );
};

const StyledHHome = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow: none;

  .meta-container {
    width: 100%;
    height: 100%;

    padding-left: 6.5rem;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 1075px) {
    .meta-container {
      .container1 {
        width: 100%;
      }
      .container2 {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .meta-container {
      padding-left: 0rem;

      padding-bottom: 6.5rem;
    }
  } ;
`;

const Banner = styled(motion.div)`
  overflow: none;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5rem;
  @media only screen and (max-width: 1250px) {
    padding-left: 0rem;
  }
`;

const Name = styled(motion.div)`
  text-align: center;
  padding: 0 10%;
  font-size: 3.5rem;
  line-height: 127%;
  letter-spacing: 0.1em;
  color: #ffffff;
  font-weight: bold;
  position: relative;
  @media only screen and (max-width: 1350px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 670px) {
    font-size: 2.6rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2.8rem;
    padding: 0;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 1rem;
    font-size: 2rem;
  }
`;

const Skill = styled(motion.div)`
  text-align: center;
  h3 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 127%;
    width: 100%;

    letter-spacing: 1rem;

    color: #ffcd2e;
    @media only screen and (max-width: 1350px) {
      font-size: 0.65rem;
    }
    @media only screen and (max-width: 670px) {
      font-size: 0.7rem;
      letter-spacing: 0.8rem;
    }
    @media only screen and (max-width: 600px) {
      font-size: 0.8rem;
      letter-spacing: 0.8rem;
    }
    @media only screen and (max-width: 480px) {
      padding: 0 1rem;
      font-size: 0.7rem;
      letter-spacing: 0.5rem;
    }
  }
`;

const Para = styled(motion.div)`
  font-size: 0.9rem;
  line-height: 160%;
  letter-spacing: 0.07em;
  text-align: justify;
  color: #636566;
  padding-top: 3rem;
  opacity: 0.8;
  width: 32rem;
  @media only screen and (max-width: 1350px) {
    font-size: 0.9rem;
    width: 28rem;
  }
  @media only screen and (max-width: 670px) {
    font-size: 0.8rem;
    width: 25rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: 18rem;
  }
`;

const Button = styled(motion.div)`
  padding-top: 2rem;
  width: 32rem;
  @media only screen and (max-width: 1350px) {
    width: 28rem;
  }
  @media only screen and (max-width: 670px) {
    width: 25rem;
  }
  @media only screen and (max-width: 480px) {
    width: 19rem;

    .button {
      padding: 5px 10px;
    }
  }
  .button {
    display: block;
    text-align: center;
    text-decoration: none;
    border: 1px solid rgba(255, 205, 46, 0.4);
    margin: auto;
    padding: 30px 10px;
    width: 100%;
    cursor: pointer;
    background: #12181b;
    outline-style: none;

    box-shadow: 0px 0px 15px 5px rgba(255, 205, 46, 0);
    transition: box-shadow 0.5s;
    border-radius: 60px;

    h4 {
      font-family: Rubik;
      font-weight: 300;
      font-size: 16px;
      color: #ffcd2e;
      letter-spacing: 0.1em;
      opacity: 0.5;
      transition: opacity 0.5s ease;
    }
  }
  @media only screen and (min-width: 600px) {
    .button:hover {
      box-shadow: 0px 0px 15px 5px rgba(255, 205, 46, 0.08);
      h4 {
        opacity: 1;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .button:active {
      box-shadow: 0px 0px 15px 5px rgba(255, 205, 46, 0.08);
      h4 {
        opacity: 1;
      }
    }
  }
  .button:active {
    box-shadow: 0px 0px 10px 6px rgba(255, 205, 46, 0.1);
    h4 {
      opacity: 1;
    }
    background: (255, 205, 46, 0.1);
  }
`;

const Footer = styled(motion.div)`
  width: 32rem;

  position: absolute;
  bottom: 0;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    border-top: 1px dashed #4a4a4a;
    border-left: 0px;
    border-bottom: 0px;
    border-right: 0px;
    opacity: 0.4;
    width: 100%;
  }

  p {
    font-size: 0.7rem;
    line-height: 160%;
    letter-spacing: 0.09em;
    text-align: justify;
    color: #636566;
    text-align: center;
    padding-top: 0.3rem;
    opacity: 0.8;
  }
  @media only screen and (max-width: 670px) {
    width: 25rem;
  }
  @media only screen and (max-width: 480px) {
    width: 19rem;
    padding-bottom: 6rem;
  }
`;

// Social Links
// Grid
const Social = styled(motion.div)`
  width: 40%;
  height: 100%;
  padding-right: 15rem;
  @media only screen and (max-width: 950px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1.5fr 0.5fr;
    gap: 0px 0px;
    grid-template-areas:
      '. . .'
      '. . .';

    height: 100vh;

    a {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.1em;
      color: #f3f3f3;
    }
  }
`;

// Each Link
const SocialCard = styled(motion.Link)`
  // Common styles
  width: 50%;
  height: 100%;
  display: flex;
  margin-right: 30px;
  .social {
    width: 100%;
    height: 100%;
    border-radius: 100px 100px 0px 0px;
    border-bottom: none;

    cursor: pointer;
  }
  .social-image {
    position: relative;
    top: -25%;
    padding: 32px;
    opacity: 0.3;
    transition: opacity 0.5s ease-in-out;
  }

  // Github only
  .github {
    border: 2px dotted rgba(255, 46, 46, 0.6);
    border-bottom: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgba(255, 46, 46, 0);
    transition: background-color 0.5s ease-in-out;
    .github-name {
      position: absolute;
      bottom: 1rem;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.1em;
      opacity: 0;
      color: #f3f3f3;
      transition: opacity 0.5s ease-in-out;
    }
    :hover {
      background-color: rgba(255, 46, 46, 0.7);
      .github-name {
        opacity: 1;
      }
      .social-image {
        opacity: 1;
      }
    }
  }

  // Lonkedin only
  .linkedin {
    border: 2px dotted rgba(46, 117, 255, 0.6);
    border-bottom: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background-color 0.5s ease-in-out;
    .linkedin-name {
      position: absolute;
      bottom: 1rem;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.1em;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    :hover {
      background: rgba(46, 117, 255, 0.7);
      .linkedin-name {
        opacity: 1;
      }
      .social-image {
        opacity: 1;
      }
    }
  }

  //Resume only
  .resume {
    border: 2px dotted rgba(255, 205, 46, 0.6);
    position: relative;
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background-color 0.5s ease-in-out;
    cursor: default;
    .resume-name {
      position: absolute;
      bottom: 1rem;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.1em;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    :hover {
      background: rgba(255, 205, 46, 0.8);
      cursor: pointer;
      .resume-name {
        opacity: 1;
        cursor: pointer;
      }
      .social-image {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
`;

export default Home;
