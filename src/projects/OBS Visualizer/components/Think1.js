import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import think1 from '../img/think1.png';
import think2 from '../img/think2.png';
import think3 from '../img/think3.png';
import think4 from '../img/think4.png';

const Think1 = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Think - #1</div>
        </div>
        <div className="secondary-text1">
          <br />
          <span>Where does the visualizer fit in our overall solution?</span>
          <br />
          <br />I mapped out the overall pipeline of our solution to get a
          better idea of where the visualizer fits in, after all it is a part of
          a much bigger context.
        </div>
        <div className="image">
          <img src={think1} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>What are we trying to make?</span>
          <br />
          <br />I broke the problem statement into workable steps that could be
          translated into working prototypes, all along validating the
          assumptions and functionalities of the interface with the clients.
        </div>
        <div className="image image2">
          <img class="image2" src={think2} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Who are the end Users?</span>
          <br />
          <br />
          During our design sprint with the clients, we established a user
          hierarchy with different roles and access to the tagged content. This
          would ensure tailored roles for people with clear instructions about
          what needs to achieved, ensuring a smooth flow of the quality checking
          operation.
        </div>
        <div className="image">
          <img class="image3" src={think3} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>How are we tagging the players?</span>
          <br />
          <br />
          The go to way to tag the players would be to track their faces but
          with the new privacy guidelines set by the European union we had to
          find another way to get the job done. In team vs team games, we
          tracked the jersey number and jersey color of the players. In player
          vs player games we tracked the country initials on the players jersey.
          This resulted in different hierarchy’s of information for the two
          types of games. This hierarchy would define how the segments would
          look in the interface
        </div>
        <div className="image">
          <img class="image4" src={think4} alt="" />
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
    .image3 {
      width: 70%;
    }
    .image4 {
      width: 70%;
    }
  }
`;

export default Think1;
