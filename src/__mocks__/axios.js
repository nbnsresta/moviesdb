import movieList from "../__mockData__/movieList.json";
import movie from "../__mockData__/movie.json";

const axios = ({ url }) => {
  switch (url) {
    case "/trending/all/day":
    case "/movie/now_playing":
    case "/movie/upcoming":
    case url.match(/^\/movie\/.+?\/similar/):
    case "/search/movie":
      return Promise.resolve({
        data: movieList
      });

    case url.match(/^\/movie\/.+/):
      return Promise.resolve({
        data: movie
      });

    default:
      return Promise.resolve({ data: {} });
  }
};

axios.interceptors = {
  request: {
    use: () => {}
  }
};

export default axios;
