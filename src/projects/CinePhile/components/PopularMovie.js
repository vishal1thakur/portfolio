import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import {POPULAR_ALL_API, Img_API, SEARCH_API} from '../api';

// Style
import styled from 'styled-components';

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(POPULAR_ALL_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  console.log(movies);
  return (
    <StyledPop>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </StyledPop>
  );
};

const StyledPop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

export default PopularMovie;
