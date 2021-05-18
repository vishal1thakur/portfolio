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
      <div className="meta-image">
        <div className="grey-bg"></div>
        <div className="content-bg">
          <div className="image-bg" style={{background: project.bg}}>
            {/* <img src={project.big} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="right-side">
          <div className="container">
            <h4>{project.name}</h4>

            <p className="date">{project.date}</p>

            <p className="description">{project.description}</p>
          </div>
        </div>
        <div className="button">
          {project.link ? (
            <Link to={project.link}>
              <div className="type-box">
                {project.type === 'UX / UI' ? (
                  <h5>Read CaseStudy</h5>
                ) : (
                  <h5>View Project</h5>
                )}
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
    width: 50%;
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
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .grey-bg {
      top: 15px;
      left: 0;
      background: none;
      /* background: #2a2e35; */
      border-radius: 10px 10px 8px 10px;
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
      /* background: #12181b; */

      .image-bg {
        width: 100%;
        height: 100%;
        /* background: #12181b; */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 10px;

        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;

          image-rendering: high-quality;
        }
      }
    }
  }
  .content {
    width: 45%;
    height: 100%;
    padding-left: 3rem;

    .right-side {
      display: flex;

      position: relative;
      top: auto;

      height: 87%;

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
          padding-top: 0.4rem;
          letter-spacing: 0.05rem;
        }
        .description {
          font-size: 0.9rem;
          color: #b7b7b7;
          text-align: left;
          letter-spacing: 0.05rem;
          margin-bottom: 2rem;
          margin-top: 1.5rem;
          line-height: 1.2rem;
          font-weight: 300;
        }
      }
    }

    .button {
      height: 13%;
      transition: 1s all ease-in;
      .type-box {
        background: rgba(255, 205, 46, 1);
        border: none;
        /* background: transparent;
        border: 0.5px solid rgba(255, 205, 46, 0.4); */
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
          color: #2a2e35;
          font-weight: 800;
          /* color: #ffcd2e; */
          font-size: 0.75rem;
          letter-spacing: 0.1rem;
        }
      }
      /* &:active {
        .type-box {
          background: rgba(255, 205, 46, 1);
          border: none;
        }
        h5 {
          color: #2a2e35;
          font-weight: 600;
        }
      } */
    }
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .meta-image {
      width: 80%;
      height: 100%;
      /* margin-top: 3rem; */
    }
    .content {
      width: 80%;
      padding-right: 0rem;
      margin: 0;
      padding: 0;

      .right-side {
        padding-right: 0rem;
        margin-top: 3rem;
        height: 60%;
        .container {
          h4 {
            margin-top: 0;
          }
          justify-content: center;
        }
      }
      .button {
        height: 17%;
      }
    }
  }
`;

export default SeparateProject;
