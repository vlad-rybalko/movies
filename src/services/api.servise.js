// Загрузка информации для карточек фильмов и актеров

import { moviesComponent } from "../components/cards.component";

export async function load(event, type) {
  event.preventDefault();

  const url = `https://api.themoviedb.org/3/trending/${type}/week?api_key=4c6a69b63f9516de8cf08c2d709034ab`;

  const response = await fetch(url);
  const data = await response.json();

  document.querySelector(".pagination").classList.remove("hide");

  moviesComponent(data.results, type);
}
