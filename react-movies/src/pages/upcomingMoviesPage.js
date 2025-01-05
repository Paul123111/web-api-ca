import {useState} from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
//import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import AppPagination from "../components/appPagination";

const UpcomingMoviesPage = (props) => {

  const [page, setPage] = useState(1);

  const {  data, error, isLoading, isError }  = useQuery(['movie', {page: page}], getUpcomingMovies)

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
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddToPlaylistIcon movie={movie} />
        }}
      />
      <footer className="footer">
        <AppPagination page={page} setPage={setPage}/>
      </footer>
    </>
  );
};
export default UpcomingMoviesPage;