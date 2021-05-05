import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import statement from '../img/statement.png';

const ProblemStatement = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Problem Statement</div>
        </div>
        <div className="secondary-text">
          The Olympics generate tons of data and has a diverse catalogue of
          sports. This hoard of data can be too much to peruse when a particular
          snippet is needed, so it becomes a bare necessity for them to have a
          solutions that automates smart cataloguing of their content.
          <br />
          <br />
          AthenasOwl provides tools which track and tag the players in real time
          to create metadata files containing clipped segments of when
          individual players were active in the game. This makes it much more
          easier to sift through the clips and pick out the exact content they
          are looking for. But, there is a catch here. The machine learning
          models make mistakes (as they do in any problem) in tagging the
          players and sometimes skipping tags altogether. There needs to be a
          way to visualize the tagged clips so a human can quality check them.
          <br />
          <br />
          This would ensure the errors to be flagged so our engineers can
          correct them while also using these corrected clips to benchmark the
          data for making our algorithm more accurate.
        </div>
        <div className="image">
          <img src={statement} alt="" />
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
    .secondary-text {
      margin-top: 1rem;
      letter-spacing: 0.05;
      line-height: 1.8rem;
      font-size: 1.1rem;
      font-weight: 350;
      color: #1b1b1b;
    }
  }
  .image {
    margin-top: 5rem;
    img {
      width: 100%;
    }
  }
`;

export default ProblemStatement;
