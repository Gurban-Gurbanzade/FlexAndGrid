"use strict";
function createCircle(_selector, _radius, _backgroundColor) {
  let elementİnHtml = document.createElement("div");
  let daire = document.createElement("div");
  elementİnHtml.className = `${_selector}`;
  let radius = _radius * 2;
  daire.style.width = `${radius}px`;
  daire.style.height = `${radius}px`;
  daire.style.borderRadius = "50%";
  daire.style.backgroundColor = `${_backgroundColor}`;
  document.querySelector("html").appendChild(elementİnHtml).appendChild(daire);
}

createCircle(".box", 100, "red");

// radiusu 2-ə vurmağımın səbəbi adi riyazi qaydadır, diametri tapmaq üçündür.
