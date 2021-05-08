import React, {useEffect, useState} from 'react';
import GameDetail from '../components/GameDetail';
//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
//Components
import Game from '../components/Game';
import Spinner from '../components/Spinner';
//Styling and Animation
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {useLocation} from 'react-router-dom';
import {fadeIn} from '../animations';

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split('/')[5];

  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get that data back

  const {popular, newGames, upcoming, searched} = useSelector(
    (state) => state.games
  );

  console.log(popular);

  return (
    <GameList>
      {pathId && <GameDetail pathId={pathId} />}

      {searched.length ? (
        <div className="searched">
          <div className="heads">
            <h2>
              <span className="highlight">Searched</span> Games
            </h2>
            <div className="line"></div>
          </div>
          {searched != [] ? (
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          ) : (
            <Spinner />
          )}
        </div>
      ) : (
        ''
      )}

      <div className="heads">
        <h2>
          <span className="highlight">Top</span> of the Charts
        </h2>
        <div className="line"></div>
      </div>

      <Games>
        {popular !== [] ? (
          <Games>
            {popular.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
        ) : (
          <Spinner />
        )}
      </Games>

      <div className="heads">
        <h2>
          <span className="highlight">Hot</span> Releases
        </h2>
        <div className="line"></div>
      </div>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <div className="heads">
        <h2>
          <span className="highlight">Upcoming</span> Releases
        </h2>
        <div className="line"></div>
      </div>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 6rem;
  .heads {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      padding: 6rem 0rem 0.5rem 0rem;
      font-size: 1.9rem;
      color: #3d3d3d;
      .highlight {
        color: var(--primary-color);
      }
    }
    .line {
      display: flex;
      flex-direction: row;
      justify-content: center;
      text-align: center;
      align-items: center;

      border-top: 2px dashed rgba(106, 106, 106, 0.8);
      border-left: 0px;
      border-bottom: 0px;
      border-right: 0px;
      width: 100%;
      opacity: 0.4;
      padding-bottom: 2rem;
    }
  }
  @media only screen and (max-width: 600px) {
    .heads {
      h2 {
        padding-top: 3rem;
      }
    }
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
`;

export default Home;
