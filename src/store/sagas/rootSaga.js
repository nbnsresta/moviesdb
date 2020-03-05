import { all, fork } from "redux-saga/effects";
import searchSaga from "./search.saga";
import moviesSaga from "./movies.saga";
import singleMovieSaga from "./singleMovie.saga";
import pagesSaga from "./pages.saga";

export default function* rootSaga() {
  yield all([
    fork(searchSaga),
    fork(moviesSaga),
    fork(singleMovieSaga),
    fork(pagesSaga)
  ]);
}
