import "./styles/main.css";
import { load } from "./services/api.servise"
import { pageMovieComponent } from "./components/page.component"
import { search } from './services/search.servise';
import { paginationComponent } from './components/pagination.component'

document.querySelector('#item-actors').addEventListener('click', (event) => load(event, 'person'))  // Обрашение по API при нажатии на "Актеры"
document.querySelector('#item-movies').addEventListener('click', (event) => load(event, 'movie')) // Обрашение по API при нажатии на "Фильмы"
document.querySelector('#search').oninput = search // Элемент поиска
document.querySelector('.post__cards').addEventListener('click', (event) => pageMovieComponent(event)) // Загрузка по клику информации по фильмам и актерам 
document.querySelector('.pagination').addEventListener('click', (event) => paginationComponent(event)) // Получение номера активной страницы
