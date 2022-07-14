import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {  
    font-family: 'Jost', sans-serif;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: ${(props) => props.theme.colors.purple}
  }
`;
