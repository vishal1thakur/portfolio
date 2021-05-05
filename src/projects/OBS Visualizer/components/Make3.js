import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import make7 from '../img/make7.png';
import make8 from '../img/make8.png';

const Make3 = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Make - #3</div>
        </div>
        <div className="secondary-text1">
          <br />
          <span>Addition in the Segment Panel</span>
          <br />
          <br />
          As the tool was used for a extended period of time, it was realized
          that their should be way to see a summary of all the segments that
          were OK’d, the segments that were reported and the segments that were
          missing. <br />
          <br /> I designed a visual addition above the segment panel which
          shows the summary of the video being checked.
        </div>
        <div className="image">
          <img src={make7} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Reworking the Comments Panel</span>
          <br />
          <br />
          The observations of the user test for the comment panel were
          translated in the new changes. I added a comment on comment
          functionality for easy communication of the discrepancies in the
          video.
          <div className="image">
            <img className="image3" src={make8} alt="" />
          </div>
          <div className="secondary-text1 secondary-text2">
            <br />
            <span>Iteration #3</span>
            <br />
            <br />
            This iteration was used to develop a stable release which is now
            being used daily by quality checkers and being expanded for the
            entire catalogue of the Olympic games.
          </div>
          <div className="image">
            <video width="640" height="354" controls>
              <source
                src="https://drive.google.com/uc?export=download&id=1gpUZrj5PohaXoVTg5eOCRe2vE3YrCI7-"
                type="video/mp4"
              />
            </video>
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
  align-items: center;
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
    .secondary-text1 {
      margin-top: 1rem;
      letter-spacing: 0.05;
      line-height: 1.8rem;
      font-size: 1.1rem;
      font-weight: 350;
      color: #1b1b1b;
      span {
        font-weight: 500;
        color: #4a4749;
        text-decoration: 0.5px underline;
        text-decoration-color: #ffcd2e;
      }
    }
    .secondary-text2 {
      margin-top: 4rem;
    }
  }
  .image {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    img {
      width: 100%;
    }
    .image1 {
      width: 70%;
    }
    .image3 {
      width: 120%;
    }
    video {
      width: 120%;
      height: 120%;
      margin-bottom: 5rem;
    }
  }
`;

export default Make3;
