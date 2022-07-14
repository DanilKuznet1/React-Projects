import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/styles/Global";
import Container from "./Components/Container";
import PageTitle from "./Components/PageTitle";
import Flex from "./Components/Flex";
import Features from "./Components/Features";
import RoadmapInfo from "./Components/RoadmapInfo";

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
  version: {
    tablet: {
      width: "96.8rem",
    },
    mobile: {
      width: "76.8rem",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Flex gap="2.5rem" direction="column">
            <PageTitle />
            <Features />
            <RoadmapInfo />
          </Flex>
          <Flex gap="2.5rem" direction="column">
            Hello World
          </Flex>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
