import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {Link} from 'react-router-dom';

const Game = ({name, released, image, id}) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/work/react/gametown/game/${id}`}>
        <motion.img
          src={
            image ||
            'https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg'
          }
          alt={name}
        />
        <div className="info-container">
          <h3>{name}</h3>
          <p>{released}</p>
        </div>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  background: var(--meta-color);
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    display: flex;
    justify-content: top;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0rem 0.8rem;
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 1.1rem;
      color: white;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 0.8rem;
      color: #d1d1d1;
      padding-bottom: 1rem;
    }
  }
`;

export default Game;
