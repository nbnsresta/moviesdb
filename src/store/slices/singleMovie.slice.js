import { createSlice } from "@reduxjs/toolkit";

const defaultState = {};

export default createSlice({
  name: "singleMovie",
  initialState: defaultState,
  reducers: {
    getSingleMovie: state => state,
    getSingleMovieDone: (_, action) => action.payload,
    getSingleMovieError: state => state,
    clearSingleMovie: () => defaultState
  }
});
