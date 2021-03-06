// Очистка старого контента и рендеринг новых карточек фильмов или сериалов

import { renderPost } from "../templates/movie.cards.template";
import { renderPerson } from "../templates/person.cards.template";
import { showContent } from "./pagination.component";

export function moviesComponent(data, type) {
  site.innerHTML = "";
  movieInfo.innerHTML = "";

  if (type === "movie") {
    data.forEach((element) => {
      const html = renderPost(element);
      site.insertAdjacentHTML("beforeend", html);
    });
  } else {
    data.forEach((element) => {
      const html = renderPerson(element);
      site.insertAdjacentHTML("beforeend", html);
    });
  }

  showContent();
}

const site = document.querySelector(".post__cards");
const movieInfo = document.querySelector(".movie__info");
