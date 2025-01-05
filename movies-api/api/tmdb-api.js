import fetch from 'node-fetch';

export const getUpcomingMovies = async (page) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getTrendingMovies = async (page) => {
  try {
      const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
      );

      if (!response.ok) {
        console.log("Error");
        throw new Error(response.json().message);
      }

      return await response.json();
  } catch (error) {
      throw error;
  }
};

// export const getMovies = async () => {
//   try {
//       const response = await fetch(
//           `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
//       );

//       if (!response.ok) {
//         console.log("Error");
//         throw new Error(response.json().message);
//       }

//       return await response.json();
//   } catch (error) {
//       throw error;
//   }
// };

export const getMoviesPage = async (page) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
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

export const getNowPlaying = async (page) => {
  try {
      const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
      );

      if (!response.ok) {
        throw new Error(response.json().message);
      }

      return await response.json();
  } catch (error) {
      throw error;
  }
};

export const getGenres = async () => {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
  ).then( (response) => {
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

export const getMovie = async (id) => {
  // const [, idPart] = args.queryKey;
  // const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
  ).then( (response) => {
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

export const getMovieRecommendations = async (id, page) => {
  // const [, idPart] = args.queryKey;
  // const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
  ).then( (response) => {
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

export const getMovieCredits = async (id) => {
  // const [, idPart] = args.queryKey;
  // const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}`
  ).then( (response) => {
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

export const getPerson = (id) => {
  //console.log(args)
  // const [, idPart] = args.queryKey;
  // const { id } = idPart;
  //console.log(id)
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_KEY}`
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

export const getPersonMovieCredits = (id) => {
  //console.log(args)
  // const [, idPart] = args.queryKey;
  // const { id } = idPart;
  //console.log(id)
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_KEY}`
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

export const getMovieImages = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
  ).then( (response) => {
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

export const getMovieReviews = (id) => {
  // const [, idPart] = queryKey;
  // const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
  ).then( (response) => {
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