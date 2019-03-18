import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { ReactComponent as AddIcon } from "../icons/plus-icon.svg";
import { ReactComponent as ArrowIcon } from "../icons/right-arrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cast from "./Cast";
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
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    position: relative;
    z-index: 2;
    color: #fff;
    .cast-container {
      grid-column-start: 1;
      grid-column-end: 3;
      width: 100%;
      .cast-row {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
  .movie-details {
    max-width: 700px;
    padding: 15px;
  }
  .trailer {
    min-width: 640px;
  }
  .movie-buttons {
    display: flex;
    flex-flow: row wrap;
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
  state = {
    cast: []
  };

  getCast = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const movieId = 297802;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
    await fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          cast: [...data.cast]
        })
      );
  };

  componentDidMount() {
    console.log(this.props.details);
    this.getCast();
  }
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

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      className: "cast-row",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
              {/* <Link
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
              </Link> */}
            </div>
          </div>
          <div className='trailer'>
            <YouTube videoId='PzcaR1N0pTI' opts={opts} />
          </div>
          <div className='cast-container'>
            <h3>Cast</h3>
            <Slider {...settings}>
              {this.state.cast.map(cast =>
                cast.profile_path ? <Cast details={cast} key={cast.id} /> : null
              )}
            </Slider>
          </div>
        </div>
      </StyledMoviePreview>
    );
  }
}
