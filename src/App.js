import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/movies/:movieid' component={Movie} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
