import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";

/* RGB */
// $color1: rgba(34, 46, 80, 1);
// $color2: rgba(0, 121, 145, 1);
// $color3: rgba(252, 213, 129, 1);
// $color4: rgba(67, 154, 134, 1);
// $color5: rgba(188, 216, 193, 1);

const theme = {
  headerFont: "Playfair Display",
  accentColor: "rgba(252, 213, 129, 1)",
  mainColor: "#161e35"
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
