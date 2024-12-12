import getMovies from "./movieService";

const query = "harry";

const moviesFromOmdb = await getMovies(query);

console.log(moviesFromOmdb);
