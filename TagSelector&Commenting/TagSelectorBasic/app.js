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
