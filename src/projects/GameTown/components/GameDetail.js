import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {smallImage} from '../util';
//IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
//Star Images
import starEmpty from '../img/star-empty.svg';
import starFull from '../img/star-full.svg';

const GameDetail = ({pathId}) => {
  const history = useHistory();

  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/work/react/gametown');
    }
  };
  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img className="star" alt="star" key={i} src={starFull}></img>
        );
      } else {
        stars.push(
          <img className="star" alt="star" key={i} src={starEmpty}></img>
        );
      }
    }
    return stars;
  };

  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };

  //Data
  const {screen, game, isLoading} = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHander}>
          <Detail layoutId={pathId}>
            <div className="display-container">
              <Stats>
                <h3 className="title" layoutId={`title ${pathId}`}>
                  {game.name}
                </h3>
                <div className="contents">
                  <div className="released-on">
                    <p>Released On: </p>
                    <p className="released">{game.released || '-'}</p>
                  </div>
                  <div className="rating">
                    <p>Rating: </p>
                    {getStars()}
                  </div>
                  <Info>
                    <p>Platforms:</p>
                    <Platforms>
                      {game.platforms.map((data) => (
                        <img
                          alt={data.platform.name}
                          key={data.platform.id}
                          src={getPlatform(data.platform.name)}
                        ></img>
                      ))}
                    </Platforms>
                  </Info>
                </div>
              </Stats>
              <Media>
                <motion.img
                  layoutId={`image ${pathId}`}
                  src={game.background_image}
                  alt={game.background_image}
                />
              </Media>
            </div>

            <Description>
              <p>Description:</p>
              <p className="des">
                {game.description_raw || 'No Description Available'}
              </p>
            </Description>
            <Screenshots>
              <p>Screenshots:</p>
              <div className="gallery">
                {screen.results.map((screen) => (
                  <img
                    className="screenshot"
                    src={screen.image}
                    key={screen.id}
                    alt={screen.image}
                  />
                )) || 'No Screenshot Available'}
              </div>
            </Screenshots>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  .display-container {
    display: flex;
    flex-direction: row;
    height: 70vh;
    margin-bottom: 2rem;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  margin: 3rem 0rem 0rem 3rem;
  padding: 1rem 2rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
  width: 30%;
  .title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 1.7rem;
    color: var(--primary-color);
    padding-top: 1.7rem;
    padding-bottom: 0.3rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }

  .contents {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;

    .released-on {
      padding: 2rem 0rem;
      p {
        padding-bottom: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        color: #3d3d3d;
      }
      .released {
        padding-top: 0.3rem;
        font-size: 0.9rem;
        font-weight: 800;
        color: var(--primary-color);
      }
    }
  }
  .rating {
    p {
      padding-top: 1rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 0.9rem;
      color: #3d3d3d;
    }
    .star {
      padding-right: 10px;
    }
  }
`;
const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 3rem 0rem;
  width: 100%;
  p {
    padding-bottom: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #3d3d3d;
  }
`;
const Platforms = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  padding-top: 0.8rem;
  padding-right: 6rem;
`;

const Media = styled(motion.div)`
  width: 70%;
  margin-top: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0rem;
  p {
    padding-bottom: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #3d3d3d;
  }
  .des {
    padding-top: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--primary-color);
  }
`;

const Screenshots = styled(motion.div)`
  p {
    padding-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #3d3d3d;
  }
  .screenshot {
    padding: 1rem 0rem;
  }
`;

export default GameDetail;
