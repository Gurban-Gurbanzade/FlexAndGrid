"use strict";
function select(e) {
  let z = `<i class="fa-regular fa-circle-check"></i>`;
  if (e.target.children.length == 0) {
    e.target.insertAdjacentHTML("beforeend", z);
    e.target.setAttribute("class", "activeName");
  } else {
    e.target.children[0].remove();
    e.target.classList.remove("activeName");
  }
}

function createFilm() {
  let x;
  if (event.keyCode == 13) {
    x = document.querySelector("input");
    let a = `<p onclick="select(event)" class="activeName">${x.value}<i class="fa-regular fa-circle-check"></i></p>`;
    if (x.value !== "") {
      document
        .querySelector(".page-container-movies-name")
        .insertAdjacentHTML("beforeend", a);
      x.value = "";
    } else {
      alert("Film adı daxil edin");
    }
  }
}
