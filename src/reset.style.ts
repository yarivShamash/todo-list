import { createGlobalStyle } from "styled-components";

export const appBackgroundColor = "#FFF";

export const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'ms_sans_serif';
    background-color: ${appBackgroundColor};
  }
  
  #root {
    position: relative;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    font-size: 2rem;
  }

  h2 {
    font-weight: bold;
    font-size: 1.8rem;
  }

  h3 {
    font-weight: bold;
    font-size: 1.6rem;
  }

  h4 {
    font-weight: bold;
    font-size: 1.4rem;
  }

  h5 {
    font-weight: bold;
    font-size: 1.2rem;
  }

  h6 {
    font-weight: bold;
    font-size: 1rem;
  }
`;
