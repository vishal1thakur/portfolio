import React from 'react';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';
import {pageAnimation, fadeAbout} from '../Animation';
// Images
import background from '../img/about/background.svg';
import fast from '../img/about/fast.svg';
import intuitive from '../img/about/intuitive.svg';
import responsive from '../img/about/responsive.svg';
import dynamic from '../img/about/dynamic.svg';

const About = () => {
  const durationSeconds = 1;
  const delaySeconds = 0.75;
  return (
    <AllAbout
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Header>
        <h2>ABOUT</h2>
        <div className="line"></div>
      </Header>

      <StyledAbout>
        <Tenets>
          <div>
            <h2 className="priority-heading">
              I optimize my projects for the following criteria
            </h2>
          </div>
          <div className="priority">
            <div className="priority-card">
              <motion.img
                inital={{opacity: 0}}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
                src={fast}
                alt=""
              />
              <motion.h3 variants={fadeAbout} className="priority-text">
                FAST <br />
                LOAD TIMES
              </motion.h3>
            </div>
            <div className="priority-card">
              <motion.img
                inital={{opacity: 0}}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
                src={responsive}
                alt=""
              />
              <motion.h3 variants={fadeAbout} className="priority-text">
                RESPONSIVE
                <br /> LAYOUT
              </motion.h3>
            </div>
            <div className="priority-card">
              <motion.img
                inital={{opacity: 0}}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
                src={intuitive}
                alt=""
              />
              <motion.h3 variants={fadeAbout} className="priority-text">
                INTUITIVE
                <br /> DESIGN
              </motion.h3>
            </div>
            <div className="priority-card">
              <motion.img
                inital={{opacity: 0}}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0,
                }}
                src={dynamic}
                alt=""
              />
              <motion.h3 variants={fadeAbout} className="priority-text">
                DYNAMIC
                <br /> INTERACTIONS
              </motion.h3>
            </div>
          </div>
        </Tenets>

        <Skills>
          <div>
            <h2 className="skills-heading">Tools Proficiency</h2>
          </div>
          <Tools className="tools">
            <SkillBar className=" skills">
              {/* Ux Research */}
              <div className="skill-bar design">
                <div className="skill-container">
                  <div className="skill-name">
                    <h3>UX RESEARCH</h3>
                  </div>
                  <div className="bar">
                    <motion.div
                      inital={{width: `${0}%`}}
                      animate={{
                        width: `${85}%`,
                      }}
                      transition={{
                        duration: durationSeconds,
                        delay: delaySeconds,
                      }}
                      className="bar-style bar-ux"
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* UI Design */}
              <div className="skill-bar design">
                <div className="skill-container">
                  <div className="skill-name">
                    <h3>UI DESIGN</h3>
                  </div>
                  <div className="bar">
                    <motion.div
                      inital={{width: `${0}%`}}
                      animate={{
                        width: `${75}%`,
                      }}
                      transition={{
                        duration: durationSeconds,
                        delay: delaySeconds,
                      }}
                      className="bar-style bar-ui"
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* Figma */}
              <div className="skill-bar design">
                <div className="skill-container">
                  <div className="skill-name">
                    <h3>FIGMA</h3>
                  </div>
                  <div className="bar">
                    <motion.div
                      inital={{width: `${0}%`}}
                      animate={{
                        width: `${95}%`,
                      }}
                      transition={{
                        duration: durationSeconds,
                        delay: delaySeconds,
                      }}
                      className="bar-style bar-figma"
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* Sketch */}
              <div className="skill-bar design">
                <div className="skill-container">
                  <div className="skill-name">
                    <h3>SKETCH</h3>
                  </div>
                  <div className="bar">
                    <motion.div
                      inital={{width: `${0}%`}}
                      animate={{
                        width: `${65}%`,
                      }}
                      transition={{
                        duration: durationSeconds,
                        delay: delaySeconds,
                      }}
                      className="bar-style bar-sketch"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </SkillBar>
            <SkillBar className="code skills">
              {/* HTML */}
              <div className="skill-bar">
                <div className="skill-container">
                  <div className="skill-name">
                    <h3>HTML</h3>
                  </div>
                  <div className="bar">
                    <motion.div
                      inital={{width: `${0}%`}}
                      animate={{
                        width: `${90}%`,
                      }}
                      transition={{
                        duration: durationSeconds,
                        delay: delaySeconds,
                      }}
                      className="bar-style bar-html"
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* CSS */}
              <div className="skill-bar code">
                <div className="skill-container">
                  <div className="skill-name">
                    <h3>CSS</h3>
                  </div>
                  <div className="bar">
                    <motion.div
                      inital={{width: `${0}%`}}
                      animate={{
                        width: `${85}%`,
                      }}
                      transition={{
                        duration: durationSeconds,
                        delay: delaySeconds,
                      }}
                      className="bar-style bar-css"
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* JS */}
              <div className="ux-research skill-bar code">
                <div className="skill-container">
                  <div className="skill-name">
                    <h3>JAVASCRIPT</h3>
                  </div>
                  <div className="bar">
                    <motion.div
                      inital={{width: `${0}%`}}
                      animate={{
                        width: `${75}%`,
                      }}
                      transition={{
                        duration: durationSeconds,
                        delay: delaySeconds,
                      }}
                      className="bar-style bar-js"
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* React */}
              <div className="ux-research skill-bar code">
                <div className="skill-container">
                  <div className="skill-name">
                    <h3>REACT</h3>
                  </div>
                  <div className="bar">
                    <motion.div
                      inital={{width: `${0}%`}}
                      animate={{
                        width: `${75}%`,
                      }}
                      transition={{
                        duration: durationSeconds,
                        delay: delaySeconds,
                      }}
                      className="bar-style bar-react"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </SkillBar>
          </Tools>
        </Skills>
        <AboutMe class="div3 grid">
          <div className="text">
            <div className="about-me">A little bit about me</div>
            <div className="line-me"></div>
            <div className="me">
              <p>
                em ipsum dolor sit amet consectetur adipisicing elit. Modi
                repellendus amet commodi, odio maxime quidem magni ducimus non,
                quaerat cumque, autem eum? Asperiores tempora sit consectetur
                molestias, in libero eligendi?Lor em ipsum dolor sit amet
                consectetur adipisicing elit. Modi repellendus amet commodi,
                odio maxime quidem magni ducimus non, quaerat cumque, autem eum?
                Asperiores tempora sit consectetur molestias, in libero
                eligendi?Lor
              </p>
            </div>
          </div>
          <div className="links">
            <div className="button">
              <button>RESUME</button>
            </div>
          </div>
        </AboutMe>
      </StyledAbout>
      <Footer className="footer">
        <hr></hr>
        <p className="copyright">
          &#169; 2021 Vishal Thakur : website crafted in React, deployed on
          Netlify
        </p>
      </Footer>
    </AllAbout>
  );
};

export default About;

const AllAbout = styled(motion.div)`
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
    border-top: 2px dashed rgba(106, 106, 106, 0.4);
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

const StyledAbout = styled(motion.div)`
  margin-left: 100px;
  height: 120vh;
  width: 65%;
  /* background: white; */

  display: grid;
  grid-template-columns: (auto-fit, minmax(240px, auto));
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 50% 25%;
  background-size: cover;
  background-size: 50%;

  @media only screen and (max-width: 600px) {
    margin-left: 0px;
    background-image: none;
    width: 100%;
  }
`;

const Tenets = styled(motion.div)`
  .priority-heading {
    margin: 0;
    font-size: 15px;
    padding-bottom: 20px;
    color: rgba(99, 101, 102, 0.5);
    font-weight: 500;
  }

  .priority {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    .priority-card {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: top;
      text-align: center;
      align-items: center;
      .priority-text {
        color: rgba(255, 205, 46, 1);
        padding-top: 5px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.1em;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .priority {
      flex-direction: column;
      .priority-card {
        width: 100%;
        padding-top: 1rem;
        img {
          width: 40%;
        }
      }
    }
  }
`;

const Skills = styled(motion.div)`
  .skills-heading {
    padding-bottom: 35px;
    font-size: 15px;
    color: rgba(99, 101, 102, 0.5);
    font-weight: 500;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 5rem;
    .skills-heading {
      padding-bottom: 1rem;
    }
  }
`;

const Tools = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: top;
  text-align: top;
  align-items: top;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0rem 2rem;
    margin-top: 1rem;
  } ;
`;

const SkillBar = styled(motion.div)`
  height: 70%;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 28px;
  .design {
    margin-right: 20px;
  }
  .code {
    margin-left: 20px;
  }
  .skill-bar {
    background: #2a2e35;
    border-radius: 4px;
    .skill-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      justify-content: top;
      text-align: top;
      align-items: top;
      .skill-name {
        width: 30%;
        font-size: 9px;
        h3 {
          color: #ffcd2e;
          font-weight: 500;
          letter-spacing: 0.1em;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .bar {
        width: 70%;
        background: #12181b;
        margin: 8px 8px 8px 0px;
        border-radius: 3px;
        position: relative;
        .bar-style {
          display: flex;
          justify-content: left;
          align-items: left;
          text-align: left;
          height: 100%;
          position: absolute;
          border-radius: 3px 0px 0px 3px;
        }
        .bar-ux {
          background: rgba(255, 46, 46, 1);
        }
        .bar-ui {
          background: rgba(255, 46, 46, 1);
        }
        .bar-figma {
          background: rgba(255, 46, 46, 1);
        }
        .bar-sketch {
          background: rgba(255, 46, 46, 1);
        }
        .bar-html {
          background: rgba(46, 117, 255, 1);
        }
        .bar-css {
          background: rgba(46, 117, 255, 1);
        }
        .bar-js {
          background: rgba(46, 117, 255, 1);
        }
        .bar-react {
          background: rgba(46, 117, 255, 1);
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
    grid-gap: 1.5rem;
    margin-top: 1.5rem;
    .design {
      margin-right: 0px;
    }
    .code {
      margin-left: 0px;
    }
  }
`;

const AboutMe = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: top;
  text-align: top;
  align-items: top;
  margin-top: 20px;

  .text {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    text-align: top;
    align-items: top;
    margin-right: 20px;

    .about-me {
      padding-top: 5px;
      font-size: 16px;
      font-weight: 600;
      color: rgba(255, 205, 46, 1);
      letter-spacing: 0.1em;
    }
    .line-me {
      border-top: 2px dashed rgba(106, 106, 106, 0.4);
      margin-top: 10px;
      border-left: 0px;
      border-bottom: 0px;
      border-right: 0px;
      width: 100%;
      opacity: 0.4;
    }
    .me {
      margin-top: 20px;
      font-size: 14px;
      color: white;
      align-items: justify;
      line-height: 1.5rem;
    }
  }
  .links {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: relative;
    .button {
      width: 100%;
      height: 50px;

      padding-left: 20px;
      margin-bottom: 50px;
      button {
        width: 80%;
        height: 100%;
        background: none;
        border: 0.5px solid rgba(255, 205, 46, 1);
        border-radius: 5px;
        color: rgba(255, 205, 46, 1);
        letter-spacing: 0.1em;
        font-size: 12px;
        opacity: 0.5;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 7rem;
    padding: 0rem 3rem;

    .text {
      width: 100%;
    }
    .links {
      width: 100%;
    }
    padding-bottom: 3rem;
  }
`;

const Footer = styled(motion.div)`
  margin-left: 100px;
  margin-bottom: 2rem;
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

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
