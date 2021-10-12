import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/style/GlobalStyle";
import { theme } from "./components/style/theme";
import { Home, ProductsList, Product, Cart, Login, Register } from "./pages";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Register />
    </ThemeProvider>
  );
};

export default App;
