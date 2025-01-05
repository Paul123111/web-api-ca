import {useState} from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovieRecommendations } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieRecommendations from "../components/movieRecommendations";
//import useMovie from "../hooks/useMovie";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AppPagination from "../components/appPagination";

const MovieRecommendationsPage = (props) => {
  const [page, setPage] = useState(1);
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["recommendations", { id: id }, {page: page}],
    getMovieRecommendations
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <MovieRecommendations 
          recommendations={movie} 
          title="Recommend Movies"
          action={(movie) => {
            return <AddToFavoritesIcon movie={movie} />
          }}
           />
          <footer className="footer">
            <AppPagination page={page} setPage={setPage}/>
          </footer>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieRecommendationsPage;