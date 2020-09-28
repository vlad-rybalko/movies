import { renderPerson } from './../templates/person.template';
import { showContent } from '../components/pagination.component'

export function personComponent(data) {

    site.innerHTML = ''
    movieInfo.innerHTML = ''

    data.forEach((element) => {
        const html = renderPerson(element)
        site.insertAdjacentHTML("beforeend", html);
    });

    showContent()
}

const site = document.querySelector(".post__cards");
const movieInfo = document.querySelector(".movie__info");