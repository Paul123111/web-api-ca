import { useState } from "react";
import Person from "../personCard";
import Grid from "@mui/material/Grid2";
import FilterCard from "../filterActorsCard";
import { Paper } from "@mui/material";

const PersonScrollList = (props) => {
  const [nameFilter, setNameFilter] = useState("");

  const [genderFilter, setGenderFilter] = useState("4");
  const genderId = Number(genderFilter);

  const [sortBy, setSortBy] = useState("popularity");

  let displayedPeople = props.people
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      //console.log(m.vote_average);
      return genderId < 4 ? m.gender === genderId : true;
    })
    .sort((m, n) => {
      switch(sortBy) {
        case "popularity": return m.popularity < n.popularity ? 1 : -1;
        case "nameAZ": return m.name > n.name ? 1 : -1;
        case "nameZA": return m.name < n.name ? 1 : -1;
        default: return m.popularity < n.popularity ? 1 : -1;
      }
    })

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "sort") setSortBy(value);
    else setGenderFilter(value);
  };

  let personCards = displayedPeople.map((m) => (
    //<Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
    <ul>
      <li><Person key={m.id} person={m} /> </li>
    </ul>)
  );

  let personScrollList = (
    <>
      <div className="horizontalScroll">
        <Paper className="verticalStack">
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genderFilter={genderFilter}
            sortBy={sortBy}
          />
        </Paper>
        {personCards}
      </div>
    </>
  )

  return personScrollList;
};

export default PersonScrollList;