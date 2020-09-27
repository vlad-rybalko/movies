import { moviesComponent } from './../components/movies.component';
import { personComponent } from './../components/person.component';


export function paginationComponent(data, type) {
  console.log(data, type);

  if (type === "movie") {
    moviesComponent(data);
  } else {
    personComponent(data);
  }
}

const notesOnPage = 4;
