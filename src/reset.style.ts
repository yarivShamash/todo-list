import { createGlobalStyle } from "styled-components";
import { styleReset } from "react95";

import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

export const appBackgroundColor = "rgb(85, 170, 170)";

export const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }

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
