export function renderPerson(element) {
  return `
          <div class="post__card">
              <div class="post__card-pic">
                  <img src=" https://image.tmdb.org/t/p/w500${element.profile_path} " alt=" ${element.name} "/>
              </div>
              <a href="#" class="person-link"><h3 class="post__card-title" data-id="${element.id}" data-type="person">${element.name}</h3></a>
          </div>
      `;
}
