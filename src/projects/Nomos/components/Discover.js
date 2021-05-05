import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import discover1 from '../img/discover1.png';
import discover2 from '../img/discover2.png';
import discover3 from '../img/discover3.png';

const Discover = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Discover</div>
        </div>
        <div className="secondary-text1">
          <br />
          <span>Understanding the logistics of autonomous delivery</span>
          <br />
          <br />I started my research by broadly reading about autonomous
          delivery and sorted my observations into the known variables of the
          problem, the city, the autonomous and the user. <br />
          <br /> I assessed the city to understand the existing footprint of
          Dominos.
        </div>
        <div className="image">
          <img className="image3" src={discover1} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>The Car</span>
          <br />
          <br />
          The delivery vehicle is the centerpiece of such an operation.
          Everything has to be reverse-engineered by what the car needs and what
          it can do. <br />
          <br /> To begin with, I listed out the physical and digital features
          that the vehicle should possess, keeping in mind its durability and
          the functional aspects for delivering food without a personnel to
          verify the customer.
        </div>
        <div className="image">
          <img src={discover2} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>The User</span>
          <br />
          <br />
          As this operation would be 24/7, there would fleet managers in charge
          of different shifts of the day. <br />
          <br /> A single person troubleshooting so many cars at once is a big
          task, clearly defining the responsibilities of the user is paramount
          to facilitate a smooth delivery system.
        </div>
        <div className="image image2">
          <img className="image3" src={discover3} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Key Takeways of the Discover phase</span>
          <br />
          <br />- A single person managing 2000 cars should only receive the
          most critically failures of the cars in the delivery flow and these
          alerts should be front and centre of the product they use. <br /> -
          Physical centres should be made for housing the cars and with it, the
          best possible configuration of these centres should designed, keeping
          in mind the city they will cater. <br /> - The physical and digital
          have to go hand in hand, as the centres dictate how the manager is
          going to handle the cars, a complete product journey should be mapped
          out which informs the various elements of the interface the manager
          will use.
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
      width: 80%;
    }
  }
`;

export default Discover;
