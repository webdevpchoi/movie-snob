import React, { Component } from "react";
import styled from "styled-components/macro";

const StyledMovieRow = styled.div`
  background: white;
  height: 200px;
  width: 100%;
`;

export default class MovieRow extends Component {
  render() {
    return (
      <StyledMovieRow>
        <div className='row-title'>Trending</div>
      </StyledMovieRow>
    );
  }
}
