import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import YouTube from "react-youtube";
import { ReactComponent as AddIcon } from "../icons/plus-icon.svg";
import { ReactComponent as ArrowIcon } from "../icons/right-arrow.svg";

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
    padding: 15px;
  }
  .trailer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
  }
  .movie-buttons {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 8px;
  background: transparent;
  margin: 5px;
  text-align: center;
  vertical-align: center;
  > span {
    margin: 0 10px;
  }
  svg {
    height: 25px;
    width: 25px;
    color: white;
    fill: #fff;
  }
`;

export default class MoviePreview extends Component {
  render() {
    const {
      title,
      desc,
      releaseDate,
      id,
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
            <span>{popularity},</span>
            <span>{runtime} minutes</span>
            <p>{desc}</p>
            <div className='movie-buttons'>
              <Button>
                <AddIcon />
                <span>Add to Favorites</span>
              </Button>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  movieId: id
                }}
                onClick={this.getMovieDetails}
              >
                <Button>
                  <span>See more</span>
                  <ArrowIcon />
                </Button>
              </Link>
            </div>
          </div>
          <div className='trailer'>
            <YouTube videoId='PzcaR1N0pTI' opts={opts} />
          </div>
        </div>
      </StyledMoviePreview>
    );
  }
}
