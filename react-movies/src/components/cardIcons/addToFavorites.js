import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { AuthContext2 } from "../../contexts/authContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToFavorites } from "../../api/tmdb-api";

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(AuthContext2);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    addToFavorites(context.userName, movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;