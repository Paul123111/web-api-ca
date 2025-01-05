// todo for person
// 1. get credits for movie - DONE
// 2. get movie to list credits - DONE
// 3. get movie to link people to personPage - DONE
// 4. create personPage - partially done, implement image
// 5. add movie credits to person
// 6. link movie credits to movie

import { Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import img from '../../images/blank-profile-picture.png' // credit: https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/
import { Link } from "react-router-dom";

const PersonCard = ({ person }) => {

  return (
    <Link to={`/person/${person.id}`}>
      <Card className="personCard">
        <CardContent className="darkCard">
          <Typography variant="h6" component="p">
            {person.name}
            </Typography>
          </CardContent>
          
          <CardMedia className="darkCard"
          sx={{ height: 300 }}
          image={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
              : img
          }
          />
          
          <CardContent className="darkCard">
            <Typography variant="h6" component="p">
            Popularity: {person.popularity}
            </Typography>
          </CardContent>
        
      </Card>
    </Link>
  );
};

export default PersonCard;