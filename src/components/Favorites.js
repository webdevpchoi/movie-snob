import React from "react";
import styled from "styled-components/macro";
import Slider from "react-slick";
import MovieThumb from "./MovieThumb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledFavorites = styled.div`
  width: 85%;
  background: transparent;
  margin: 15px 0;
  display: flex;
  flex-direction: column;

  .row-title {
    font: 1.2rem Playfair Display;
    text-transform: capitalize;
    margin: 7.5px 15px;
    color: #fff;
  }
`;

export default function Favorites({ movies }) {
  console.log(movies);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
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
    <StyledFavorites>
      <div className='row-title'>My Favorites</div>
      <Slider {...settings}>
        {movies.length
          ? movies.map(movie => (
              <MovieThumb
                id={movie.id}
                key={movie.id}
                poster={movie.posterPath}
              />
            ))
          : null}
      </Slider>
    </StyledFavorites>
  );
}
