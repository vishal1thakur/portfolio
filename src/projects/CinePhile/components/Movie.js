import React from 'react';
import {Img_API} from '../api';
// Style
import styled from 'styled-components';

const Movie = ({title, poster_path, overview, vote_average, name}) => {
  return (
    <StyledMovie className="movie">
      <div className="movie-display">
        <img src={Img_API + poster_path} alt={title} />
        <div className="movie-over">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title || name}</h3>
        <span>{vote_average}</span>
      </div>
    </StyledMovie>
  );
};

const StyledMovie = styled.div`
  width: 15rem;

  margin: 2rem;
  overflow: hidden;

  .movie-display {
    position: relative;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      border-radius: 8px 8px 0 0;
    }
    .movie-over {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      overflow: auto;
      max-height: 100%;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
      /* border-radius: 8px 8px 0 0; */
      transform: translateY(100%);
      transition: transform 0.5s ease-in-out;
      h2 {
        color: #ffcd2e;
        margin: 0.7rem;
        font-size: 1.2rem;
      }
      p {
        padding: 1rem;
        padding-top: 0;
        font-size: 0.9rem;
        padding-bottom: 1.2rem;

        font-weight: 300;
        color: white;
      }

      &::-webkit-scrollbar {
        width: 0.05rem;
      }
      &::-webkit-scrollbar-thumb {
        background: #ffcd2e;
      }
      &::-webkit-scrollbar-track {
        background: none;
      }

      @media only screen and (max-width: 600px) {
        &::-webkit-scrollbar {
          width: 0.2rem;
        }
      }
    }
    &:hover {
      .movie-over {
        transform: translateY(3%);
      }
    }
  }
  .movie-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.3);

    border-radius: 0 0 8px 8px;
    h3 {
      margin: 0;
      font-size: 0.8rem;
      font-weight: 500;
      color: #efefef;
    }
    span {
      font-size: 0.8rem;
      color: #ffcd2e;
      font-weight: 600;
      padding: 0.4rem;
      background: #2a2e35;
      border-radius: 3px;
    }
  }
`;

export default Movie;
