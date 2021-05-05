import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import define1 from '../img/define1.png';
import define2 from '../img/define2.png';
import define3 from '../img/define3.png';
import define4 from '../img/define4.png';
import define5 from '../img/define5.png';

const DiscoverDefine = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Discover - Define</div>
        </div>
        <div className="secondary-text1">
          <br />
          <span>TV Timeslots</span>
          <br />
          <br />I began with understanding how a day of television is slotted
          and on what basis the bidding is carried out.
        </div>
        <div className="image">
          <img src={define1} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>The existing bidding system</span>
          <br />
          <br />
          It was important to understand the existing bidding model to
          successfully automate and design a digital alternative. I researched
          on the various methods the bids take place and how they are carried
          out from the initial bid to completion.
        </div>
        <div className="image image2">
          <img src={define2} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>What can we automate?</span>
          <br />
          <br />
          In collaboration with the in house ML engineers, we came up with a
          system of bid recommendation on the basis of historical data,
          advertiser record etc.
        </div>
        <div className="image">
          <img src={define3} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Who is the User?</span>
          <br />
          <br />
          The user of this product are the sales directors of networks and
          television broadcasters. The product should be tailored to the tasks
          that need to be carried out as a bid is received.
        </div>
        <div className="image">
          <img src={define4} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Information Architecture</span>
          <br />
          <br />I created an information architecture on this basis, laying out
          the parts that will be automated and the functionality provided to the
          single person overseeing the process.
        </div>
        <div className="image">
          <img class="image4" src={define5} alt="" />
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
    .image4 {
      width: 80%;
    }
  }
`;

export default DiscoverDefine;
