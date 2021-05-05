import React from 'react';
//Styling and Animation
import styled from 'styled-components';

const ProjectBackground = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Project Background</div>
        </div>
        <div className="secondary-text">
          TV advertising is a $50 billion industry as millions of people tune in
          to watch different types of programs everyday. With many eyes watching
          and big money being spent to sell them products and services, networks
          have existing methods in place to let the highest bidder get access to
          these eyes. But this system is slow, analog and cumbersome and an
          automated digital bidding system is a natural progression. <br />
          <br /> With Viacom CBS as a partner, AthenasOwl set out to make a
          product that could automate much of the bidding process for the
          network. I worked as a Product Designer with a eclectic bunch of
          people to create a proof of concept for such a system.
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
    padding-top: 4rem;

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
`;

export default ProjectBackground;
