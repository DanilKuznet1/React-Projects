import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/styles/Global";
import { StyledSidebar } from "./Components/styles/Sidebar.styled";
import Container from "./Components/Container";
import PageTitle from "./Components/PageTitle";
import Flex from "./Components/Flex";
import Features from "./Components/Features";
import RoadmapInfo from "./Components/RoadmapInfo";
import HeaderWrapper from "./Components/HeaderWrapper";
import Body from "./Components/Body";

const theme = {
  colors: {
    purple: "#AD1FEA",
    purpleHover: "#C75AF6",
    blue: "#4661E6",
    blueHover: "#CFD7FF",
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
          <StyledSidebar>
            <PageTitle />
            <Features />
            <RoadmapInfo />
          </StyledSidebar>
          <Flex gap="2.5rem" direction="column">
            <HeaderWrapper />
            <Body />
          </Flex>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
