import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/style/GlobalStyle";
import { theme } from "./components/style/theme";
import { useSelector } from "react-redux";
import {
  Home,
  ProductsList,
  Product,
  Cart,
  Login,
  Register,
  Success,
} from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LinkR,
  Redirect,
} from "react-router-dom";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:category" component={ProductsList} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login">
            {user?.response == "success" ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
