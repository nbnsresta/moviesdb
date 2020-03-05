import { requestGET } from "./request";

export const requestTrendingMovies = ({ category, ...params }) =>
  requestGET({
    path: "/trending/all/day",
    params
  });

export const requestNewMovies = ({ category, ...params }) =>
  requestGET({
    path: "/movie/now_playing",
    params
  });

export const requestUpcomingMovies = ({ category, ...params }) =>
  requestGET({
    path: "/movie/upcoming",
    params
  });

export const requestMovieFromId = ({ movieId, ...params }) =>
  requestGET({
    path: `/movie/${movieId}`,
    params
  });

export const requestSimilarMovies = ({ movieId, ...params }) =>
  requestGET({
    path: `/movie/${movieId}/similar`,
    params
  });

export const requestSearchMovies = params =>
  requestGET({
    path: "/search/movie",
    params
  });
