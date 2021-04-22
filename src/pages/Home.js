// ------------ 1) Imports ------------------

import React from 'react';
// Images
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import resume from '../img/resume.svg';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

// ------------ 2) JSX ------------------

const Home = () => {
  return (
    <StyledHomeContent>
      {/* Main text content of the page */}
      <Banner>
        {/* Greeting */}
        <h3>HI THERE &#128075;, I'M</h3>

        {/* Name and Skill */}
        <Name className="name">
          <span>VISHAL</span>
          <span>THAKUR</span>
        </Name>
        <Skill>
          <span>DESIGNER</span>
          <span>+</span>
          <span>DEVELOPER</span>
          {/* <span className="laptop">&#128187;</span> */}
        </Skill>

        {/* Description */}
        <p>
          I am a Front End Developer & Designer based in Mumbai - India;
          passionate about making products that people find meaningful.
        </p>

        {/* Main CTA */}
        <Button>
          <Link to="/work" className="button">
            <h4>View My Work</h4>
          </Link>
        </Button>

        {/* Footer */}
        <hr></hr>
        <p className="copyright">
          &#169; 2021 Vishal Thakur : website crafted in React, deployed on
          Netlify
        </p>
      </Banner>

      {/* Social Links */}
      <Social>
        {/* Empty grid items */}
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>

        {/* Github link */}
        <SocialCard>
          <div className="social github">
            <img className="social-image" src={github} alt="" />
            <div className="github-name">GITHUB</div>
          </div>
        </SocialCard>

        {/* LinkedIn link */}
        <SocialCard>
          <div className="social linkedin">
            <img className="social-image" src={linkedin} alt="" />
            <div className="linkedin-name">LINKEDIN</div>
          </div>
        </SocialCard>

        {/* Resume link */}
        <SocialCard>
          <div className="social resume">
            <img className="social-image" src={resume} alt="" />
            <div className="resume-name">RESUME</div>
          </div>
        </SocialCard>
      </Social>
    </StyledHomeContent>
  );
};

// ------------ 3) Styles ------------------

// Entire Page
const StyledHomeContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 100px;
  height: 100vh;
  overflow: hidden;
  color: #ffffff;
`;

// Main content section
const Banner = styled(motion.div)`
  margin-left: 1.5rem;
  padding: 10rem 10rem 20rem 10rem;
  width: 53rem;

  h3 {
    font-size: 14px;
    line-height: 127%;
    letter-spacing: 0.075em;
    color: #b0b0b0;
    font-weight: 400;
  }

  p {
    font-size: 15px;
    line-height: 160%;
    letter-spacing: 0.09em;
    text-align: justify;
    color: #636566;
    padding-top: 3rem;
    opacity: 0.8;
  }

  hr {
    margin-top: 11rem;
    border-top: 1px dashed #4a4a4a;
    border-left: 0px;
    border-bottom: 0px;
    border-right: 0px;
    opacity: 0.4;
  }

  .copyright {
    padding-top: 0.5rem;
    text-align: center;
    font-size: 11px;
    opacity: 0.6;
  }
`;

// Name and Skill
const Name = styled(motion.div)`
  width: 100%;
  display: flex;

  justify-content: space-between;
  padding-top: 1rem;
  font-weight: bold;
  font-size: 54px;
  line-height: 127%;
  letter-spacing: 0.12em;
  width: 100%;
  color: #ffffff;
`;

const Skill = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 127%;

  letter-spacing: 1.1em;

  color: #ffcd2e;

  .laptop {
    opacity: 0.5;
  }
`;

// CTA
const Button = styled(motion.div)`
  padding-top: 2rem;

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
  .button:hover {
    box-shadow: 0px 0px 15px 5px rgba(255, 205, 46, 0.08);
    h4 {
      opacity: 1;
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

// Social Links
// Grid
const Social = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1.5fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . .'
    '. . .';
  margin-left: -4rem;
  height: 100vh;
  padding-right: 1000px;
`;

// Each Link
const SocialCard = styled(motion.div)`
  // Common styles
  width: 100%;
  height: 100%;
  display: flex;

  .social {
    width: 100%;
    height: 100%;
    border-radius: 100px 100px 0px 0px;
    border-bottom: none;
    margin-right: 35px;
    margin-left: 10px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background-color 0.5s ease-in-out;
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
      .resume-name {
        opacity: 1;
      }
      .social-image {
        opacity: 1;
      }
    }
  }
`;

export default Home;
