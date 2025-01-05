import React from "react";
import Movie from "../movieCard/";


const MovieScrollList = ({ movies, action }) => {
  let movieCards = movies.map((m) => (
    //<Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
    <ul>
      <li className="personCard"><Movie key={m.id} movie={m} action={action}/> </li>
    </ul>
  ));

  let movieScrollList = (
    <>
      <div className={"horizontalScroll"}>
        {movieCards}
      </div>
    </>
  )

  return movieScrollList;
};

export default MovieScrollList;