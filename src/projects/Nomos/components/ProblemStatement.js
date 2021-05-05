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
          The year is 2025. Domino's Pizza is now operating a fleet of more than
          2000 autonomous driving vehicles in the city of San Francisco – which
          has resulted in quicker delivery times, and the profit margins for
          Domino's has increased manifold. A fleet of autonomous cars carry the
          pizzas from the kitchen to the customer's address. <br />
          <br /> Instead of having more than 2000 drivers, this entire system is
          now managed by 1 single person: the Fleet Manager.
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
