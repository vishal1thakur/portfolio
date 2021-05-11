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
      <div className="content">
        <div className="right-side">
          <div className="container">
            <h4>{project.name}</h4>

            <p className="date">March 2021</p>

            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              nemo illo iste aspernatur maxime quos reiciendis ut! Perferendis,
              odit unde?
            </p>
          </div>
        </div>
        <div className="button">
          {project.link ? (
            <Link to={project.link}>
              <div className="type-box">
                <h5>View Project</h5>
              </div>
            </Link>
          ) : (
            <a href={project.external} target="_blank">
              <div className="type-box">
                <h5>View Project</h5>
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="meta-image">
        <div className="grey-bg"></div>
        <div className="content-bg">
          <div className="image-bg">
            <img src={project.big} alt="" />
          </div>
        </div>
      </div>
    </StyledSeparateProject>
  );
};

const StyledSeparateProject = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  height: 100%;
  width: 100%;

  .meta-image {
    width: 55%;
    height: 100%;
    position: relative;
    .grey-bg,
    .content-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 95%;
      background: none;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .grey-bg {
      top: 15px;
      left: 0;
      background: none;
      /* background: #2a2e35; */
      border-radius: 5px 5px 8px 5px;
      border: 0.5px solid rgba(255, 205, 46, 0.4);
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
      background: white;

      .image-bg {
        width: 100%;
        height: 100%;
        background: #454a52;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 5px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
          image-rendering: high-quality;
        }
      }
    }
  }
  .content {
    width: 45%;
    height: 100%;
    padding-right: 5rem;

    .right-side {
      display: flex;

      position: relative;
      top: auto;

      height: 85%;
      padding-right: 5rem;

      .container {
        width: 100%;
        height: 100%;
        position: absolute;

        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: bottom;
        align-items: bottom;
        text-align: left;
        flex-grow: 1;
        h4 {
          color: #f3f3f3;
          font-weight: 500;
          font-size: 1.6rem;

          margin-top: auto;
          letter-spacing: 0.05rem;
        }

        .date {
          font-size: 0.9rem;
          color: #ffd759;
          font-weight: 400;
          padding-top: 0.3rem;
        }
        .description {
          font-size: 0.85rem;
          color: #b7b7b7;
          text-align: left;
          letter-spacing: 0.1rem;
          margin-bottom: 2rem;
          margin-top: 1.5rem;
        }
      }
    }

    .button {
      height: 15%;
      .type-box {
        background: transparent;
        border: 0.5px solid rgba(255, 205, 46, 0.4);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 7px;

        display: flex;
        justify-content: bottom;

        h5 {
          color: #ffcd2e;
          /* color: #2a2e35; */
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.3rem;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    .content-bg {
      .project {
        h4 {
          font-size: 0.9rem;
        }
        p {
          padding: 1.5rem 1rem;
        }
        .date {
          font-size: 0.6rem;
        }
        .description {
          font-size: 0.75rem;
        }
        .type-box {
          width: 84%;
        }
      }
    }
    overflow: hidden;
  }
`;

export default SeparateProject;
