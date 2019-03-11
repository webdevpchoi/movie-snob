import React, { Component } from "react";
import styled from "styled-components/macro";
import YouTube from "react-youtube";

const StyledMoviePreview = styled.div`
  background: url(${props => props.img}) no-repeat 100% / cover;
  padding: 25px;
  position: relative;
  .movie-details > span {
    margin: 0 10px;
    color: #fff;
  }
  .overlay {
    background: black;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .content {
    display: flex;
    position: relative;
    z-index: 2;
    color: #fff;
  }
  .movie-details {
    max-width: 700px;
  }
  .trailer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
  }
`;

export default class MoviePreview extends Component {
  render() {
    const {
      title,
      desc,
      releaseDate,
      poster,
      popularity,
      backdrop,
      runtime
    } = this.props.details;

    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      }
    };
    return (
      <StyledMoviePreview
        img={backdrop ? `https://image.tmdb.org/t/p/w1280${backdrop}` : null}
      >
        <div className='overlay' />
        <div className='content'>
          <div className='movie-details'>
            <h1>{title}</h1>
            <span>{releaseDate}</span>
            <span>{popularity}</span>
            <span>{runtime}</span>
            <p>{desc}</p>
          </div>
          <div className='trailer'>
            <YouTube videoId='PzcaR1N0pTI' opts={opts} />
          </div>
        </div>
      </StyledMoviePreview>
    );
  }
}
