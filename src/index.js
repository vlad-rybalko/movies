import "./styles/main.css";
import { load } from "./services/api.servise"

document.querySelector('#item-actors').addEventListener('click', (event) => load(event, 'person'))
document.querySelector('#item-movies').addEventListener('click', (event) => load(event, 'movie'))

document.querySelector('.post__cards').addEventListener('click', (event) => {
    let target = event.target
    console.log(target)
})


