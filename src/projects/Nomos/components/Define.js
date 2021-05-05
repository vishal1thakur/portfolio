import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import define1 from '../img/define1.png';
import define2 from '../img/define2.png';
import define3 from '../img/define3.png';
import define4 from '../img/define4.png';
import define5 from '../img/define5.png';

const Define = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Define</div>
        </div>
        <div className="secondary-text1">
          <br />
          With the insights from the discovery phase, I began defining what the
          physical and digital aspects of this operation should be. I laid out
          what the physical centres should have and the how they should be
          distributed to cater the entire city efficiently.
        </div>
        <div className="image">
          <img src={define1} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Mapping centre typology</span>
          <br />
          <br />
          To understand how many and where the centres should be, I studied
          various typologies to find an efficient design which fulfills all the
          criteria's listed above. <br />
          <br /> This was necessary because the fleet manager needs to know
          which car belongs to which centre.
        </div>
        <div className="image">
          <img src={define2} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Changing Approach</span>
          <br />
          <br />
          But after doing this exercise I realized the current distribution of
          the Dominos outlet throughout San Francisco is already a tried and
          tested design, one which caters to specific regions ensuring quick
          delivery and avoiding major traffic hotspots. <br />
          <br /> So I let go of the previous approach and continued with the
          existing outlets as the 4 centres with 500 autonomous cars, each
          responsible only for their designated area.
        </div>
        <div className="image image2">
          <img className="image3" src={define3} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Mapping out the product journey</span>
          <br />
          <br />
          To understand the product guideline for the manager, I plotted the end
          to end product journey to see what success would look like and where
          the manager would need to assist the cars.
        </div>
        <div className="image image2">
          <img src={define4} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>The various states of the car</span>
          <br />
          <br />
          The main phase in which the manager will assist a car is after it has
          left the centre, I jotted down all the possible states the car could
          find itself in and sorted them into alerts and notification. This will
          help in deciding what the manager would see in the interface and what
          they need to do to solve the problem. The alerts would need immediate
          attention and notifications can be seen in case the manager needs to
          see the history of the car to make a better decision.
        </div>
        <div className="image image2">
          <img src={define5} alt="" />
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
      width: 40%;
    }
    .image4 {
      width: 100%;
    }
  }
`;

export default Define;
