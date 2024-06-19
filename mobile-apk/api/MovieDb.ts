import axios from 'axios';
import { API_BASE_KEY } from '@env';
import { ActorMovie, Movie } from '../constants/constants';

// Endpoints
const BASE_API_URL = 'https://api.themoviedb.org/3/';
const trendingMoviesEndPoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_BASE_KEY}`;
const upcomingMoviesEndPoint = `${BASE_API_URL}movie/upcoming?api_key=${API_BASE_KEY}`;
const topRatedMoviesEndPoint = `${BASE_API_URL}movie/top_rated?api_key=${API_BASE_KEY}`;







const fetchMovieDetails = async (id:number) => {
  try {
    const MovieDetailsEndPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_BASE_KEY}`;
    const response = await axios.get(MovieDetailsEndPoint);
    return response.data ;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};


const fetchSimilarMovieDetails = async (id:number) => {
  try {
    const MovieDetailsEndPoint = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_BASE_KEY}`;
    const response = await axios.get(MovieDetailsEndPoint);
    return response.data ;
  } catch (error) {
    console.error('Error fetching similar movie details:', error);
    return null;
  }
};



const fetchMovieDetailsByName = async (movieTitle:string) => {
  try {
    const MovieDetailsEndPoint = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${API_BASE_KEY}`;
    const response = await axios.get(MovieDetailsEndPoint);
    return response.data.results ;
  } catch (error) {
    console.error('Error fetching movie by name details:', error);
    return null;
  }
};








const fetchMovieCredits = async (id:number) => {
  try {
    const MovieDetailsEndPoint = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_BASE_KEY}`;
    const response = await axios.get(MovieDetailsEndPoint);
    return response.data ;
  } catch (error) {
    console.error('Error fetching  movie credits: ', error);
    return null;
  }
};


const fetchActorDetails = async (id:number) => {
  try {
    const MovieDetailsEndPoint = `https://api.themoviedb.org/3/person/${id}?api_key=${API_BASE_KEY}`;
    console.log(id);
    const response = await axios.get(MovieDetailsEndPoint);
    return response.data ;
  } catch (error) {
    console.error('Error fetching  Actor details: ', error);
    return null;
  }
};


const fetchActorMovies = async (id: number) => {
  try {
    const ActorMovieEndPoint = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_BASE_KEY}`;
    const response = await axios.get(ActorMovieEndPoint);
    const ActorMovieData = response.data.cast;
    return ActorMovieData;
  } catch (error) {
    console.error('Error fetching Actor details: ', error);
    return null;
  }
};


export { trendingMoviesEndPoint, upcomingMoviesEndPoint, topRatedMoviesEndPoint,fetchMovieDetails,fetchSimilarMovieDetails ,fetchMovieCredits,fetchActorDetails,fetchActorMovies,fetchMovieDetailsByName};


