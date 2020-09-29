export function renderPageActor(element) {
  return `
        <div class="movie__wrapper">
            <h2 class="movie__title">${element.name}</h2>
            <div class="movie__posters">
                <div class="desc">
                    <p>${element.biography}</p>
                    <ul>
                        <li>День рождения: ${element.birthday}</li>
                        <li>Родился в: ${element.place_of_birth}</li>
                        <li>Рейтинг: ${element.popularity} </li>
                        <li>Статус: ${element.known_for_department}</li>
                    </ul>
                </div>
                <div class="poster">
                    <img src="https://image.tmdb.org/t/p/w500${element.profile_path}" alt="${element.name}">
                </div>
            </div>
        </div>
    `;
}
