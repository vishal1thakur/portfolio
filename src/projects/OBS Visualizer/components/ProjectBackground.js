import React from 'react';
//Styling and Animation
import styled from 'styled-components';

const ProjectBackground = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Project Background</div>
        </div>
        <div className="secondary-text">
          AthenasOwl is a AI services provider to global businesses. As I began
          my collaboration with them, I was assigned to design a visualizer for
          the incoming tagged data of various Olympic sports. I was the sole
          designer of the team and my responsibilities were to define the
          business, technology and user goals, get user feedback and translate
          them into working mockups that were development ready.
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
    padding-top: 4rem;

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
    .secondary-text {
      margin-top: 1rem;
      letter-spacing: 0.05;
      line-height: 1.8rem;
      font-size: 1.1rem;
      font-weight: 350;
      color: #1b1b1b;
    }
  }
`;

export default ProjectBackground;
