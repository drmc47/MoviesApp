import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite } from "../../actions";
import "./Card.css";
function Card({ name, image, id }) {
  const dispatch = useDispatch();
  let addFav = () => {
    dispatch(addFavourite({name, image, id}))
  }
  return (
    <div className=" d-flex m-3">
      <img src={image} alt="img not found" className="cardImage" />
      <Link
        className="text-white text-decoration-none position-absolute text-title text-truncate text-center"
        to={{
          pathname: "/detail",
          search: `${id}`,
        }}
      >
        <h2>{name}</h2>
      </Link>
        <button onClick={addFav}>❤️</button>
    </div>
  );
}

export default Card;
