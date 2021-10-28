import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "bootstrap/dist/css/bootstrap.css";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { searchMovie } from "../../actions";
import { useSelector } from "react-redux";


function Home() {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies)
  const [input, setinput] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchMovie(input))
    setinput('');
    
  };
  let handleChange = (e) => {
    setinput(e.target.value);
  };
  const enabled = input.length;

  return (
    <div className="container">
      <div>
        <SearchBar onSubmit={(e) => handleSubmit(e)} className="theForm ">
          <label>
            Search movie:
            <Input
              type="text"
              name="name"
              placeholder="keyword..."
              onChange={(e) => handleChange(e)}
              className="inputSearch"
              value={input}
            />
            <SearchButton type="submit" disabled={!enabled}>Search</SearchButton>
          </label>
        </SearchBar>
      </div>

      {movies?.length ? 
      <div className="d-flex flex-wrap">
        {movies.map((peli, key) => (
          <Card
            name={peli.Title}
            image={peli.Poster}
            key={key}
            id={peli.imdbID}
            year={peli.Year}
          />))}
      </div>
          : 
          null}
    </div>

  ) 
}

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
  padding-bottom: 2vh;
`
const Input = styled.input`
    border-radius: 5px;
    padding : 5px;
    margin-left: 5px;
    margin-right: 5px;
`

const SearchButton = styled.button`
    padding: 5px 12px;
    background-color: #f5b921;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;


    &:hover {
      transition: all 0.2s ease-in-out;
      background: lightgreen;
      color: #010606;
    }
    &:disabled {
      opacity: 0.7;
      cursor: default;
    }
`
export default Home;

//apiKey=a99b2602
