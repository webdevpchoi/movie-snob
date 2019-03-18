import React from "react";
import styled from "styled-components/macro";

const StyledCast = styled.div`
  img {
    width: 165px;
  }
  .cast-desc span {
    display: block;
    max-width: 165px;
    padding: 5px;
  }
  .character-name {
    font-weight: 600;
    font-size: 1.15rem;
  }
`;

export default function Cast({ details: { profile_path, character, name } }) {
  return (
    <StyledCast>
      <img
        src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
        alt=''
        className='cast-img'
      />
      <div className='cast-desc'>
        <span className='character-name'>{character}</span>
        <span>
          <em>{name}</em>
        </span>
      </div>
    </StyledCast>
  );
}
