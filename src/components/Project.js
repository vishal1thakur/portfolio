import React from 'react';
// Style
import styled from 'styled-components';
// Animation
import {motion} from 'framer-motion';
// Routing
import {Link} from 'react-router-dom';

const Project = ({project}) => {
  return (
    <StyledProject>
      {project.link ? (
        <Link to={project.link}>
          <div className="grey-bg"></div>
          <div className="content-bg">
            <div className="image"></div>
            <div className="content">
              <div className="project-name">
                <h4>{project.name}</h4>
              </div>
              <div className="type">
                <div
                  className="type-box"
                  style={
                    project.type === 'REACT'
                      ? {backgroundColor: '#2E75FF'}
                      : project.type === 'UX / UI'
                      ? {backgroundColor: '#FF3E3E'}
                      : project.type === 'JAVASCRIPT'
                      ? {backgroundColor: 'rgba(255, 205, 46, 0.8)'}
                      : 'black'
                  }
                >
                  <h5>{project.type}</h5>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <a href={project.external} target="_blank">
          <div className="grey-bg"></div>
          <div className="content-bg">
            <div className="image"></div>
            <div className="content">
              <div className="project-name">
                <h4>{project.name}</h4>
              </div>
              <div className="type">
                <div
                  className="type-box"
                  style={
                    project.type === 'REACT'
                      ? {backgroundColor: '#2E75FF'}
                      : project.type === 'UX / UI'
                      ? {backgroundColor: '#FF3E3E'}
                      : project.type === 'JAVASCRIPT'
                      ? {backgroundColor: 'rgba(255, 205, 46, 0.8)'}
                      : 'black'
                  }
                >
                  <h5>{project.type}</h5>
                </div>
              </div>
            </div>
          </div>
        </a>
      )}
    </StyledProject>
  );
};

const StyledProject = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
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
    border-radius: 5px 5px 5px 5px;
  }
  .content-bg {
    top: 0;
    left: 15px;
    height: 95%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .image {
      width: 100%;
      height: 80%;
      background: #454a52;
      border-radius: 5px;
    }
    .content {
      width: 100%;
      height: 20%;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      .project-name {
        height: 100%;
        width: 65%;
        display: flex;
        justify-content: left;
        align-items: center;
        text-align: center;
        margin-bottom: -15px;

        h4 {
          padding-left: 10px;
          color: #c5c5c5;
          font-weight: 500;
        }
      }
      .type {
        height: 100%;
        width: 35%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 15px 0px 0px 0px;
        .type-box {
          background: #ff2e2e;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 5px;
          h5 {
            color: white;
            font-size: 11px;
            font-weight: 600;
          }
        }
      }
    }
  }
`;

export default Project;
