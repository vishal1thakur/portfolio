import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import check2 from '../img/check2.png';

const Check2 = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Check - #2</div>
        </div>
        <div className="secondary-text1">
          After few weeks of continuous use of the interface and a fresh round
          of direct user tests, we observed that the comments being registered
          were too many. <br />
          <br /> There was a need to comment on a comment for better
          communication, this needed to be reflected in the new iteration of the
          comment panel. <br />
          <br /> We were also requested to add one more feature to the segment
          design, to represent the number of segments which where submitted and
          flagged with respect to the overall segments present in the file.
        </div>
        <div className="image">
          <img src={check2} alt="" />
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
      width: 110%;
    }
    video {
      width: 120%;
      height: 120%;
    }
  }
`;

export default Check2;
