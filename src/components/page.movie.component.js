import { renderPagePerson } from "../templates/movie.page.template"
import { apiInfo } from "../services/api.info.servise"

export function pageMovieComponent(event) {

    if (event.target.tagName === 'H3') {
        event.preventDefault()
        console.log(event.target)
        const type = event.target.dataset.type
        const id = event.target.dataset.id
        site.innerHTML = ''
        apiInfo(type, id)
    }
}

const site = document.querySelector(".content");