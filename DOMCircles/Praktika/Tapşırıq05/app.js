"use strict";
function randomCirclePlacement() {
  let daire = document.createElement("div");
  daire.style.width = "40px";
  daire.style.height = "40px";
  daire.style.borderRadius = "50%";
  daire.style.backgroundColor = "white";
  daire.style.border = "2px solid black";
  daire.style.position = "absolute";
  daire.style.top = `${Math.random() * document.body.clientHeight}px`;
  daire.style.left = `${Math.random() * document.body.clientWidth}px`;
  document.querySelector("body").appendChild(daire);

  let daireB = document.createElement("div");
  daireB.style.width = "40px";
  daireB.style.height = "40px";
  daireB.style.borderRadius = "50%";
  daireB.style.backgroundColor = "black";
  daireB.style.position = "absolute";
  daireB.innerText = "1";
  daireB.style.textAlign = "center";
  daireB.style.fontWeight = "bold";
  daireB.style.color = "white";
  daireB.style.top = `${Math.random() * 720}px`;
  daireB.style.left = `${Math.random() * document.body.clientWidth}px`;
  document.querySelector("body").appendChild(daireB);

  for (let i = 0; i <= 7; i++) {
    let daireB = document.createElement("div");
    daireB.style.width = "40px";
    daireB.style.height = "40px";
    daireB.style.borderRadius = "50%";
    daireB.style.backgroundColor = "Blue";
    daireB.style.position = "absolute";
    daireB.innerText = `${i}`;
    daireB.style.textAlign = "center";
    daireB.style.fontWeight = "bold";
    daireB.style.top = `${Math.random() * 720}px`;
    daireB.style.left = `${Math.random() * document.body.clientWidth}px`;
    document.querySelector("body").appendChild(daireB);
    let daireR = document.createElement("div");
    daireR.style.width = "40px";
    daireR.style.height = "40px";
    daireR.style.borderRadius = "50%";
    daireR.style.backgroundColor = "red";
    daireR.style.position = "absolute";
    daireR.innerText = `${i}`;
    daireR.style.textAlign = "center";
    daireR.style.fontWeight = "bold";
    daireR.style.top = `${Math.random() * 720}px`;
    daireR.style.left = `${Math.random() * document.body.clientWidth}px`;
    document.querySelector("body").appendChild(daireR);
  }
}
randomCirclePlacement();
