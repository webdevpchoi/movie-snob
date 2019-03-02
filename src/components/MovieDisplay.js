import React, { Component } from "react";
import styled from "styled-components/macro";
import MovieRow from "./MovieRow";

const StyledMovieDisplay = styled.div`
  background: black;
  height: 70vh;
  padding: 15px;
`;

export default class MovieDisplay extends Component {
  render() {
    return (
      <StyledMovieDisplay>
        <MovieRow />
      </StyledMovieDisplay>
    );
  }
}
