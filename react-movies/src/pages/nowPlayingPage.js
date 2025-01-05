import {useState} from "react";
import { getNowPlaying } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AppPagination from "../components/appPagination";

const NowPlayingPage = (props) => {

  const [page, setPage] = useState(1);

  const {  data, error, isLoading, isError }  = useQuery(['movie', {page: page}], getNowPlaying)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <>
      <PageTemplate
        title="Now Playing"
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
export default NowPlayingPage;