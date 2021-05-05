import React from 'react';
//Styling and Animation
import styled from 'styled-components';

const ProjectDetails = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Project Details</div>
        </div>
        <div className="secondary-text">
          <div className="text2">
            <h3>
              <span>ROLE -</span> Product Designer
            </h3>
            <h3>
              <span>METHODS & TOOLS -</span> Primary & Secondary Research,
              Sketch App, Marvel
            </h3>
            <h3>
              <span>DURATION -</span> May - October 2020
            </h3>
            <h3>
              <span>PRACTISES -</span> Business Research, User Research, UX & UI
              Design, Prototyping
            </h3>
            <h3>
              <span>STATUS -</span> In Development
            </h3>
            <h3>
              <span>TEAMMATES -</span> Piyush Jaiswal, Khanoosh Venghat, Nagesh
              Naik, Adeeb Dholakia
            </h3>
            <h3>
              <span>BY -</span> AthenasOwl, Mumbai
            </h3>
            <h3>
              <span>FOR -</span> Viacom CBS,New York
            </h3>
          </div>
        </div>
      </div>
    </PB>
  );
};

const PB = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  .text {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-top: 5rem;

    .main-text {
      display: flex;
      align-items: center;
      justify-content: left;

      .text1 {
        color: #4a4749;
        font-size: 1.5rem;
        margin-left: 0.3rem;
        font-weight: 450;
      }
      .line {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        align-items: center;

        border-left: 5px solid #ffcd2e;
        border-top: 0px;
        border-bottom: 0px;
        border-right: 0px;
        height: 1.5rem;
      }
    }
  }

  .secondary-text {
    margin-top: 0.5rem;
    .text2 {
      h3 {
        margin-top: 1.5rem;
        letter-spacing: 0.05;
        line-height: 1.8rem;
        font-size: 1.1rem;
        font-weight: 350;
        color: #1b1b1b;
        span {
          font-weight: 600;
          font-size: 1rem;
          color: #4a4749;
        }
      }
    }
  }
`;

export default ProjectDetails;
