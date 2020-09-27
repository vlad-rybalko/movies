import { renderPost } from '../templates/movie.template';

export function moviesComponent(data) {
    site.innerHTML = ''

    data.forEach((element) => {
        const html = renderPost(element)
        site.insertAdjacentHTML("beforeend", html);
    });
}

const site = document.querySelector(".post__cards");
