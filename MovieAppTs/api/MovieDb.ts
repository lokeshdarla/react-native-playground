import axios from 'axios';
import { API_BASE_KEY } from '@env';

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

export { trendingMoviesEndPoint, upcomingMoviesEndPoint, topRatedMoviesEndPoint,fetchMovieDetails };
