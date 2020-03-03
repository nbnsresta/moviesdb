import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../constants";

const defaultState = Object.keys(categories).reduce((all, currentKey) => {
  return { ...all, [currentKey]: { latestPage: 0, movies: [] } };
}, {});

export default createSlice({
  name: "movies",
  initialState: defaultState,
  reducers: {
    getMovies: state => state,
    getMoviesDone: (state, action) => {
      state[action.category].latestPage = action.page;
      state[action.category].movies = state[action.category].movies.concat(
        ...action.results
      );
      return state;
    },
    getMoviesError: state => state
  }
});
