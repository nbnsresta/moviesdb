import { createSlice } from "@reduxjs/toolkit";

const defaultState = { latestPage: 0, movies: [] };

export default createSlice({
  name: "search",
  initialState: defaultState,
  reducers: {
    getSearchResults: state => state,
    getSearchResultsDone: (_, action) => {
      return {
        latestPage: action.page,
        movies: action.results
      };
    },
    getSearchResultsError: state => state,
    clearSearchResults: () => defaultState
  }
});
