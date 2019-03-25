import React from "react";
import styled from "styled-components/macro";
import MovieThumb from "./MovieThumb";

const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export default function MovieSearch({ movies }) {
  return (
    <SearchResults>
      <h1>Search Results</h1>
      {movies
        ? movies.results.map(movie => <MovieThumb poster={movie.poster_path} />)
        : null}
    </SearchResults>
  );
}
