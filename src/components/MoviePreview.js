import React, { Component } from "react";
import styled from "styled-components/macro";

const StyledMoviePreview = styled.div`
  height: 300px;
  background: pink;
`;

export default class MoviePreview extends Component {
  render() {
    const { title, desc } = this.props.details;
    return (
      <StyledMoviePreview>
        <h1>{title}</h1>
        <p>{desc}</p>
      </StyledMoviePreview>
    );
  }
}
