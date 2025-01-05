import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import PersonDetails from "../personDetails";

// copy of movie list template - add functionality
function PersonListPageTemplate({ people, credits, title, action }) {

  return (
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
        </Grid>
        <PersonDetails action={action} person={people} credits={credits}></PersonDetails>
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;