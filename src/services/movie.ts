import { ApiMethods } from 'enums/api';
import callAPI from './axiosClient';
import { MovieQuery } from 'interfaces/movie';

const getMovies = (params: MovieQuery) => {
  return callAPI(ApiMethods.get, 'movies', {
    params,
  });
};

const getMovieById = (movieId: string) => {
  return callAPI(ApiMethods.get, `movies/${movieId}`);
};

const getTvShows = (params: MovieQuery) => {
  return callAPI(ApiMethods.get, 'tv_shows', {
    params,
  });
};

const MoviesService = {
  getMovies,
  getMovieById,
  getTvShows,
};

export default MoviesService;
