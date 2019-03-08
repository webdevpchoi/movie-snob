import React, { Component } from "react";
import styled from "styled-components/macro";

const StyledMoviePreview = styled.div`
  height: 300px;
  background: pink;
  padding: 25px;
  .movie-details > span {
    margin: 0 10px;
  }
`;

export default class MoviePreview extends Component {
  render() {
    const { title, desc } = this.props.details;
    return (
      <StyledMoviePreview>
        <h1>{title}</h1>
        <div className='movie-details'>
          <span>2019</span>
          <span>TV-14</span>
          <span>10 Seasons</span>
        </div>
        <p>{desc}</p>
      </StyledMoviePreview>
    );
  }
}
