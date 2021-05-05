import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import design1 from '../img/design1.png';
import design2 from '../img/design2.png';
import design3 from '../img/design3.png';
import design4 from '../img/design4.png';

const Design = () => {
  return (
    <PB>
      <div className="text">
        <div className="main-text">
          <div className="line"></div>
          <div className="text1">Design</div>
        </div>
        <div className="secondary-text1">
          <br />
          The next step was to translate the defines guidelines into a working
          prototype. I began by sketching out a simple information architecture
          for the interface to see how the user flow would look like.
        </div>
        <div className="image">
          <img className="image3" src={design1} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Wireframes</span>
          <br />
          <br />
          The navigation was divided into three parts vertically, for switching
          between different views and centres. The Centres navigation was made
          with switchable tabs to view the alerts for the centres combined and
          separately. The statistics panel is where the manager sees the details
          of the issues and a map which shows the location of the car.
        </div>
        <div className="image">
          <img className="image4" src={design2} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Alert Section</span>
          <br />
        </div>
        <div className="image">
          <img className="image4" src={design3} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Notification Section</span>
          <br />
        </div>
        <div className="image">
          <img className="image4" src={design4} alt="" />
        </div>
        <div className="secondary-text1 secondary-text2">
          <br />
          <span>Final Screens</span>
          <br />
          <br />
          The wireframes were translated into hi fidelity screens using the
          color palette of dominos existing design system.
        </div>
        <div className="image">
          <video width="640" height="354" controls>
            <source
              src="https://drive.google.com/uc?export=download&id=1Ps-33SKr5OF_MBbYMBRHOca6LRYb5y09"
              type="video/mp4"
            />
          </video>
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
    .image4 {
      width: 120%;
    }
    video {
      width: 120%;
      height: 120%;
      margin-bottom: 5rem;
    }
  }
`;

export default Design;
