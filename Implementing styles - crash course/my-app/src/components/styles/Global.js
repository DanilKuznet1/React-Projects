import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%
}

body {
  background: ${({ theme }) => theme.colors.body};
  color: hsl(192, 100%, 9%);
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
}

p {
  opacity: 0.6;
  line-height: 1.5;
  margin: 2.5rem 0;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
