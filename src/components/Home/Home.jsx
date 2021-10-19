import axios from "axios";
import React, { useState } from "react";
import Card from "../Card/Card";
import "bootstrap/dist/css/bootstrap.css";


function Home() {
  const [movies, setmovies] = useState([]);
  const [input, setinput] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.omdbapi.com/?s=${encodeURI(
          input
        )}&type=movie&page=1&apikey=a99b2602`
      )
      .then((response) => {
        setmovies(response.data.Search);
        console.log(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let handleChange = (e) => {
    setinput(e.target.value);
  };
  const enabled = input.length;

  return movies.length ? (
    <div className="container">
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className="theForm ">
          <label>
            Search movie:
            <input
              type="text"
              name="name"
              placeholder="keyword..."
              onChange={(e) => handleChange(e)}
              className="inputSearch"
              value={input}
            />
            <button type="submit">Search</button>
          </label>
        </form>
      </div>
      <div className="d-flex flex-wrap">
        {movies.map((peli, key) => (
          <Card
            name={peli.Title}
            image={peli.Poster}
            key={key}
            id={peli.imdbID}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="theForm">
        <label>
          Search movie:
          <input
            type="text"
            name="name"
            placeholder="keyword..."
            onChange={(e) => handleChange(e)}
            className="inputSearch"
            value={input}
          />
          <button type="submit"  disabled={!enabled}>Search</button>
        </label>
      </form>
    </div>
  );
}

export default Home;

//apiKey=a99b2602
