import React from 'react';
import Movie from './Movie';

// Style
import styled from 'styled-components';

const PopularMovie = ({contents}) => {
  return (
    <StyledPop>
      {contents.map((content) => (
        <Movie key={content.id} {...content} />
      ))}
    </StyledPop>
  );
};

const StyledPop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;

  @media only screen and (max-width: 600px) {
    margin-top: 3rem;
  }
`;

export default PopularMovie;
