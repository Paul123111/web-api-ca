import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import AppPagination from "../appPagination";

function MovieListPageTemplate({ movies, credits, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  const [ratingsFilter, setRatingsFilter] = useState("0");
  const ratingsID = Number(ratingsFilter);

  const [sortBy, setSortBy] = useState("popularity");

  const [overviewFilter, setOverviewFilter] = useState("");



  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return m.vote_average > ratingsID;
    })
    .filter((m) => {
      //console.log(m.vote_average);
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .sort((m, n) => {
      switch(sortBy) {
        case "popularity": return m.popularity < n.popularity ? 1 : -1;
        case "nameAZ": return m.title > n.title ? 1 : -1;
        case "nameZA": return m.title < n.title ? 1 : -1;
        case "ratings": return m.vote_average < n.vote_average ? 1 : -1;
        case "releaseDate": return m.date > n.date ? 1 : -1;
        default: return m.popularity < n.popularity ? 1 : -1;
      }
    })
    .filter((m) => {
      //console.log(m.vote_average);
      return m.overview.toLowerCase().search(overviewFilter.toLowerCase()) !== -1; // movie list doesn't have production_company ?.map((production_company) => {return production_company.name.toLowerCase().search(companyFilter.toLowerCase()) !== -1});
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "ratings") setRatingsFilter(value);
    else if (type === "sort") setSortBy(value);
    else if (type === "genre") setGenreFilter(value);
    else setOverviewFilter(value);
  };

  // const handlePageChange = (type, value) => {
  //   console.log(type + ", " + value);
  //   setPage(value);
  // };

  return (
    <>
      <Grid container>
        <Grid size={12}>
          <Header title={title} />
        </Grid>
        <Grid container sx={{flex: "1 1 500px"}}>
          <Grid 
            key="find" 
            size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
            sx={{padding: "20px"}}
          >
            <FilterCard
              onUserInput={handleChange}
              titleFilter={nameFilter}
              genreFilter={genreFilter}
              ratingsFilter={ratingsFilter}
              overviewFilter={overviewFilter}
              sortBy={sortBy}
            />
          </Grid>
          <MovieList action={action} movies={displayedMovies}></MovieList>
        </Grid>
      </Grid>

      {/* <footer className="footer">
        <AppPagination page={page} setPage={setPage}/>
      </footer> */}
      
    </>
  );
}
export default MovieListPageTemplate;