import { useState } from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AppPagination from "../components/appPagination";

const TrendingMoviesPage = (props) => {

  const [page, setPage] = useState(1);

  const {  data, error, isLoading, isError }  = useQuery(['trending', {page: page}], getTrendingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <>
      <PageTemplate
        title="Trending Today"
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />
        }}
      />
      <footer className="footer">
        <AppPagination page={page} setPage={setPage}/>
      </footer>
    </>
  );
};
export default TrendingMoviesPage;