export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};

// export const getMoviesPage = (args) => {
//   const [, pagePart] = args.queryKey;
//   const { page } = pagePart;
//   //console.log(args);
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//       throw error
//   });
// };

export const getMoviesPage = async (args) => {
  const [, pagePart] = args.queryKey;
  const { page } = pagePart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/discover/${page}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

// export const getUpcomingMovies = (args) => {
//   const [, pagePart] = args.queryKey;
//   const { page } = pagePart;
//   return fetch(
//     // `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//     `http://localhost:8080/movies`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//       throw error
//   });
// };

export const getUpcomingMovies = async (args) => {
  const [, pagePart] = args.queryKey;
  const { page } = pagePart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/upcoming/${page}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

// export const getTrendingMovies = (args) => {
//   const [, pagePart] = args.queryKey;
//   const { page } = pagePart;
//   return fetch(
//     `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//       throw error
//   });
// };

export const getTrendingMovies = async (args) => {
  const [, pagePart] = args.queryKey;
  const { page } = pagePart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/trending/${page}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

// export const getNowPlaying = (args) => {
//   const [, pagePart] = args.queryKey;
//   const { page } = pagePart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//       throw error
//   });
// };

export const getNowPlaying = async (args) => {
  const [, pagePart] = args.queryKey;
  const { page } = pagePart;
  const response = await fetch(
    `http://localhost:8080/api/movies/now_playing/${page}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};
  
// export const getMovie = (args) => {
//   //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

export const getMovie = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovieRecommendations = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const [, , pagePart] = args.queryKey;
  const { page } = pagePart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/${id}/recommendations/${page}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};
  
export const getMovieCredits = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/${id}/credits`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getPerson = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/person/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getPersonMovieCredits = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/person/${id}/credits`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

// export const getGenres = () => {
//   return fetch(
//     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//       process.env.REACT_APP_TMDB_KEY +
//       "&language=en-US"
//   ).then( (response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//   });
// };

export const getGenres = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/genres', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovieImages = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/${id}/images`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};


export const getMovieReviews = async(args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/${id}/reviews`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  newUserFavorites(username);
  return response.json();
};
  
export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const addToFavorites = async (username, movie) => {
  const movieArray = await getFavorites2(username);
  console.log(movieArray.movies);
  const response = await fetch(`http://localhost:8080/api/favourites/user/${username}`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify({ username: username, movies: [...movieArray.movies, movie] })
  });
  return response.json();
};

export const newUserFavorites = async (username) => {
  console.log(username);
  const response = await fetch(`http://localhost:8080/api/favourites/user/${username}`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, movies: [] })
  });
  return response.json();
};

export const getFavorites = async (args) => {
  const [, namePart] = args.queryKey;
  // const { name } = namePart;
  // console.log(name);
  const response = await fetch(
    `http://localhost:8080/api/favourites/user/${namePart.username}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getFavorites2 = async (username) => {
  // const { name } = namePart;
  // console.log(name);
  const response = await fetch(
    `http://localhost:8080/api/favourites/user/${username}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};