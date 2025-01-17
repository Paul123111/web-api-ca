import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
  getGenres,
  getUpcomingMovies,
  getTrendingMovies,
  getMovies,
  getMoviesPage,
  getMovie,
  getNowPlaying,
  getMovieRecommendations,
  getMovieCredits,
  getPerson,
  getPersonMovieCredits,
  getMovieImages,
  getMovieReviews
} from '../tmdb-api';


const router = express.Router();

router.get('/now_playing/:page', asyncHandler(async (req, res) => {

  let { page, limit = 10 } = req.query; // destructure page and limit and set default values
  page = req.params.page;
  //console.log(req.params.page);

  [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

  // Parallel execution of counting movies and getting movies using movieModel
  const [total_results, results] = await Promise.all([
      movieModel.estimatedDocumentCount(),
      movieModel.find().limit(limit).skip((page - 1) * limit)
  ]);
  const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

  //construct return Object and insert into response object
  const returnObject = {
      page,
      total_pages,
      total_results,
      results
  };
  res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/:id/reviews', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const movie = await getMovieReviews(id);
  if (movie) {
      res.status(200).json(movie);
  } else {
      res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
  }
}));

router.get('/tmdb/:id/recommendations/:page', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const page = parseInt(req.params.page);
  const movie = await getMovieRecommendations(id, page);
  if (movie) {
      res.status(200).json(movie);
  } else {
      res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
  }
}));

router.get('/tmdb/trending/:page', asyncHandler(async (req, res) => {
  const page = parseInt(req.params.page);
  const trendingMovies = await getTrendingMovies(page);
  res.status(200).json(trendingMovies);
}));

router.get('/tmdb/upcoming/:page', asyncHandler(async (req, res) => {
  const page = parseInt(req.params.page);
  const upcomingMovies = await getUpcomingMovies(page);
  res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
  const genres = await getGenres();
  res.status(200).json(genres);
}));

router.get('/tmdb/discover/:page', asyncHandler(async (req, res) => {
  const page = parseInt(req.params.page);
  const movies = await getMoviesPage(page);
  res.status(200).json(movies);
}));

router.get('/tmdb/now_playing/:page', asyncHandler(async (req, res) => {
  const page = parseInt(req.params.page);
  const movies = await getNowPlaying(page);
  res.status(200).json(movies);
}));

router.get('/tmdb/:id/credits', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const movie = await getMovieCredits(id);
  if (movie) {
      res.status(200).json(movie);
  } else {
      res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
  }
}));

router.get('/tmdb/person/:id', asyncHandler(async (req, res) => {
  //console.log("a");
  const id = parseInt(req.params.id);
  const person = await getPerson(id);
  if (person) {
      res.status(200).json(person);
  } else {
      res.status(404).json({message: 'The person you requested could not be found.', status_code: 404});
  }
}));

router.get('/tmdb/person/:id/credits', asyncHandler(async (req, res) => {
  console.log("a");
  const id = parseInt(req.params.id);
  const credits = await getPersonMovieCredits(id);
  if (credits) {
      res.status(200).json(credits);
  } else {
      res.status(404).json({message: 'The person you requested could not be found.', status_code: 404});
  }
}));

// Get movie images
router.get('/tmdb/:id/images', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  const movie = await getMovieImages(id);
  if (movie) {
      res.status(200).json(movie);
  } else {
      res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
  }
}));




export default router;
