"use strict";
function randomCirclePlacement() {
  let daire = document.createElement("div");
  document.body.style.height = "720px";
  daire.style.width = "10px";
  daire.style.height = "10px";
  daire.style.borderRadius = "50%";
  daire.style.backgroundColor = "red";
  daire.style.border = "2px solid black";
  daire.style.position = "absolute";
  daire.style.top = `${Math.random() * 720}px`;
  daire.style.left = `${Math.random() * document.body.clientWidth}px`;
  document.querySelector("body").appendChild(daire);
}
randomCirclePlacement();

// 720px hündürlük verməyimin səbəbi öz ekran ölçümdür
