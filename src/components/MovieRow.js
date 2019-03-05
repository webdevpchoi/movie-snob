import React, { Component } from "react";
import styled from "styled-components/macro";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieThumb from "./MovieThumb";

const StyledMovieRow = styled.div`
  background: white;
  height: 200px;
  width: 85%;
  margin: 15px 0;
  display: flex;
  flex-direction: column;

  .row-title {
    text-transform: capitalize;
    margin: 7.5px 15px;
  }
`;

export default class MovieRow extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
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
    const { movieType, movies } = this.props;
    return (
      <StyledMovieRow>
        <div className='row-title'>{movieType}</div>
        <Slider {...settings} />
      </StyledMovieRow>
    );
  }
}
