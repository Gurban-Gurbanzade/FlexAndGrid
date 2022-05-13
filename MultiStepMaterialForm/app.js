function doldur(event) {
  const elem = document.querySelector(".page-btn");
  const styleSize = document.querySelector(".loading").getAttribute("style");
  let size;
  document.querySelector(".loading").removeAttribute("style");
  console.log(document.querySelector(".loading").getAttribute("style"));
  console.log(elem.children.length);
  for (let i = 1; i <= 4; i++) {
    if (event.target.classList.value == i) {
      document.querySelector(".loading");
      document
        .querySelector(".loading")
        .setAttribute("style", `width: ${i * 25}%`);
      size = `width: ${i * 25}%`;
      console.log(size);
    }
  }
}
//width: 75%
