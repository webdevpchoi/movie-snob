import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import { createGlobalStyle, ThemeProvider } from "styled-components";

//global styles that should only be injected once, if necessary ta all
const GlobalStyle = createGlobalStyle`
 html {
   box-sizing: border-box;
 }
 *, *:before, *:after {
   box-sizing: inherit;
 }
`;

//theme styles
const theme = {
  mainColor: "black"
};

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movies/:movieid' component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
