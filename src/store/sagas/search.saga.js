import { all, takeLatest, call, put } from "redux-saga/effects";
import searchSlice from "../slices/search.slice";
import { requestSearchMovies } from "../../api/endpoints";

export function* searchMovie(action) {
  const movies = yield call(requestSearchMovies, action.payload);
  yield put({
    ...movies,
    type: searchSlice.actions.readSearchMovieDone.type
  });
}

export default function* searchSaga() {
  yield all([
    takeLatest(searchSlice.actions.getSearchResults.type, searchMovie)
  ]);
}
