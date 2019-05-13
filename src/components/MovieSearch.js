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
export default function MovieSearch({ movies, searchTerm, enable }) {
  return (
    <SearchResults>
      <h3>Search results for {searchTerm}</h3>
      {movies
        ? movies.map(movie => (
            <MovieThumb
              poster={movie.poster_path}
              key={movie.id}
              id={movie.id}
              didSearch={Boolean(searchTerm)}
              moviesExist={Boolean(movies)}
              enable={enable}
            />
          ))
        : null}
    </SearchResults>
  );
}
