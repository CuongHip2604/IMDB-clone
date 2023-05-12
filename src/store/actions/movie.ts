import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiResponse } from 'interfaces/api';
import { MovieInterface, MovieQuery } from 'interfaces/movie';
import MoviesService from 'services/movie';

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async (params: MovieQuery & { isMoviePage?: boolean }) => {
    const query = {
      limit: params.limit,
      offset: params.offset,
    };
    const res: ApiResponse<MovieInterface[]> = params.isMoviePage
      ? await MoviesService.getMovies(query)
      : await MoviesService.getTvShows(query);

    return res.movies;
  },
);

export const fetchMovieById = createAsyncThunk(
  'movie/fetchMovieById',
  async (movieId: string) => {
    const res: ApiResponse<MovieInterface> = await MoviesService.getMovieById(
      movieId,
    );

    return res.movie;
  },
);
