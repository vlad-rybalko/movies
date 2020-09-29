import { renderPageMovie } from "../templates/movie.page.template";
import { renderPageActor } from "../templates/actor.page.template";

export async function apiInfo(type, id) {
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=4c6a69b63f9516de8cf08c2d709034ab`;
  const response = await fetch(url);
  const data = await response.json();

  document.querySelector(".pagination").classList.add("hide");

  if (type === "movie") {
    const html = renderPageMovie(data);
    site.insertAdjacentHTML("afterbegin", html);
  } else if (type === "person") {
    const html = renderPageActor(data);
    site.insertAdjacentHTML("afterbegin", html);
  }
}

const site = document.querySelector(".movie__info");
