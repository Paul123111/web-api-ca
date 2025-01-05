import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import PersonDetails from "../personDetails";

const TemplatePersonPage = ({ person, credits, title, action }) => {
  // const { data , error, isLoading, isError } = useQuery(
  //   ["images", { id: movie.id }],
  //   getMovieImages
  // );

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }
  // const images = data.posters 

  return (
    <>
      {/* <MovieHeader movie={movie} /> */}

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid size={{xs: 3}}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }} className="responsiveImage">
            <ImageList
                sx={{
                    height: "100vh",
                    border: "2px solid grey"
                }}
                cols={1}
            >
            <ImageListItem key={person.profile_path} className="responsiveImage" cols={1}>
              <img className="responsiveImage"
                  src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                  alt={person.profile_path}
              />
            </ImageListItem>
            </ImageList>
          </div>
        </Grid>

        <Grid size={{xs: 9}}>
          <PersonDetails action={action} person={person} credits={credits}></PersonDetails>
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;
