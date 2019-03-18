import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { createGlobalStyle } from "styled-components";
import MovieDetails from "./components/MovieDetails";

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
  font-family: 'Playfair Display';
  background: rgba(34, 46, 80, 1);
 }
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
