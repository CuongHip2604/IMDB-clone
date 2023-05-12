import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieInterface, MovieQuery } from 'interfaces/movie';
import MoviesService from 'services/movie';

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async (
    params: MovieQuery & { isMoviePage?: boolean },
  ): Promise<MovieInterface[]> => {
    const query = {
      limit: params.limit,
      offset: params.offset,
    };
    const res = params.isMoviePage
      ? await MoviesService.getMovies(query)
      : await MoviesService.getTvShows(query);

    return res.movies;
  },
);

export const fetchMovieById = createAsyncThunk(
  'movie/fetchMovieById',
  async (movieId: string) => {
    const res = await MoviesService.getMovieById(movieId);

    return res.movie;
  },
);
