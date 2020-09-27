export function renderPageActor(element) {
    return `
    div class="movie__wrapper">
        <h2 class="movie__title">The Avengers Collection</h2>
        <div class="movie__posters">
            <div class="desc">
                <p>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.</p>
                <ul>
                    <li>Бюджет: 356000000</li>
                    <li>Жанр: "Adventure", "Science Fiction",  "Action"</li>
                    <li>Страна: "United States of America"</li>
                    <li>Дата релиза: 2019-04-24</li>
                </ul>
            </div>
            <div class="poster">
                <img src="https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" alt="">
            </div>
        </div>
    </div>
      `;
}