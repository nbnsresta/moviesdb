import axios from "axios";
import movieList from "../__mockData__/movieList.json";
import movie from "../__mockData__/movie.json";

const axiosMock = ({ url }) => {
  const similarMoviesUrl = url.match(/^\/movie\/.+?\/similar/);
  const movieUrl = url.match(/^\/movie\/.+/);

  switch (url) {
    case "/trending/all/day":
    case "/movie/now_playing":
    case "/movie/upcoming":
    case similarMoviesUrl && similarMoviesUrl[0]:
    case "/search/movie":
      return Promise.resolve({
        data: movieList
      });

    case movieUrl && movieUrl[0]:
      return Promise.resolve({
        data: movie
      });

    default:
      return Promise.resolve({ data: {} });
  }
};

axiosMock.interceptors = axios.interceptors;

export default axiosMock;
