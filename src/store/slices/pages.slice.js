import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  singleMoviePage: { isLoading: false, hasError: false },
  trendingMovies: { isLoading: false, hasError: false },
  newMovies: { isLoading: false, hasError: false },
  upcomingMovies: { isLoading: false, hasError: false }
};

export default createSlice({
  name: "pages",
  initialState: defaultState,
  reducers: {
    getMovies: state => state,
    singleMoviePageReadEventStart: state => ({
      ...state,
      singleMoviePage: { isLoading: true, hasError: false }
    }),
    singleMoviePageReadEventEnd: state => ({
      ...state,
      singleMoviePage: { isLoading: false, hasError: false }
    }),
    singleMoviePageReadEventError: state => ({
      ...state,
      singleMoviePage: { isLoading: false, hasError: true }
    }),

    trendingMoviesReadEventStart: state => ({
      ...state,
      trendingMovies: { isLoading: true, hasError: false }
    }),
    trendingMoviesReadEventEnd: state => ({
      ...state,
      trendingMovies: { isLoading: false, hasError: false }
    }),
    trendingMoviesReadEventError: state => ({
      ...state,
      trendingMovies: { isLoading: false, hasError: true }
    }),

    newMoviesReadEventStart: state => ({
      ...state,
      newMovies: { isLoading: true, hasError: false }
    }),
    newMoviesReadEventEnd: state => ({
      ...state,
      newMovies: { isLoading: false, hasError: false }
    }),
    newMoviesReadEventError: state => ({
      ...state,
      newMovies: { isLoading: false, hasError: true }
    }),

    upcomingMoviesReadEventStart: state => ({
      ...state,
      upcomingMovies: { isLoading: true, hasError: false }
    }),
    upcomingMoviesReadEventEnd: state => ({
      ...state,
      upcomingMovies: { isLoading: false, hasError: false }
    }),
    upcomingMoviesReadEventError: state => ({
      ...state,
      upcomingMovies: { isLoading: false, hasError: true }
    })
  }
});
