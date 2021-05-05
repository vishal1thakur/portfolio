import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import process from '../img/process.png';

const Process = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Process</div>
        </div>
        <div className="secondary-text">
          We needed to make quick iterations and user test them to reach a
          stable product. The Lean UX model was the most appropriate for this
          problem, as it gave us the ability to make quick interfaces, develop
          them, get the necessary feedback and tweak the designs till we get a
          stable, usable product.
        </div>
        <div className="image">
          <img src={process} alt="" />
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
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    img {
      width: 75%;
    }
  }
`;

export default Process;
