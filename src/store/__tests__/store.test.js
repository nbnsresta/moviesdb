import configureStore from "../configureStore";
import movieList from "../../__mockData__/movieList.json";

let store;
beforeEach(() => {
  store = configureStore();
});

const defaultState = {
  search: { latestPage: 0, movies: [] },
  singleMovie: {},
  movies: {
    new: { latestPage: 0, movies: [] },
    trending: { latestPage: 0, movies: [] },
    upcoming: { latestPage: 0, movies: [] }
  },
  pages: {
    singleMoviePage: { isLoading: false, hasError: false },
    trendingMovies: { isLoading: false, hasError: false },
    newMovies: { isLoading: false, hasError: false },
    upcomingMovies: { isLoading: false, hasError: false }
  }
};

describe("Initialization", () => {
  it("default state", () => {
    const state = store.getState();
    expect(state).toEqual(defaultState);
  });
});
