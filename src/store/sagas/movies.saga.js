import { all, takeEvery, call, put } from "redux-saga/effects";
import {
  requestTrendingMovies,
  requestNewMovies,
  requestUpcomingMovies
} from "../../api/endpoints";
import moviesSlice from "../slices/movies.slice";
import { categories } from "../constants";

export function* fetchMovies(action) {
  try {
    let movies;
    switch (action.payload.category) {
      case categories.trending:
        movies = yield call(requestTrendingMovies, action.payload);
        break;
      case categories.new:
        movies = yield call(requestNewMovies, action.payload);
        break;
      case categories.upcoming:
        movies = yield call(requestUpcomingMovies, action.payload);
        break;
      default:
        throw new Error("Invalid category type");
    }
    yield put({
      ...movies,
      category: action.payload.category,
      type: moviesSlice.actions.getMoviesDone.type
    });
  } catch (e) {
    yield put({
      type: moviesSlice.actions.getMoviesError.type,
      category: action.payload.category
    });
  }
}

export default function* moviesSaga() {
  yield all([takeEvery(moviesSlice.actions.getMovies.type, fetchMovies)]);
}
