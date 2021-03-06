// получение номера страницы и запись в переменную 'pageNum'

export function paginationComponent(event) {
  event.preventDefault();

  if (event.target.tagName === "A") {
    document.querySelectorAll(".page-item").forEach((i) => {
      i.classList.remove("active");
    });
    event.target.parentNode.classList.add("active");

    pageNum = event.target.textContent;
    console.log(pageNum);
    showContent();
  }
}

// Показ контента при нажатии на номер страницы

export function showContent() {
  const cardElements = Array.from(document.querySelectorAll(".post__card"));
  let start = (pageNum - 1) * notesOnPage;
  let end = start + notesOnPage;
  let notes = cardElements.slice(start, end);

  cardElements.forEach((i) => i.classList.add("hide"));
  cardElements.forEach((el) => el.classList.add("hide"));
  notes.forEach((el) => el.classList.remove("hide"));
}

let pageNum = 1;
const notesOnPage = 4; // колличество карточек на странице
