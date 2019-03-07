import React, { Component } from "react";
import styled from "styled-components/macro";

const StyledMoviePreview = styled.div`
  height: 300px;
  background: pink;
`;

export default class MoviePreview extends Component {
  render() {
    return (
      <StyledMoviePreview>
        <h1>movie preview</h1>
      </StyledMoviePreview>
    );
  }
}
