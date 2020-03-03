import { all, takeLatest, put } from "redux-saga/effects";
import pageSlice from "../slices/pages.slice";
import moviesSlice from "../slices/movies.slice";
import singleMovieSlice from "../slices/singleMovie.slice";
import { categories } from "../constants";

export function* getSingleMovie(action) {
  try {
    yield put({
      type: singleMovieSlice.actions.getSingleMovie.type,
      payload: action.payload
    });
  } catch (e) {
    yield put({
      type: pageSlice.actions.singleMoviePageReadEventError.type,
      payload: action.payload
    });
  }
}

export function* getSingleMovieDone(action) {
  yield put({ type: pageSlice.actions.singleMoviePageReadEventEnd.type });
}

export function* getMovies(action) {
  switch (action.payload.category) {
    case categories.trending:
      yield put({
        type: pageSlice.actions.trendingMoviesReadEventStart.type,
        payload: action.payload
      });
      break;
    case categories.new:
      yield put({
        type: pageSlice.actions.newMoviesReadEventStart.type,
        payload: action.payload
      });
      break;
    case categories.upcoming:
      yield put({
        type: pageSlice.actions.upcomingMoviesReadEventStart.type,
        payload: action.payload
      });
      break;
    default:
      throw new Error("Invalid category type");
  }
}

export function* getMoviesDone(action) {
  switch (action.category) {
    case categories.new:
      yield put({ type: pageSlice.actions.newMoviesReadEventEnd.type });
      break;

    case categories.trending:
      yield put({ type: pageSlice.actions.trendingMoviesReadEventEnd.type });
      break;

    case categories.upcoming:
      yield put({ type: pageSlice.actions.upcomingMoviesReadEventEnd.type });
      break;

    default:
  }
}

export function* getMoviesError(action) {
  switch (action.category) {
    case categories.new:
      yield put({ type: pageSlice.actions.newMoviesReadEventError.type });
      break;

    case categories.trending:
      yield put({ type: pageSlice.actions.trendingMoviesReadEventError.type });
      break;

    case categories.upcoming:
      yield put({ type: pageSlice.actions.upcomingMoviesReadEventError.type });
      break;

    default:
  }
}

export function* getNewMovies(action) {
  yield put({
    type: moviesSlice.actions.getMovies.type,
    payload: action.payload
  });
}

export function* getTrendingMovies(action) {
  yield put({
    type: moviesSlice.actions.getMovies.type,
    payload: action.payload
  });
}

export function* getUpcomingMovies(action) {
  yield put({
    type: moviesSlice.actions.getMovies.type,
    payload: action.payload
  });
}

export default function* pagesSaga() {
  yield all([
    takeLatest(pageSlice.actions.getMovies.type, getMovies),
    takeLatest(
      pageSlice.actions.singleMoviePageReadEventStart.type,
      getSingleMovie
    ),
    takeLatest(pageSlice.actions.newMoviesReadEventStart.type, getNewMovies),
    takeLatest(
      pageSlice.actions.trendingMoviesReadEventStart.type,
      getTrendingMovies
    ),
    takeLatest(
      pageSlice.actions.upcomingMoviesReadEventStart.type,
      getUpcomingMovies
    ),
    takeLatest(moviesSlice.actions.getMoviesDone.type, getMoviesDone),
    takeLatest(moviesSlice.actions.getMoviesError.type, getMoviesError)
  ]);
}
