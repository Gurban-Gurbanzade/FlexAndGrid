"use strict";
function createMultipleCircle(
  _selector,
  _circleCount,
  _radius,
  _backgroundColor
) {
  let elementİnHtml = document.createElement("div");
  //elementİnHtml.style.backgroundColor = `${_backgroundColor}`;
  elementİnHtml.className = `${_selector}`;
  elementİnHtml.style.display = "flex";
  elementİnHtml.style.justifyContent = "center";
  elementİnHtml.style.alignItems = "center";

  let radius = _radius * 2;
  let daire = document.createElement("div");
  daire.style.width = `${radius}px`;
  daire.style.height = `${radius}px`;
  daire.style.borderRadius = "50%";
  daire.style.backgroundColor = `${_backgroundColor}`;
  daire.style.border = "5px solid black";
  document.querySelector("html").appendChild(elementİnHtml).appendChild(daire);

  for (let i = 0; i < _circleCount - 1; i++) {
    radius = radius - (_radius / _circleCount) * 2;
    let daire = document.createElement("div");
    daire.style.width = `${radius}px`;
    daire.style.height = `${radius}px`;
    daire.style.borderRadius = "50%";
    daire.style.backgroundColor = "";
    daire.style.border = "5px solid black";
    daire.style.position = "absolute";
    document
      .querySelector("html")
      .appendChild(elementİnHtml)
      .appendChild(daire);
  }
}

createMultipleCircle(".box", 3, 300, "red");
