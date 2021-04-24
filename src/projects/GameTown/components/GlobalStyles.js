import {createGlobalStyle} from 'styled-components';

const GlobalStylesGT = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
}
body {
  width: 100%;
}
h2{
  font-size: 3rem;
  font-weight: lighter;
  color: #333;
}
h3{
  font-size: 1rem;
  color: #333;
  padding: 0.8rem 0;

}

a{
  text-decoration: none;
  color: #333;

}

`;

export default GlobalStylesGT;
