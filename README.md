# Assignment 2 - Web API.

Name: Paul Fitzgerald

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Integrated custom API to frontend
 + Added many new endpoints to API, mostly parameterised endpoints
 + Pagination on many API endpoints
 + Integrated login, signup and logout to movies app
 + Added favourites database where each user has separate favourites
 + Added a few API endpoints taking from both a sample movies Mongodb database, and the favourites database (get, post, update)
 + Added protected routes to watchlist and favourites - user has to be logged in to view them

## Setup requirements.

Should be the same as labs.

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies/tmdb/discover/:page | GET | Gets a list of movies from page 
- /api/movies/now_playing/:page | GET | Gets a list of movies from page from MongoDB database
- /api/movies/tmdb/upcoming/:page | GET | Gets a list of movies from page
- /api/movies/tmdb/genres | GET | Gets a list of genres from page
- /api/movies/tmdb/:id | GET | Gets a movie from TMDB
- /api/movies/tmdb/:id/reviews | GET | Gets a list of reviews for a movie
- /api/movies/tmdb/:id/recommendations/:page | GET | Gets a list of recommendations for a movie from page
- /api/movies/tmdb/trending/:page | GET | Gets a list of movies from page
- /api/movies/tmdb/:id/credits | GET | Gets a list of credits (crew and cast) from a movie
- /api/movies/tmdb/person/:id | GET | Gets a person
- /api/movies/tmdb/person/:id/credits | GET | Gets a list of movies this person has participated in (as cast or crew)
- /api/movies/tmdb/:id/images | GET | Gets a list of images from a movie

- /api/users | GET | Gets a list of users
- /api/users | POST | Registers or authenticates a user
- /api/uses/:id | PUT | Updates a user

- /api/favourites | GET | Gets a list of every users' favourite lists
- /api/favourites/user/:id | GET | Gets a user's favourite list
- /api/favourites/user/:id | POST | Creates an empty favourite list for new user
- /api/favourites/user/:id | PUT | Adds a movie to user's favourite list
 
If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

I added protected routes to watchlist and favourites - user has to be logged in to view them. When someone not logged in tries to access these routes, they are brought to the login view. Anyone can access the other pages, although it would be trivial to restrict more pages.

The way my authentication works is the same as the lab, where users can login and register I used a token system in localStorage for when the API is used.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

I fully integrated my React app with the API. All the views that used the TMDB API now use the my API, which takes data from the TMDB API. I also added the login and signup pages, as well as the logout button. I also reworked the favourites to use the API to separate favourites between users. 

## Independent learning (if relevant)

I used MongoDB to manage the favourites database and used Stack Overflow to troubleshoot (didn't take any code, just used for reference)
