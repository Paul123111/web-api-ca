// todo for person
// 1. get credits for movie - DONE
// 2. get movie to list credits - DONE
// 3. get movie to link people to personPage - DONE
// 4. create personPage - partially done, implement image
// 5. add movie credits to person
// 6. link movie credits to movie

import { Paper, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import img from '../../images/blank-profile-picture.png';
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import MovieScrollList from "../movieScrollList";
import style from "../../css/style.css";
import VerticalScrollBox from "../verticalScrollBox";

const PersonDetails = ({ person, credits, action }) => {

  const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

        <Card className="darkCard">
          <CardContent className="lightCard">
            <Typography variant="h6" component="p">
              <p>Name: {person.name}</p>
              <VerticalScrollBox>
                {person.also_known_as.length > 0 ? <p>Also known as: {person.also_known_as.map(g => (<>{g}, </>))}</p> : <></>}
              </VerticalScrollBox>

              <VerticalScrollBox>
                Biography: {person.biography ? person.biography : "None Specified"}
              </VerticalScrollBox>

              <p>Date of Birth: {person.birthday ? person.birthday : "None Specified"} <br/>
              Died on: {person.deathday ? person.deathday : "Currently Alive"} <br/>
              Gender: {person.gender === 0 ? "Unspecified" : person.gender === 1 ? "Female" : person.gender === 2 ? "Male" : "Non-Binary"} <br/>
              Homepage: {person.homepage ? person.homepage : "None Specified"} <br/>
              Known for department: {person.known_for_department ? person.known_for_department : "None Specified"} <br/>
              Born in: {person.place_of_birth ? person.place_of_birth : "None Specified"} <br/>
              Popularity: {person.popularity}</p>
            </Typography>
          </CardContent>

          <CardContent className="darkCard">
            <MovieScrollList movies={credits.cast} action={action}></MovieScrollList>
          </CardContent>
            
          <CardContent className="darkCard">
            <MovieScrollList movies={credits.crew} action={action}></MovieScrollList>
          </CardContent>
          
        </Card>
    </>
  );
};

export default PersonDetails;