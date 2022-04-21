function createCircle(_selector, _radius, _backgroundColor) {
  let daire = document.createElement("div");
  let radius = _radius * 2;
  daire.style.width = `${radius}px`;
  daire.style.height = `${radius}px`;
  daire.style.backgroundColor = `${_backgroundColor}`;
  daire.style.borderRadius = "50%";
  document.querySelector(`${_selector}`).appendChild(daire);
}

createCircle(".box", 100, "red");

// ekranda 2 box verməyimin səbəbi şərtdə deyildiyi kimi hansı html elementi daxil edilsə dairə onun daxilində yaranacaq
// radiusu 2-ə vurmağımın səbəbi adi riyazi qaydadır, diametri tapmaq üçündür.
//
