import getMovies from "./movieService";

const query = "harry";

const moviesFromOmdb = await getMovies(query);

console.log(moviesFromOmdb);

import "./style.css";
const textField = document.createElement("input");
textField.type = "text";
textField.placeholder = "Enter text here";

document.body.appendChild(textField);

const reviewBox = document.createElement("divbox");
reviewBox.id = "reviewBox";
reviewBox.textContent = "Reviews:";
document.body.appendChild(reviewBox);
