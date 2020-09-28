import { renderPost } from '../templates/movie.template';
import { showContent } from '../components/pagination.component'

export function moviesComponent(data) {
    site.innerHTML = ''
    movieInfo.innerHTML = ''

    data.forEach((element) => {
        const html = renderPost(element)
        site.insertAdjacentHTML("beforeend", html);
    });

    showContent()
}

const site = document.querySelector(".post__cards");
const movieInfo = document.querySelector(".movie__info");
