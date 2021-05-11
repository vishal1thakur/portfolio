import {createGlobalStyle} from 'styled-components';

const GlobalStylesGT = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --primary-color: #A60DFF;
  --meta-color: #12181b;


}
html {
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: var(--meta-color);
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
}
body {
  width: 100%;
  /* background: #D8D8D8; */
  margin-left: 6.5rem;

  overflow-x: hidden;
  overflow-y: auto;

  @media only screen and (max-width: 600px){
  margin-left: 0;

  }
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
