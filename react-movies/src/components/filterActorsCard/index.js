import React, { useState, useEffect } from "react"; 
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  export default function FilterActorsCard(props) {
  
    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };
  
    const handleTextChange = (e, props) => {
      handleChange(e, "name", e.target.value);
    };

  
    const handleSortChange = (e) => {
      handleChange(e, "sort", e.target.value);
    };
  
    const handleGenderChange = (e, props) => {
      handleChange(e, "overview", e.target.value);
    };
  
    return (
      <Card 
        sx={{
          backgroundColor: "rgb(204, 204, 0)",
          width: 270,
          display: "flex",
        }} 
        variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="medium" />
            Filter actors.
          </Typography>
          <TextField
              sx={{...formControl}}
              id="filled-search"
              label="Search by name"
              type="search"
              variant="filled"
              value={props.titleFilter}
              onChange={handleTextChange}
          />
  
          <FormControl sx={{...formControl}}>
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-select"
              defaultValue=""
              value={props.sortBy}
              onChange={handleSortChange}
            >
              <MenuItem key="popularity" value="popularity">
                Popularity
              </MenuItem>
              <MenuItem key="nameAZ" value="nameAZ">
                Name (A-Z)
              </MenuItem>
              <MenuItem key="nameZA" value="nameZA">
                Name (Z-A)
              </MenuItem>
            </Select>
          </FormControl>
  
          <FormControl sx={{...formControl}}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
                id="gender-search"
                label="Gender"
                type="search"
                variant="filled"
                value={props.overviewFilter}
                onChange={handleGenderChange}

                
            >
                <MenuItem key="4" value="4">
                  Any
                </MenuItem>
                <MenuItem key="2" value="2">
                  Male
                </MenuItem>
                <MenuItem key="1" value="1">
                  Female
                </MenuItem>
                <MenuItem key="3" value="3">
                  Other
                </MenuItem>
                <MenuItem key="0" value="0">
                  Unspecified
                </MenuItem>
            </Select>
          </FormControl>
  
        </CardContent>
      </Card>
    );
}

//export default FilterActorsCard;

// autocomplete maybe
// for searching, use actors beginning with t in movies for example (typing into searchbar) - put this into movie details
// for responive UI, just make sure new features use responsive UI (labs do by default)
// leave components that arent working in for extra marks