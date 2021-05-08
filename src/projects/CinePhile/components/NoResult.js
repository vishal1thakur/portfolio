import React from 'react';
import styled from 'styled-components';

const NoResult = () => {
  return (
    <StyledNo>
      <h3>
        Sorry :/ No Results Found...
        <br />
        <br />
        Try another search
      </h3>
    </StyledNo>
  );
};

const StyledNo = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  text-align: center;
  h3 {
    font-size: 1.5rem;
    color: #ffcd2e;
  }
`;

export default NoResult;
