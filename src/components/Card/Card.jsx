import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite } from "../../actions";
import "./Card.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components'


function Card({ name, image, id }) {
  const dispatch = useDispatch();
  let addFav = () => {
    dispatch(addFavourite({name, image, id}))
    alert('ADDED!')
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
        <Like onClick={() => addFav()}/>
    </div>
  );
}

const Like = styled(FavoriteIcon)`
  font-size: 2rem;
`

export default Card;
