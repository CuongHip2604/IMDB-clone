import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchMovieById, fetchMovies } from './actions/movie';
import { MovieInterface } from 'interfaces/movie';

interface MovieState {
  movies: MovieInterface[];
  movie: MovieInterface | null;
  loading: boolean;
}

const initialState: MovieState = {
  movies: [],
  movie: null,
  loading: false,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    resetMovies: (state: MovieState) => {
      state.movies = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchMovies.fulfilled,
      (state: MovieState, action: PayloadAction<MovieInterface[]>) => {
        state.movies = [...state.movies, ...action.payload];
      },
    );
    builder.addCase(fetchMovieById.pending, (state: MovieState) => {
      state.loading = true;
    });
    builder.addCase(
      fetchMovieById.fulfilled,
      (state: MovieState, action: PayloadAction<MovieInterface>) => {
        state.movie = action.payload;
        state.loading = false;
      },
    );
  },
});

export const { resetMovies } = movieSlice.actions;

export default movieSlice.reducer;
