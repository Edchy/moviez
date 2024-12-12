import fetchData from "./serviceBase";

const key = "19616a6b"; // add to env
const BASE_URL = `http://www.omdbapi.com/?apikey=${key}`;

export default async function getMovies(query = "batman") {
  return await fetchData(`${BASE_URL}&s=${query}`);
}
