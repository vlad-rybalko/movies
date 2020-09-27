export function renderPost(element) {
  return `
        <div class="post__card">
            <div class="post__card-pic">
                <img src=" https://image.tmdb.org/t/p/w500${element.poster_path} " alt=" ${element.title} "/>
            </div>
            <h3 class="post__card-title">${element.title}</h3>
            <p class="post__card-desc">
                ${element.overview}
            </p>
        </div>
    `;
}
