import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import { createGlobalStyle } from "styled-components";

//global styles that should only be injected once, if necessary ta all
const GlobalStyle = createGlobalStyle`
 html {
   box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
 }
 html, body {
  overflow-x: hidden;
 }
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies/:movieid' component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
