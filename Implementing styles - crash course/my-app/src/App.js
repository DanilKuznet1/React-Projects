import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles//Container.styled.js";
import Card from "./components/Card";
import Header from "./components/Header.js";
import GlobalStyles from "./components/styles/Global.js";
import content from "./content";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "76.8rem",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
