function mailYoxlama() {}
const input = document.querySelector(".page-card-infologin").children;
for (let elem of input) {
  elem.classList.remove("animate__animated");
  elem.classList.remove("animate__shakeX");
}
function logInYoxlama() {
  for (let elem of input) {
    if (elem.value == "") {
      elem.className = "animate__animated animate__shakeX";
      //elem.style.animationIterationCount = "1";
      console.log(elem);
      break;
    }
    elem.classList.remove("animate__animated");
    elem.classList.remove("animate__shakeX");
  }
}

// function reload() {
//   for (let elem of input) {
//     let a = elem.value;
//     let b = elem.innerHTML;
//     elem.innerHTML = b;
//   }
// }
