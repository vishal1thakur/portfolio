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
          A day of television is separated into different slots of programs each
          containing small chunks of space for showing ads. <br />
          <br /> The brands that want to display their ads in a particular slot
          bid for them in competition with other brands, the one with the
          highest bid gets the slot. <br />
          <br /> The existing system to bid, counter-bid and approve these
          orders are done manually, with many people in the loop. <br />
          <br /> We want to create a digital solution which automates much of
          the steps from bidding to completion, with just one man in the loop to
          oversee the process.
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
