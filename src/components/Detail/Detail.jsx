import axios from "axios";
import React, { useEffect, useState } from "react";
import "./detail.css";

function Detail({ location: { search } }) {
  let id = search.substring(1);
  const [detail, setdetail] = useState([]);
  console.log(search);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=a99b2602`)
      .then((response) => {
        setdetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return detail.Title ? (
    <div className="container detailDiv">
      <h1>{detail.Title}</h1>
      <div className="d-flex">
        <img src={detail.Poster} alt="not found" />
        <div>
          <p>
            <b> Fecha de estreno</b> {detail.Year}
          </p>
          <p>
            <b>IMBD Rating:</b> {detail.imdbRating}
          </p>
          <p>
            <b>Genero:</b> {detail.Genre}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-cargando">
      <div className="cargando"></div>
    </div>
  );
}

export default Detail;
