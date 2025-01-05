import React, { useState } from "react";

export const ThemeContext = React.createContext(true);

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState( {} )

  const changeTheme = (newTheme) => {
    // let newTheme = false;

    // theme ? newTheme = false : newTheme = true;
    
    setTheme({...theme, newTheme});

    console.log(theme);
  };

  // const addReview = (movie, review) => {
  //   setMyReviews( {...myReviews, [movie.id]: review } )
  // };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;