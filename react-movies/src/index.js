import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import MovieRecommendationsPage from "./pages/movieRecommendationsPage";
import PersonPage from "./pages/personPage";
import ThemeContextProvider from "./contexts/themeContext";
import WatchlistMoviesPage from "./pages/watchlistMoviesPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protected-routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  
  // auth.onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //   } else {
  //     <Navigate to="/login"></Navigate>
  //   }
  // });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
        <SiteHeader />
        <ThemeContextProvider>
          <MoviesContextProvider>
            <Routes>

              <Route element={<ProtectedRoutes />}>
                <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                <Route path="/movies/watchlist" element={<WatchlistMoviesPage />} />
                <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
              </Route>

              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/trending/today" element={<TrendingMoviesPage />} />
              <Route path="/movies/now-playing" element={<NowPlayingPage />} />
              <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/movies/:id/recommendations" element={<MovieRecommendationsPage />} />
              <Route path="/person/:id" element={<PersonPage />} />

              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/signup" element={<SignUpPage/>} />
              <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
          </MoviesContextProvider>
        </ThemeContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);