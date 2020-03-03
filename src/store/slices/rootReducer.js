import { combineReducers } from "redux";
import search from "./search.slice";
import movies from "./movies.slice";
import pages from "./pages.slice";

export default combineReducers({
  search: search.reducer,
  movies: movies.reducer,
  pages: pages.reducer
});
