function onOff() {
  let x = document.querySelector(".container");
  if (x.style.backgroundColor == "rgb(37, 46, 72)") {
    x.style.backgroundColor = "rgb(238, 245, 255)";
    document.querySelector(".light").style.color = "#262f49";
    document.querySelector(".dark").style.color = "262f49";
  } else {
    x.style.backgroundColor = "#252E48";
    document.querySelector(".light").style.color = "#40485F";
    document.querySelector(".dark").style.color = "white";
  }
}
