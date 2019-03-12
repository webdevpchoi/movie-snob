import React, { Component } from "react";
import styled from "styled-components/macro";

import Header from "./Header";

export default class MovieDetails extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>This is the details page </h1>
      </div>
    );
  }
}
