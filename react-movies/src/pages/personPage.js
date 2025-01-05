import React from "react";
import PersonDetails from "../components/personDetails";
import { getPerson, getPersonMovieCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { useParams } from 'react-router-dom';
import PersonListPageTemplate from "../components/templatePersonList";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import PersonPageTemplate from "../components/templatePersonPage";

const PersonPage = (props) => {
  const { id } = useParams();
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );

  const { data: credits, error2, isLoading2, isError2 } = useQuery(
    ["credits", { id: id }],
    getPersonMovieCredits
  );

  if (isLoading || isLoading2) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (isError2) {
    return <h1>{error2.message}</h1>;
  }

  return (
    <>
      {person && credits ? (
        <>
          <PersonPageTemplate 
          person={person} 
          credits={credits} 
          action={(credit) => {
            return <AddToFavoritesIcon movie={credit} />
        }}/>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}
    </>
  );
};

export default PersonPage;