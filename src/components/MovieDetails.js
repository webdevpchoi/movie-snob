import React, { Component } from "react";
import styled from "styled-components/macro";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cast from "./Cast";
import Header from "./Header";

const StyledMoviePreview = styled.div`
  .cast-container {
    display: flex;
    justify-content: center;
    .cast-row {
      width: 90%;
    }
  }
`;

export default class MovieDetails extends Component {
  state = {
    cast: []
  };

  getMovieDetails = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const movieId = this.props.location.movieId;
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
    this.getMovieDetails();
  }

  render() {
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
      <StyledMoviePreview>
        <Header />
        <h1>This is the details page </h1>
        <div className='cast-container'>
          <Slider {...settings}>
            {this.state.cast.map(cast =>
              cast.profile_path ? <Cast details={cast} key={cast.id} /> : null
            )}
          </Slider>
        </div>
      </StyledMoviePreview>
    );
  }
}
