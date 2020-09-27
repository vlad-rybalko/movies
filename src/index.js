import "./styles/main.css";
import { load } from "./services/api.servise"
import { pageMovieComponent } from "./components/page.movie.component"
// import {  } from "./components/"

document.querySelector('#item-actors').addEventListener('click', (event) => load(event, 'person'))
document.querySelector('#item-movies').addEventListener('click', (event) => load(event, 'movie'))

document.querySelector('.post__cards').addEventListener('click', (event) => pageMovieComponent(event))
