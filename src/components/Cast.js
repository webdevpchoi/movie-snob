import React from "react";
import styled from "styled-components/macro";

const StyledCast = styled.div``;

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
        <span>{name}</span>
      </div>
    </StyledCast>
  );
}
