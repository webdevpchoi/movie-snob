import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.mainColor};
  color: #fcca46;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 10px;
`;
const SearchForm = ({ submitHandler, changeHandler }) => {
  return (
    <form action='' onSubmit={submitHandler}>
      <input type='text' className='movie-input' onChange={changeHandler} />
      <Button type='submit'>Search</Button>
    </form>
  );
};

export default SearchForm;
