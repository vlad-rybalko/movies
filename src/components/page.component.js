// Очистка старого контента и рендеринг страницы фильма или актера

import { apiInfo } from "../services/info.servise";

export function pageMovieComponent(event) {
  if (event.target.tagName === "H3") {
    event.preventDefault();
    const type = event.target.dataset.type;
    const id = event.target.dataset.id;
    site.innerHTML = "";
    movieInfo.innerHTML = "";
    apiInfo(type, id);
  }
}

const site = document.querySelector(".post__cards");
const movieInfo = document.querySelector(".movie__info");
