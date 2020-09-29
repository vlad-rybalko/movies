export function search() {
  let val = this.value.trim();
  let searchItems = document.querySelectorAll(".post__card");
  let itemsH3 = document.querySelectorAll(".post__card-title");
  if (val != "") {
    searchItems.forEach((el, i) => {
      if (itemsH3[i].innerText.toLowerCase().search(val.toLowerCase()) == -1) {
        el.classList.add("hide");
      } else {
        el.classList.remove("hide");
      }
    });
  } else {
    searchItems.forEach((el) => {
      el.classList.remove("hide");
    });
  }
}
