const key = "19616a6b";
const query = "batman";
const BASE_URL = `http://www.omdbapi.com/?apikey=${key}`;

async function getData() {
  const res = await fetch(`${BASE_URL}&s=${query}`);
  const data = res.json();
}
