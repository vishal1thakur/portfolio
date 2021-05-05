import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import header from '../img/header.jpg';

const HeaderNomos = () => {
  return (
    <Header>
      <div className="container">
        <div className="text">
          <div className="main-text">Nomos</div>
          <div className="secondary-text">
            How can 1 person manage 2000 autonomous delivery vehicles?
          </div>
        </div>
        <div className="image">
          <img src={header} alt="" />
        </div>
      </div>
    </Header>
  );
};

const Header = styled.div`
  padding-top: 6.5rem;
  width: 100%;
  height: 80vh;
  background: #2a2829;
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    width: 80%;
    justify-content: center;

    .text {
      height: 100%;
      width: 40%;
      /* background: yellow; */
      padding-right: 4rem;
      margin-top: auto;
      margin-bottom: 0;

      .main-text {
        font-size: 3rem;
        color: #ffcd2e;
        font-weight: 700;
      }
      .secondary-text {
        font-size: 1.3rem;
        color: #f3f3f3;
        font-weight: 300;
        padding-top: 1rem;
        letter-spacing: 0.05rem;
        line-height: 2rem;
      }
    }
    .image {
      height: 100%;
      width: 60%;
      /* background: orange; */
      img {
        width: 100%;
      }
    }
  }
`;

export default HeaderNomos;
