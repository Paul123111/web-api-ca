import React, { useContext, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQuery } from "react-query";
import { getMovie, getFavorites } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import { AuthContext2 } from "../contexts/authContext";

const FavoriteMoviesPage = () => {
  //const {favorites: movieIds } = useContext(MoviesContext);
  const context = useContext(AuthContext2);

  // Create an array of queries and run in parallel.
  // const favoriteMovieQueries = useQueries(
  //   getFavorites(context.userName).movies.map((movieId) => {
  //     return {
  //       queryKey: ["movie", { id: movieId }],
  //       queryFn: getMovie,
  //     };
  //   })
  // );

  const username = context.userName;

  const { data, error, isLoading, isError } = useQuery(
    ["favourites", { username: username }],
    getFavorites
  );
  // Check if any of the parallel queries is still loading.
  //const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  console.log(data);

  const movies = data.movies.map((q) => {
    console.log(q);
    q.genre_ids = q.genres.map(g => g.id)
    return q
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;