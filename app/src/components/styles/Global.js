import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  font-family: 'Epilogue', sans-serif;
  font-weight: 400;
  
    
  color: ${({ theme }) => theme.colors.almostBlack};
  background-color: ${({ theme }) => theme.colors.almostWhite};
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  }

  
  body {
    margin: 0 auto;
    padding: 3em;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    body {
      padding: 1em;
    }
  }
  
  h1, h3, p {
    margin: 0;
  }  

  p{
    font-size: 18px; 
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: 18px;
  }
`;

export default GlobalStyles;
