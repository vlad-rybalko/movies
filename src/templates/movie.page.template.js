// Шаблон HTML для страницы фильма

export function renderPageMovie(element) {
  return `
        <div class="movie__wrapper">
            <h2 class="movie__title">${element.title}</h2>
            <div class="movie__posters">
                <div class="desc">
                    <p>${element.overview}</p>
                    <ul>
                        <li>Бюджет: ${element.budget} </li>
                        <li>Жанр: </li>
                        <li>Страна: ${element.production_countries.map((i) => i.name)}</li>
                        <li>Дата релиза: ${element.release_date}</li>
                    </ul>
                </div>
                <div class="poster">
                    <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.original_title}">
                </div>
            </div>
        </div>
    `;
}
