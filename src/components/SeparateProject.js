import React from 'react';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';
// Routing
import {Link} from 'react-router-dom';

const SeparateProject = ({project}) => {
  return (
    <StyledSeparateProject>
      <div className="grey-bg"></div>
      <div className="content-bg">
        <div className="image-bg"></div>
        <div className="project">
          <div className="right-side">
            <h4>{project.name}</h4>
            <p className="date">March 2021</p>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              nemo illo iste aspernatur maxime quos reiciendis ut! Perferendis,
              odit unde?
            </p>
          </div>
          <Link to={project.link}>
            <div className="type-box">
              <h5>View Project</h5>
            </div>
          </Link>
        </div>
      </div>
    </StyledSeparateProject>
  );
};

const StyledSeparateProject = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 90%;
  width: 100%;

  position: relative;
  .grey-bg,
  .content-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 95%;
    height: 95%;
    background: none;
    border-radius: 5px;
  }
  .grey-bg {
    top: 15px;
    left: 0;
    background: #2a2e35;
    border-radius: 5px 5px 8px 5px;
  }
  .content-bg {
    top: 0;
    left: 15px;
    height: 95%;
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    .image-bg {
      width: 60%;
      height: 100%;
      background: #454a52;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 5px;
      position: relative;
    }
    .project {
      height: 100%;
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      text-align: left;
      position: relative;
      margin-right: 1rem;
      h4 {
        color: #f3f3f3;
        font-weight: 500;
        font-size: 1.1rem;
        top: 1.8rem;
        display: flex;
        justify-content: top;
        position: absolute;
        padding-left: 1rem;
        letter-spacing: 0.05rem;
      }
      p {
        padding: 2rem 1rem;
        position: absolute;
        align-items: justify;
      }
      .date {
        top: 1.65rem;
        font-size: 0.8rem;
        color: #ffd759;
        font-weight: 400;
      }
      .description {
        top: 3.2rem;
        font-size: 0.85rem;
        color: #b7b7b7;
      }
      .type-box {
        background: #ffcd2e;
        width: 88%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 5px;
        bottom: 0;
        margin: 0rem 1rem 0rem 1rem;
        position: absolute;
        display: flex;
        justify-content: bottom;

        h5 {
          color: #2a2e35;
          font-size: 13px;
          font-weight: 700;
        }
      }
    }
  }
`;

export default SeparateProject;
