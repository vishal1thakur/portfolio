import { createGlobalStyle } from "styled-components";

const GlobalStylesCP = createGlobalStyle`
*{
  margin: 0 ;
  padding: 0;
  box-sizing: border-box;
}

body{
 
  color: white;
  margin-left: 6.5rem;
  @media only screen and (max-width: 600px){
    margin-left: 0;
  }
}

`;

export default GlobalStylesCP;
