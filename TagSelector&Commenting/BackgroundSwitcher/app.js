function onOff() {
  let x = document.querySelector(".container");
  if (x.style.backgroundColor == "rgb(37, 46, 72)") {
    x.style.backgroundColor = "rgb(238, 245, 255)";
    document.querySelector(".light").style.color = "#262f49";
    document.querySelector(".dark").style.color = "gray";
    document.querySelector(".controller").style.backgroundColor = "#82ADFF";
    document.querySelector(".controller").children[0].className =
      "fa-solid fa-circle noqte4";
    document.querySelector(".controller").children[1].className =
      "fa-solid fa-circle fa-1x noqte5";
    document.querySelector(".controller").children[2].className =
      "fa-solid fa-circle fa-3x noqte6";
    document.querySelector(".controller").children[3].className =
      "fa-solid fa-circle noqte4";
    document.querySelector(".controller").children[4].className =
      "fa-solid fa-circle fa-1x noqte5";
    document.querySelector(".controller").children[5].className =
      "fa-solid fa-circle fa-3x noqte6";
  } else {
    x.style.backgroundColor = "#252E48";
    document.querySelector(".light").style.color = "#40485F";
    document.querySelector(".dark").style.color = "white";
    document.querySelector(".controller").style.backgroundColor = "#0C1019";
    document.querySelector(".controller").children[0].className =
      "fa-solid fa-star fa-xs ulduzSmall";
    document.querySelector(".controller").children[1].className =
      "fa-solid fa-star ulduzBig";
    document.querySelector(".controller").children[2].className =
      "fa-solid fa-moon fa-4x ay fa-flip-horizontal";
    document.querySelector(".controller").children[3].className =
      "fa-solid fa-circle  noqte1";
    document.querySelector(".controller").children[4].className =
      "fa-solid fa-circle noqte2";
    document.querySelector(".controller").children[5].className =
      "fa-solid fa-circle noqte3";
  }
}
