import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/styles/Global";
import Button from "./Components/Button";

const theme = {
  colors: {
    purple: "#AD1FEA",
    blue: "#4661E6",
    lightBlue: "#62BCFA",
    darkNavy: "#373F68",
    lightNavy: "#3A4374",
    mediumNavy: "#647196",
    white: "#FFFFFF",
    mediumGray: "#F2F4FF",
    lightGray: "#F7F8FD",
    orange: "#F49F85",
    red: "#D73737",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Button bg="red">Delete</Button>
      </>
    </ThemeProvider>
  );
}

export default App;
