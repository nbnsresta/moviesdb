import { all, call, put, takeEvery } from "redux-saga/effects";
import singleMovieSlice from "../slices/singleMovie.slice";
import { requestMovieFromId } from "../../api/endpoints";

export function* fetchMovieFromId(action) {
  try {
    const movie = yield call(requestMovieFromId, action.payload);
    yield put({
      type: singleMovieSlice.actions.getSingleMovieDone.type,
      payload: movie
    });
  } catch (e) {
    yield put({ type: singleMovieSlice.actions.getSingleMovieError.type });
  }
}

export default function* moviesSaga() {
  yield all([
    takeEvery(singleMovieSlice.actions.getSingleMovie.type, fetchMovieFromId)
  ]);
}
