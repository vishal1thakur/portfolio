import React from 'react';
import spinner from '../img/spinner.gif';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <StyledSpinner>
      <img src={spinner} alt="" />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 20rem;
  }
`;

export default Spinner;
