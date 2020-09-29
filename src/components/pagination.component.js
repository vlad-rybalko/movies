export function paginationComponent(event) {
  event.preventDefault()

  if(event.target.tagName === 'A') {

    document.querySelectorAll('.page-item').forEach(i => {i.classList.remove('active')})
    event.target.parentNode.classList.add('active')

    pageNum = event.target.textContent
    console.log(pageNum)
    showContent()
  }
}

export function showContent() {
  const cardElements = Array.from(document.querySelectorAll('.post__card'))
  console.log('cardElements: ', cardElements)
  let start = (pageNum - 1) * notesOnPage
  let end = start + notesOnPage

  let notes = cardElements.slice(start, end)

  cardElements.forEach(i => i.classList.add('hide'))

  cardElements.forEach(el => el.classList.add('hide'))
  notes.forEach(el => el.classList.remove('hide'))
}

let pageNum = 1
const notesOnPage = 4;
