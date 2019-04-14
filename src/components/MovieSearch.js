import React from "react";
import styled from "styled-components/macro";
import MovieThumb from "./MovieThumb";

const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  h3 {
    color: ${props => props.theme.mainTextColor};
    grid-column: 1 / 6;
  }
`;
export default function MovieSearch({ movies, searchTerm }) {
  return (
    <SearchResults>
      <h3>Search results for {searchTerm}</h3>
      {movies
        ? movies.map(movie => <MovieThumb poster={movie.poster_path} />)
        : null}
    </SearchResults>
  );
}
