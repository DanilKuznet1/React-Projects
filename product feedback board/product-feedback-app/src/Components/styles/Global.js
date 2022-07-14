import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
    background-color: ${(props) => props.theme.colors.lightGray};
    font-size: 1.6rem;
    padding: 5rem 10.5rem
  }

  p {
    font-size: 1.4rem;
    font-weight: 600;;
    color: ${({ theme }) => theme.colors.lightNavy};
    line-height: 1.5;
    letter-spacing: 0.25px;
  }

  h5 {
    font-size: 1.3rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.mediumNavy};
  }
`;
