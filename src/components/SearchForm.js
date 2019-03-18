import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  background: ${props => props.theme.mainColor};
  color: #fcca46;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 10px;
`;

const StyledForm = styled.form`
  background: transparent;
`;
const SearchForm = ({ submitHandler, changeHandler, className }) => {
  return (
    <StyledForm onSubmit={submitHandler} className={className}>
      <input type='text' className='movie-input' onChange={changeHandler} />
      <Button type='submit'>Search</Button>
    </StyledForm>
  );
};

export default SearchForm;
