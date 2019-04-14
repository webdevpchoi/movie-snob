import React from "react";
import styled from "styled-components/macro";
import Header from "./Header";

const StyledMovieDetails = styled.div`
  margin: 82px 5% 0 20%;
  padding-top: 50px;
  .movie-info {
    background: #181f36;
  }
  img {
    width: 200px;
  }
`;

export default function MovieDetails() {
  return (
    <StyledMovieDetails>
      <Header />
      <div className='movie-details'>
        <div className='movie-info'>
          <img
            src='https://images.pexels.com/photos/37540/food-popcorn-snack-movie-37540.jpeg?cs=srgb&dl=close-up-food-movie-37540.jpg&fm=jpg'
            alt=''
          />
          <h1>Aquaman</h1>
          <a href='#'>www.Aquaman.com</a>
          <span>Release: January 2, 2019</span>
          <span>Runtime: 129 mins</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            ipsa, qui aliquam a autem eligendi maiores itaque minima fugiat
            quibusdam, aliquid rem optio officia nulla molestias culpa! Quidem,
            in laboriosam.
          </p>
          <div className='pie-chart'>Piechart here</div>
          <ul className='genres'>
            <li>Drama</li>
            <li>Science Fiction</li>
            <li>Fantasy</li>
            <li>Suspense</li>
          </ul>
        </div>
      </div>
    </StyledMovieDetails>
  );
}
