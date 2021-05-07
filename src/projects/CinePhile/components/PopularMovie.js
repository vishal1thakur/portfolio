import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import {POPULAR_API, Img_API, SEARCH_API} from '../api';

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(POPULAR_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} data={movie} />
      ))}
    </div>
  );
};

export default PopularMovie;
