import React from 'react';
// Images
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';

const HomeContent = () => {
  return (
    <StyledHomeContent>
      <Banner>
        <h3>HI THERE &#128075;, I'M</h3>

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
        <p>
          I am a Front End Developer & Designer based in Mumbai - India;
          passionate about making products that people find meaningful.
        </p>
        <Button>
          <button className="button">
            <h4>View My Work</h4>
          </button>
        </Button>
        <hr></hr>
        <p className="copyright">
          &#169; 2021 Vishal Thakur : website crafted in React, deployed on
          Netlify
        </p>
      </Banner>
      <Meta>
        <Social>
          <div className="box">
            <div className="empty"></div>
          </div>

          <div className="box github-box">
            <div className="github">
              <div className="git">
                <img className="git-image" src={github} alt="" />
              </div>
            </div>
          </div>
        </Social>
        <Social>
          <div className="box">
            <div className="empty"></div>
          </div>

          <div className="box github-box">
            <div className="github">
              <div className="git">
                <img className="git-image" src={github} alt="" />
              </div>
            </div>
          </div>
        </Social>
      </Meta>
    </StyledHomeContent>
  );
};

const StyledHomeContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 100px;
  height: 100vh;
  background-color: #12181b;
  overflow: hidden;
  color: #ffffff;
`;

const Banner = styled(motion.div)`
  margin-left: 3rem;
  padding: 10rem 10rem 20rem 10rem;
  width: 50rem;

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
    letter-spacing: 0.03em;
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
    font-size: 12px;
    opacity: 0.6;
  }
`;

const Button = styled(motion.div)`
  padding-top: 2rem;

  button {
    display: block;
    text-align: center;
    text-decoration: none;
    border: 0.05rem solid rgba(255, 205, 46, 0.1);
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
      opacity: 0.7;
      transition: opacity 0.5s ease;
    }
  }
  button:hover {
    box-shadow: 0px 0px 15px 5px rgba(255, 205, 46, 0.08);
    h4 {
      opacity: 1;
    }
  }
  button:active {
    box-shadow: 0px 0px 10px 6px rgba(255, 205, 46, 0.1);
    h4 {
      opacity: 1;
    }
    background: (255, 205, 46, 0.1);
  }
`;

const Name = styled(motion.div)`
  width: 100%;
  display: flex;

  justify-content: space-between;
  padding-top: 1rem;
  font-weight: bold;
  font-size: 54px;
  line-height: 127%;
  letter-spacing: 0.04em;
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

  letter-spacing: 0.9em;

  color: #ffcd2e;

  .laptop {
    opacity: 0.5;
  }
`;

const Meta = styled(motion.div)`
  margin-left: 1px;
`;

const Social = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 14px 14px;
  grid-template-areas:
    '.'
    '.';
  width: 0.51rem;
  height: 100vh;

  .box {
    /* background: white;
    border: 1px solid black;
    color: black; */
  }

  .github {
    width: 100%;
    height: 100%;
    display: flex;
    .git {
      width: 20%;
      height: 100%;
      border-radius: 100px 100px 0px 0px;
      border: 3px solid rgba(235, 27, 12, 0.15);
      border-bottom: none;
      margin-right: 30px;
      margin-top: 40px;
      margin-left: 10px;

      cursor: pointer;
      .git-image {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 32px;
        opacity: 0.7;
      }
    }
  }
  .linkedin {
    width: 100%;
    height: 100%;
    display: flex;
    .in {
      width: 100%;
      height: 135%;
      border-radius: 0px 0px 100px 100px;
      border: 3px solid rgba(46, 117, 255, 0.15);
      border-top: none;
      margin-right: 30px;
      margin-bottom: -20px;

      cursor: pointer;
      .in-image {
        padding-top: 300px;
        padding-top: -300px;

        margin-bottom: -20px;

        opacity: 0.7;
      }
    }
  }
`;

export default HomeContent;
