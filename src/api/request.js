import axios from "axios";
import queryString from "query-string";

const apiURL = process.env.REACT_APP_MOVIES_DB_URL;
const apiKey = process.env.REACT_APP_MOVIES_DB_KEY;

axios.interceptors.request.use(request => {
  const parsedUrl = queryString.parseUrl(request.url);
  parsedUrl.query["api_key"] = apiKey;
  return { ...request, url: queryString.stringifyUrl(parsedUrl) };
});

export const requestGET = ({ params, path }) => {
  return axios({
    method: "GET",
    baseURL: apiURL,
    url: path,
    params,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.data);
};
